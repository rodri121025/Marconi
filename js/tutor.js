// =====================================================================
// TUTOR DE ITALIANO: Lorenzo, en la sección Idioma italiano
//    Las lecciones están en js/italiano-lecciones.js (CURSO_ITALIANO)
//    Las explicaciones son en español o en inglés: el curso es para quien habla esos idiomas.
//    Si el sitio está en italiano, el tutor lo avisa y deja elegir español o inglés.
// =====================================================================
(function tutorDeItaliano() {
    const NOMBRE_ROBOT = 'Lorenzo';
    const raiz = document.getElementById('tutor');
    if (!raiz || typeof CURSO_ITALIANO === 'undefined') return;

    // Clases de Tailwind de cada pieza del tutor (para cambiar el diseño, se edita acá)
    const T = {
        nivel: 'tutor-level cursor-pointer rounded-lg border border-[#ddd] bg-white px-1 py-3 text-[0.92rem] font-semibold text-texto transition-colors hover:border-verde aria-pressed:border-verde aria-pressed:text-verde aria-pressed:shadow-[inset_0_-3px_0_var(--color-verde)] md:px-2.5 md:py-3.5 md:text-base',
        lista: 'grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4',
        tarjeta: 'tutor-card flex cursor-pointer items-start gap-3.5 rounded-lg border border-[#eee] bg-white p-[18px] text-left shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition hover:-translate-y-[3px] hover:shadow-[0_10px_24px_rgba(0,0,0,0.1)]',
        tarjetaNum: 'flex size-[34px] flex-none items-center justify-center rounded-full bg-vino font-semibold text-white',
        tarjetaTitulo: 'tutor-card-title block font-serif text-[1.08rem] font-bold',
        tarjetaResumen: 'block text-[0.88rem] text-[#666]',
        leccion: 'tutor-lesson scroll-mt-[100px] rounded-xl border border-[#eee] bg-white px-3.5 py-[18px] shadow-[0_6px_24px_rgba(0,0,0,0.07)] md:p-6',
        volver: 'cursor-pointer py-1 text-[0.92rem] font-semibold text-verde',
        antetitulo: 'text-[0.78rem] tracking-[1px] text-rojo uppercase',
        titulo: 'font-serif text-[1.35rem] leading-tight font-bold md:text-[1.6rem]',
        pasos: 'mt-3.5 mb-[22px] flex flex-wrap gap-2',
        paso: 'rounded-full bg-[#f2f2f2] px-3 py-1 text-[0.8rem] text-[#777]',
        pasoHecho: 'rounded-full bg-[#e3f3ea] px-3 py-1 text-[0.8rem] text-verde',
        pasoActual: 'rounded-full bg-verde px-3 py-1 text-[0.8rem] text-white',
        chat: 'flex flex-col gap-3.5',
        msg: 'flex items-end gap-2.5',
        msgVisitante: 'flex items-end justify-end gap-2.5',
        avatar: 'size-8 flex-none rounded-full object-cover md:size-10',
        globo: 'max-w-[640px] rounded-[16px_16px_16px_4px] bg-[#f4f4f4] px-[13px] py-2.5 leading-[1.55] md:px-4 md:py-3 [&_b]:text-vino',
        globoBien: 'max-w-[640px] rounded-[16px_16px_16px_4px] border-l-4 border-verde bg-[#e6f4ec] px-[13px] py-2.5 leading-[1.55] md:px-4 md:py-3 [&_b]:text-vino',
        globoMal: 'max-w-[640px] rounded-[16px_16px_16px_4px] border-l-4 border-rojo bg-[#fbe9ea] px-[13px] py-2.5 leading-[1.55] md:px-4 md:py-3 [&_b]:text-vino',
        globoVisitante: 'max-w-[640px] rounded-[16px_16px_4px_16px] bg-verde-oscuro px-[13px] py-2.5 text-white md:px-4 md:py-3',
        vocab: 'mt-3 grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-x-[18px] gap-y-2',
        vocabItem: 'flex items-center gap-2.5 border-t border-[#e3e3e3] py-1.5',
        audio: 'tutor-audio size-[34px] flex-none cursor-pointer rounded-full bg-white text-[0.95rem] shadow-[0_1px_4px_rgba(0,0,0,0.18)] hover:bg-[#f0f8f3]',
        vocabTextos: 'flex flex-col leading-[1.35]',
        vocabTraduccion: 'text-[0.88rem] text-[#555]',
        vocabAviso: 'mt-2.5 text-[0.85rem] text-rojo',
        controles: 'mt-[22px] flex flex-wrap gap-2.5 border-t border-[#eee] pt-[18px]',
        boton: 'cursor-pointer rounded border border-verde bg-verde px-[22px] py-[11px] text-[0.95rem] font-semibold text-white transition-colors hover:bg-[#007a3a]',
        botonSecundario: 'cursor-pointer rounded border border-verde bg-white px-[22px] py-[11px] text-[0.95rem] font-semibold text-verde transition-colors hover:bg-[#f0f8f3]',
        opciones: 'grid w-full grid-cols-1 gap-2.5 md:grid-cols-2',
        opcion: 'tutor-opcion cursor-pointer rounded-lg border border-[#ddd] bg-white px-4 py-3 text-left text-[0.98rem] text-texto transition-colors hover:border-verde hover:bg-[#f6fbf8]',
        form: 'flex w-full flex-wrap gap-2.5',
        campo: 'min-w-0 flex-1 rounded border border-[#ccc] px-3.5 py-[11px] text-base focus:border-verde focus:outline-2 focus:outline-verde',
        aviso: 'w-full text-[0.85rem] text-rojo empty:hidden',
        numero: 'mr-1 inline-block rounded-full bg-vino px-2 text-xs font-semibold text-white',
        traduccion: 'text-[0.9rem] text-[#666]'
    };

    const TEXTOS = {
        es: {
            etiquetaIdioma: 'Explicaciones en:', soy: 'Soy tu tutor de italiano.',
            presentacion: 'Te enseño italiano en tres niveles, desde cero hasta un nivel alto. Elegí un nivel y una lección, y vamos paso a paso.',
            altRobot: 'Robot con los colores de Italia saludando con la mano', leccion: 'Lección', de: 'de', volver: '← Lecciones',
            pasos: ['Explicación', 'Vocabulario', 'Práctica'], seguir: 'Seguir', verVocabulario: 'Ver el vocabulario', practicar: '¡A practicar!',
            introVocab: 'Estas son las palabras de la lección. Tocá 🔊 para escuchar cómo se pronuncian.',
            introPractica: n => `Ahora practiquemos: son ${n} ejercicios.`, escribiAca: 'Escribí tu respuesta…', comprobar: 'Comprobar',
            siguiente: 'Siguiente', verResultado: 'Ver mi resultado', vacio: 'Escribí algo antes de comprobar.',
            correcta: r => `La respuesta correcta es: <b>${r}</b>.`, acento: r => `Ojo con los acentos: se escribe «${r}».`,
            resultado: (b, t) => `Terminaste la lección: ${b} de ${t} respuestas correctas.`, animo: 'Repetila cuando quieras: la práctica hace al maestro.',
            finCurso: '¡Llegaste al final del curso! Complimenti! (¡Felicitaciones!)', repetir: 'Repetir la lección', siguienteLeccion: 'Siguiente lección',
            irNivel: n => `Ir al nivel ${n}`, escuchar: w => `Escuchar «${w}»`,
            sinVoz: 'Tu navegador no tiene una voz en italiano instalada, así que no puedo reproducir el audio.', sinAudio: 'Tu navegador no puede reproducir audio.'
        },
        en: {
            etiquetaIdioma: 'Explanations in:', soy: "I'm your Italian tutor.",
            presentacion: "I'll teach you Italian at three levels, from scratch to advanced. Pick a level and a lesson, and we'll go step by step.",
            altRobot: 'Robot in the colors of the Italian flag, waving hello', leccion: 'Lesson', de: 'of', volver: '← Lessons',
            pasos: ['Explanation', 'Vocabulary', 'Practice'], seguir: 'Continue', verVocabulario: 'See the vocabulary', practicar: "Let's practice!",
            introVocab: 'Here are the words from this lesson. Tap 🔊 to hear how they sound.',
            introPractica: n => `Now let's practice: ${n} exercises.`, escribiAca: 'Type your answer…', comprobar: 'Check',
            siguiente: 'Next', verResultado: 'See my score', vacio: 'Type something before checking.',
            correcta: r => `The correct answer is: <b>${r}</b>.`, acento: r => `Watch the accents: it's written “${r}”.`,
            resultado: (b, t) => `You finished the lesson: ${b} out of ${t} correct.`, animo: 'Try it again whenever you want: practice makes perfect.',
            finCurso: "You've reached the end of the course! Complimenti! (Congratulations!)", repetir: 'Repeat the lesson', siguienteLeccion: 'Next lesson',
            irNivel: n => `Go to the ${n} level`, escuchar: w => `Listen to “${w}”`,
            sinVoz: "Your browser doesn't have an Italian voice installed, so I can't play the audio.", sinAudio: "Your browser can't play audio."
        }
    };
    const FRASES_BIEN = [
        { it: 'Esatto!', es: '¡Exacto!', en: 'Exactly!' }, { it: 'Perfetto!', es: '¡Perfecto!', en: 'Perfect!' },
        { it: 'Bravissimo!', es: '¡Muy bien!', en: 'Well done!' }, { it: 'Ottimo!', es: '¡Excelente!', en: 'Excellent!' }
    ];
    const FRASE_MAL = { it: 'Quasi!', es: '¡Casi!', en: 'Almost!' };
    const FRASES_FINAL = {
        todo: { it: 'Fantastico!', es: '¡Fantástico!', en: 'Fantastic!' },
        bien: { it: 'Molto bene!', es: '¡Muy bien!', en: 'Very good!' },
        poco: { it: 'Coraggio!', es: '¡Ánimo!', en: 'Keep going!' }
    };

    // Presentación cuando el sitio está en italiano
    const ITALIANO = {
        soy: 'Sono il tuo tutor di italiano. Il corso è pensato per chi parla spagnolo o inglese: scegli la lingua delle spiegazioni.',
        etiquetaIdioma: 'Spiegazioni in:', altRobot: 'Robot con i colori dell’Italia che saluta con la mano'
    };

    // Todo lo que el robot necesita recordar
    const estado = { idioma: idioma === 'en' ? 'en' : 'es', nivel: 0, leccion: null, fase: 'explicacion', paso: 0, orden: [], respuestas: [], esperando: false };

    const t = () => TEXTOS[estado.idioma];
    const enIdioma = v => (typeof v === 'string' ? v : v[estado.idioma]); // texto en el idioma de las explicaciones
    const conTraduccion = f => `<b>${f.it}</b> <span class="${T.traduccion}">(${f[estado.idioma]})</span>`;
    function boton(texto, alHacerClic, clase) {
        const b = crear('button', clase || T.boton, texto);
        b.type = 'button';
        b.addEventListener('click', alHacerClic);
        return b;
    }
    function textoPlano(html) { const d = document.createElement('div'); d.innerHTML = html; return d.textContent; }
    function mezclar(n) {
        const lista = [...Array(n).keys()];
        for (let i = n - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [lista[i], lista[j]] = [lista[j], lista[i]]; }
        return lista;
    }
    // Comparar respuestas escritas sin que importen mayúsculas, espacios ni puntuación
    const normalizar = s => s.toLowerCase().replace(/[’‘`´]/g, "'").replace(/[.,;:!?¡¿«»“”"…]/g, ' ').replace(/\s*'\s*/g, "'").replace(/\s+/g, ' ').trim();
    const sinAcentos = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '');
    function evaluarEscrito(texto, aceptadas) {
        const dado = normalizar(texto);
        const lista = aceptadas.map(normalizar);
        if (lista.includes(dado)) return 'bien';
        if (lista.map(sinAcentos).includes(sinAcentos(dado))) return 'acento';
        return 'mal';
    }

    // Audio: el navegador lee la palabra con voz italiana
    const hayAudio = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
    if (hayAudio) window.speechSynthesis.getVoices();
    function hablar(texto, aviso) {
        const voces = window.speechSynthesis.getVoices();
        const voz = voces.find(v => /^it([-_]|$)/i.test(v.lang));
        if (voces.length && !voz) { aviso.textContent = t().sinVoz; aviso.hidden = false; return; }
        window.speechSynthesis.cancel();
        const frase = new SpeechSynthesisUtterance(texto.replace(/…/g, ''));
        frase.lang = 'it-IT';
        if (voz) frase.voice = voz;
        frase.rate = 0.9;
        window.speechSynthesis.speak(frase);
    }

    // ---------- Mensajes ----------
    function mensajeRobot(html, tipo) {
        const msg = crear('div', T.msg + ' msg-bot');
        const avatar = crear('img', T.avatar);
        avatar.src = ROBOT_CARA;
        avatar.alt = '';
        const globo = crear('div', tipo === 'ok' ? T.globoBien : tipo === 'error' ? T.globoMal : T.globo);
        globo.innerHTML = html; // texto de las lecciones, nunca lo que escribe el visitante
        msg.append(avatar, globo);
        return msg;
    }
    function mensajeVisitante(texto) {
        const msg = crear('div', T.msgVisitante + ' msg-user');
        msg.append(crear('div', T.globoVisitante, texto)); // textContent: nunca se interpreta como HTML
        return msg;
    }
    function mensajeVocabulario(leccion) {
        const msg = mensajeRobot(t().introVocab);
        const globo = msg.lastChild;
        const aviso = crear('p', T.vocabAviso);
        aviso.setAttribute('role', 'status');
        aviso.hidden = hayAudio;
        if (!hayAudio) aviso.textContent = t().sinAudio;
        const lista = crear('ul', T.vocab);
        leccion.vocabulario.forEach(palabra => {
            const item = crear('li', T.vocabItem);
            if (hayAudio) {
                const audio = boton('🔊', () => hablar(palabra.it, aviso), T.audio);
                audio.setAttribute('aria-label', t().escuchar(palabra.it));
                item.append(audio);
            }
            const textos = crear('span', T.vocabTextos);
            const it = crear('b', '', palabra.it);
            it.lang = 'it';
            textos.append(it, crear('span', T.vocabTraduccion, palabra[estado.idioma]));
            item.append(textos);
            lista.append(item);
        });
        globo.append(lista, aviso);
        return msg;
    }
    function mensajeCorreccion(ej, r) {
        const correcta = ej.tipo === 'opcion' ? enIdioma(ej.opciones[0]) : ej.respuestas[0];
        let html;
        if (r.resultado === 'mal') html = conTraduccion(FRASE_MAL) + ' ' + t().correcta(correcta);
        else {
            html = conTraduccion(FRASES_BIEN[r.frase]);
            if (r.resultado === 'acento') html += ' ' + t().acento(correcta);
        }
        if (ej.nota) html += '<br>' + enIdioma(ej.nota);
        return mensajeRobot(html, r.resultado === 'mal' ? 'error' : 'ok');
    }
    function mensajeResultado(leccion) {
        const total = leccion.ejercicios.length;
        const bien = estado.respuestas.filter(r => r.resultado !== 'mal').length;
        const frase = bien === total ? FRASES_FINAL.todo : bien >= total / 2 ? FRASES_FINAL.bien : FRASES_FINAL.poco;
        let html = conTraduccion(frase) + ' ' + t().resultado(bien, total);
        if (bien < total) html += ' ' + t().animo;
        const ultima = estado.nivel === CURSO_ITALIANO.length - 1 && estado.leccion === CURSO_ITALIANO[estado.nivel].lecciones.length - 1;
        if (ultima) html += '<br>' + t().finCurso;
        return mensajeRobot(html);
    }

    // ---------- Acciones ----------
    function abrirLeccion(nivel, leccion) {
        Object.assign(estado, { nivel, leccion, fase: 'explicacion', paso: 0, orden: [], respuestas: [], esperando: false });
        mostrar('abrir');
    }
    function responder(r) {
        r.frase = Math.floor(Math.random() * FRASES_BIEN.length);
        estado.respuestas.push(r);
        estado.esperando = true;
        mostrar('avanzar');
    }

    // ---------- Vistas ----------
    function vistaLecciones() {
        const grilla = crear('div', T.lista);
        CURSO_ITALIANO[estado.nivel].lecciones.forEach((leccion, i) => {
            const tarjeta = crear('button', T.tarjeta);
            tarjeta.type = 'button';
            const textos = crear('span', 'flex flex-col gap-1');
            textos.append(crear('span', T.tarjetaTitulo, enIdioma(leccion.titulo)), crear('span', T.tarjetaResumen, enIdioma(leccion.resumen)));
            tarjeta.append(crear('span', T.tarjetaNum, String(i + 1)), textos);
            tarjeta.addEventListener('click', () => abrirLeccion(estado.nivel, i));
            grilla.append(tarjeta);
        });
        return grilla;
    }

    function vistaLeccion() {
        const nivel = CURSO_ITALIANO[estado.nivel];
        const leccion = nivel.lecciones[estado.leccion];
        const caja = crear('div', T.leccion);
        caja.id = 'tutor-leccion';

        const cabecera = crear('div', 'flex flex-col items-start gap-1.5');
        const titulos = crear('div');
        titulos.append(
            crear('p', T.antetitulo, `${enIdioma(nivel.nombre)} · ${t().leccion} ${estado.leccion + 1} ${t().de} ${nivel.lecciones.length}`),
            crear('h3', T.titulo, enIdioma(leccion.titulo))
        );
        cabecera.append(boton(t().volver, () => { estado.leccion = null; mostrar('lista'); }, T.volver), titulos);

        const pasoActual = { explicacion: 0, vocabulario: 1, ejercicios: 2, fin: 3 }[estado.fase];
        const pasos = crear('ol', T.pasos);
        t().pasos.forEach((nombre, i) => pasos.append(crear('li', i === pasoActual ? T.pasoActual : i < pasoActual ? T.pasoHecho : T.paso, nombre)));

        const chat = crear('div', T.chat);
        const explicacion = estado.fase === 'explicacion' ? leccion.explicacion.slice(0, estado.paso + 1) : leccion.explicacion;
        explicacion.forEach(m => chat.append(mensajeRobot(enIdioma(m))));
        if (estado.fase !== 'explicacion') chat.append(mensajeVocabulario(leccion));

        const total = leccion.ejercicios.length;
        if (estado.fase === 'ejercicios' || estado.fase === 'fin') {
            chat.append(mensajeRobot(t().introPractica(total)));
            const visibles = Math.min(total, estado.respuestas.length + (estado.esperando || estado.fase === 'fin' ? 0 : 1));
            for (let k = 0; k < visibles; k++) {
                const ej = leccion.ejercicios[k];
                chat.append(mensajeRobot(`<span class="${T.numero}">${k + 1}/${total}</span> ${enIdioma(ej.pregunta)}`));
                const r = estado.respuestas[k];
                if (r) {
                    chat.append(mensajeVisitante(ej.tipo === 'opcion' ? textoPlano(enIdioma(ej.opciones[r.elegida])) : r.texto));
                    chat.append(mensajeCorreccion(ej, r));
                }
            }
        }
        if (estado.fase === 'fin') chat.append(mensajeResultado(leccion));

        caja.append(cabecera, pasos, chat, vistaControles(nivel, leccion));
        return caja;
    }

    function vistaControles(nivel, leccion) {
        const controles = crear('div', T.controles);
        controles.id = 'tutor-controles';
        const total = leccion.ejercicios.length;

        if (estado.fase === 'explicacion') {
            const ultimo = estado.paso >= leccion.explicacion.length - 1;
            controles.append(boton((ultimo ? t().verVocabulario : t().seguir) + ' ▸', () => {
                if (ultimo) estado.fase = 'vocabulario'; else estado.paso++;
                mostrar('avanzar');
            }));
        } else if (estado.fase === 'vocabulario') {
            controles.append(boton(t().practicar + ' ▸', () => {
                Object.assign(estado, { fase: 'ejercicios', respuestas: [], esperando: false });
                estado.orden = leccion.ejercicios.map(e => (e.tipo === 'opcion' ? mezclar(e.opciones.length) : null));
                mostrar('avanzar');
            }));
        } else if (estado.fase === 'ejercicios' && estado.esperando) {
            const termino = estado.respuestas.length === total;
            controles.append(boton((termino ? t().verResultado : t().siguiente) + ' ▸', () => {
                estado.esperando = false;
                if (termino) estado.fase = 'fin';
                mostrar('avanzar');
            }));
        } else if (estado.fase === 'ejercicios') {
            const k = estado.respuestas.length;
            const ej = leccion.ejercicios[k];
            if (ej.tipo === 'opcion') {
                const opciones = crear('div', T.opciones);
                estado.orden[k].forEach(i => {
                    const op = boton('', () => responder({ elegida: i, resultado: i === 0 ? 'bien' : 'mal' }), T.opcion);
                    op.innerHTML = enIdioma(ej.opciones[i]);
                    opciones.append(op);
                });
                controles.append(opciones);
            } else {
                const form = crear('form', T.form);
                const campo = crear('input', T.campo);
                Object.assign(campo, { type: 'text', autocomplete: 'off', spellcheck: false, lang: 'it', placeholder: t().escribiAca });
                campo.setAttribute('autocapitalize', 'none');
                campo.setAttribute('aria-label', t().escribiAca);
                const aviso = crear('p', T.aviso);
                aviso.setAttribute('role', 'alert');
                form.append(campo, crear('button', T.boton, t().comprobar), aviso);
                form.addEventListener('submit', e => {
                    e.preventDefault(); // que el formulario no recargue la página
                    const texto = campo.value.trim();
                    if (!texto) { aviso.textContent = t().vacio; campo.focus(); return; }
                    responder({ texto, resultado: evaluarEscrito(texto, ej.respuestas) });
                });
                controles.append(form);
            }
        } else if (estado.fase === 'fin') {
            const ultimaDelNivel = estado.leccion === nivel.lecciones.length - 1;
            if (!ultimaDelNivel) controles.append(boton(t().siguienteLeccion + ' ▸', () => abrirLeccion(estado.nivel, estado.leccion + 1)));
            else if (estado.nivel < CURSO_ITALIANO.length - 1) {
                controles.append(boton(t().irNivel(enIdioma(CURSO_ITALIANO[estado.nivel + 1].nombre)) + ' ▸', () => {
                    estado.nivel++;
                    estado.leccion = null;
                    mostrar('lista');
                }));
            }
            controles.append(boton(t().repetir, () => abrirLeccion(estado.nivel, estado.leccion), T.botonSecundario));
        }
        return controles;
    }

    function mostrar(accion) {
        raiz.lang = estado.idioma;
        // Presentación
        const saludo = document.getElementById('tutor-saludo');
        const hola = crear('b', '', `Ciao! Sono ${NOMBRE_ROBOT}.`);
        hola.lang = 'it';
        const sitioEnItaliano = idioma === 'it';
        saludo.replaceChildren(hola, sitioEnItaliano ? ` ${ITALIANO.soy}` : ` ${t().soy} ${t().presentacion}`);
        saludo.lang = sitioEnItaliano ? 'it' : estado.idioma;
        document.getElementById('tutor-robot').alt = sitioEnItaliano ? ITALIANO.altRobot : t().altRobot;
        const etiqueta = document.getElementById('tutor-idioma-label');
        etiqueta.textContent = sitioEnItaliano ? ITALIANO.etiquetaIdioma : t().etiquetaIdioma;
        etiqueta.lang = sitioEnItaliano ? 'it' : estado.idioma;
        raiz.querySelectorAll('[data-idioma]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.idioma === estado.idioma)));
        // Niveles
        document.getElementById('tutor-niveles').replaceChildren(...CURSO_ITALIANO.map((nivel, i) => {
            const b = boton(enIdioma(nivel.nombre), () => { estado.nivel = i; estado.leccion = null; mostrar('nivel'); }, T.nivel);
            b.setAttribute('aria-pressed', String(i === estado.nivel));
            return b;
        }));
        document.getElementById('tutor-nivel-desc').textContent = enIdioma(CURSO_ITALIANO[estado.nivel].descripcion);
        // Contenido
        const contenido = document.getElementById('tutor-contenido');
        contenido.replaceChildren(estado.leccion === null ? vistaLecciones() : vistaLeccion());

        if (accion === 'abrir') document.getElementById('tutor-leccion').scrollIntoView({ behavior: movimiento, block: 'start' });
        else if (accion === 'lista') document.getElementById('tutor-niveles').scrollIntoView({ behavior: movimiento, block: 'start' });
        if (accion === 'abrir' || accion === 'avanzar') {
            const mensajes = contenido.querySelectorAll('.msg-bot, .msg-user');
            if (accion === 'avanzar') llevarALaVista(mensajes[mensajes.length - 1], document.getElementById('tutor-controles'));
            const ultimoRobot = [...mensajes].reverse().find(m => m.classList.contains('msg-bot'));
            document.getElementById('tutor-anuncio').textContent = ultimoRobot ? ultimoRobot.textContent : ''; // para lectores de pantalla
            const primero = contenido.querySelector('#tutor-controles button, #tutor-controles input');
            if (primero) primero.focus({ preventScroll: true });
        }
    }

    // Scroll para que se vean el mensaje nuevo y los controles (sin quedar tapados por la barra ni por el botón de Lorenzo)
    function llevarALaVista(mensaje, controles) {
        const margenArriba = 96;
        const arriba = mensaje.getBoundingClientRect().top;
        const abajo = controles.getBoundingClientRect().bottom;
        const alto = window.innerHeight;
        if (arriba >= margenArriba && abajo <= alto) return;
        const destino = (abajo - arriba) > (alto - margenArriba)
            ? window.scrollY + arriba - margenArriba
            : window.scrollY + abajo - alto + 90;
        window.scrollTo({ top: destino, behavior: movimiento });
    }

    raiz.querySelectorAll('[data-idioma]').forEach(b => b.addEventListener('click', () => {
        if (estado.idioma === b.dataset.idioma) return;
        estado.idioma = b.dataset.idioma;
        mostrar('idioma');
    }));
    // Si el sitio pasa a español o inglés, las explicaciones también (en italiano, se quedan como estaban)
    document.addEventListener('cambio-de-idioma', e => {
        if (e.detail === 'es' || e.detail === 'en') estado.idioma = e.detail;
        mostrar('idioma');
    });
    mostrar();
})();
