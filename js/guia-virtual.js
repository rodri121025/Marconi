// =====================================================================
// GUÍA VIRTUAL: Lorenzo, el asistente flotante
//    Lo que sabe y lo que entiende está en js/guia-virtual-datos.js (GUIA_VIRTUAL)
//    Entiende preguntas en español, inglés e italiano y responde en el idioma del sitio.
// =====================================================================
(function guiaVirtual() {
    try {
        if (typeof GUIA_VIRTUAL !== 'undefined') iniciar(GUIA_VIRTUAL);
    } catch (error) {
        console.warn('Guía Virtual: no se pudo iniciar.', error); // si falla, el resto del sitio sigue andando
    }

    function iniciar(D) {
        const esMovil = () => window.matchMedia('(max-width: 639px)').matches;
        const menuEsMovil = () => window.matchMedia('(max-width: 1023px)').matches;
        const info = () => D.paginas[vistaActual];
        const ui = () => TEXTOS[idioma];

        // ---------- Textos de la interfaz del guía ----------
        const TEXTOS = {
            es: {
                burbujaCerrar: 'Cerrar mensaje de bienvenida', abrir: 'Abrir asistente virtual', necesitasAyuda: '¿Necesitás ayuda?',
                minimizar: 'Minimizar asistente virtual', cerrar: 'Cerrar asistente virtual', conversacion: 'Conversación con el Guía Virtual',
                voz: 'Voz de Lorenzo', vozSilenciar: 'Silenciar a Lorenzo', vozActivar: 'Activar la voz de Lorenzo', escuchar: 'Escuchar de nuevo',
                escribi: 'Escribí tu pregunta', placeholder: 'Escribí tu pregunta…', enviar: 'Enviar pregunta',
                avisoElegir: 'Tocá el botón, enlace o imagen que querés que te explique.', cancelar: 'Cancelar', sociedad: 'Sociedad Italiana',
                estasAca: ' (estás acá)', irA: n => `Ir a ${n}`,
                avisoConstruccion: n => `Aviso: por ahora la sección ${n} está en construcción.`,
                recorridoEnPausa: (p, t) => `Tenés un recorrido por el sitio en pausa (paso ${p} de ${t}). ¿Lo seguimos?`,
                seguirRecorrido: '▶ Seguir el recorrido', terminarRecorrido: '✕ Terminar el recorrido',
                noVisitaste: n => `Todavía no visitaste ${n}. Te la recomiendo.`, yaRecorriste: 'Ya recorriste las secciones principales.',
                elegiTema: 'Elegí un tema y te muestro las preguntas más frecuentes:', preguntasSobre: c => `Preguntas sobre <b>${c}</b>:`,
                enLaSeccion: n => `Eso lo podés encontrar en la sección ${n}.`,
                yaEstas: n => `Ya estás en ${n}.`, teLlevo: n => `Te llevo a ${n}…`,
                anterior: 'Te llevo a la sección anterior…', sinAnterior: 'No encuentro una sección anterior en esta visita. ¿Querés ir al Inicio?',
                estasEn: n => `Estás en ${n}.`, partes: 'Partes de la página:', temas: 'Temas:', imagenes: 'Imágenes:',
                cantidadImagenes: n => (n === 1 ? 'tiene 1 imagen' : `tiene ${n} imágenes`), quePodes: 'Qué podés hacer:',
                opciones: '☰ Opciones', guiarme: '🧭 Guiarme por el menú',
                menuCelular: 'En el celular, el menú se abre con el botón ☰ de arriba a la derecha.',
                guiaInicio: 'Perfecto. Te voy a mostrar las partes principales del sitio.',
                paso: (p, t) => `Paso ${p} de ${t}`, atras: '← Atrás', siguiente: 'Siguiente →', terminar: 'Terminar ✓', terminarGuia: 'Terminar recorrido',
                guiaFin: 'Listo, terminamos el recorrido por el menú. ¿Querés que te lleve a alguna sección?',
                recorridoInicio: '¡Vamos! Te muestro el sitio sección por sección. Podés salir cuando quieras.',
                vamosA: n => `Vamos a ${n}…`, pasoRecorrido: (p, t) => `Recorrido · ${p} de ${t}`, salirRecorrido: 'Salir del recorrido',
                recorridoFin: '¡Listo! Ya conocés las partes principales del sitio: qué es la Sociedad Italiana, qué es el Teatro, qué podés encontrar en cada sección y cómo podés participar.',
                recorridoSalida: 'Listo, salimos del recorrido. ¿En qué más te puedo ayudar?',
                elegirInicio: 'Tocá el botón, enlace o imagen de la página que querés que te explique.',
                elegirCancelado: 'Listo, cancelé la explicación de botones.',
                otroBoton: '🔎 Explicame otro botón', explicarPagina: '💡 Explicame la página',
                cambioIdioma: 'Listo, desde ahora te hablo en español.',
                eHamburguesa: 'Este es el botón del menú. En celulares y tablets abre y cierra la lista de secciones del sitio.',
                eIdiomas: 'Con estos botones cambiás el idioma de todo el sitio: español (ES), inglés (EN) o italiano (IT). Yo también te hablo en el idioma que elijas.',
                eFlechita: (n, subs) => `Esta flechita abre las opciones de «${n}»: ${subs}.`,
                eGoogle: 'Este botón abre Google Maps con la ruta desde donde estás hasta el teatro, en Belgrano 654.',
                eRuta: 'Este botón te pide permiso para usar tu ubicación y dibuja en el mapa el recorrido hasta el teatro.',
                eModo: 'Con estos botones elegís si el recorrido del mapa se calcula en auto o a pie.',
                eMapa: 'Es el mapa con la ubicación del teatro. Podés acercarlo, alejarlo y moverlo; la gota roja marca dónde está.',
                eTutorIdioma: 'Cambia el idioma de las explicaciones del tutor de italiano: español o inglés.',
                eNivel: n => `Elige el nivel de las lecciones de italiano. Este es el nivel «${n}».`,
                eLeccion: n => `Abre la lección «${n}» del tutor de italiano.`,
                eAudio: 'Reproduce cómo se pronuncia la palabra en italiano.',
                eTutor: 'Es parte del tutor de italiano: te guía con explicaciones, vocabulario y ejercicios.',
                eLogo: 'Es el logo del Teatro Marconi. Si lo tocás, volvés al Inicio.',
                eEnlaceMenu: 'Este enlace del menú', eBoton: 'Este botón', teLleva: 'te lleva a',
                eExterno: s => `Este enlace abre un sitio externo: ${s}.`, eEnlace: s => `Es un enlace: «${s}».`,
                eImagen: s => `Es una imagen: ${s}.`, eImagenSola: 'Es una imagen de esta sección.',
                eTitulo: s => `Es el título «${s}». Marca una parte de esta sección.`, eBotonGen: s => `Es un botón: «${s}».`,
                ePie: 'Es el pie de página del sitio.', eOtro: 'Es parte del contenido de esta sección. Si querés, te explico la sección completa.'
            },
            en: {
                burbujaCerrar: 'Close welcome message', abrir: 'Open virtual assistant', necesitasAyuda: 'Need help?',
                minimizar: 'Minimize virtual assistant', cerrar: 'Close virtual assistant', conversacion: 'Conversation with the Virtual Guide',
                voz: 'Lorenzo’s voice', vozSilenciar: 'Mute Lorenzo', vozActivar: 'Turn on Lorenzo’s voice', escuchar: 'Listen again',
                escribi: 'Type your question', placeholder: 'Type your question…', enviar: 'Send question',
                avisoElegir: 'Tap the button, link or picture you want me to explain.', cancelar: 'Cancel', sociedad: 'Italian Society',
                estasAca: ' (you are here)', irA: n => `Go to ${n}`,
                avisoConstruccion: n => `Note: the ${n} section is under construction for now.`,
                recorridoEnPausa: (p, t) => `You have a site tour on pause (step ${p} of ${t}). Shall we carry on?`,
                seguirRecorrido: '▶ Continue the tour', terminarRecorrido: '✕ End the tour',
                noVisitaste: n => `You haven’t visited ${n} yet. I recommend it.`, yaRecorriste: 'You’ve already been through the main sections.',
                elegiTema: 'Pick a topic and I’ll show you the most frequent questions:', preguntasSobre: c => `Questions about <b>${c}</b>:`,
                enLaSeccion: n => `You can find that in the ${n} section.`,
                yaEstas: n => `You’re already in ${n}.`, teLlevo: n => `Taking you to ${n}…`,
                anterior: 'Taking you to the previous section…', sinAnterior: 'I can’t find a previous section in this visit. Would you like to go Home?',
                estasEn: n => `You’re in ${n}.`, partes: 'Parts of the page:', temas: 'Topics:', imagenes: 'Pictures:',
                cantidadImagenes: n => (n === 1 ? 'it has 1 picture' : `it has ${n} pictures`), quePodes: 'What you can do:',
                opciones: '☰ Options', guiarme: '🧭 Guide me through the menu',
                menuCelular: 'On a phone, the menu opens with the ☰ button at the top right.',
                guiaInicio: 'Great. I’ll show you the main parts of the site.',
                paso: (p, t) => `Step ${p} of ${t}`, atras: '← Back', siguiente: 'Next →', terminar: 'Finish ✓', terminarGuia: 'End the tour',
                guiaFin: 'Done, that’s the end of the menu tour. Would you like me to take you to a section?',
                recorridoInicio: 'Let’s go! I’ll show you the site section by section. You can leave whenever you want.',
                vamosA: n => `Heading to ${n}…`, pasoRecorrido: (p, t) => `Tour · ${p} of ${t}`, salirRecorrido: 'Leave the tour',
                recorridoFin: 'All done! Now you know the main parts of the site: what the Italian Society is, what the Theater is, what you’ll find in each section and how you can take part.',
                recorridoSalida: 'Done, we’ve left the tour. What else can I help you with?',
                elegirInicio: 'Tap the button, link or picture on the page that you want me to explain.',
                elegirCancelado: 'Done, I’ve cancelled the button explanation.',
                otroBoton: '🔎 Explain another button', explicarPagina: '💡 Explain the page',
                cambioIdioma: 'Done, I’ll speak English from now on.',
                eHamburguesa: 'This is the menu button. On phones and tablets it opens and closes the list of sections.',
                eIdiomas: 'These buttons change the language of the whole site: Spanish (ES), English (EN) or Italian (IT). I’ll talk to you in the language you choose, too.',
                eFlechita: (n, subs) => `This little arrow opens the “${n}” options: ${subs}.`,
                eGoogle: 'This button opens Google Maps with the route from where you are to the theater, at Belgrano 654.',
                eRuta: 'This button asks for permission to use your location and draws the route to the theater on the map.',
                eModo: 'With these buttons you choose whether the route on the map is worked out by car or on foot.',
                eMapa: 'It’s the map with the theater’s location. You can zoom in, zoom out and move it; the red pin marks where it is.',
                eTutorIdioma: 'Changes the language of the Italian tutor’s explanations: Spanish or English.',
                eNivel: n => `Chooses the level of the Italian lessons. This is the “${n}” level.`,
                eLeccion: n => `Opens the “${n}” lesson of the Italian tutor.`,
                eAudio: 'Plays how the word is pronounced in Italian.',
                eTutor: 'It’s part of the Italian tutor: it guides you with explanations, vocabulary and exercises.',
                eLogo: 'It’s the Teatro Marconi logo. If you tap it, you go back Home.',
                eEnlaceMenu: 'This menu link', eBoton: 'This button', teLleva: 'takes you to',
                eExterno: s => `This link opens an external site: ${s}.`, eEnlace: s => `It’s a link: “${s}”.`,
                eImagen: s => `It’s a picture: ${s}.`, eImagenSola: 'It’s a picture in this section.',
                eTitulo: s => `It’s the heading “${s}”. It marks a part of this section.`, eBotonGen: s => `It’s a button: “${s}”.`,
                ePie: 'It’s the site footer.', eOtro: 'It’s part of this section’s content. If you like, I can explain the whole section.'
            },
            it: {
                burbujaCerrar: 'Chiudi il messaggio di benvenuto', abrir: 'Apri l’assistente virtuale', necesitasAyuda: 'Ti serve aiuto?',
                minimizar: 'Riduci l’assistente virtuale', cerrar: 'Chiudi l’assistente virtuale', conversacion: 'Conversazione con la Guida Virtuale',
                voz: 'Voce di Lorenzo', vozSilenciar: 'Silenzia Lorenzo', vozActivar: 'Attiva la voce di Lorenzo', escuchar: 'Riascolta',
                escribi: 'Scrivi la tua domanda', placeholder: 'Scrivi la tua domanda…', enviar: 'Invia la domanda',
                avisoElegir: 'Tocca il pulsante, il link o l’immagine che vuoi che ti spieghi.', cancelar: 'Annulla', sociedad: 'Società Italiana',
                estasAca: ' (sei qui)', irA: n => `Vai a ${n}`,
                avisoConstruccion: n => `Avviso: per ora la sezione ${n} è in costruzione.`,
                recorridoEnPausa: (p, t) => `Hai una visita del sito in pausa (passo ${p} di ${t}). Continuiamo?`,
                seguirRecorrido: '▶ Continua la visita', terminarRecorrido: '✕ Termina la visita',
                noVisitaste: n => `Non hai ancora visitato ${n}. Te la consiglio.`, yaRecorriste: 'Hai già visitato le sezioni principali.',
                elegiTema: 'Scegli un tema e ti mostro le domande più frequenti:', preguntasSobre: c => `Domande su <b>${c}</b>:`,
                enLaSeccion: n => `Lo trovi nella sezione ${n}.`,
                yaEstas: n => `Sei già in ${n}.`, teLlevo: n => `Ti porto a ${n}…`,
                anterior: 'Ti porto alla sezione precedente…', sinAnterior: 'Non trovo una sezione precedente in questa visita. Vuoi andare alla Home?',
                estasEn: n => `Sei in ${n}.`, partes: 'Parti della pagina:', temas: 'Temi:', imagenes: 'Immagini:',
                cantidadImagenes: n => (n === 1 ? 'ha 1 immagine' : `ha ${n} immagini`), quePodes: 'Cosa puoi fare:',
                opciones: '☰ Opzioni', guiarme: '🧭 Guidami nel menu',
                menuCelular: 'Sul cellulare, il menu si apre con il pulsante ☰ in alto a destra.',
                guiaInicio: 'Perfetto. Ti mostro le parti principali del sito.',
                paso: (p, t) => `Passo ${p} di ${t}`, atras: '← Indietro', siguiente: 'Avanti →', terminar: 'Fine ✓', terminarGuia: 'Termina la visita',
                guiaFin: 'Fatto, abbiamo finito la visita del menu. Vuoi che ti porti a una sezione?',
                recorridoInicio: 'Andiamo! Ti mostro il sito sezione per sezione. Puoi uscire quando vuoi.',
                vamosA: n => `Andiamo a ${n}…`, pasoRecorrido: (p, t) => `Visita · ${p} di ${t}`, salirRecorrido: 'Esci dalla visita',
                recorridoFin: 'Fatto! Ora conosci le parti principali del sito: cos’è la Società Italiana, cos’è il Teatro, cosa trovi in ogni sezione e come puoi partecipare.',
                recorridoSalida: 'Fatto, siamo usciti dalla visita. In cos’altro posso aiutarti?',
                elegirInicio: 'Tocca il pulsante, il link o l’immagine della pagina che vuoi che ti spieghi.',
                elegirCancelado: 'Fatto, ho annullato la spiegazione dei pulsanti.',
                otroBoton: '🔎 Spiegami un altro pulsante', explicarPagina: '💡 Spiegami la pagina',
                cambioIdioma: 'Fatto, d’ora in poi ti parlo in italiano.',
                eHamburguesa: 'Questo è il pulsante del menu. Su cellulari e tablet apre e chiude l’elenco delle sezioni del sito.',
                eIdiomas: 'Con questi pulsanti cambi la lingua di tutto il sito: spagnolo (ES), inglese (EN) o italiano (IT). Anch’io ti parlo nella lingua che scegli.',
                eFlechita: (n, subs) => `Questa freccetta apre le opzioni di «${n}»: ${subs}.`,
                eGoogle: 'Questo pulsante apre Google Maps con il percorso da dove sei fino al teatro, in via Belgrano 654.',
                eRuta: 'Questo pulsante ti chiede il permesso di usare la tua posizione e disegna sulla mappa il percorso fino al teatro.',
                eModo: 'Con questi pulsanti scegli se il percorso sulla mappa si calcola in auto o a piedi.',
                eMapa: 'È la mappa con la posizione del teatro. Puoi ingrandirla, rimpicciolirla e spostarla; la goccia rossa indica dov’è.',
                eTutorIdioma: 'Cambia la lingua delle spiegazioni del tutor di italiano: spagnolo o inglese.',
                eNivel: n => `Sceglie il livello delle lezioni di italiano. Questo è il livello «${n}».`,
                eLeccion: n => `Apre la lezione «${n}» del tutor di italiano.`,
                eAudio: 'Riproduce la pronuncia della parola in italiano.',
                eTutor: 'Fa parte del tutor di italiano: ti guida con spiegazioni, vocabolario ed esercizi.',
                eLogo: 'È il logo del Teatro Marconi. Se lo tocchi, torni alla Home.',
                eEnlaceMenu: 'Questo link del menu', eBoton: 'Questo pulsante', teLleva: 'ti porta a',
                eExterno: s => `Questo link apre un sito esterno: ${s}.`, eEnlace: s => `È un link: «${s}».`,
                eImagen: s => `È un’immagine: ${s}.`, eImagenSola: 'È un’immagine di questa sezione.',
                eTitulo: s => `È il titolo «${s}». Indica una parte di questa sezione.`, eBotonGen: s => `È un pulsante: «${s}».`,
                ePie: 'È il piè di pagina del sito.', eOtro: 'Fa parte del contenuto di questa sezione. Se vuoi, ti spiego la sezione completa.'
            }
        };

        // ---------- Memoria SOLO durante la sesión (nada personal) ----------
        const CLAVE = 'guiaVirtual';
        const mem = Object.assign({ paginaActual: '', visitadas: [], recorridoCompleto: false, ultimaPregunta: '', bienvenidaVista: false, presentado: false, recorrido: null, chatAbierto: false }, leer());
        function leer() { try { return JSON.parse(sessionStorage.getItem(CLAVE)) || {}; } catch (e) { return {}; } }
        function guardar() { try { sessionStorage.setItem(CLAVE, JSON.stringify(mem)); } catch (e) { /* modo privado: seguimos sin memoria */ } }
        function registrarVisita() {
            mem.paginaActual = vistaActual;
            if (!mem.visitadas.includes(vistaActual)) mem.visitadas.push(vistaActual);
            guardar();
        }

        // ---------- Clases de Tailwind de cada pieza (para cambiar el diseño, se edita acá) ----------
        const G = {
            foco: 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rojo',
            chip: 'inline-block cursor-pointer rounded-full border border-verde bg-white px-[11px] py-1.5 text-[0.82rem] leading-[1.3] font-medium text-verde-oscuro transition-colors hover:bg-[#eaf6ef] disabled:cursor-default disabled:opacity-45 disabled:hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rojo',
            msgRobot: 'flex max-w-[96%] flex-col self-start sm:max-w-[92%]',
            msgVisitante: 'flex max-w-[96%] flex-col self-end sm:max-w-[92%]',
            globo: 'rounded-[14px_14px_14px_4px] border border-[#ececec] bg-white px-[13px] py-2.5 text-[0.92rem] [&_b]:text-vino',
            globoPaso: 'rounded-[14px_14px_14px_4px] border border-l-4 border-[#ececec] border-l-verde bg-white px-[13px] py-2.5 text-[0.92rem] [&_b]:text-vino',
            globoVisitante: 'rounded-[14px_14px_4px_14px] bg-verde-oscuro px-[13px] py-2.5 text-[0.92rem] text-white',
            chips: 'mt-2 flex flex-wrap gap-1.5',
            puntos: 'flex flex-row gap-1 self-start rounded-[14px] border border-[#ececec] bg-white px-3.5 py-3',
            punto: 'size-[7px] rounded-full bg-[#aaa] animate-puntos motion-reduce:animate-none',
            paso: 'gv-paso mb-0.5 block text-[0.72rem] font-semibold tracking-[0.06em] text-rojo uppercase',
            sugerencia: 'mt-2 block border-l-[3px] border-oro bg-[#fdf8e8] px-2.5 py-1.5 text-[0.85rem]',
            nota: 'mt-1.5 text-[0.82rem] text-[#7a5200] italic',
            escuchar: 'size-7 flex-none cursor-pointer rounded-full border border-[#ddd] bg-white text-[0.8rem] leading-none transition-colors hover:bg-[#eaf6ef] data-[sonando]:animate-pulse data-[sonando]:border-verde data-[sonando]:bg-[#eaf6ef] motion-reduce:animate-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rojo',
            resaltado: ['bg-[#fdeced]!', 'text-rojo!', 'rounded-md', 'animate-pulso', 'motion-reduce:animate-none', 'shadow-[inset_0_0_0_2px_var(--color-rojo)]'],
            apuntado: ['outline-[3px]!', 'outline-dashed!', 'outline-rojo!', 'outline-offset-[3px]!', 'cursor-help!']
        };

        // ---------- Interfaz (los textos se ponen en ponerTextos, según el idioma) ----------
        const raiz = crear('div', 'font-sans leading-[1.5] text-texto');
        raiz.id = 'gv';
        raiz.innerHTML = `
            <div id="gv-burbuja" class="fixed right-3.5 bottom-[82px] z-[1050] flex max-w-[calc(100vw-90px)] animate-aparecer items-start gap-1 rounded-[14px] bg-white py-3 pr-2 pl-3.5 shadow-[0_8px_26px_rgba(0,0,0,0.18)] after:absolute after:right-[26px] after:-bottom-[7px] after:size-3.5 after:rotate-45 after:bg-white after:content-[''] motion-reduce:animate-none sm:right-5 sm:bottom-[98px] sm:max-w-[270px]" hidden>
                <button type="button" id="gv-burbuja-texto" class="cursor-pointer text-left text-[0.92rem] text-texto ${G.foco}"></button>
                <button type="button" id="gv-burbuja-cerrar" class="size-[26px] flex-none cursor-pointer rounded-full bg-[#f1f1f1] text-base leading-none text-[#555] ${G.foco}">×</button>
            </div>
            <button type="button" id="gv-lanzador" class="group fixed right-3.5 bottom-3.5 z-[1050] flex cursor-pointer items-center gap-2.5 data-[oculto]:hidden sm:right-5 sm:bottom-5" aria-expanded="false" aria-controls="gv-ventana">
                <span class="relative block size-[54px] animate-flotar overflow-hidden rounded-full border-[3px] border-white bg-[#111] shadow-[0_6px_20px_rgba(0,0,0,0.25)] group-focus-visible:outline-[3px] group-focus-visible:outline-offset-[3px] group-focus-visible:outline-rojo motion-reduce:animate-none sm:size-[62px]" aria-hidden="true">
                    <img src="${D.avatar}" alt="" class="block size-full object-cover">
                    <span class="absolute inset-x-[21%] top-[37%] h-[17%] animate-parpadeo rounded-lg bg-[#0b0e13] opacity-0 motion-reduce:animate-none"></span>
                </span>
                <span id="gv-mano" class="pointer-events-none absolute -top-3 right-[34px] origin-[70%_85%] text-[1.35rem] group-hover:animate-saludo data-[saludando]:animate-saludo motion-reduce:animate-none sm:right-[42px]" aria-hidden="true">👋</span>
                <span id="gv-lanzador-texto" class="order-first hidden rounded-full bg-white px-3.5 py-2 text-[0.88rem] font-semibold whitespace-nowrap text-vino shadow-[0_4px_14px_rgba(0,0,0,0.15)] sm:inline" aria-hidden="true"></span>
            </button>
            <section id="gv-ventana" role="dialog" aria-labelledby="gv-titulo" hidden
                class="fixed z-[1200] flex flex-col overflow-hidden bg-white opacity-0 shadow-[0_16px_48px_rgba(0,0,0,0.25)] transition duration-200 data-[abierta]:opacity-100 motion-reduce:transition-none
                       max-sm:inset-x-0 max-sm:top-[var(--gv-arriba,0px)] max-sm:h-[var(--gv-alto,100dvh)] max-sm:w-full max-sm:data-[compacta]:top-auto max-sm:data-[compacta]:bottom-0 max-sm:data-[compacta]:h-[min(48vh,420px)] max-sm:data-[compacta]:rounded-t-[14px]
                       sm:right-5 sm:bottom-24 sm:z-[1100] sm:h-[min(620px,calc(100vh-120px))] sm:w-[min(400px,calc(100vw-40px))] sm:origin-bottom-right sm:translate-y-3.5 sm:scale-[0.97] sm:rounded-[14px] sm:data-[abierta]:translate-y-0 sm:data-[abierta]:scale-100 sm:data-[compacta]:h-[min(320px,45vh)] lg:data-[compacta]:h-[min(380px,calc(100vh-120px))]">
                <header class="flex items-center gap-2.5 bg-vino py-3 pr-3 pl-3.5 text-white">
                    <img src="${D.avatar}" alt="" class="size-[42px] flex-none rounded-full border-2 border-white object-cover">
                    <div class="min-w-0 flex-1">
                        <h2 id="gv-titulo" class="font-serif text-[1.1rem] leading-tight font-bold">${D.nombre}</h2>
                        <p id="gv-subtitulo" class="text-[0.78rem] opacity-85"></p>
                    </div>
                    <button type="button" id="gv-voz" class="size-[34px] flex-none cursor-pointer rounded-full text-[1.05rem] leading-none hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white"></button>
                    <button type="button" id="gv-minimizar" class="size-[34px] flex-none cursor-pointer rounded-full text-[1.3rem] leading-none hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white">–</button>
                    <button type="button" id="gv-cerrar" class="size-[34px] flex-none cursor-pointer rounded-full text-[1.3rem] leading-none hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white">×</button>
                </header>
                <div id="gv-mensajes" class="relative flex flex-1 flex-col gap-2.5 overflow-y-auto overscroll-contain bg-[#f6f6f6] px-3.5 py-4" role="log" aria-live="polite"></div>
                <form id="gv-form" class="flex gap-2 border-t border-[#eee] bg-white px-3 py-2.5">
                    <label id="gv-etiqueta" class="sr-only" for="gv-campo"></label>
                    <input type="text" id="gv-campo" autocomplete="off" maxlength="200" class="min-w-0 flex-1 rounded-full border border-[#ccc] px-3.5 py-2.5 text-base focus:border-verde focus:shadow-[0_0_0_2px_rgba(0,146,70,0.25)] focus:outline-none">
                    <button type="submit" id="gv-enviar" class="size-[42px] flex-none cursor-pointer rounded-full bg-verde text-base text-white hover:bg-[#007a3a] ${G.foco}">➤</button>
                </form>
            </section>
            <div id="gv-elegir" class="fixed bottom-3.5 left-1/2 z-[1150] flex max-w-[calc(100vw-32px)] -translate-x-1/2 items-center gap-3 rounded-[14px] bg-vino py-2.5 pr-3 pl-4 text-[0.9rem] text-white shadow-[0_8px_24px_rgba(0,0,0,0.3)] sm:bottom-5 sm:rounded-full" hidden>
                <span id="gv-elegir-texto"></span>
                <button type="button" id="gv-elegir-cancelar" class="flex-none cursor-pointer rounded-full border border-white px-3 py-1.5 ${G.foco}"></button>
            </div>`;
        document.body.append(raiz);

        const $ = id => document.getElementById(id);
        const lanzador = $('gv-lanzador');
        const ventana = $('gv-ventana');
        const mensajes = $('gv-mensajes');
        const campo = $('gv-campo');
        const burbuja = $('gv-burbuja');

        // ---------- Voz de Lorenzo (frases grabadas, en js/lorenzo-voces.js) ----------
        // Habla solo las respuestas que tienen grabación, en el idioma del sitio. El visitante puede silenciarlo (🔇)
        // y volver a escuchar cada mensaje con su botón 🔊.
        const VOCES = typeof VOCES_LORENZO !== 'undefined' ? VOCES_LORENZO : {};
        const voz = new Audio();
        let botonSonando = null;
        let vozDesbloqueada = false;
        let vozEncendida = true;
        try { vozEncendida = localStorage.getItem('vozLorenzo') !== 'no'; } catch (e) { /* sin almacenamiento: queda encendida */ }
        const vozDe = clave => (clave && VOCES[idioma + '/' + clave]) || null;
        function marcarSonando(boton) {
            if (botonSonando) botonSonando.removeAttribute('data-sonando');
            botonSonando = boton || null;
            if (botonSonando) botonSonando.setAttribute('data-sonando', '');
        }
        function hablar(archivo, boton) {
            callar();
            voz.src = archivo;
            marcarSonando(boton);
            const intento = voz.play();
            // Los navegadores no dejan sonar audio hasta que el visitante toca algo en la página: en ese caso, no suena
            if (intento) intento.catch(() => marcarSonando(null));
        }
        function callar() {
            if (!voz.paused) voz.pause();
            marcarSonando(null);
        }
        voz.addEventListener('ended', () => marcarSonando(null));
        function ponerBotonVoz() {
            const boton = $('gv-voz');
            boton.hidden = !Object.keys(VOCES).length; // sin grabaciones, no hay botón
            boton.textContent = vozEncendida ? '🔊' : '🔇';
            boton.setAttribute('aria-pressed', String(vozEncendida));
            boton.setAttribute('aria-label', ui().voz);
            boton.title = vozEncendida ? ui().vozSilenciar : ui().vozActivar;
        }
        $('gv-voz').addEventListener('click', () => {
            vozEncendida = !vozEncendida;
            try { localStorage.setItem('vozLorenzo', vozEncendida ? 'si' : 'no'); } catch (e) { /* se recuerda solo mientras la página esté abierta */ }
            if (!vozEncendida) callar();
            ponerBotonVoz();
        });
        // En el iPhone, un audio solo puede empezar con un toque: el primer toque en Lorenzo deja habilitada su voz
        function desbloquearVoz() {
            if (vozDesbloqueada || !VOCES.silencio) return;
            vozDesbloqueada = true;
            if (voz.paused) { voz.src = VOCES.silencio; voz.play().catch(() => {}); }
        }
        raiz.addEventListener('click', desbloquearVoz, true);
        raiz.addEventListener('keydown', desbloquearVoz, true);

        function ponerTextos() {
            raiz.lang = idioma;
            $('gv-burbuja-texto').textContent = tr(D.textos.burbuja);
            $('gv-burbuja-cerrar').setAttribute('aria-label', ui().burbujaCerrar);
            lanzador.setAttribute('aria-label', ui().abrir);
            $('gv-lanzador-texto').textContent = ui().necesitasAyuda;
            $('gv-subtitulo').textContent = tr(D.rol) + ' · ' + ui().sociedad;
            $('gv-minimizar').setAttribute('aria-label', ui().minimizar);
            $('gv-cerrar').setAttribute('aria-label', ui().cerrar);
            ponerBotonVoz();
            mensajes.setAttribute('aria-label', ui().conversacion);
            $('gv-etiqueta').textContent = ui().escribi;
            campo.placeholder = ui().placeholder;
            $('gv-enviar').setAttribute('aria-label', ui().enviar);
            $('gv-elegir-texto').textContent = ui().avisoElegir;
            $('gv-elegir-cancelar').textContent = ui().cancelar;
        }
        ponerTextos();

        let conversacionIniciada = false;
        let saludoPendiente = false;   // cambió de sección con el chat cerrado
        let guia = null;               // recorrido por el menú: { paso }
        let cola = Promise.resolve();  // los mensajes del robot salen en orden
        let navegaciones = 0;          // para el comando «Volver» (un solo HTML)

        const normalizar = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
        const contiene = (texto, clave) => (' ' + texto + ' ').includes(' ' + clave + ' ');
        const contieneAlguna = (texto, claves) => claves.some(c => contiene(texto, c));
        // Las palabras clave se escriben por idioma; Lorenzo las entiende todas, sin importar el idioma del sitio
        const todas = porIdioma => (Array.isArray(porIdioma) ? porIdioma : [].concat(...Object.values(porIdioma || {})));
        const nombre = id => (D.paginas[id] ? tr(D.paginas[id].nombre) : id);
        const nombreDe = id => (D.paginas[id] ? D.paginas[id].emoji + ' ' + nombre(id) : id);
        const esperar = ms => new Promise(r => setTimeout(r, ms));
        const COMANDOS = Object.assign({}, ...Object.values(D.comandos));
        const PREFIJOS_IR = new RegExp('^(' + todas(D.prefijosIr).sort((a, b) => b.length - a.length).join('|') + ')\\s+');
        const ARTICULOS = /^(el|la|los|las|the|il|lo|l|i|gli|le)\s+/;

        // ---------- Mensajes ----------
        function ajustarScroll(nuevo) {
            if (nuevo && nuevo.offsetHeight > mensajes.clientHeight * 0.75) mensajes.scrollTop = nuevo.offsetTop - 8;
            else mensajes.scrollTop = mensajes.scrollHeight;
        }
        // Texto de un botón: el que trae, o uno armado a partir de la sección o la pregunta a la que lleva
        function textoBoton(b) {
            if (b.texto) return tr(b.texto);
            if (b.ir) return D.paginas[b.ir].emoji + ' ' + ui().irA(nombre(b.ir));
            if (b.accion && b.accion.startsWith('faq:')) {
                const p = D.preguntas.find(x => x.id === b.accion.slice(4));
                if (p) return tr(p.boton || p.pregunta);
            }
            return tr(D.botones[b.accion]) || b.accion;
        }
        function crearBoton(b) {
            const texto = textoBoton(b);
            if (b.ir && b.ir !== vistaActual) {
                const a = crear('a', G.chip + ' gv-chip', texto);
                a.href = urlDe(b.ir); // es un enlace real a la sección
                return a;
            }
            const boton = crear('button', G.chip + ' gv-chip', b.ir ? texto + ui().estasAca : texto);
            boton.type = 'button';
            if (b.deshabilitado) boton.disabled = true;
            boton.addEventListener('click', () => {
                callar();
                if (b.ir) { mensajeUsuario(texto); explicarPagina(); return; }
                if (!b.silencioso) mensajeUsuario(texto);
                ejecutar(b.accion);
            });
            return boton;
        }
        function decir(html, botones, opciones) {
            const op = opciones || {};
            cola = cola.then(async () => {
                const puntos = crear('div', G.puntos + ' gv-escribiendo');
                puntos.setAttribute('aria-hidden', 'true');
                puntos.innerHTML = `<span class="${G.punto}"></span><span class="${G.punto} [animation-delay:0.15s]"></span><span class="${G.punto} [animation-delay:0.3s]"></span>`;
                mensajes.append(puntos);
                ajustarScroll();
                await esperar(sinMovimiento ? 0 : 380);
                puntos.remove();
                const msg = crear('div', G.msgRobot + ' gv-msg-bot' + (op.paso ? ' gv-msg-paso' : ''));
                msg.lang = idioma;
                const globo = crear('div', (op.paso ? G.globoPaso : G.globo) + ' gv-globo');
                globo.innerHTML = html; // texto de GUIA_VIRTUAL, nunca lo que escribe el visitante
                const grabacion = vozDe(op.voz);
                let escuchar = null;
                if (grabacion) {
                    escuchar = crear('button', G.escuchar + ' gv-escuchar', '🔊');
                    escuchar.type = 'button';
                    escuchar.setAttribute('aria-label', ui().escuchar);
                    escuchar.title = ui().escuchar;
                    escuchar.addEventListener('click', () => hablar(grabacion, escuchar));
                    globo.classList.add('min-w-0');
                    const conVoz = crear('div', 'flex items-end gap-1.5');
                    conVoz.append(globo, escuchar);
                    msg.append(conVoz);
                } else msg.append(globo);
                if (botones && botones.length) {
                    const fila = crear('div', G.chips + ' gv-chips');
                    botones.forEach(b => fila.append(crearBoton(b)));
                    msg.append(fila);
                }
                mensajes.append(msg);
                ajustarScroll(msg);
                if (op.alMostrar) op.alMostrar(msg);
                if (grabacion && vozEncendida && !ventana.hidden) hablar(grabacion, escuchar);
            });
            return cola;
        }
        function mensajeUsuario(texto) {
            callar();
            const msg = crear('div', G.msgVisitante + ' gv-msg-usuario');
            msg.append(crear('div', G.globoVisitante, texto)); // textContent: nunca se interpreta como HTML
            mensajes.append(msg);
            ajustarScroll(msg);
        }
        const estaEnConstruccion = id => Boolean(D.paginas[id] && D.paginas[id].enConstruccion);
        function avisarSiEnConstruccion(id) {
            return msg => {
                if (!estaEnConstruccion(id) || !msg.isConnected) return;
                msg.querySelector('.gv-globo').append(crear('p', G.nota, ui().avisoConstruccion(nombre(id))));
                ajustarScroll();
            };
        }

        // ---------- Abrir, minimizar, cerrar ----------
        function bloquearFondo(bloquear) {
            // En el celular el chat ocupa toda la pantalla: la página de atrás no se mueve
            document.documentElement.style.overflow = bloquear && esMovil() && !ventana.hasAttribute('data-compacta') ? 'hidden' : '';
        }
        function abrir(sinFoco) {
            ocultarBurbuja();
            if (!ventana.hidden) return;
            ventana.hidden = false;
            requestAnimationFrame(() => ventana.setAttribute('data-abierta', ''));
            lanzador.setAttribute('aria-expanded', 'true');
            if (esMovil()) lanzador.setAttribute('data-oculto', '');
            bloquearFondo(true);
            mem.chatAbierto = true;
            guardar();
            if (!conversacionIniciada) saludar();
            else if (saludoPendiente) saludarSeccion();
            if (sinFoco) return;
            if (esMovil()) $('gv-minimizar').focus({ preventScroll: true });
            else campo.focus({ preventScroll: true });
        }
        function minimizar(devolverFoco) {
            if (ventana.hidden) return;
            callar();
            ventana.removeAttribute('data-abierta');
            ventana.hidden = true;
            lanzador.setAttribute('aria-expanded', 'false');
            lanzador.removeAttribute('data-oculto');
            bloquearFondo(false);
            mem.chatAbierto = false;
            guardar();
            if (devolverFoco !== false) lanzador.focus({ preventScroll: true });
        }
        function cerrar() {
            terminarGuia(true);
            if (mem.recorrido) { mem.recorrido = null; guardar(); }
            minimizar();
            mensajes.replaceChildren(); // cerrar = empezar de nuevo la próxima vez
            conversacionIniciada = false;
        }
        lanzador.addEventListener('click', () => (ventana.hidden ? abrir() : minimizar()));
        $('gv-minimizar').addEventListener('click', () => minimizar());
        $('gv-cerrar').addEventListener('click', cerrar);
        ventana.addEventListener('keydown', e => { if (e.key === 'Escape') { e.stopPropagation(); minimizar(); } });
        $('gv-form').addEventListener('submit', e => {
            e.preventDefault();
            const texto = campo.value.trim();
            if (!texto) return;
            campo.value = '';
            mensajeUsuario(texto);
            procesar(texto);
        });

        // ---------- Burbuja de bienvenida (una vez por sesión) ----------
        let temporizador = null;
        function mostrarBurbuja() {
            if (!ventana.hidden || mem.bienvenidaVista) return;
            mem.bienvenidaVista = true;
            guardar();
            burbuja.hidden = false;
            $('gv-mano').setAttribute('data-saludando', '');
            const yaToco = !navigator.userActivation || navigator.userActivation.hasBeenActive;
            if (vozEncendida && yaToco && vozDe('burbuja')) hablar(vozDe('burbuja'));
            temporizador = setTimeout(ocultarBurbuja, 15000);
        }
        function ocultarBurbuja() {
            clearTimeout(temporizador);
            if (!burbuja.hidden) callar();
            burbuja.hidden = true;
            $('gv-mano').removeAttribute('data-saludando');
        }
        $('gv-burbuja-texto').addEventListener('click', () => abrir());
        $('gv-burbuja-cerrar').addEventListener('click', () => { ocultarBurbuja(); lanzador.focus({ preventScroll: true }); });

        // ---------- Saludos ----------
        function saludar() {
            conversacionIniciada = true;
            saludoPendiente = false;
            if (!mem.presentado) { decir(tr(D.textos.presentacion), null, { voz: 'presentacion' }); mem.presentado = true; guardar(); }
            if (mem.recorrido) {
                if (D.recorridoSitio[mem.recorrido.paso] === vistaActual) { mostrarPasoRecorrido(); return; }
                decir(ui().recorridoEnPausa(mem.recorrido.paso + 1, D.recorridoSitio.length), [
                    { texto: ui().seguirRecorrido, accion: 'seguir-recorrido' }, { texto: ui().terminarRecorrido, accion: 'terminar-recorrido' }
                ]);
                return;
            }
            saludarSeccion();
            decir(tr(D.textos.enQueAyudo), D.accesosRapidos);
        }
        function saludarSeccion() {
            saludoPendiente = false;
            const rec = recomendacion();
            decir(`${tr(info().saludo)}<span class="${G.sugerencia}">💡 ${rec.texto}</span>`, (info().opciones || []).concat([{ texto: '➡️ ' + nombreDe(rec.id), ir: rec.id }]));
        }
        // Recomienda la sección siguiente, evitando las ya visitadas
        function recomendacion() {
            const i = info();
            if (i.recomendada && !mem.visitadas.includes(i.recomendada)) return { id: i.recomendada, texto: tr(i.recomendacion) };
            const pendiente = D.recorridoSitio.find(p => p !== vistaActual && !mem.visitadas.includes(p));
            if (pendiente) return { id: pendiente, texto: ui().noVisitaste(nombre(pendiente)) };
            return { id: i.recomendada || 'inicio', texto: tr(i.recomendacion) || ui().yaRecorriste };
        }

        // Cuando cambia la sección (por el menú o por el guía), Lorenzo se entera
        document.addEventListener('cambio-de-vista', () => {
            callar();
            navegaciones++;
            registrarVisita();
            if (!conversacionIniciada) {
                // Una página por sección: si venía de otra página con el chat abierto o en un recorrido, sigue
                if (!UNA_SOLA_PAGINA && (mem.recorrido || (mem.chatAbierto && !esMovil()))) abrir(true);
                return;
            }
            if (mem.recorrido && D.recorridoSitio[mem.recorrido.paso] === vistaActual) {
                if (ventana.hidden) abrir();
                mostrarPasoRecorrido();
                return;
            }
            if (guia) return; // en el recorrido por el menú no saludamos cada sección
            if (ventana.hidden) saludoPendiente = true;
            else saludarSeccion();
        });

        // Cuando cambia el idioma del sitio, Lorenzo cambia sus textos y lo avisa
        document.addEventListener('cambio-de-idioma', () => {
            callar();
            ponerTextos();
            if (conversacionIniciada) decir(ui().cambioIdioma, [{ accion: 'inicio' }]);
        });

        // ---------- Acciones de los botones ----------
        function ejecutar(accion) {
            if (!accion) return;
            if (accion.startsWith('faq:')) return responderPregunta(accion.slice(4));
            if (accion.startsWith('cat:')) return mostrarCategoria(accion.slice(4));
            if (accion.startsWith('idioma:')) return cambiarIdioma(accion.slice(7));
            const acciones = {
                inicio: () => decir(tr(D.textos.enQueAyudo), D.accesosRapidos),
                explicar: explicarPagina, guia: iniciarGuia, recorrido: iniciarRecorrido, elegir: modoElegir,
                preguntas: mostrarCategorias, menu: explicarMenu, volver: volver,
                'guia-atras': () => moverGuia(-1), 'guia-siguiente': () => moverGuia(1), 'guia-terminar': () => terminarGuia(),
                'seguir-recorrido': () => irAPasoRecorrido(mem.recorrido ? mem.recorrido.paso : 0),
                'terminar-recorrido': terminarRecorrido,
                'recorrido-atras': () => irAPasoRecorrido(mem.recorrido ? mem.recorrido.paso - 1 : 0),
                'recorrido-siguiente': () => irAPasoRecorrido(mem.recorrido ? mem.recorrido.paso + 1 : 0),
                'recorrido-fin': finalizarRecorrido
            };
            if (acciones[accion]) acciones[accion]();
        }
        function responderPregunta(id) {
            const p = D.preguntas.find(x => x.id === id);
            if (!p) return decir(tr(D.textos.noEncontrado), null, { voz: 'no-encontrado' });
            const destino = (p.botones || []).find(b => b.ir);
            return decir(tr(p.respuesta), p.botones, { voz: 'faq-' + p.id, alMostrar: destino ? avisarSiEnConstruccion(destino.ir) : null });
        }
        function mostrarCategorias() {
            decir(ui().elegiTema, Object.keys(D.categorias).map(c => ({ texto: D.categorias[c], accion: 'cat:' + c })));
        }
        function mostrarCategoria(categoria) {
            decir(ui().preguntasSobre(tr(D.categorias[categoria]).toLowerCase()), D.preguntas.filter(p => p.categoria === categoria).map(p => ({ texto: p.pregunta, accion: 'faq:' + p.id })));
        }

        // ---------- Entender lo que escribe el visitante (en español, inglés o italiano) ----------
        const intencion = nombreIntencion => todas(D.intenciones[nombreIntencion]);
        function procesar(texto) {
            mem.ultimaPregunta = texto.slice(0, 200);
            guardar();
            const n = normalizar(texto);
            if (!n) return decir(tr(D.textos.noEncontrado), null, { voz: 'no-encontrado' });
            // 1. Comandos: una palabra (o «ir a …», «go to …», «vai a …») lleva directo a la sección
            const destino = n.replace(PREFIJOS_IR, '').replace(ARTICULOS, '');
            if (COMANDOS[n] || (PREFIJOS_IR.test(n) && COMANDOS[destino])) return irA(COMANDOS[n] || COMANDOS[destino]);
            if (intencion('volver').includes(n)) return volver();
            // 2. Pedidos de idioma («in English», «en español», «in italiano»): solo si es lo único que escribió
            const idiomaPedido = ['es', 'en', 'it'].find(i => intencion('idioma_' + i).includes(n));
            if (idiomaPedido) {
                if (idiomaPedido === idioma) return decir(ui().cambioIdioma, [{ accion: 'inicio' }]);
                return cambiarIdioma(idiomaPedido); // Lorenzo lo avisa al cambiar
            }
            // 3. Sección actual, recorridos e interfaz
            if (contieneAlguna(n, intencion('explicar'))) return explicarPagina();
            if (contieneAlguna(n, intencion('recorrido'))) return iniciarRecorrido();
            if (contieneAlguna(n, intencion('guia'))) return iniciarGuia();
            if (contieneAlguna(n, intencion('elegir'))) return modoElegir();
            if (contieneAlguna(n, intencion('menu'))) return explicarMenu();
            if (intencion('ayuda_sola').includes(n) || contieneAlguna(n, intencion('ayuda'))) return decir(tr(D.textos.enQueAyudo), D.accesosRapidos);
            // 4. Temas que no se presentan como datos confirmados
            const restringido = D.restringidos.find(r => contieneAlguna(n, todas(r.claves)));
            if (restringido) {
                // La frase grabada es la general: suena solo cuando el mensaje es exactamente esa frase
                return decir(tr(restringido.respuesta || D.textos.restringido) + (restringido.extra ? '<br>' + tr(restringido.extra) : ''),
                    restringido.botones || [{ accion: 'inicio' }], { voz: restringido.respuesta || restringido.extra ? null : 'restringido' });
            }
            // 5. Preguntas frecuentes: gana la frase más larga que coincida
            let mejor = null, mejorPuntaje = 0;
            D.preguntas.forEach(p => {
                let largo = 0, cantidad = 0;
                todas(p.claves).forEach(c => { if (contiene(n, c)) { cantidad++; largo = Math.max(largo, c.split(' ').length); } });
                const puntaje = largo * 10 + cantidad;
                if (puntaje > mejorPuntaje) { mejor = p; mejorPuntaje = puntaje; }
            });
            if (mejor) return responderPregunta(mejor.id);
            // 6. Nombra una sección
            const palabra = Object.keys(COMANDOS).find(c => contiene(n, c));
            if (palabra) {
                const id = COMANDOS[palabra];
                return decir(ui().enLaSeccion(nombre(id)), [{ ir: id }]);
            }
            // 7. No lo sabe: lo dice, sin inventar
            return decir(tr(D.textos.noEncontrado), ['historia', 'sociedad', 'teatro', 'cultura', 'eventos', 'contacto'].map(id => ({ texto: nombreDe(id), ir: id })), { voz: 'no-encontrado' });
        }
        function irA(id) {
            if (id === vistaActual) return decir(ui().yaEstas(nombre(id))).then(explicarPagina);
            return decir(ui().teLlevo(nombreDe(id))).then(() => irASeccion(id));
        }
        function puedeVolver() {
            if (UNA_SOLA_PAGINA) return navegaciones > 1;
            try { return Boolean(document.referrer) && new URL(document.referrer).origin === location.origin; } catch (e) { return false; }
        }
        function volver() {
            if (puedeVolver()) return decir(ui().anterior).then(() => window.history.back());
            return decir(ui().sinAnterior, [{ ir: 'inicio' }]);
        }

        // ---------- «Explicame esta página»: mira la sección de verdad ----------
        function analizar(id) {
            const vista = document.querySelector(`[data-vista="${id}"]`);
            if (!vista) return { subtitulos: [], imagenes: 0, tarjetas: [] };
            return {
                subtitulos: [...new Set([...vista.querySelectorAll('h2, h3')].filter(h => !h.closest('.tutor-lesson, .leaflet-container, a, .grilla-temas')).map(h => h.textContent.trim()).filter(Boolean))],
                imagenes: [...vista.querySelectorAll('img')].filter(img => !img.closest('.leaflet-container, #tutor')).length,
                tarjetas: [...vista.querySelectorAll('a h3, .grilla-temas h3')].map(h => h.textContent.trim())
            };
        }
        function textoPagina() {
            const i = info();
            const a = analizar(vistaActual);
            let html = `<b>${ui().estasEn(i.emoji + ' ' + tr(i.nombre))}</b><br>${tr(i.explicacion)}`;
            if (i.enConstruccion) html += `<br><i>${tr(D.textos.enConstruccion)}</i>`;
            if (a.subtitulos.length) html += `<br><b>${ui().partes}</b> ${a.subtitulos.slice(0, 6).join(' · ')}.`;
            if (a.tarjetas.length) html += `<br><b>${ui().temas}</b> ${a.tarjetas.join(' · ')}.`;
            if (a.imagenes) html += `<br><b>${ui().imagenes}</b> ${ui().cantidadImagenes(a.imagenes)}.`;
            const acciones = tr(i.acciones);
            if (acciones && acciones.length) html += `<br><b>${ui().quePodes}</b> ${acciones.map(x => x.charAt(0).toUpperCase() + x.slice(1)).join('; ')}.`;
            return html;
        }
        function explicarPagina() {
            const rec = recomendacion();
            return decir(`${textoPagina()}<span class="${G.sugerencia}">💡 ${rec.texto}</span>`, [
                { texto: '➡️ ' + nombreDe(rec.id), ir: rec.id }, { texto: ui().guiarme, accion: 'guia' }, { texto: ui().opciones, accion: 'inicio' }
            ]);
        }

        // ---------- Resaltar el menú ----------
        let resaltados = [];
        let desplegableAbierto = null;
        let menuAbiertoPorGuia = false;
        function resaltar(el, ms) {
            el.classList.add(...G.resaltado);
            resaltados.push(el);
            if (ms) setTimeout(() => el.classList.remove(...G.resaltado), ms);
        }
        function explicarMenu() {
            resaltar(menuEsMovil() ? hamburguesa : menu, 4000);
            const extra = menuEsMovil() ? '<br>' + ui().menuCelular : '';
            return decir(tr(D.textos.menu) + extra, [{ texto: ui().guiarme, accion: 'guia' }]);
        }
        function resaltarEnMenu(id) {
            quitarResaltado();
            const enlace = menu.querySelector(`a[href="${urlDe(id)}"]`);
            if (!enlace) return;
            // Esperamos un instante: el sitio cierra los desplegables cuando se hace clic fuera del menú
            setTimeout(() => {
                if (menuEsMovil() && !menu.hasAttribute('data-abierto')) { abrirMenuMovil(true); menuAbiertoPorGuia = true; }
                const item = enlace.closest('[data-desplegable]');
                if (item && enlace.closest('.menu-desplegable')) {
                    item.setAttribute('data-abierto', '');
                    item.querySelector('.flechita').setAttribute('aria-expanded', 'true');
                    desplegableAbierto = item;
                }
                resaltar(enlace);
                if (menuEsMovil()) menu.scrollTop = Math.max(0, enlace.offsetTop - 40);
            }, 60);
        }
        function quitarResaltado() {
            resaltados.forEach(el => el.classList.remove(...G.resaltado));
            resaltados = [];
            if (desplegableAbierto) {
                desplegableAbierto.removeAttribute('data-abierto');
                desplegableAbierto.querySelector('.flechita').setAttribute('aria-expanded', 'false');
                desplegableAbierto = null;
            }
        }

        // ---------- 🧭 Recorrido por el menú ----------
        function iniciarGuia() {
            guia = { paso: 0 };
            ventana.setAttribute('data-compacta', ''); // el chat se achica para dejar ver el menú
            bloquearFondo(true);
            decir(ui().guiaInicio);
            mostrarPasoGuia();
        }
        function mostrarPasoGuia() {
            const total = D.recorridoMenu.length;
            const paso = D.recorridoMenu[guia.paso];
            const pagina = D.paginas[paso.pagina];
            quitarControlesViejos();
            resaltarEnMenu(paso.pagina);
            const ultimo = guia.paso === total - 1;
            decir(`<span class="${G.paso}">${ui().paso(guia.paso + 1, total)}</span><b>${pagina.emoji} ${tr(pagina.nombre)}</b><br>${tr(paso.texto)}`, [
                { texto: ui().atras, accion: 'guia-atras', silencioso: true, deshabilitado: guia.paso === 0 },
                { texto: ultimo ? ui().terminar : ui().siguiente, accion: ultimo ? 'guia-terminar' : 'guia-siguiente', silencioso: true },
                { texto: ui().terminarGuia, accion: 'guia-terminar', silencioso: true },
                { ir: paso.pagina }
            ], { paso: true, voz: 'menu-' + (guia.paso + 1), alMostrar: avisarSiEnConstruccion(paso.pagina) });
        }
        function moverGuia(delta) {
            if (!guia) return;
            guia.paso = Math.min(Math.max(guia.paso + delta, 0), D.recorridoMenu.length - 1);
            mostrarPasoGuia();
        }
        function terminarGuia(sinMensaje) {
            if (!guia) return;
            guia = null;
            quitarControlesViejos();
            quitarResaltado();
            if (menuAbiertoPorGuia) { abrirMenuMovil(false); menuAbiertoPorGuia = false; }
            ventana.removeAttribute('data-compacta');
            bloquearFondo(!ventana.hidden);
            if (!sinMensaje) decir(ui().guiaFin, D.accesosRapidos);
        }
        // Los botones Atrás/Siguiente de pasos anteriores se quitan para no confundir
        function quitarControlesViejos() { mensajes.querySelectorAll('.gv-msg-paso .gv-chips').forEach(f => f.remove()); }

        // ---------- 🎓 Recorrido por todo el sitio, sección por sección ----------
        function iniciarRecorrido() {
            terminarGuia(true);
            decir(ui().recorridoInicio);
            irAPasoRecorrido(0);
        }
        function irAPasoRecorrido(paso) {
            if (paso < 0) paso = 0;
            if (paso >= D.recorridoSitio.length) return finalizarRecorrido();
            mem.recorrido = { paso };
            guardar();
            const id = D.recorridoSitio[paso];
            if (id === vistaActual) return mostrarPasoRecorrido();
            return decir(ui().vamosA(nombreDe(id))).then(() => irASeccion(id)); // al cambiar de sección se muestra el paso
        }
        function mostrarPasoRecorrido() {
            const total = D.recorridoSitio.length;
            const paso = mem.recorrido.paso;
            const ultimo = paso === total - 1;
            quitarControlesViejos();
            if (menuEsMovil()) resaltar(hamburguesa, 4000);
            else { resaltarEnMenu(info().enlace || vistaActual); setTimeout(quitarResaltado, 4000); }
            decir(`<span class="${G.paso}">${ui().pasoRecorrido(paso + 1, total)}</span>${textoPagina()}`, [
                { texto: ui().atras, accion: 'recorrido-atras', silencioso: true, deshabilitado: paso === 0 },
                { texto: ultimo ? ui().terminar : ui().siguiente, accion: ultimo ? 'recorrido-fin' : 'recorrido-siguiente', silencioso: true },
                { texto: ui().salirRecorrido, accion: 'terminar-recorrido', silencioso: true }
            ], { paso: true });
        }
        function finalizarRecorrido() {
            mem.recorrido = null;
            mem.recorridoCompleto = true;
            guardar();
            quitarControlesViejos();
            quitarResaltado();
            decir(ui().recorridoFin, [{ accion: 'faq:colaborar' }, { accion: 'inicio' }]);
        }
        function terminarRecorrido() {
            mem.recorrido = null;
            guardar();
            quitarControlesViejos();
            quitarResaltado();
            decir(ui().recorridoSalida, D.accesosRapidos);
        }

        // ---------- «¿Qué es este botón?» ----------
        const avisoElegir = $('gv-elegir');
        let apuntado = null;
        const OBJETIVOS = 'a, button, img, input, h1, h2, h3, .leaflet-container';
        function modoElegir() {
            decir(ui().elegirInicio).then(() => setTimeout(() => {
                minimizar(false);
                avisoElegir.hidden = false;
                document.addEventListener('click', alElegir, true);
                document.addEventListener('mouseover', alPasar, true);
                document.addEventListener('keydown', alTecla, true);
            }, 500));
        }
        function salirDeElegir() {
            avisoElegir.hidden = true;
            document.removeEventListener('click', alElegir, true);
            document.removeEventListener('mouseover', alPasar, true);
            document.removeEventListener('keydown', alTecla, true);
            if (apuntado) apuntado.classList.remove(...G.apuntado);
            apuntado = null;
        }
        function alPasar(e) {
            const el = e.target.closest(OBJETIVOS);
            if (apuntado) apuntado.classList.remove(...G.apuntado);
            apuntado = el && !el.closest('#gv') ? el : null;
            if (apuntado) apuntado.classList.add(...G.apuntado);
        }
        function alTecla(e) { if (e.key === 'Escape') { salirDeElegir(); abrir(); decir(ui().elegirCancelado); } }
        function alElegir(e) {
            if (e.target.closest('#gv')) {
                if (e.target.closest('#gv-elegir-cancelar')) { e.preventDefault(); salirDeElegir(); abrir(); decir(ui().elegirCancelado); }
                else salirDeElegir();
                return;
            }
            // Frenamos el clic: no navega ni abre nada, solo lo explicamos
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            const respuesta = explicarElemento(e.target);
            salirDeElegir();
            abrir();
            decir(respuesta.html, respuesta.botones);
        }
        function explicarElemento(el) {
            const objetivo = el.closest(OBJETIVOS) || el;
            const enlace = objetivo.closest('a');
            const boton = objetivo.closest('button');
            const otra = [{ texto: ui().otroBoton, accion: 'elegir' }, { texto: ui().explicarPagina, accion: 'explicar' }];
            const r = html => ({ html, botones: otra });
            if (objetivo.closest('#hamburguesa')) return r(ui().eHamburguesa);
            if (objetivo.closest('#idiomas')) return r(ui().eIdiomas);
            if (boton && boton.classList.contains('flechita')) {
                const item = boton.closest('[data-desplegable]');
                const subs = [...item.querySelectorAll('.menu-desplegable a')].map(a => a.textContent.trim());
                return r(ui().eFlechita(item.querySelector('.menu-enlace').textContent.trim(), subs.join(', ')));
            }
            if (objetivo.closest('#ubicacion-boton')) return r(ui().eGoogle);
            if (objetivo.closest('#ruta-boton')) return r(ui().eRuta);
            if (objetivo.closest('.ruta-modo')) return r(ui().eModo);
            if (objetivo.closest('.leaflet-container')) return r(ui().eMapa);
            if (objetivo.closest('[data-idioma]')) return r(ui().eTutorIdioma);
            if (objetivo.closest('.tutor-level')) return r(ui().eNivel(objetivo.textContent.trim()));
            if (objetivo.closest('.tutor-card')) return r(ui().eLeccion(objetivo.closest('.tutor-card').querySelector('.tutor-card-title').textContent));
            if (objetivo.closest('.tutor-audio')) return r(ui().eAudio);
            if (objetivo.closest('#tutor')) return r(ui().eTutor);
            if (enlace) {
                const href = enlace.getAttribute('href') || '';
                const id = Object.keys(D.paginas).find(p => urlDe(p) === href);
                if (id) {
                    if (objetivo.closest('#barra') && !objetivo.closest('#menu')) return r(ui().eLogo);
                    const tipo = enlace.closest('#menu') ? ui().eEnlaceMenu : ui().eBoton;
                    return { html: `${tipo} ${ui().teLleva} <b>${nombreDe(id)}</b>. ${tr(D.paginas[id].explicacion)}`, botones: [{ ir: id }].concat(otra) };
                }
                if (/^https?:/i.test(href)) {
                    let sitio = href;
                    try { sitio = new URL(href).hostname; } catch (err) { /* dejamos el enlace completo */ }
                    return r(ui().eExterno(sitio));
                }
                return r(ui().eEnlace(enlace.textContent.trim() || href));
            }
            if (objetivo.tagName === 'IMG') {
                // Las fotos tienen una descripción (alt) y a veces un epígrafe: Lorenzo los usa
                const figura = objetivo.closest('figure');
                const pie = figura && figura.querySelector('figcaption');
                const descripcion = (objetivo.getAttribute('alt') || '').trim() || (pie ? pie.textContent.trim().replace(/\.$/, '') : '');
                return r(descripcion ? ui().eImagen(descripcion.charAt(0).toLowerCase() + descripcion.slice(1)) : ui().eImagenSola);
            }
            if (/^H[1-3]$/.test(objetivo.tagName)) return r(ui().eTitulo(objetivo.textContent.trim()));
            if (boton) return r(ui().eBotonGen((boton.textContent.trim() || boton.getAttribute('aria-label') || '').trim()));
            if (objetivo.closest('footer')) return r(ui().ePie);
            return r(ui().eOtro);
        }

        // ---------- Celular: el teclado no rompe el chat ----------
        if (window.visualViewport) {
            const ajustarAlto = () => {
                ventana.style.setProperty('--gv-alto', window.visualViewport.height + 'px');
                ventana.style.setProperty('--gv-arriba', window.visualViewport.offsetTop + 'px');
            };
            window.visualViewport.addEventListener('resize', ajustarAlto);
            window.visualViewport.addEventListener('scroll', ajustarAlto);
            ajustarAlto();
        }
        // Si escribe en un formulario de la página (por ejemplo, el tutor), el botón flotante se esconde en el celular
        document.addEventListener('focusin', e => {
            if (esMovil() && e.target.matches('input, textarea, select') && !e.target.closest('#gv')) lanzador.setAttribute('data-oculto', '');
        });
        document.addEventListener('focusout', e => {
            if (!e.target.closest('#gv') && ventana.hidden) lanzador.removeAttribute('data-oculto');
        });

        // ---------- Arranque ----------
        if (!mem.bienvenidaVista) setTimeout(mostrarBurbuja, 4000);
    }
})();
