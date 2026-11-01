// =====================================================================
// CALENDARIOS DE FUNCIONES: uno en Teatro → Funciones y otro en Microcine → Funciones
//    En el HTML, cada calendario es un <div data-calendario="teatro"> o <div data-calendario="microcine">.
//    Las funciones y el interruptor de cada uno están en js/funciones-datos.js (FUNCIONES)
// =====================================================================
(function calendariosDeFunciones() {
    if (typeof FUNCIONES === 'undefined') return;

    // Textos: lo común y lo que cambia según el lugar (en inglés e italiano el microcine tiene «proyecciones»)
    const TEXTOS = {
        es: {
            anterior: 'Mes anterior', siguiente: 'Mes siguiente', verMes: 'Ver todo el mes', hoy: 'hoy', bloqueadoT: 'Próximamente',
            teatro: { delMes: m => `Funciones de ${m}`, delDia: d => `Funciones del ${d}`, sin: 'No hay funciones este mes.', cantidad: n => (n === 1 ? '1 función' : `${n} funciones`), bloqueadoD: 'El calendario se habilita cuando haya funciones publicadas.' },
            microcine: { delMes: m => `Funciones de ${m}`, delDia: d => `Funciones del ${d}`, sin: 'No hay funciones este mes.', cantidad: n => (n === 1 ? '1 función' : `${n} funciones`), bloqueadoD: 'El calendario se habilita cuando haya funciones publicadas.' }
        },
        en: {
            anterior: 'Previous month', siguiente: 'Next month', verMes: 'See the whole month', hoy: 'today', bloqueadoT: 'Coming soon',
            teatro: { delMes: m => `Shows in ${m}`, delDia: d => `Shows on ${d}`, sin: 'There are no shows this month.', cantidad: n => (n === 1 ? '1 show' : `${n} shows`), bloqueadoD: 'The calendar will open once shows are published.' },
            microcine: { delMes: m => `Screenings in ${m}`, delDia: d => `Screenings on ${d}`, sin: 'There are no screenings this month.', cantidad: n => (n === 1 ? '1 screening' : `${n} screenings`), bloqueadoD: 'The calendar will open once screenings are published.' }
        },
        it: {
            anterior: 'Mese precedente', siguiente: 'Mese successivo', verMes: 'Vedi tutto il mese', hoy: 'oggi', bloqueadoT: 'Prossimamente',
            teatro: { delMes: m => `Spettacoli di ${m}`, delDia: d => `Spettacoli del ${d}`, sin: 'Non ci sono spettacoli questo mese.', cantidad: n => (n === 1 ? '1 spettacolo' : `${n} spettacoli`), bloqueadoD: 'Il calendario si attiverà quando ci saranno spettacoli pubblicati.' },
            microcine: { delMes: m => `Proiezioni di ${m}`, delDia: d => `Proiezioni del ${d}`, sin: 'Non ci sono proiezioni questo mese.', cantidad: n => (n === 1 ? '1 proiezione' : `${n} proiezioni`), bloqueadoD: 'Il calendario si attiverà quando ci saranno proiezioni pubblicate.' }
        }
    };
    const t = () => TEXTOS[idioma];
    const LOCALES = { es: 'es-AR', en: 'en-US', it: 'it-IT' };
    // En español e italiano la hora va en formato de 24 horas (21:00); en inglés, 9:00 PM
    const formato = opciones => new Intl.DateTimeFormat(LOCALES[idioma], Object.assign({ hour12: idioma === 'en' }, opciones));
    const mayuscula = s => s.charAt(0).toUpperCase() + s.slice(1);

    // Clases de Tailwind de cada pieza (para cambiar el diseño, se edita acá). El color depende del lugar.
    const C = {
        caja: 'rounded-xl border border-[#eee] bg-white p-4 shadow-[0_6px_24px_rgba(0,0,0,0.07)] md:p-6',
        cabecera: 'mb-4 flex items-center justify-between gap-3',
        flecha: 'size-10 flex-none cursor-pointer rounded-full border border-[#ddd] text-lg text-texto transition-colors hover:border-verde hover:text-verde',
        mes: 'font-serif text-[1.35rem] font-bold md:text-[1.6rem]',
        semana: 'grid grid-cols-7 gap-1 text-center text-[0.75rem] font-semibold tracking-wide text-[#888] uppercase md:gap-2',
        dias: 'mt-1 grid grid-cols-7 gap-1 md:gap-2',
        dia: 'flex aspect-square flex-col items-center justify-center rounded-lg text-[0.95rem] text-[#444] md:aspect-auto md:h-14',
        diaHoy: 'ring-2 ring-oro',
        diaFuncion: {
            teatro: 'cursor-pointer bg-[#fdeced] font-semibold text-vino transition-colors hover:bg-[#f9d6d9] aria-pressed:bg-vino aria-pressed:text-white',
            microcine: 'cursor-pointer bg-[#e6f4ec] font-semibold text-verde-oscuro transition-colors hover:bg-[#d3ecdd] aria-pressed:bg-verde-oscuro aria-pressed:text-white'
        },
        punto: { teatro: 'mt-0.5 inline-block size-1.5 rounded-full bg-rojo', microcine: 'mt-0.5 inline-block size-1.5 rounded-full bg-verde' },
        lista: 'mt-6 border-t border-[#eee] pt-5',
        listaTitulo: 'mb-3 font-serif text-[1.15rem] font-bold',
        funcion: { teatro: 'mb-3 rounded-lg border-l-4 border-rojo bg-[#fafafa] px-4 py-3 last:mb-0', microcine: 'mb-3 rounded-lg border-l-4 border-verde bg-[#fafafa] px-4 py-3 last:mb-0' },
        funcionDatos: 'text-[0.82rem] font-semibold tracking-wide text-[#777] uppercase',
        funcionTitulo: 'font-serif text-[1.1rem] font-bold text-texto',
        funcionTexto: 'text-[0.95rem] text-[#555]',
        verMes: 'mt-2 cursor-pointer text-[0.9rem] font-semibold text-verde-oscuro underline underline-offset-2',
        bloqueo: 'absolute inset-0 z-[1] flex items-center justify-center p-4',
        bloqueoCaja: 'max-w-[340px] rounded-xl bg-white px-6 py-5 text-center shadow-[0_10px_30px_rgba(0,0,0,0.18)]',
        bloqueoTitulo: 'mb-1 font-serif text-[1.5rem] font-bold text-vino',
        bloqueado: 'pointer-events-none blur-[3px] select-none opacity-60'
    };

    // Las fechas «año-mes-día» se pasan a fechas del navegador (hora local)
    const fechaDe = f => { const [a, m, d] = f.fecha.split('-').map(Number); const [h, min] = (f.hora || '00:00').split(':').map(Number); return new Date(a, m - 1, d, h, min); };
    const mismoDia = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
    function boton(texto, clase, alHacerClic) {
        const b = crear('button', clase, texto);
        b.type = 'button';
        b.addEventListener('click', alHacerClic);
        return b;
    }

    // Arma un calendario dentro de «raiz» con las funciones de «lugar» (teatro o microcine)
    function calendario(raiz, lugar) {
        const datos = FUNCIONES[lugar];
        if (!datos) return;
        const funciones = datos.lista.map(f => Object.assign({}, f, { cuando: fechaDe(f) })).sort((a, b) => a.cuando - b.cuando);
        const L = () => t()[lugar];

        // Arranca en el mes de la próxima función (o en el mes actual si no hay)
        const hoy = new Date();
        const proxima = funciones.find(f => f.cuando >= new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate()));
        let mes = proxima ? new Date(proxima.cuando.getFullYear(), proxima.cuando.getMonth(), 1) : new Date(hoy.getFullYear(), hoy.getMonth(), 1);
        let diaElegido = null;
        let enfocar = null; // después de redibujar, el foco vuelve al botón que se tocó

        function tarjetaFuncion(f) {
            const item = crear('li', C.funcion[lugar]);
            const cuando = formato({ weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' }).format(f.cuando);
            item.append(crear('p', C.funcionDatos, mayuscula(cuando)), crear('p', C.funcionTitulo, tr(f.titulo)), crear('p', C.funcionTexto, tr(f.descripcion)));
            return item;
        }

        function mostrar() {
            const abiertas = Boolean(datos.abiertas);
            const caja = crear('div', C.caja);

            // Mes y flechas
            const cabecera = crear('div', C.cabecera);
            const anterior = boton('‹', C.flecha, () => { mes = new Date(mes.getFullYear(), mes.getMonth() - 1, 1); diaElegido = null; enfocar = 'anterior'; mostrar(); });
            const siguiente = boton('›', C.flecha, () => { mes = new Date(mes.getFullYear(), mes.getMonth() + 1, 1); diaElegido = null; enfocar = 'siguiente'; mostrar(); });
            anterior.dataset.cal = 'anterior';
            siguiente.dataset.cal = 'siguiente';
            anterior.setAttribute('aria-label', t().anterior);
            siguiente.setAttribute('aria-label', t().siguiente);
            const nombreMes = mayuscula(formato({ month: 'long', year: 'numeric' }).format(mes));
            const titulo = crear('p', C.mes, nombreMes);
            titulo.setAttribute('aria-live', 'polite');
            cabecera.append(anterior, titulo, siguiente);

            // Días de la semana (empieza el lunes)
            const semana = crear('div', C.semana);
            semana.setAttribute('aria-hidden', 'true');
            for (let i = 0; i < 7; i++) semana.append(crear('span', '', formato({ weekday: 'short' }).format(new Date(2024, 0, 1 + i)).replace('.', '')));

            // Días del mes
            const dias = crear('div', C.dias);
            const huecos = (mes.getDay() + 6) % 7;
            for (let i = 0; i < huecos; i++) dias.append(crear('span'));
            const total = new Date(mes.getFullYear(), mes.getMonth() + 1, 0).getDate();
            const delMes = funciones.filter(f => f.cuando.getFullYear() === mes.getFullYear() && f.cuando.getMonth() === mes.getMonth());
            for (let d = 1; d <= total; d++) {
                const fecha = new Date(mes.getFullYear(), mes.getMonth(), d);
                const deEseDia = delMes.filter(f => mismoDia(f.cuando, fecha));
                const esHoy = mismoDia(fecha, hoy);
                let celda;
                if (deEseDia.length) {
                    celda = boton(String(d), C.dia + ' ' + C.diaFuncion[lugar] + (esHoy ? ' ' + C.diaHoy : ''), () => { diaElegido = diaElegido && mismoDia(diaElegido, fecha) ? null : fecha; enfocar = 'dia-' + d; mostrar(); });
                    celda.dataset.cal = 'dia-' + d;
                    celda.setAttribute('aria-pressed', String(Boolean(diaElegido && mismoDia(diaElegido, fecha))));
                    celda.setAttribute('aria-label', `${formato({ day: 'numeric', month: 'long' }).format(fecha)}: ${L().cantidad(deEseDia.length)}`);
                    celda.append(crear('span', C.punto[lugar]));
                } else {
                    celda = crear('span', C.dia + (esHoy ? ' ' + C.diaHoy : ''), String(d));
                    if (esHoy) celda.title = t().hoy;
                }
                dias.append(celda);
            }

            // Lista de funciones (del día elegido o de todo el mes)
            const lista = crear('div', C.lista);
            const visibles = diaElegido ? delMes.filter(f => mismoDia(f.cuando, diaElegido)) : delMes;
            lista.append(crear('p', C.listaTitulo, diaElegido ? L().delDia(formato({ day: 'numeric', month: 'long' }).format(diaElegido)) : L().delMes(nombreMes)));
            if (visibles.length) {
                const ul = crear('ul');
                visibles.forEach(f => ul.append(tarjetaFuncion(f)));
                lista.append(ul);
            } else lista.append(crear('p', C.funcionTexto, L().sin));
            if (diaElegido) lista.append(boton(t().verMes, C.verMes, () => { diaElegido = null; enfocar = 'anterior'; mostrar(); }));

            caja.append(cabecera, semana, dias, lista);

            // Bloqueado: se ve borroso, no se puede tocar y los lectores de pantalla lo saltean
            const envoltorio = crear('div', 'relative');
            if (!abiertas) {
                caja.className += ' ' + C.bloqueado;
                caja.inert = true;
                caja.setAttribute('aria-hidden', 'true');
                const aviso = crear('div', C.bloqueo);
                const cartel = crear('div', C.bloqueoCaja);
                cartel.append(crear('p', C.bloqueoTitulo, '🔒 ' + t().bloqueadoT), crear('p', 'text-[0.95rem] text-[#555]', L().bloqueadoD));
                aviso.append(cartel);
                envoltorio.append(caja, aviso);
            } else envoltorio.append(caja);
            envoltorio.id = 'calendario-' + lugar;
            envoltorio.dataset.estado = abiertas ? 'abierto' : 'bloqueado';
            raiz.replaceChildren(envoltorio);
            if (enfocar) { const el = raiz.querySelector(`[data-cal="${enfocar}"]`); if (el) el.focus(); enfocar = null; }
        }

        document.addEventListener('cambio-de-idioma', mostrar);
        mostrar();
    }

    document.querySelectorAll('[data-calendario]').forEach(raiz => calendario(raiz, raiz.dataset.calendario));
})();
