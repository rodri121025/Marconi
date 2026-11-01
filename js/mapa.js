// =====================================================================
// MAPA DE UBICACIÓN (Leaflet + OpenStreetMap), en la sección Contacto
// =====================================================================
(function mapaDeUbicacion() {
    if (!document.getElementById('mapa-teatro')) return; // esta página no tiene mapa

    // 👉 Datos del teatro: si algo cambia, se edita acá
    const UBICACION_TEATRO = {
        nombre: 'Teatro Marconi',
        direccion: 'Belgrano 654',
        ciudad: 'Gálvez, Santa Fe',
        lat: -32.0318909,   // punto de Street View frente a la fachada
        lng: -61.2200699,
        zoom: 17
    };
    const TEXTOS = {
        es: {
            sinMapa: 'No se pudo cargar el mapa. Revisá tu conexión y recargá la página.',
            archivo: 'Estás abriendo la página como archivo (doble clic). Así OpenStreetMap bloquea el mapa y la ruta: probala con Live Server o subida a un hosting.',
            calculando: 'Calculando el recorrido…', vosEstasAca: 'Vos estás acá', corregir: 'Corregir el mapa', rutas: 'Rutas',
            enAuto: 'En auto', aPie: 'A pie', unos: 'unos',
            sinRuta: 'No pudimos calcular el recorrido. Probá de nuevo en un rato o usá el botón de Google Maps.',
            sinGeo: 'Tu navegador no permite compartir la ubicación. Usá el botón de Google Maps.',
            buscando: 'Buscando tu ubicación… Si el navegador te pide permiso, tocá «Permitir».',
            errores: {
                1: 'No diste permiso para usar tu ubicación. Podés habilitarlo desde el candado de la barra de direcciones.',
                2: 'No pudimos saber dónde estás. Revisá que la ubicación del dispositivo esté activada.',
                3: 'Tardó demasiado en encontrar tu ubicación. Probá de nuevo.'
            }
        },
        en: {
            sinMapa: 'The map could not be loaded. Check your connection and reload the page.',
            archivo: 'You are opening the page as a file (double click). That way OpenStreetMap blocks the map and the route: try it with Live Server or on a web host.',
            calculando: 'Working out the route…', vosEstasAca: 'You are here', corregir: 'Fix the map', rutas: 'Routes',
            enAuto: 'By car', aPie: 'On foot', unos: 'about',
            sinRuta: 'We couldn’t work out the route. Try again in a while or use the Google Maps button.',
            sinGeo: 'Your browser can’t share your location. Use the Google Maps button.',
            buscando: 'Looking for your location… If the browser asks for permission, tap “Allow”.',
            errores: {
                1: 'You didn’t allow us to use your location. You can turn it on from the padlock in the address bar.',
                2: 'We couldn’t find where you are. Check that location is turned on in your device.',
                3: 'Finding your location took too long. Please try again.'
            }
        },
        it: {
            sinMapa: 'Non è stato possibile caricare la mappa. Controlla la connessione e ricarica la pagina.',
            archivo: 'Stai aprendo la pagina come file (doppio clic). Così OpenStreetMap blocca la mappa e il percorso: provala con Live Server o pubblicata su un hosting.',
            calculando: 'Sto calcolando il percorso…', vosEstasAca: 'Tu sei qui', corregir: 'Correggi la mappa', rutas: 'Percorsi',
            enAuto: 'In auto', aPie: 'A piedi', unos: 'circa',
            sinRuta: 'Non siamo riusciti a calcolare il percorso. Riprova tra un po’ o usa il pulsante di Google Maps.',
            sinGeo: 'Il tuo browser non permette di condividere la posizione. Usa il pulsante di Google Maps.',
            buscando: 'Sto cercando la tua posizione… Se il browser chiede il permesso, tocca «Consenti».',
            errores: {
                1: 'Non hai dato il permesso di usare la tua posizione. Puoi attivarlo dal lucchetto nella barra degli indirizzi.',
                2: 'Non siamo riusciti a capire dove sei. Controlla che la localizzazione del dispositivo sia attiva.',
                3: 'Ci è voluto troppo tempo per trovare la tua posizione. Riprova.'
            }
        }
    };
    const t = () => TEXTOS[idioma];
    const datos = UBICACION_TEATRO;
    const aviso = document.getElementById('mapa-aviso');
    let avisoActual = null; // qué aviso se muestra, para traducirlo si cambia el idioma
    function mostrarAviso(clave) { avisoActual = clave; aviso.textContent = t()[clave]; aviso.hidden = false; }

    document.getElementById('ubicacion-direccion').textContent = datos.direccion;
    document.getElementById('ubicacion-ciudad').textContent = datos.ciudad;

    // Botón «Cómo llegar»: Google Maps con la ruta desde donde está el visitante
    const botonGoogle = document.getElementById('ubicacion-boton');
    botonGoogle.href = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(datos.lat + ',' + datos.lng);
    botonGoogle.hidden = false;

    let mapa = null;
    let marcador = null;
    let actualizarTextosRuta = () => {};

    // El mapa se crea recién la primera vez que se muestra Contacto
    // (Leaflet necesita que el recuadro esté visible para medirlo)
    document.addEventListener('cambio-de-vista', e => {
        if (e.detail !== 'contacto') return;
        if (mapa) { mapa.invalidateSize(); return; }
        if (typeof L === 'undefined') { mostrarAviso('sinMapa'); return; }
        crearMapa();
    });

    // Si cambia el idioma, se traducen los textos que escribió el mapa
    document.addEventListener('cambio-de-idioma', () => {
        if (avisoActual) aviso.textContent = t()[avisoActual];
        if (marcador) marcador.setPopupContent(textoPopup());
        actualizarTextosRuta();
    });

    function textoPopup() {
        const nombre = document.querySelector('[data-i18n="con.nombre"]');
        return '<div class="text-[0.9rem] leading-normal text-texto"><strong class="mb-0.5 block font-serif text-[1.05rem] text-vino">'
            + (nombre ? nombre.textContent : datos.nombre) + '</strong>' + datos.direccion + '<br>' + datos.ciudad + '</div>';
    }

    function crearMapa() {
        const centro = [datos.lat, datos.lng];
        mapa = L.map('mapa-teatro', { scrollWheelZoom: false }).setView(centro, datos.zoom);
        // la ruedita del mouse no hace zoom hasta que tocás el mapa (así no «atrapa» el scroll de la página)
        mapa.on('focus', () => mapa.scrollWheelZoom.enable());
        mapa.on('blur', () => mapa.scrollWheelZoom.disable());

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            referrerPolicy: 'strict-origin-when-cross-origin', // OpenStreetMap exige saber desde qué sitio se pide el mapa
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(mapa);

        if (location.protocol === 'file:') mostrarAviso('archivo');

        // Marcador: gota roja con centro blanco
        const icono = L.divIcon({
            className: '',
            html: '<span class="relative block size-[34px] -rotate-45 rounded-[50%_50%_50%_0] border-[3px] border-white bg-rojo shadow-[0_3px_10px_rgba(0,0,0,0.35)] after:absolute after:top-1/2 after:left-1/2 after:size-2.5 after:-translate-1/2 after:rounded-full after:bg-white after:content-[\'\']"></span>',
            iconSize: [34, 34],
            iconAnchor: [17, 41],   // la punta de la gota marca el lugar exacto
            popupAnchor: [0, -44]
        });
        marcador = L.marker(centro, { icon: icono, title: datos.nombre }).addTo(mapa).bindPopup(textoPopup());

        iniciarRuta(centro);
    }

    // Ruta desde la ubicación del visitante (servicio gratuito OSRM de FOSSGIS: máximo 1 pedido por segundo)
    function iniciarRuta(centro) {
        const cajaRuta = document.getElementById('ruta');
        const botonRuta = document.getElementById('ruta-boton');
        const estadoRuta = document.getElementById('ruta-estado');
        const botonesModo = cajaRuta.querySelectorAll('.ruta-modo');
        let modo = 'car';
        let origen = null;
        let capaRuta = null;
        let marcadorVos = null;
        let ocupado = false;
        let atribucion = null;
        let estado = null; // { clave } o { ruta } para poder traducirlo
        const iconoVos = L.divIcon({
            className: '',
            html: '<span class="block size-[18px] rounded-full border-[3px] border-white bg-vino shadow-[0_2px_8px_rgba(0,0,0,0.35)]"></span>',
            iconSize: [18, 18],
            iconAnchor: [9, 9]
        });
        cajaRuta.hidden = false;

        const formato = () => ({ es: 'es-AR', en: 'en-US', it: 'it-IT' }[idioma]);
        const distancia = m => (m < 1000 ? Math.round(m) + ' m' : (m / 1000).toLocaleString(formato(), { maximumFractionDigits: 1 }) + ' km');
        function tiempo(s) {
            const min = Math.max(1, Math.round(s / 60));
            return min < 60 ? min + ' min' : Math.floor(min / 60) + ' h ' + (min % 60) + ' min';
        }
        function textoEstado() {
            if (!estado) return '';
            if (estado.ruta) return (modo === 'car' ? t().enAuto : t().aPie) + ': ' + distancia(estado.ruta.distance) + ' · ' + t().unos + ' ' + tiempo(estado.ruta.duration) + '.';
            return estado.error ? t().errores[estado.error] : t()[estado.clave];
        }
        function mostrarEstado(nuevo, esError) {
            estado = nuevo;
            estadoRuta.textContent = textoEstado();
            estadoRuta.toggleAttribute('data-error', Boolean(esError));
        }
        function textoAtribucion() {
            return t().rutas + ': <a href="https://routing.openstreetmap.de/about.html" target="_blank" rel="noopener">OSRM (FOSSGIS)</a> · <a href="https://www.openstreetmap.org/fixthemap" target="_blank" rel="noopener">' + t().corregir + '</a>';
        }
        actualizarTextosRuta = () => {
            estadoRuta.textContent = textoEstado();
            if (marcadorVos && marcadorVos.getElement()) marcadorVos.getElement().title = t().vosEstasAca;
            if (atribucion) {
                mapa.attributionControl.removeAttribution(atribucion);
                atribucion = textoAtribucion();
                mapa.attributionControl.addAttribution(atribucion);
            }
        };
        function bloquear(valor) {
            ocupado = valor;
            botonRuta.disabled = valor;
            botonesModo.forEach(b => { b.disabled = valor; });
        }

        async function trazarRuta() {
            bloquear(true);
            mostrarEstado({ clave: 'calculando' });
            // OSRM pide los puntos como «longitud,latitud» (al revés que Leaflet)
            const url = 'https://routing.openstreetmap.de/routed-' + modo + '/route/v1/driving/'
                + origen[1] + ',' + origen[0] + ';' + datos.lng + ',' + datos.lat + '?overview=full&geometries=geojson';
            try {
                const respuesta = await fetch(url, { referrerPolicy: 'strict-origin-when-cross-origin' });
                const json = await respuesta.json();
                if (json.code !== 'Ok' || !json.routes || !json.routes.length) throw new Error(json.code);
                const ruta = json.routes[0];
                const linea = ruta.geometry.coordinates.map(([lng, lat]) => [lat, lng]);
                if (capaRuta) capaRuta.remove();
                marcadorVos = L.marker(origen, { icon: iconoVos, title: t().vosEstasAca, keyboard: false });
                capaRuta = L.layerGroup([L.polyline(linea, { color: '#009246', weight: 5, opacity: 0.85 }), marcadorVos]).addTo(mapa);
                if (!atribucion) {
                    atribucion = textoAtribucion();
                    mapa.attributionControl.addAttribution(atribucion);
                }
                mapa.fitBounds(L.latLngBounds(linea.concat([origen, centro])), { padding: [40, 40] });
                mostrarEstado({ ruta });
                const caja = document.getElementById('mapa-teatro').getBoundingClientRect();
                if (caja.top < 0 || caja.bottom > window.innerHeight) {
                    document.getElementById('mapa-teatro').scrollIntoView({ behavior: movimiento, block: 'center' });
                }
            } catch (error) {
                mostrarEstado({ clave: 'sinRuta' }, true);
            } finally {
                bloquear(false);
            }
        }

        botonRuta.addEventListener('click', () => {
            if (ocupado) return;
            if (!('geolocation' in navigator)) { mostrarEstado({ clave: 'sinGeo' }, true); return; }
            bloquear(true);
            mostrarEstado({ clave: 'buscando' });
            navigator.geolocation.getCurrentPosition(
                pos => { origen = [pos.coords.latitude, pos.coords.longitude]; trazarRuta(); },
                error => {
                    bloquear(false);
                    mostrarEstado({ error: [1, 2, 3].includes(error.code) ? error.code : 2 }, true);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 60000 }
            );
        });

        botonesModo.forEach(boton => {
            boton.addEventListener('click', () => {
                if (ocupado || boton.dataset.modo === modo) return;
                modo = boton.dataset.modo;
                botonesModo.forEach(b => b.setAttribute('aria-pressed', String(b === boton)));
                if (origen) trazarRuta(); // ya tenemos la ubicación: recalculamos sin volver a pedir permiso
            });
        });
    }
})();
