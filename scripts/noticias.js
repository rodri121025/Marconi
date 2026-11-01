// =====================================================================
// ROBOT DE NOTICIAS: baja noticias de Italia del Corriere della Sera (RSS)
// y las guarda en datos/noticias.json (entre 6 y 9).
//
// Lo corre GitHub todos los días a las 11 y a las 23 (hora argentina): ver .github/workflows/publicar.yml
// También lo podés correr en tu compu para probar (necesita Node 18 o más nuevo):
//     node scripts/noticias.js
// =====================================================================
const fs = require('fs');
const path = require('path');

// 👉 Secciones del diario que se usan. Para cada una se prueban las direcciones en orden
//    (si el diario cambia una dirección, se corrige acá).
const SECCIONES = [
    { id: 'cronache', urls: ['https://www.corriere.it/dynamic-feed/rss/section/cronache.xml', 'https://xml2.corriereobjects.it/rss/cronache.xml'] },
    { id: 'politica', urls: ['https://www.corriere.it/dynamic-feed/rss/section/politica.xml', 'https://xml2.corriereobjects.it/rss/politica.xml'] },
    { id: 'economia', urls: ['https://www.corriere.it/dynamic-feed/rss/section/economia.xml', 'https://xml2.corriereobjects.it/rss/economia.xml'] },
    { id: 'cultura', urls: ['https://www.corriere.it/dynamic-feed/rss/section/cultura.xml', 'https://xml2.corriereobjects.it/rss/cultura.xml'] },
    { id: 'spettacoli', urls: ['https://www.corriere.it/dynamic-feed/rss/section/spettacoli.xml', 'https://xml2.corriereobjects.it/rss/spettacoli.xml'] }
];
const MAXIMO = 9;            // cuántas noticias se muestran como mucho
const MINIMO = 6;            // si hay menos, se conservan las anteriores (si eran más)
const DIAS_VIGENTES = 7;     // no se muestran noticias más viejas que esto
const LARGO_RESUMEN = 220;   // letras del resumen
const ARCHIVO = path.join(__dirname, '..', 'datos', 'noticias.json');

// ---------- Leer el RSS (es texto XML: se busca etiqueta por etiqueta) ----------
function decodificar(texto) {
    return texto
        .replace(/&#x([0-9a-f]+);/gi, (m, h) => String.fromCodePoint(parseInt(h, 16)))
        .replace(/&#(\d+);/g, (m, d) => String.fromCodePoint(Number(d)))
        .replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&');
}
function textoPlano(valor) {
    let s = (valor || '').replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1');
    s = decodificar(s);                       // primero las entidades (a veces el HTML viene escapado)…
    s = s.replace(/<[^>]*>/g, ' ');           // …después se sacan las etiquetas HTML
    return decodificar(s).replace(/\s+/g, ' ').trim();
}
function etiqueta(bloque, nombres) {
    for (const nombre of nombres) {
        const m = bloque.match(new RegExp(`<${nombre}\\b[^>]*>([\\s\\S]*?)</${nombre}>`, 'i'));
        if (m && m[1].trim()) return m[1];
    }
    return '';
}
function recortar(texto, largo) {
    if (texto.length <= largo) return texto;
    const corte = texto.slice(0, largo);
    return corte.slice(0, corte.lastIndexOf(' ') > largo * 0.6 ? corte.lastIndexOf(' ') : largo).replace(/[\s,;:.]+$/, '') + '…';
}
function enlaceSeguro(valor) {
    try {
        const url = new URL(textoPlano(valor).replace(/^http:\/\//i, 'https://'));
        if (url.protocol !== 'https:' || !/(^|\.)corriere\.it$/i.test(url.hostname)) return '';
        return url.href;
    } catch (e) { return ''; }
}
function leerFeed(xml, seccion) {
    const bloques = xml.match(/<item\b[\s\S]*?<\/item>|<entry\b[\s\S]*?<\/entry>/gi) || [];
    return bloques.map(b => {
        const enlaceAtom = (b.match(/<link\b[^>]*href="([^"]+)"/i) || [])[1];
        const fecha = new Date(textoPlano(etiqueta(b, ['pubDate', 'dc:date', 'published', 'updated'])));
        return {
            titulo: textoPlano(etiqueta(b, ['title'])),
            resumen: recortar(textoPlano(etiqueta(b, ['description', 'summary', 'content'])), LARGO_RESUMEN),
            enlace: enlaceSeguro(etiqueta(b, ['link']) || enlaceAtom || etiqueta(b, ['guid'])),
            fecha: isNaN(fecha) ? null : fecha.toISOString(),
            seccion
        };
    }).filter(n => n.titulo && n.enlace && n.fecha);
}

// ---------- Elegir: las más nuevas, mezclando secciones, sin repetir ----------
function elegir(porSeccion, ahora) {
    const limite = ahora.getTime() - DIAS_VIGENTES * 24 * 3600 * 1000;
    const vistas = new Set();
    const normal = s => s.toLowerCase().replace(/[^a-z0-9àèéìòù]+/g, ' ').trim();
    const colas = porSeccion.map(lista => lista
        .filter(n => { const f = new Date(n.fecha).getTime(); return f >= limite && f <= ahora.getTime() + 3600 * 1000; })
        .sort((a, b) => new Date(b.fecha) - new Date(a.fecha)));
    const elegidas = [];
    // Una de cada sección por vuelta, hasta llegar al máximo
    while (elegidas.length < MAXIMO && colas.some(c => c.length)) {
        for (const cola of colas) {
            while (cola.length) {
                const n = cola.shift();
                const clave = n.enlace.split('?')[0];
                if (vistas.has(clave) || vistas.has(normal(n.titulo))) continue;
                vistas.add(clave);
                vistas.add(normal(n.titulo));
                elegidas.push(n);
                break;
            }
            if (elegidas.length >= MAXIMO) break;
        }
    }
    return elegidas.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
}

// ---------- Bajar ----------
async function bajar(url) {
    const respuesta = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; SitioSociedadItalianaGalvez/1.0)', 'Accept': 'application/rss+xml, application/xml, text/xml, */*' },
        signal: AbortSignal.timeout(20000)
    });
    if (!respuesta.ok) throw new Error('HTTP ' + respuesta.status);
    return respuesta.text();
}
async function anteriores() {
    // Las noticias que ya estaban publicadas (en el sitio o en el archivo), por si hoy el diario no responde
    const publicadas = process.env.NOTICIAS_PUBLICADAS;
    if (publicadas) {
        try { const r = await fetch(publicadas, { signal: AbortSignal.timeout(15000) }); if (r.ok) return await r.json(); } catch (e) { /* seguimos */ }
    }
    try { return JSON.parse(fs.readFileSync(ARCHIVO, 'utf8')); } catch (e) { return null; }
}

async function main() {
    const ahora = new Date();
    const porSeccion = [];
    for (const seccion of SECCIONES) {
        let encontradas = [];
        for (const url of seccion.urls) {
            try {
                encontradas = leerFeed(await bajar(url), seccion.id);
                const vigentes = encontradas.filter(n => ahora - new Date(n.fecha) < DIAS_VIGENTES * 24 * 3600 * 1000);
                console.log(`${seccion.id}: ${encontradas.length} noticias (${vigentes.length} de los últimos ${DIAS_VIGENTES} días) en ${url}`);
                if (vigentes.length) break;
            } catch (error) {
                console.log(`${seccion.id}: no se pudo leer ${url} (${error.message})`);
            }
        }
        porSeccion.push(encontradas);
    }
    const elegidas = elegir(porSeccion, ahora);
    let resultado = { fuente: 'Corriere della Sera', sitio: 'https://www.corriere.it', actualizado: ahora.toISOString(), noticias: elegidas };
    if (elegidas.length < MINIMO) {
        const previas = await anteriores();
        if (previas && Array.isArray(previas.noticias) && previas.noticias.length > elegidas.length) {
            console.log(`Hoy llegaron ${elegidas.length} noticias: se conservan las ${previas.noticias.length} anteriores.`);
            resultado = previas;
        }
    }
    fs.mkdirSync(path.dirname(ARCHIVO), { recursive: true });
    fs.writeFileSync(ARCHIVO, JSON.stringify(resultado, null, 2) + '\n');
    console.log(`Listo: ${resultado.noticias.length} noticias en datos/noticias.json`);
}

module.exports = { leerFeed, elegir, textoPlano, enlaceSeguro, SECCIONES, MAXIMO };
if (require.main === module) {
    main().catch(error => { console.log('Error inesperado:', error.message); }); // nunca frena la publicación del sitio
}
