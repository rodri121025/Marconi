// =====================================================================
// SITIO: pantalla de carga, menú, desplegables, secciones e idioma
// Sirve para las dos versiones:
//   · un solo HTML: todas las secciones están en la página y se ve una por vez (#historia, #contacto…)
//   · una página por sección: cada archivo (historia.html, contacto.html…) tiene una sola sección
// =====================================================================

// Cara de Lorenzo (la usan el tutor y el guía)
const ROBOT_CARA = 'imagenes/lorenzo/robot-cara.jpg';

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (!loader) return;
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
    }, 700);
});

const barra = document.getElementById('barra');
const menu = document.getElementById('menu');
const hamburguesa = document.getElementById('hamburguesa');
const desplegables = document.querySelectorAll('[data-desplegable]');
const vistas = [...document.querySelectorAll('[data-vista]')];
const UNA_SOLA_PAGINA = vistas.length > 1;
let vistaActual = null;

// Dirección de cada sección: #historia (un solo HTML) o historia.html (una página por sección)
function urlDe(id) {
    if (UNA_SOLA_PAGINA) return '#' + id;
    return id === 'inicio' ? 'index.html' : id + '.html';
}
function irASeccion(id) {
    if (UNA_SOLA_PAGINA) location.hash = id;
    else location.href = urlDe(id);
}

// Herramientas que usan el tutor y el guía
function crear(etiqueta, clase, texto) {
    const nodo = document.createElement(etiqueta);
    if (clase) nodo.className = clase;
    if (texto !== undefined) nodo.textContent = texto;
    return nodo;
}
const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const movimiento = sinMovimiento ? 'auto' : 'smooth';


// ---------- Idioma: español (lo que está escrito en el HTML), inglés o italiano (js/traducciones.js) ----------
const IDIOMAS = ['es', 'en', 'it'];
let idioma = 'es';
try {
    const guardado = localStorage.getItem('idioma');
    if (IDIOMAS.includes(guardado)) idioma = guardado;
} catch (e) { /* sin almacenamiento: queda en español */ }

// Elige el texto del idioma actual: tr({ es: 'Hola', en: 'Hi', it: 'Ciao' }) → 'Hi'
function tr(valor) {
    if (valor == null || typeof valor !== 'object' || Array.isArray(valor)) return valor;
    return valor[idioma] !== undefined ? valor[idioma] : valor.es;
}

const originales = new Map(); // guarda el español de cada elemento la primera vez que se traduce
const ATRIBUTOS = { i18nAlt: 'alt', i18nAria: 'aria-label', i18nPlaceholder: 'placeholder' };
function traducirPagina() {
    const diccionario = idioma === 'es' ? {} : (TRADUCCIONES[idioma] || {});
    document.querySelectorAll('[data-i18n], [data-i18n-alt], [data-i18n-aria], [data-i18n-placeholder]').forEach(el => {
        if (!originales.has(el)) {
            const copia = { html: el.innerHTML };
            Object.values(ATRIBUTOS).forEach(a => { copia[a] = el.getAttribute(a); });
            originales.set(el, copia);
        }
        const original = originales.get(el);
        if (el.dataset.i18n) el.innerHTML = diccionario[el.dataset.i18n] !== undefined ? diccionario[el.dataset.i18n] : original.html;
        Object.entries(ATRIBUTOS).forEach(([dato, atributo]) => {
            const clave = el.dataset[dato];
            if (!clave) return;
            const texto = diccionario[clave] !== undefined ? diccionario[clave] : original[atributo];
            if (texto !== null) el.setAttribute(atributo, texto);
        });
    });
    document.documentElement.lang = idioma;
    document.querySelectorAll('[data-idioma-sitio]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.idiomaSitio === idioma)));
    if (vistaActual) ponerTitulo();
}
function cambiarIdioma(nuevo) {
    if (!IDIOMAS.includes(nuevo) || nuevo === idioma) return;
    idioma = nuevo;
    try { localStorage.setItem('idioma', idioma); } catch (e) { /* sin almacenamiento: se usa solo en esta página */ }
    traducirPagina();
    document.dispatchEvent(new CustomEvent('cambio-de-idioma', { detail: idioma }));
}
document.querySelectorAll('[data-idioma-sitio]').forEach(b => b.addEventListener('click', () => cambiarIdioma(b.dataset.idiomaSitio)));
if (idioma !== 'es') traducirPagina(); // antes de que arranquen el tutor y el guía


// ---------- Menú del celular (el botón ☰) ----------
function abrirMenuMovil(abrir) {
    menu.toggleAttribute('data-abierto', abrir);
    hamburguesa.setAttribute('aria-expanded', String(abrir));
}
hamburguesa.addEventListener('click', () => abrirMenuMovil(!menu.hasAttribute('data-abierto')));

// Desplegables: la flechita abre y cierra (en computadora también se abren al pasar el mouse)
function cerrarDesplegables(excepto) {
    desplegables.forEach(item => {
        if (item === excepto) return;
        item.removeAttribute('data-abierto');
        item.querySelector('.flechita').setAttribute('aria-expanded', 'false');
    });
}
desplegables.forEach(item => {
    const flecha = item.querySelector('.flechita');
    flecha.addEventListener('click', e => {
        e.stopPropagation();
        const abrir = !item.hasAttribute('data-abierto');
        cerrarDesplegables(item);
        item.toggleAttribute('data-abierto', abrir);
        flecha.setAttribute('aria-expanded', String(abrir));
    });
});
document.addEventListener('click', e => { if (!e.target.closest('[data-desplegable]')) cerrarDesplegables(); });
document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    cerrarDesplegables();
    abrirMenuMovil(false);
});

// En el Inicio, arriba de todo, la barra se funde con la imagen (sin línea ni sombra)
function actualizarBarra() {
    barra.toggleAttribute('data-fusionada', vistaActual === 'inicio' && window.scrollY <= 8);
}
window.addEventListener('scroll', actualizarBarra, { passive: true });


// ---------- Secciones ----------
function tituloDe(id) {
    if (idioma !== 'es' && TRADUCCIONES[idioma]['titulo.' + id]) return TRADUCCIONES[idioma]['titulo.' + id];
    const vista = vistas.find(v => v.dataset.vista === id);
    return vista ? vista.dataset.titulo : id;
}
function ponerTitulo() {
    const sitio = idioma === 'es' ? document.body.dataset.tituloSitio : TRADUCCIONES[idioma]['titulo.sitio'];
    document.title = vistaActual === 'inicio' ? sitio : tituloDe(vistaActual) + ' | Teatro Marconi';
}

function mostrarVista() {
    const pedida = decodeURIComponent(location.hash.slice(1));
    const vista = (UNA_SOLA_PAGINA && vistas.find(v => v.dataset.vista === pedida)) || vistas[0];
    const cambio = vista.dataset.vista !== vistaActual;
    vistas.forEach(v => { v.hidden = v !== vista; });
    vistaActual = vista.dataset.vista;
    ponerTitulo();
    // Marca en el menú la sección actual (los estilos usan aria-current)
    menu.querySelectorAll('a').forEach(a => {
        if (a.getAttribute('href') === urlDe(vistaActual)) a.setAttribute('aria-current', 'page');
        else a.removeAttribute('aria-current');
    });
    abrirMenuMovil(false);
    cerrarDesplegables();
    if (cambio && UNA_SOLA_PAGINA) window.scrollTo(0, 0);
    actualizarBarra();
    if (cambio) document.dispatchEvent(new CustomEvent('cambio-de-vista', { detail: vistaActual }));
}
if (UNA_SOLA_PAGINA) window.addEventListener('hashchange', mostrarVista);

// Arranque: cuando ya se cargaron todos los scripts (mapa, tutor y guía), se muestra la sección
document.addEventListener('DOMContentLoaded', mostrarVista);
