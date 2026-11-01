// =====================================================================
// NOTICIAS DE ITALIA (Eventos y noticias)
//    Lee datos/noticias.json, el archivo que arma el robot de GitHub (scripts/noticias.js)
//    todos los días a las 11 y a las 23 (hora argentina) con noticias del Corriere della Sera.
// =====================================================================
(function noticiasDeItalia() {
    const lista = document.getElementById('noticias');
    if (!lista) return;
    const URL_NOTICIAS = 'datos/noticias.json';

    const TEXTOS = {
        es: {
            cargando: 'Cargando noticias…',
            vacio: 'Todavía no hay noticias descargadas. El robot de GitHub las trae todos los días a las 11 y a las 23.',
            error: 'No se pudieron cargar las noticias. Se ven cuando el sitio está publicado; mientras tanto, podés leerlas en corriere.it.',
            actualizado: f => `Actualizado: ${f}`, leer: 'Leer en el Corriere della Sera', otraPestana: '(se abre en otra pestaña)',
            secciones: { cronache: 'Actualidad', politica: 'Política', economia: 'Economía', cultura: 'Cultura', spettacoli: 'Espectáculos' }
        },
        en: {
            cargando: 'Loading news…',
            vacio: 'No news has been downloaded yet. The GitHub robot fetches it every day at 11 a.m. and 11 p.m.',
            error: 'The news could not be loaded. It shows up once the site is published; meanwhile, you can read it on corriere.it.',
            actualizado: f => `Updated: ${f}`, leer: 'Read in the Corriere della Sera', otraPestana: '(opens in a new tab)',
            secciones: { cronache: 'Current affairs', politica: 'Politics', economia: 'Economy', cultura: 'Culture', spettacoli: 'Entertainment' }
        },
        it: {
            cargando: 'Caricamento delle notizie…',
            vacio: 'Non ci sono ancora notizie scaricate. Il robot di GitHub le porta ogni giorno alle 11 e alle 23.',
            error: 'Non è stato possibile caricare le notizie. Si vedono quando il sito è pubblicato; nel frattempo puoi leggerle su corriere.it.',
            actualizado: f => `Aggiornato: ${f}`, leer: 'Leggi sul Corriere della Sera', otraPestana: '(si apre in un’altra scheda)',
            secciones: { cronache: 'Cronache', politica: 'Politica', economia: 'Economia', cultura: 'Cultura', spettacoli: 'Spettacoli' }
        }
    };
    const t = () => TEXTOS[idioma];
    const LOCALES = { es: 'es-AR', en: 'en-US', it: 'it-IT' };
    const fecha = iso => new Intl.DateTimeFormat(LOCALES[idioma], { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', hour12: idioma === 'en' }).format(new Date(iso));
    const estado = document.getElementById('noticias-estado');
    const actualizado = document.getElementById('noticias-actualizado');
    let datos = null;
    let situacion = 'cargando'; // cargando | ok | vacio | error

    function tarjeta(n) {
        const item = crear('li', 'tarjeta-tema');
        const cuerpo = crear('div', 'tarjeta-tema-texto flex flex-col');
        const seccion = t().secciones[n.seccion] || n.seccion;
        cuerpo.append(crear('p', 'mb-1.5 text-[0.78rem] font-semibold tracking-wide text-rojo uppercase', `${seccion} · ${fecha(n.fecha)}`));
        const titulo = crear('h3', '', n.titulo); // textContent: el texto del diario nunca se interpreta como HTML
        titulo.lang = 'it';
        cuerpo.append(titulo);
        if (n.resumen) {
            const resumen = crear('p', 'mb-3 text-[0.95rem]', n.resumen);
            resumen.lang = 'it';
            cuerpo.append(resumen);
        }
        if (/^https:\/\//.test(n.enlace)) {
            const enlace = crear('a', 'enlace mt-auto text-[0.9rem]', t().leer + ' ↗');
            enlace.href = n.enlace;
            enlace.target = '_blank';
            enlace.rel = 'noopener';
            enlace.append(crear('span', 'sr-only', ' ' + t().otraPestana));
            cuerpo.append(enlace);
        }
        item.append(cuerpo);
        return item;
    }

    function mostrar() {
        estado.textContent = situacion === 'ok' ? '' : t()[situacion];
        actualizado.textContent = datos && datos.actualizado && situacion === 'ok' ? t().actualizado(fecha(datos.actualizado)) : '';
        lista.replaceChildren(...(situacion === 'ok' ? datos.noticias.map(tarjeta) : []));
    }

    fetch(URL_NOTICIAS, { cache: 'no-store' })
        .then(respuesta => { if (!respuesta.ok) throw new Error(respuesta.status); return respuesta.json(); })
        .then(json => {
            datos = json;
            situacion = Array.isArray(json.noticias) && json.noticias.length ? 'ok' : 'vacio';
            mostrar();
        })
        .catch(() => { situacion = 'error'; mostrar(); }); // por ejemplo, si la página se abre como archivo (doble clic)

    document.addEventListener('cambio-de-idioma', mostrar);
    mostrar();
})();
