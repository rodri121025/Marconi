// ===== Guía Virtual (Lorenzo): TODO LO QUE SABE Y LO QUE ENTIENDE =====
// Para corregir una respuesta o sumar una página, editá solo este archivo.
//
// Cada texto está en los tres idiomas del sitio: { es: "...", en: "...", it: "..." }.
// Lorenzo responde en el idioma que eligió el visitante (botones ES · EN · IT).
// Las palabras clave (claves) también van por idioma, pero Lorenzo las entiende TODAS:
// si el sitio está en español y alguien escribe en inglés, igual entiende la pregunta.
// Las claves se escriben en minúscula, sin tildes ni signos (por ejemplo "cos e" para «cos'è»).
//
// Fuentes que se usaron, en este orden:
//   1. Lo que dice cada página del sitio.
//   2. El brief de relevamiento (Word) de la comisión.
//   3. Nada más: si un dato no está en esas fuentes, el guía dice que no lo encuentra.
//
// Botones de las respuestas:
//   { ir: "historia" }                     → enlace a esa sección (el texto se arma solo: «📜 Ir a Historia»)
//   { accion: "faq:id" }                  → responde otra pregunta (el texto es el «boton» o la «pregunta» de esa respuesta)
//   { accion: "explicar" | "guia" | "recorrido" | "elegir" | "preguntas" | "inicio" } → ver «botones» más abajo
//   { texto: { es, en, it }, ir | accion } → si querés otro texto para el botón

const GUIA_VIRTUAL = {
    nombre: "Lorenzo",
    rol: { es: "Guía Virtual", en: "Virtual Guide", it: "Guida Virtuale" },
    avatar: ROBOT_CARA,

    textos: {
        presentacion: {
            es: "¡Hola! Soy <b>Lorenzo</b>, el Guía Virtual de la Sociedad Italiana y el Teatro Marconi. Puedo ayudarte a recorrer el sitio, explicarte nuestra historia o llevarte directamente a la sección que estás buscando. Entiendo español, inglés e italiano.",
            en: "Hi! I’m <b>Lorenzo</b>, the Virtual Guide of the Italian Society and Teatro Marconi. I can help you explore the site, tell you about our history or take you straight to the section you’re looking for. I understand Spanish, English and Italian.",
            it: "Ciao! Sono <b>Lorenzo</b>, la Guida Virtuale della Società Italiana e del Teatro Marconi. Posso aiutarti a esplorare il sito, raccontarti la nostra storia o portarti direttamente alla sezione che cerchi. Capisco lo spagnolo, l’inglese e l’italiano."
        },
        enQueAyudo: { es: "¿En qué puedo ayudarte?", en: "How can I help you?", it: "Come posso aiutarti?" },
        burbuja: { es: "¡Hola! ¿Querés que te ayude a recorrer el sitio?", en: "Hi! Would you like me to help you explore the site?", it: "Ciao! Vuoi che ti aiuti a esplorare il sito?" },
        noEncontrado: {
            es: "No encuentro ese dato en la información disponible del sitio. Puedo ayudarte con Historia, Sociedad, Teatro, Cultura, Eventos o Contacto.",
            en: "I can’t find that in the information available on the site. I can help you with History, Society, Theater, Culture, Events or Contact.",
            it: "Non trovo questa informazione tra quelle disponibili sul sito. Posso aiutarti con Storia, Società, Teatro, Cultura, Eventi o Contatti."
        },
        restringido: {
            es: "Esa información aparece como pendiente de confirmación en la documentación disponible, por lo que prefiero no presentarla como un dato definitivo.",
            en: "That information is still pending confirmation in the available documents, so I’d rather not present it as a final fact.",
            it: "Questa informazione risulta ancora da confermare nei documenti disponibili, quindi preferisco non presentarla come un dato definitivo."
        },
        enConstruccion: {
            es: "Por ahora esta sección está en construcción, así que todavía tiene poco contenido.",
            en: "This section is under construction for now, so it doesn’t have much content yet.",
            it: "Per ora questa sezione è in costruzione, quindi ha ancora pochi contenuti."
        },
        menu: {
            es: "Desde este menú podés acceder a las principales áreas del sitio: <b>Inicio</b>, <b>Sociedad</b> (con Historia, Eventos y noticias, y Futuro), <b>Teatro</b> (con Funciones y su calendario), <b>Microcine</b> (con Funciones y su calendario), <b>Cultura italiana</b> (con Noticias, Culinaria e Idioma italiano) y <b>Contacto</b>. Las flechitas abren las opciones de cada parte, y con <b>ES · EN · IT</b> cambiás el idioma.",
            en: "From this menu you can reach the main areas of the site: <b>Home</b>, <b>Society</b> (with History, Events and news, and Future), <b>Theater</b> (with Shows and its calendar), <b>Micro-cinema</b> (with Screenings and its calendar), <b>Italian culture</b> (with News, Cuisine and Italian language) and <b>Contact</b>. The little arrows open each part’s options, and <b>ES · EN · IT</b> changes the language.",
            it: "Da questo menu puoi raggiungere le aree principali del sito: <b>Home</b>, <b>Società</b> (con Storia, Eventi e notizie e Futuro), <b>Teatro</b> (con Spettacoli e il suo calendario), <b>Microcinema</b> (con Proiezioni e il suo calendario), <b>Cultura italiana</b> (con Notizie, Cucina e Lingua italiana) e <b>Contatti</b>. Le freccette aprono le opzioni di ogni parte e con <b>ES · EN · IT</b> cambi la lingua."
        }
    },

    // ---------- Botones de acciones (el texto de cada uno) ----------
    botones: {
        guia: { es: "🧭 Guiarme por la página", en: "🧭 Guide me through the site", it: "🧭 Guidami nel sito" },
        explicar: { es: "💡 Explicame esta página", en: "💡 Explain this page", it: "💡 Spiegami questa pagina" },
        recorrido: { es: "🎓 Quiero conocer el sitio", en: "🎓 Show me the whole site", it: "🎓 Voglio conoscere il sito" },
        preguntas: { es: "❓ Preguntas frecuentes", en: "❓ Frequently asked questions", it: "❓ Domande frequenti" },
        inicio: { es: "☰ Ver opciones", en: "☰ See options", it: "☰ Vedi opzioni" },
        elegir: { es: "🔎 Explicame un botón", en: "🔎 Explain a button", it: "🔎 Spiegami un pulsante" }
    },

    // ---------- Secciones del sitio (cada una es un <section data-vista="..."> del HTML) ----------
    // enlace: qué opción del menú se resalta cuando se habla de esta página
    // enConstruccion: true mientras la página no tenga contenido (sacalo cuando lo tenga)
    paginas: {
        "inicio": {
            emoji: "🏠", enlace: "inicio", recomendada: "sociedad",
            nombre: { es: "Inicio", en: "Home", it: "Home" },
            explicacion: {
                es: "Es la página principal. Presenta juntas a la Sociedad Italiana de Gálvez y a su teatro, que está volviendo; también muestra el Microcine y cómo era la sala antes de la remodelación.",
                en: "It’s the main page. It introduces the Italian Society of Gálvez together with its theater, which is coming back; it also shows the Micro-cinema and what the hall looked like before the renovation.",
                it: "È la pagina principale. Presenta insieme la Società Italiana di Gálvez e il suo teatro, che sta tornando; mostra anche il Microcinema e com’era la sala prima della ristrutturazione."
            },
            acciones: {
                es: ["usar los botones de la portada para ir al Teatro o al Microcine", "ver cómo era el teatro antes de su remodelación", "entrar a cualquier sección desde el menú de arriba", "cambiar el idioma con los botones ES · EN · IT"],
                en: ["use the buttons on the cover to go to the Theater or the Micro-cinema", "see what the theater looked like before its renovation", "open any section from the menu at the top", "change the language with the ES · EN · IT buttons"],
                it: ["usare i pulsanti della copertina per andare al Teatro o al Microcinema", "vedere com’era il teatro prima della ristrutturazione", "aprire qualsiasi sezione dal menu in alto", "cambiare lingua con i pulsanti ES · EN · IT"]
            },
            saludo: {
                es: "Estás en el Inicio. Desde acá podés conocer rápidamente la Sociedad Italiana y el Teatro.",
                en: "You’re on the Home page. From here you can quickly get to know the Italian Society and the Theater.",
                it: "Sei nella Home. Da qui puoi conoscere rapidamente la Società Italiana e il Teatro."
            },
            recomendacion: {
                es: "Si querés saber quién está detrás del proyecto, visitá Sociedad.",
                en: "If you want to know who is behind the project, visit Society.",
                it: "Se vuoi sapere chi c’è dietro il progetto, visita Società."
            }
        },
        "sociedad": {
            emoji: "🏛️", enlace: "sociedad", recomendada: "contacto",
            nombre: { es: "Sociedad", en: "Society", it: "Società" },
            explicacion: {
                es: "Es la sección institucional. Cuenta la situación actual del teatro: está en obra (techo, paredes y baños), todavía no hay funciones publicadas, hay una comisión nueva, más de ciento cincuenta socios y colaboradores voluntarios, y el objetivo es abrirlo como espacio cultural de toda la ciudad. Desde la flechita de «Sociedad» en el menú se llega a Historia, Eventos y noticias, y Futuro.",
                en: "It’s the institutional section. It describes the theater’s current situation: it is under renovation (roof, walls and bathrooms), there are no shows published yet, there is a new committee, more than one hundred and fifty members and volunteer collaborators, and the goal is to open it as a cultural space for the whole town. The little arrow next to “Society” in the menu leads to History, Events and news, and Future.",
                it: "È la sezione istituzionale. Racconta la situazione attuale del teatro: è in ristrutturazione (tetto, pareti e bagni), non ci sono ancora spettacoli pubblicati, c’è un nuovo consiglio direttivo, più di centocinquanta soci e collaboratori volontari, e l’obiettivo è aprirlo come spazio culturale di tutta la città. Dalla freccetta di «Società» nel menu si arriva a Storia, Eventi e notizie e Futuro."
            },
            acciones: {
                es: ["leer la situación actual del teatro", "abrir las opciones de «Sociedad» en el menú para ir a Historia, Eventos y noticias o Futuro"],
                en: ["read about the theater’s current situation", "open the “Society” options in the menu to go to History, Events and news or Future"],
                it: ["leggere la situazione attuale del teatro", "aprire le opzioni di «Società» nel menu per andare a Storia, Eventi e notizie o Futuro"]
            },
            saludo: {
                es: "Estás en Sociedad. Acá está la situación actual del teatro. También puedo contarte qué es la Sociedad Italiana, quiénes la forman hoy o cómo sumarte.",
                en: "You’re in Society. Here you’ll find the theater’s current situation. I can also tell you what the Italian Society is, who is part of it today or how to join.",
                it: "Sei in Società. Qui trovi la situazione attuale del teatro. Posso anche raccontarti che cos’è la Società Italiana, chi ne fa parte oggi o come unirti."
            },
            opciones: [{ accion: "faq:que-es-sociedad" }, { accion: "faq:quienes-forman" }, { accion: "faq:colaborar" }],
            recomendacion: {
                es: "Si querés conocer cómo colaborar o asociarte, visitá Contacto.",
                en: "If you want to find out how to help or become a member, visit Contact.",
                it: "Se vuoi sapere come collaborare o associarti, visita Contatti."
            }
        },
        "historia": {
            emoji: "📜", enlace: "historia", recomendada: "teatro",
            nombre: { es: "Historia", en: "History", it: "Storia" },
            explicacion: {
                es: "Reúne la historia de la institución por etapas: los primeros estatutos (1897), la fecha fundacional del 9 de enero de 1910, su origen como mutual de inmigrantes, la memoria del teatro, la creación del Microcine (2014-2015), cómo estaba el edificio cuando se compró en 2025, la remodelación en curso y los chicos de la Escuela de Comercio.",
                en: "It brings together the institution’s history in stages: the first statutes (1897), the founding date of January 9, 1910, its origins as an immigrants’ mutual aid society, memories of the theater, the creation of the Micro-cinema (2014-2015), what the building looked like when it was bought in 2025, the renovation in progress and the Escuela de Comercio students.",
                it: "Raccoglie la storia dell’istituzione per tappe: i primi statuti (1897), la data di fondazione del 9 gennaio 1910, le origini come mutua di immigrati, la memoria del teatro, la nascita del Microcinema (2014-2015), com’era l’edificio quando è stato acquistato nel 2025, la ristrutturazione in corso e i ragazzi della Escuela de Comercio."
            },
            acciones: {
                es: ["leer cada etapa de la historia", "ver las fotos del edificio, de la obra y de los chicos de la Escuela de Comercio"],
                en: ["read each stage of the history", "see the photos of the building, the works and the Escuela de Comercio students"],
                it: ["leggere ogni tappa della storia", "vedere le foto dell’edificio, dei lavori e dei ragazzi della Escuela de Comercio"]
            },
            saludo: {
                es: "Estás en la sección Historia. ¿Querés que te explique cómo está organizada o querés que te cuente los principales momentos?",
                en: "You’re in the History section. Shall I explain how it’s organized, or tell you about the main moments?",
                it: "Sei nella sezione Storia. Vuoi che ti spieghi com’è organizzata o che ti racconti i momenti principali?"
            },
            opciones: [
                { texto: { es: "💡 Cómo está organizada", en: "💡 How it’s organized", it: "💡 Com’è organizzata" }, accion: "explicar" },
                { accion: "faq:momentos" }
            ],
            recomendacion: { es: "Ahora podrías conocer el Teatro.", en: "Next, you could visit the Theater.", it: "Ora potresti scoprire il Teatro." }
        },
        "eventos": {
            emoji: "📅", enlace: "eventos", recomendada: "contacto",
            nombre: { es: "Eventos y noticias", en: "Events and news", it: "Eventi e notizie" },
            explicacion: {
                es: "Muestra entre 6 y 9 noticias y eventos importantes de Italia, tomados del Corriere della Sera. Se actualizan todos los días a las 11 y a las 23 (hora argentina) y cada una lleva al artículo original, en italiano.",
                en: "It shows 6 to 9 important news stories and events from Italy, taken from the Corriere della Sera. They are updated every day at 11 a.m. and 11 p.m. (Argentina time), and each one links to the original article, in Italian.",
                it: "Mostra da 6 a 9 notizie ed eventi importanti dall’Italia, presi dal Corriere della Sera. Si aggiornano ogni giorno alle 11 e alle 23 (ora argentina) e ognuno rimanda all’articolo originale, in italiano."
            },
            acciones: {
                es: ["leer las noticias de Italia del día", "abrir cada noticia completa en el Corriere della Sera"],
                en: ["read today’s news from Italy", "open each full story in the Corriere della Sera"],
                it: ["leggere le notizie dall’Italia del giorno", "aprire ogni notizia completa sul Corriere della Sera"]
            },
            saludo: {
                es: "Estás en Eventos y noticias. Acá tenés las noticias y los eventos más importantes de Italia, del Corriere della Sera.",
                en: "You’re in Events and news. Here are the most important news stories and events from Italy, from the Corriere della Sera.",
                it: "Sei in Eventi e notizie. Qui trovi le notizie e gli eventi più importanti dall’Italia, dal Corriere della Sera."
            },
            recomendacion: {
                es: "Si querés participar de lo que viene, visitá Contacto.",
                en: "If you want to take part in what’s coming, visit Contact.",
                it: "Se vuoi partecipare a ciò che verrà, visita Contatti."
            }
        },
        "futuro": {
            emoji: "🔭", enlace: "futuro", recomendada: "microcine",
            nombre: { es: "Futuro", en: "Future", it: "Futuro" },
            explicacion: {
                es: "Cuenta lo que viene: en el futuro se busca abrir el Microcine cuando los baños estén terminados e inaugurados.",
                en: "It tells what’s next: the plan for the future is to open the Micro-cinema once the bathrooms are finished and inaugurated.",
                it: "Racconta cosa verrà: in futuro si punta ad aprire il Microcinema quando i bagni saranno terminati e inaugurati."
            },
            acciones: {
                es: ["conocer el próximo objetivo de la Sociedad", "ir al Microcine con el botón"],
                en: ["learn about the Society’s next goal", "go to the Micro-cinema with the button"],
                it: ["conoscere il prossimo obiettivo della Società", "andare al Microcinema con il pulsante"]
            },
            saludo: {
                es: "Estás en Futuro. Acá se cuenta el próximo objetivo: abrir el Microcine cuando los baños estén terminados.",
                en: "You’re in Future. Here you’ll find the next goal: opening the Micro-cinema once the bathrooms are finished.",
                it: "Sei in Futuro. Qui trovi il prossimo obiettivo: aprire il Microcinema quando i bagni saranno terminati."
            },
            recomendacion: {
                es: "Podés conocer el Microcine en su sección.",
                en: "You can get to know the Micro-cinema in its section.",
                it: "Puoi conoscere il Microcinema nella sua sezione."
            }
        },
        "teatro": {
            emoji: "🎭", enlace: "teatro", recomendada: "sociedad",
            nombre: { es: "Teatro", en: "Theater", it: "Teatro" },
            explicacion: {
                es: "Presenta el Teatro Marconi: el único teatro de Gálvez pensado como teatro, su relación con la Sociedad, sus espacios (la sala, el piso de arriba, el Microcine y los baños), la memoria de la sala y la obra en curso, con fotos. Desde la flechita de «Teatro» en el menú se llega a Funciones.",
                en: "It presents Teatro Marconi: the only venue in Gálvez built as a theater, its link with the Society, its spaces (the hall, the upper floor, the Micro-cinema and the bathrooms), memories of the hall and the works in progress, with photos. The little arrow next to “Theater” in the menu leads to Shows.",
                it: "Presenta il Teatro Marconi: l’unico teatro di Gálvez pensato come teatro, il suo rapporto con la Società, i suoi spazi (la sala, il piano di sopra, il Microcinema e i bagni), la memoria della sala e i lavori in corso, con le foto. Dalla freccetta di «Teatro» nel menu si arriva a Spettacoli."
            },
            acciones: {
                es: ["conocer el teatro y ver sus fotos", "abrir las opciones de «Teatro» en el menú para ir a Funciones"],
                en: ["get to know the theater and see its photos", "open the “Theater” options in the menu to go to Shows"],
                it: ["conoscere il teatro e vedere le sue foto", "aprire le opzioni di «Teatro» nel menu per andare a Spettacoli"]
            },
            saludo: {
                es: "Estás en la sección Teatro. Puedo explicarte los espacios, la historia del teatro o ayudarte a encontrar las funciones.",
                en: "You’re in the Theater section. I can explain its spaces, tell you the theater’s history or help you find the shows.",
                it: "Sei nella sezione Teatro. Posso spiegarti gli spazi, raccontarti la storia del teatro o aiutarti a trovare gli spettacoli."
            },
            opciones: [{ accion: "faq:espacios" }, { accion: "faq:historia-teatro" }, { accion: "faq:funciones" }],
            recomendacion: {
                es: "Si querés conocer el contexto institucional, visitá Sociedad.",
                en: "If you want to know the institutional background, visit Society.",
                it: "Se vuoi conoscere il contesto istituzionale, visita Società."
            }
        },
        "funciones": {
            emoji: "🎟️", enlace: "funciones", recomendada: "funciones-microcine",
            nombre: { es: "Funciones del Teatro", en: "Theater shows", it: "Spettacoli del Teatro" },
            explicacion: {
                es: "Es la sección donde se van a publicar las funciones del Teatro. Por ahora dice «Próximamente»: tiene un calendario con una función de ejemplo, bloqueado hasta que haya funciones publicadas.",
                en: "It’s the section where the Theater’s shows will be published. For now it says “Coming soon”: it has a calendar with a sample show, locked until shows are published.",
                it: "È la sezione dove verranno pubblicati gli spettacoli del Teatro. Per ora dice «Prossimamente»: ha un calendario con uno spettacolo di esempio, bloccato finché non ci saranno spettacoli pubblicati."
            },
            acciones: {
                es: ["ver el calendario de funciones cuando se habilite"],
                en: ["see the show calendar once it opens"],
                it: ["vedere il calendario degli spettacoli quando sarà attivo"]
            },
            saludo: {
                es: "Estás en Funciones del Teatro. Por ahora es «Próximamente»: el calendario se habilita cuando haya funciones.",
                en: "You’re in Theater shows. It’s “Coming soon” for now: the calendar opens once there are shows.",
                it: "Sei in Spettacoli del Teatro. Per ora è «Prossimamente»: il calendario si attiva quando ci saranno spettacoli."
            },
            recomendacion: {
                es: "También podés mirar las Funciones del Microcine.",
                en: "You can also look at the Micro-cinema screenings.",
                it: "Puoi anche guardare le Proiezioni del Microcinema."
            }
        },
        "microcine": {
            emoji: "🎬", enlace: "microcine", recomendada: "funciones-microcine",
            nombre: { es: "Microcine", en: "Micro-cinema", it: "Microcinema" },
            explicacion: {
                es: "Presenta el Microcine: comenzó a construirse en 2014 y se inauguró en 2015, en la primera puerta a la derecha antes de la entrada principal del teatro. Cuando se compró el edificio, en 2025, estaba sin proyector ni pantalla. Desde la flechita de «Microcine» en el menú se llega a sus funciones.",
                en: "It presents the Micro-cinema: building work began in 2014 and it opened in 2015, behind the first door on the right before the theater’s main entrance. When the building was bought in 2025, it had neither projector nor screen. The little arrow next to “Micro-cinema” in the menu leads to its screenings.",
                it: "Presenta il Microcinema: la costruzione iniziò nel 2014 e fu inaugurato nel 2015, dietro la prima porta a destra prima dell’ingresso principale del teatro. Quando l’edificio è stato acquistato, nel 2025, era senza proiettore né schermo. Dalla freccetta di «Microcinema» nel menu si arriva alle sue proiezioni."
            },
            acciones: {
                es: ["leer la historia del Microcine y ver la foto de la sala", "abrir las opciones de «Microcine» en el menú para ir a sus funciones"],
                en: ["read the Micro-cinema’s story and see the photo of the room", "open the “Micro-cinema” options in the menu to go to its screenings"],
                it: ["leggere la storia del Microcinema e vedere la foto della sala", "aprire le opzioni di «Microcinema» nel menu per andare alle proiezioni"]
            },
            saludo: {
                es: "Estás en Microcine. Puedo contarte qué es este espacio o llevarte a sus funciones.",
                en: "You’re in Micro-cinema. I can tell you about this space or take you to its screenings.",
                it: "Sei in Microcinema. Posso raccontarti cos’è questo spazio o portarti alle sue proiezioni."
            },
            opciones: [{ accion: "faq:microcine" }, { ir: "funciones-microcine" }],
            recomendacion: {
                es: "Podés seguir por las Funciones del Microcine.",
                en: "You can continue with the Micro-cinema screenings.",
                it: "Puoi continuare con le Proiezioni del Microcinema."
            }
        },
        "funciones-microcine": {
            emoji: "🎟️", enlace: "funciones-microcine", recomendada: "teatro",
            nombre: { es: "Funciones del Microcine", en: "Micro-cinema screenings", it: "Proiezioni del Microcinema" },
            explicacion: {
                es: "Es la sección donde se van a publicar las funciones del Microcine. Por ahora dice «Próximamente»: tiene un calendario con una función de ejemplo, bloqueado hasta que haya funciones publicadas.",
                en: "It’s the section where the Micro-cinema’s screenings will be published. For now it says “Coming soon”: it has a calendar with a sample screening, locked until screenings are published.",
                it: "È la sezione dove verranno pubblicate le proiezioni del Microcinema. Per ora dice «Prossimamente»: ha un calendario con una proiezione di esempio, bloccato finché non ci saranno proiezioni pubblicate."
            },
            acciones: {
                es: ["ver el calendario de funciones cuando se habilite"],
                en: ["see the screening calendar once it opens"],
                it: ["vedere il calendario delle proiezioni quando sarà attivo"]
            },
            saludo: {
                es: "Estás en Funciones del Microcine. Por ahora es «Próximamente»: el calendario se habilita cuando haya funciones.",
                en: "You’re in Micro-cinema screenings. It’s “Coming soon” for now: the calendar opens once there are screenings.",
                it: "Sei in Proiezioni del Microcinema. Per ora è «Prossimamente»: il calendario si attiva quando ci saranno proiezioni."
            },
            recomendacion: {
                es: "Si querés conocer la sala principal, visitá Teatro.",
                en: "If you want to see the main hall, visit Theater.",
                it: "Se vuoi conoscere la sala principale, visita Teatro."
            }
        },
        "cultura": {
            emoji: "🇮🇹", enlace: "cultura", recomendada: "cultura-historia",
            nombre: { es: "Cultura italiana", en: "Italian culture", it: "Cultura italiana" },
            explicacion: {
                es: "Presenta la cultura italiana (Italia está en el sur de Europa y su capital es Roma) y la divide en siete temas: historia y origen, gastronomía, familia y costumbres, idioma, bellas artes, fiestas y tradiciones, y la cultura italiana en Argentina. Cada tarjeta lleva a un tema.",
                en: "It introduces Italian culture (Italy is in southern Europe and its capital is Rome) and splits it into seven topics: history and origins, food, family and customs, language, fine arts, festivals and traditions, and Italian culture in Argentina. Each card leads to a topic.",
                it: "Presenta la cultura italiana (l’Italia si trova nell’Europa meridionale e la sua capitale è Roma) e la divide in sette temi: storia e origini, gastronomia, famiglia e usanze, lingua, belle arti, feste e tradizioni, e la cultura italiana in Argentina. Ogni scheda porta a un tema."
            },
            acciones: {
                es: ["tocar una tarjeta para entrar a cada tema", "usar las opciones de «Cultura italiana» en el menú: Noticias, Culinaria e Idioma italiano"],
                en: ["tap a card to open each topic", "use the “Italian culture” options in the menu: News, Cuisine and Italian language"],
                it: ["toccare una scheda per aprire ogni tema", "usare le opzioni di «Cultura italiana» nel menu: Notizie, Cucina e Lingua italiana"]
            },
            saludo: {
                es: "Estás en Cultura italiana. ¿Querés conocer gastronomía, idioma, tradiciones o arte?",
                en: "You’re in Italian culture. Would you like to explore food, language, traditions or art?",
                it: "Sei in Cultura italiana. Vuoi scoprire la gastronomia, la lingua, le tradizioni o l’arte?"
            },
            opciones: [{ ir: "gastronomia" }, { ir: "idioma" }, { ir: "fiestas" }, { ir: "arte" }],
            recomendacion: {
                es: "Podés empezar por Historia y origen de Italia.",
                en: "You could start with Italy’s History and origins.",
                it: "Puoi cominciare da Storia e origini dell’Italia."
            }
        },
        "noticias": {
            emoji: "📰", enlace: "noticias", recomendada: "cultura", enConstruccion: true,
            nombre: { es: "Noticias", en: "News", it: "Notizie" },
            explicacion: {
                es: "Es la sección de noticias, dentro de Cultura italiana.",
                en: "It’s the news section, inside Italian culture.",
                it: "È la sezione delle notizie, all’interno di Cultura italiana."
            },
            acciones: {
                es: ["leer las noticias cuando estén publicadas"],
                en: ["read the news once it is published"],
                it: ["leggere le notizie quando saranno pubblicate"]
            },
            saludo: {
                es: "Estás en Noticias, dentro de Cultura italiana.",
                en: "You’re in News, inside Italian culture.",
                it: "Sei in Notizie, all’interno di Cultura italiana."
            },
            recomendacion: {
                es: "Mientras tanto, podés recorrer los temas de Cultura italiana.",
                en: "Meanwhile, you can browse the Italian culture topics.",
                it: "Nel frattempo, puoi esplorare i temi di Cultura italiana."
            }
        },
        "gastronomia": {
            emoji: "🍝", enlace: "gastronomia", recomendada: "idioma",
            nombre: { es: "Gastronomía italiana", en: "Italian food", it: "Gastronomia italiana" },
            explicacion: {
                es: "Presenta platos tradicionales de Italia (pizza, pasta, risotto, gelato y tiramisú), con fotos de la pizza, la pasta y el risotto, y explica que las recetas cambian según la región: en el norte, arroz y manteca; en el sur, aceite de oliva, tomate y pasta.",
                en: "It presents traditional Italian dishes (pizza, pasta, risotto, gelato and tiramisu), with photos of the pizza, pasta and risotto, and explains that recipes change by region: rice and butter in the north; olive oil, tomato and pasta in the south.",
                it: "Presenta piatti tradizionali italiani (pizza, pasta, risotto, gelato e tiramisù), con le foto della pizza, della pasta e del risotto, e spiega che le ricette cambiano da regione a regione: riso e burro al nord; olio d’oliva, pomodoro e pasta al sud."
            },
            acciones: {
                es: ["ver los platos típicos y sus fotos", "volver a Cultura italiana con el botón del final"],
                en: ["see the typical dishes and their photos", "go back to Italian culture with the button at the end"],
                it: ["vedere i piatti tipici e le loro foto", "tornare a Cultura italiana con il pulsante in fondo"]
            },
            saludo: {
                es: "Estás en Gastronomía italiana. Acá vas a encontrar algunos platos típicos de Italia.",
                en: "You’re in Italian food. Here you’ll find some typical Italian dishes.",
                it: "Sei in Gastronomia italiana. Qui troverai alcuni piatti tipici dell’Italia."
            },
            recomendacion: {
                es: "Si te interesa el idioma, en Idioma italiano te enseño con lecciones.",
                en: "If you’re interested in the language, I teach lessons in Italian language.",
                it: "Se ti interessa la lingua, in Lingua italiana ti insegno con delle lezioni."
            }
        },
        "idioma": {
            emoji: "🗣️", enlace: "idioma", recomendada: "gastronomia",
            nombre: { es: "Idioma italiano", en: "Italian language", it: "Lingua italiana" },
            explicacion: {
                es: "Cuenta que el italiano deriva del latín, como el español, el francés y el portugués; muestra palabras comunes (ciao, grazie, prego…) y menciona dialectos como el sardo, el friulano y el napolitano. Más abajo está el tutor de italiano: soy yo, Lorenzo, en versión profesor, con 18 lecciones en tres niveles, explicaciones en español o en inglés, vocabulario con audio y ejercicios que se corrigen solos.",
                en: "It explains that Italian comes from Latin, like Spanish, French and Portuguese; it shows common words (ciao, grazie, prego…) and mentions dialects such as Sardinian, Friulian and Neapolitan. Further down is the Italian tutor: that’s me, Lorenzo, as a teacher, with 18 lessons in three levels, explanations in Spanish or English, vocabulary with audio and exercises that check themselves.",
                it: "Racconta che l’italiano deriva dal latino, come lo spagnolo, il francese e il portoghese; mostra parole comuni (ciao, grazie, prego…) e cita dialetti come il sardo, il friulano e il napoletano. Più in basso c’è il tutor di italiano: sono io, Lorenzo, in versione insegnante, con 18 lezioni su tre livelli, spiegazioni in spagnolo o in inglese, vocabolario con audio ed esercizi che si correggono da soli."
            },
            acciones: {
                es: ["leer las palabras y expresiones comunes", "elegir un nivel y una lección del tutor", "escuchar la pronunciación de cada palabra", "practicar con ejercicios"],
                en: ["read the common words and expressions", "choose a tutor level and lesson", "listen to how each word is pronounced", "practice with exercises"],
                it: ["leggere le parole e le espressioni comuni", "scegliere un livello e una lezione del tutor", "ascoltare la pronuncia di ogni parola", "esercitarti con gli esercizi"]
            },
            saludo: {
                es: "Estás en Idioma italiano. Arriba tenés palabras comunes y, más abajo, ¡también soy tu tutor! Elegí un nivel y una lección y practicamos juntos.",
                en: "You’re in Italian language. At the top there are common words and, further down, I’m your tutor too! Pick a level and a lesson and we’ll practice together.",
                it: "Sei in Lingua italiana. In alto ci sono parole comuni e, più in basso, sono anche il tuo tutor! Scegli un livello e una lezione e ci esercitiamo insieme."
            },
            recomendacion: {
                es: "Para seguir con la cultura italiana, visitá Gastronomía.",
                en: "To keep exploring Italian culture, visit Italian food.",
                it: "Per continuare con la cultura italiana, visita Gastronomia."
            }
        },
        "cultura-historia": {
            emoji: "🏺", enlace: "cultura", recomendada: "historia",
            nombre: { es: "Historia y origen (Cultura italiana)", en: "History and origins (Italian culture)", it: "Storia e origini (Cultura italiana)" },
            explicacion: {
                es: "Cuenta la historia de Italia en dos partes: el Imperio romano, con fotos del Coliseo y el Foro Romano, y el Renacimiento (siglos XIV al XVI), con Leonardo da Vinci, Miguel Ángel y Rafael, y una foto de la catedral de Florencia.",
                en: "It tells Italy’s history in two parts: the Roman Empire, with photos of the Colosseum and the Roman Forum, and the Renaissance (14th to 16th centuries), with Leonardo da Vinci, Michelangelo and Raphael, and a photo of Florence Cathedral.",
                it: "Racconta la storia dell’Italia in due parti: l’Impero romano, con le foto del Colosseo e del Foro Romano, e il Rinascimento (XIV-XVI secolo), con Leonardo da Vinci, Michelangelo e Raffaello, e una foto del Duomo di Firenze."
            },
            acciones: {
                es: ["leer la historia de Italia y ver las imágenes", "volver a Cultura italiana con el botón del final"],
                en: ["read about Italy’s history and see the pictures", "go back to Italian culture with the button at the end"],
                it: ["leggere la storia dell’Italia e vedere le immagini", "tornare a Cultura italiana con il pulsante in fondo"]
            },
            saludo: {
                es: "Estás en Historia y origen, dentro de Cultura italiana. Es la historia de Italia; la de la Sociedad está en la sección Historia.",
                en: "You’re in History and origins, inside Italian culture. This is Italy’s history; the Society’s history is in the History section.",
                it: "Sei in Storia e origini, all’interno di Cultura italiana. È la storia dell’Italia; quella della Società è nella sezione Storia."
            },
            recomendacion: {
                es: "Para conocer la historia de la Sociedad Italiana de Gálvez, visitá Historia.",
                en: "To learn the history of the Italian Society of Gálvez, visit History.",
                it: "Per conoscere la storia della Società Italiana di Gálvez, visita Storia."
            }
        },
        "familia": {
            emoji: "👨‍👩‍👧", enlace: "cultura", recomendada: "gastronomia",
            nombre: { es: "Familia y costumbres", en: "Family and customs", it: "Famiglia e usanze" },
            explicacion: {
                es: "Cuenta la importancia de la familia y las reuniones en muchas comunidades italianas, con costumbres como el almuerzo del domingo, las comidas largas, las charlas en cafés y plazas, los gestos con las manos y las fiestas familiares y religiosas. Aclara que varían según la familia y la región.",
                en: "It explains how important family and gatherings are in many Italian communities, with customs such as Sunday lunch, long meals, chats in cafés and squares, hand gestures, and family and religious holidays. It points out that they vary by family and region.",
                it: "Racconta l’importanza della famiglia e dei momenti insieme in molte comunità italiane, con usanze come il pranzo della domenica, i lunghi pasti, le chiacchiere nei caffè e nelle piazze, i gesti delle mani e le feste familiari e religiose. Precisa che variano da famiglia a famiglia e da regione a regione."
            },
            acciones: {
                es: ["leer las costumbres y ver las fotos", "volver a Cultura italiana con el botón del final"],
                en: ["read about the customs and see the photos", "go back to Italian culture with the button at the end"],
                it: ["leggere le usanze e vedere le foto", "tornare a Cultura italiana con il pulsante in fondo"]
            },
            saludo: {
                es: "Estás en Familia y costumbres, dentro de Cultura italiana.",
                en: "You’re in Family and customs, inside Italian culture.",
                it: "Sei in Famiglia e usanze, all’interno di Cultura italiana."
            },
            recomendacion: { es: "Podés seguir por Gastronomía italiana.", en: "You can continue with Italian food.", it: "Puoi continuare con Gastronomia italiana." }
        },
        "arte": {
            emoji: "🎨", enlace: "cultura", recomendada: "fiestas",
            nombre: { es: "Bellas artes", en: "Fine arts", it: "Belle arti" },
            explicacion: {
                es: "Presenta los grandes aportes artísticos de Italia: pintura y escultura (Leonardo da Vinci y Miguel Ángel), ópera (Verdi y Puccini), arquitectura (el Coliseo, la Torre de Pisa y Venecia) y moda (Milán), con fotos del David, del Teatro alla Scala y de Venecia.",
                en: "It presents Italy’s great artistic contributions: painting and sculpture (Leonardo da Vinci and Michelangelo), opera (Verdi and Puccini), architecture (the Colosseum, the Leaning Tower of Pisa and Venice) and fashion (Milan), with photos of the David, La Scala and Venice.",
                it: "Presenta i grandi contributi artistici dell’Italia: pittura e scultura (Leonardo da Vinci e Michelangelo), opera (Verdi e Puccini), architettura (il Colosseo, la Torre di Pisa e Venezia) e moda (Milano), con le foto del David, della Scala e di Venezia."
            },
            acciones: {
                es: ["leer cada tema y ver las fotos", "volver a Cultura italiana con el botón del final"],
                en: ["read each topic and see the photos", "go back to Italian culture with the button at the end"],
                it: ["leggere ogni tema e vedere le foto", "tornare a Cultura italiana con il pulsante in fondo"]
            },
            saludo: {
                es: "Estás en Bellas artes, dentro de Cultura italiana.",
                en: "You’re in Fine arts, inside Italian culture.",
                it: "Sei in Belle arti, all’interno di Cultura italiana."
            },
            recomendacion: { es: "Podés seguir por Fiestas y tradiciones.", en: "You can continue with Festivals and traditions.", it: "Puoi continuare con Feste e tradizioni." }
        },
        "fiestas": {
            emoji: "🎉", enlace: "cultura", recomendada: "cultura-argentina",
            nombre: { es: "Fiestas y tradiciones", en: "Festivals and traditions", it: "Feste e tradizioni" },
            explicacion: {
                es: "Presenta algunas celebraciones conocidas de Italia: el Carnaval de Venecia, el Palio de Siena, la Navidad y el Ferragosto (15 de agosto), con fotos del carnaval, del Palio y de un pesebre.",
                en: "It presents some well-known Italian celebrations: the Carnival of Venice, the Palio di Siena, Christmas and Ferragosto (August 15), with photos of the carnival, the Palio and a nativity scene.",
                it: "Presenta alcune feste italiane conosciute: il Carnevale di Venezia, il Palio di Siena, il Natale e il Ferragosto (15 agosto), con le foto del carnevale, del Palio e di un presepe."
            },
            acciones: {
                es: ["leer cada celebración y ver las fotos", "volver a Cultura italiana con el botón del final"],
                en: ["read about each celebration and see the photos", "go back to Italian culture with the button at the end"],
                it: ["leggere ogni festa e vedere le foto", "tornare a Cultura italiana con il pulsante in fondo"]
            },
            saludo: {
                es: "Estás en Fiestas y tradiciones, dentro de Cultura italiana.",
                en: "You’re in Festivals and traditions, inside Italian culture.",
                it: "Sei in Feste e tradizioni, all’interno di Cultura italiana."
            },
            recomendacion: {
                es: "Podés seguir por La cultura italiana en Argentina.",
                en: "You can continue with Italian culture in Argentina.",
                it: "Puoi continuare con La cultura italiana in Argentina."
            }
        },
        "cultura-argentina": {
            emoji: "🇦🇷", enlace: "cultura", recomendada: "historia",
            nombre: { es: "La cultura italiana en Argentina", en: "Italian culture in Argentina", it: "La cultura italiana in Argentina" },
            explicacion: {
                es: "Cuenta la influencia de la inmigración italiana en Argentina, sobre todo entre fines del siglo XIX y comienzos del XX: en la comida, los apellidos, algunas expresiones y la entonación, la arquitectura y las asociaciones. Cierra con una conclusión sobre la cultura italiana.",
                en: "It tells how Italian immigration influenced Argentina, especially between the late 19th and early 20th centuries: in food, surnames, some expressions and intonation, architecture and associations. It ends with a conclusion about Italian culture.",
                it: "Racconta l’influenza dell’immigrazione italiana in Argentina, soprattutto tra la fine dell’Ottocento e l’inizio del Novecento: nel cibo, nei cognomi, in alcune espressioni e nell’intonazione, nell’architettura e nelle associazioni. Si chiude con una conclusione sulla cultura italiana."
            },
            acciones: {
                es: ["leer cómo se nota la influencia italiana en Argentina", "volver a Cultura italiana con el botón del final"],
                en: ["read how the Italian influence shows in Argentina", "go back to Italian culture with the button at the end"],
                it: ["leggere come si nota l’influenza italiana in Argentina", "tornare a Cultura italiana con il pulsante in fondo"]
            },
            saludo: {
                es: "Estás en La cultura italiana en Argentina, dentro de Cultura italiana.",
                en: "You’re in Italian culture in Argentina, inside Italian culture.",
                it: "Sei in La cultura italiana in Argentina, all’interno di Cultura italiana."
            },
            recomendacion: {
                es: "Para conocer la historia de la Sociedad Italiana de Gálvez, visitá Historia.",
                en: "To learn the history of the Italian Society of Gálvez, visit History.",
                it: "Per conoscere la storia della Società Italiana di Gálvez, visita Storia."
            }
        },
        "contacto": {
            emoji: "📍", enlace: "contacto", recomendada: "sociedad",
            nombre: { es: "Contacto", en: "Contact", it: "Contatti" },
            explicacion: {
                es: "Muestra, en una imagen, los medios de contacto de la Sociedad, y un mapa con la ubicación del teatro en Belgrano 654, Gálvez, con un botón para abrir la ruta en Google Maps y otro para ver el recorrido desde tu ubicación, en auto o a pie.",
                en: "It shows the Society’s contact channels in a picture, plus a map with the theater’s location at Belgrano 654, Gálvez, with a button to open the route in Google Maps and another to see the route from where you are, by car or on foot.",
                it: "Mostra in un’immagine i contatti della Società e una mappa con la posizione del teatro in via Belgrano 654, a Gálvez, con un pulsante per aprire il percorso su Google Maps e un altro per vedere il percorso dalla tua posizione, in auto o a piedi."
            },
            acciones: {
                es: ["ver los medios de contacto", "usar el mapa para saber cómo llegar"],
                en: ["see the contact channels", "use the map to find out how to get there"],
                it: ["vedere i contatti", "usare la mappa per sapere come arrivare"]
            },
            saludo: {
                es: "Estás en Contacto. Desde acá podés encontrar las formas de contacto y el mapa para llegar.",
                en: "You’re in Contact. Here you’ll find the ways to get in touch and the map to get here.",
                it: "Sei in Contatti. Qui trovi i modi per contattarci e la mappa per arrivare."
            },
            recomendacion: {
                es: "Si querés conocer mejor a la institución antes de escribir, visitá Sociedad.",
                en: "If you’d like to know the institution better before writing, visit Society.",
                it: "Se vuoi conoscere meglio l’istituzione prima di scrivere, visita Società."
            }
        }
    },

    // ---------- Recorrido por el menú (🧭 Guiarme por la página) ----------
    recorridoMenu: [
        { pagina: "inicio", texto: { es: "Esta es la página principal. Desde acá podés conocer rápidamente la Sociedad Italiana y el Teatro.", en: "This is the main page. From here you can quickly get to know the Italian Society and the Theater.", it: "Questa è la pagina principale. Da qui puoi conoscere rapidamente la Società Italiana e il Teatro." } },
        { pagina: "sociedad", texto: { es: "En esta sección podés conocer qué es la Sociedad Italiana, su situación actual, sus colaboradores y sus proyectos.", en: "In this section you can learn what the Italian Society is, its current situation, its collaborators and its projects.", it: "In questa sezione puoi scoprire che cos’è la Società Italiana, la sua situazione attuale, i suoi collaboratori e i suoi progetti." } },
        { pagina: "historia", texto: { es: "Acá podés conocer el origen de la institución, su pasado mutual, las fechas clave y cómo sigue hoy.", en: "Here you can learn about the institution’s origins, its mutual aid past, the key dates and how it carries on today.", it: "Qui puoi conoscere le origini dell’istituzione, il suo passato di mutua, le date chiave e come prosegue oggi." } },
        { pagina: "teatro", texto: { es: "En esta sección encontrás información sobre el Teatro, sus espacios, funciones y estado actual.", en: "In this section you’ll find information about the Theater, its spaces, shows and current state.", it: "In questa sezione trovi informazioni sul Teatro, i suoi spazi, gli spettacoli e il suo stato attuale." } },
        { pagina: "microcine", texto: { es: "Esta sección presenta el espacio del Microcine y su historia.", en: "This section presents the Micro-cinema space and its story.", it: "Questa sezione presenta lo spazio del Microcinema e la sua storia." } },
        { pagina: "cultura", texto: { es: "Acá se reúnen contenidos de cultura italiana: historia, gastronomía, familia, idioma, arte, fiestas y su huella en Argentina.", en: "Here you’ll find Italian culture content: history, food, family, language, art, festivals and its mark on Argentina.", it: "Qui si raccolgono contenuti di cultura italiana: storia, gastronomia, famiglia, lingua, arte, feste e la sua impronta in Argentina." } },
        { pagina: "eventos", texto: { es: "Esta sección reúne las novedades y actividades.", en: "This section gathers news and activities.", it: "Questa sezione raccoglie novità e attività." } },
        { pagina: "contacto", texto: { es: "Desde acá podés encontrar las formas de contacto y conocer cómo acercarte.", en: "Here you can find the ways to get in touch and how to get here.", it: "Qui trovi i modi per contattarci e come arrivare." } }
    ],

    // ---------- Recorrido por todo el sitio (🎓 Quiero conocer el sitio) ----------
    recorridoSitio: ["inicio", "sociedad", "historia", "teatro", "microcine", "cultura", "eventos", "contacto"],

    // ---------- Botones principales ----------
    accesosRapidos: [
        { accion: "faq:que-es-sociedad" }, { accion: "faq:que-es-teatro" }, { accion: "faq:ir-historia" }, { accion: "faq:eventos" },
        { accion: "faq:italia" }, { accion: "faq:colaborar" }, { accion: "faq:contactar" },
        { accion: "guia" }, { accion: "explicar" }, { accion: "recorrido" }, { accion: "preguntas" }
    ],

    // ---------- Comandos: si el visitante escribe SOLO esta palabra (o «ir a…», «go to…», «vai a…»), lo lleva a la sección ----------
    comandos: {
        es: {
            "inicio": "inicio", "historia": "historia", "teatro": "teatro", "sociedad": "sociedad", "eventos": "eventos", "noticias": "noticias",
            "cultura": "cultura", "contacto": "contacto", "microcine": "microcine", "funciones": "funciones", "futuro": "futuro",
            "gastronomia": "gastronomia", "culinaria": "gastronomia", "idioma": "idioma"
        },
        en: {
            "home": "inicio", "history": "historia", "theater": "teatro", "theatre": "teatro", "society": "sociedad", "events": "eventos", "news": "noticias",
            "culture": "cultura", "contact": "contacto", "micro cinema": "microcine", "microcinema": "microcine", "shows": "funciones", "future": "futuro",
            "food": "gastronomia", "cuisine": "gastronomia", "language": "idioma"
        },
        it: {
            "home": "inicio", "inizio": "inicio", "storia": "historia", "teatro": "teatro", "societa": "sociedad", "eventi": "eventos", "notizie": "noticias",
            "cultura": "cultura", "contatti": "contacto", "contatto": "contacto", "microcinema": "microcine", "spettacoli": "funciones", "futuro": "futuro",
            "gastronomia": "gastronomia", "cucina": "gastronomia", "lingua": "idioma"
        }
    },
    // Lo que puede ir antes del nombre de la sección («ir a historia», «take me to contact», «portami alla storia»)
    prefijosIr: {
        es: ["ir a la", "ir al", "ir a", "llevame a la", "llevame al", "llevame a", "abrir", "abri", "mostrame", "quiero ir a la", "quiero ir al", "quiero ir a"],
        en: ["go to the", "go to", "take me to the", "take me to", "open the", "open", "show me the", "show me", "i want to go to the", "i want to go to"],
        it: ["vai alla", "vai al", "vai all", "vai ai", "vai agli", "vai alle", "vai a", "portami alla", "portami al", "portami all", "portami ai", "portami a", "apri", "mostrami", "voglio andare alla", "voglio andare al", "voglio andare a"]
    },

    // ---------- Pedidos sobre la página y la conversación ----------
    // ayuda_sola, volver e idioma_*: solo si el visitante escribe exactamente eso
    intenciones: {
        explicar: {
            es: ["donde estoy", "que puedo hacer aca", "que puedo hacer aqui", "que hago aca", "que hago aqui", "que hay aca", "que es esta pagina", "explicame esta pagina", "explicame la pagina", "en que pagina estoy", "de que trata esta pagina"],
            en: ["where am i", "what can i do here", "what is this page", "explain this page", "explain the page", "what page am i on", "what is this page about"],
            it: ["dove sono", "cosa posso fare qui", "cos e questa pagina", "che cos e questa pagina", "spiegami questa pagina", "spiegami la pagina", "in che pagina sono", "di cosa parla questa pagina"]
        },
        recorrido: {
            es: ["quiero conocer el sitio", "conocer el sitio", "recorrer el sitio", "recorrido por el sitio", "tour"],
            en: ["show me the site", "show me around", "site tour", "tour", "walk me through the site"],
            it: ["voglio conoscere il sito", "conoscere il sito", "visita guidata", "fammi fare un giro", "tour"]
        },
        guia: {
            es: ["guiame", "guiarme", "guia", "recorrido", "como uso la pagina", "como funciona la pagina", "mostrame la pagina"],
            en: ["guide me", "how do i use the site", "how does the site work", "how does this site work"],
            it: ["guidami", "come si usa il sito", "come funziona il sito", "come funziona la pagina"]
        },
        elegir: {
            es: ["que es este boton", "que hace este boton", "este boton", "que es este enlace", "este enlace", "que es esto", "explicame un boton", "para que sirve este boton", "que significa este boton"],
            en: ["what is this button", "what does this button do", "this button", "what is this link", "this link", "explain a button"],
            it: ["cos e questo pulsante", "che cos e questo pulsante", "cosa fa questo pulsante", "questo pulsante", "cos e questo link", "questo link", "spiegami un pulsante", "a cosa serve questo pulsante"]
        },
        menu: {
            es: ["que significa este menu", "este menu", "el menu", "menu", "para que sirve el menu", "que es el menu"],
            en: ["the menu", "this menu", "menu", "what is the menu"],
            it: ["il menu", "questo menu", "menu", "a cosa serve il menu"]
        },
        ayuda: {
            es: ["que podes hacer", "que sabes hacer", "en que me ayudas", "necesito ayuda"],
            en: ["what can you do", "how can you help me", "i need help"],
            it: ["cosa sai fare", "cosa puoi fare", "come puoi aiutarmi", "ho bisogno di aiuto"]
        },
        ayuda_sola: { es: ["ayuda", "opciones"], en: ["help", "options"], it: ["aiuto", "opzioni"] },
        volver: { es: ["volver", "atras", "volver atras", "pagina anterior"], en: ["back", "go back", "previous page"], it: ["indietro", "torna indietro", "tornare indietro", "pagina precedente"] },
        idioma_es: { es: ["espanol", "en espanol", "hablame en espanol", "castellano"], en: ["spanish", "in spanish", "speak spanish"], it: ["spagnolo", "in spagnolo", "parla spagnolo"] },
        idioma_en: { es: ["ingles", "en ingles", "hablame en ingles"], en: ["english", "in english", "speak english", "english please"], it: ["inglese", "in inglese", "parla inglese"] },
        idioma_it: { es: ["en italiano", "hablame en italiano"], en: ["in italian", "speak italian", "italian please"], it: ["in italiano", "parla italiano", "parli italiano", "italiano per favore"] }
    },

    // ---------- Temas que el guía NO presenta como datos confirmados ----------
    // Se revisan ANTES que las preguntas frecuentes.
    restringidos: [
        { claves: { es: ["1959", "3 de marzo"], en: ["march 3"], it: ["3 marzo"] },
          extra: {
              es: "Lo que sí publica el sitio son los primeros estatutos de 1897 y la fecha fundacional consolidada del 9 de enero de 1910.",
              en: "What the site does publish are the first statutes of 1897 and the consolidated founding date of January 9, 1910.",
              it: "Quello che il sito pubblica sono i primi statuti del 1897 e la data di fondazione consolidata del 9 gennaio 1910."
          },
          botones: [{ ir: "historia" }] },
        { claves: {
            es: ["presupuesto", "cuanto cuesta la obra", "cuanto sale la obra", "costo de la obra", "cuanto costo", "cuanto dinero", "cuanta plata", "millon", "millones", "pesos", "dolares", "plata desaparecida", "fondos de la sociedad", "precio del teatro", "cuanto pagaron"],
            en: ["budget", "how much does the work cost", "cost of the works", "how much did it cost", "how much money", "million", "millions", "pesos", "dollars", "missing money", "society funds", "price of the theater", "how much did they pay"],
            it: ["preventivo", "quanto costano i lavori", "costo dei lavori", "quanto e costato", "quanti soldi", "milione", "milioni", "dollari", "soldi spariti", "fondi della societa", "prezzo del teatro", "quanto hanno pagato"]
        } },
        { claves: { es: ["supermercado"], en: ["supermarket"], it: ["supermercato"] } },
        { claves: {
            es: ["deuda", "deudas", "gestion anterior", "gestiones anteriores", "comision anterior", "desmanejo", "juicio", "juicios", "robo", "desaparecio", "desaparecieron"],
            en: ["debt", "debts", "previous management", "previous committee", "mismanagement", "lawsuit", "lawsuits", "theft", "stolen", "disappeared"],
            it: ["debito", "debiti", "gestione precedente", "gestioni precedenti", "consiglio precedente", "cattiva gestione", "causa legale", "processo", "furto", "rubato", "sparito", "spariti"]
        } },
        { claves: {
            es: ["plano", "planos", "limite", "limites", "linde", "lindes", "terreno", "escritura", "propiedad del", "subterraneo", "sotano", "espacio contiguo", "metros"],
            en: ["floor plan", "floor plans", "blueprints", "boundaries", "boundary", "property line", "deed", "basement", "underground", "adjoining space", "square meters", "meters"],
            it: ["planimetria", "planimetrie", "confini", "confine", "terreno", "atto di proprieta", "seminterrato", "sotterraneo", "cantina", "spazio adiacente", "metri"]
        } },
        { claves: {
            es: ["convenio", "convenios", "obra social", "prepaga", "cobertura medica", "atencion medica"],
            en: ["health insurance", "medical coverage", "medical care", "agreement", "agreements"],
            it: ["convenzione", "convenzioni", "assicurazione sanitaria", "copertura medica", "assistenza medica"]
        },
          extra: {
              es: "Lo que sí se sabe es que los servicios de salud forman parte del origen mutual de la Sociedad. Hoy no presta servicios de salud.",
              en: "What is known is that health services are part of the Society’s origins as a mutual aid society. It does not provide health services today.",
              it: "Quello che si sa è che i servizi sanitari fanno parte delle origini mutualistiche della Società. Oggi non offre servizi sanitari."
          } },
        { claves: {
            es: ["consulado", "embajada", "dante", "alighieri", "hospital italiano", "alianza", "alianzas", "convenio con"],
            en: ["consulate", "embassy", "dante", "alighieri", "italian hospital", "alliance", "alliances", "partnership", "partnerships"],
            it: ["consolato", "ambasciata", "dante", "alighieri", "ospedale italiano", "alleanza", "alleanze", "accordo con"]
        },
          extra: {
              es: "La comisión quiere volver a presentarse ante esas instituciones, pero hoy no hay alianzas activas.",
              en: "The committee wants to reach out to those institutions again, but there are no active partnerships today.",
              it: "Il consiglio direttivo vuole tornare a presentarsi a quelle istituzioni, ma oggi non ci sono alleanze attive."
          } },
        { claves: {
            es: ["ciudadania", "pasaporte", "doble nacionalidad", "nacionalidad italiana", "padron", "votar", "voto", "votos"],
            en: ["citizenship", "passport", "dual citizenship", "italian nationality", "vote", "voting", "votes"],
            it: ["cittadinanza", "passaporto", "doppia cittadinanza", "nazionalita italiana", "votare", "voto", "voti"]
        },
          extra: {
              es: "Es un tema que les interesa, porque mucha información oficial está en italiano, pero hoy la Sociedad no ofrece asesoramiento de ciudadanía ni recepción de votos: es una idea que todavía no está armada.",
              en: "It’s a topic they care about, because a lot of official information is in Italian, but today the Society does not offer citizenship advice or collect votes: it’s an idea that hasn’t taken shape yet.",
              it: "È un tema che interessa, perché molte informazioni ufficiali sono in italiano, ma oggi la Società non offre consulenza sulla cittadinanza né raccolta di voti: è un’idea non ancora definita."
          } },
        { claves: {
            es: ["telefono", "whatsapp", "celular", "mail", "email", "correo", "instagram", "facebook", "redes sociales", "numero de telefono"],
            en: ["phone", "phone number", "whatsapp", "mobile number", "email", "e mail", "instagram", "facebook", "social media"],
            it: ["telefono", "numero di telefono", "whatsapp", "cellulare", "email", "e mail", "instagram", "facebook", "social"]
        },
          respuesta: {
              es: "Los datos de contacto que la Sociedad publica están en la sección Contacto. No comparto otros números o direcciones que no estén autorizados.",
              en: "The contact details the Society publishes are in the Contact section. I don’t share any other numbers or addresses that haven’t been authorized.",
              it: "I contatti che la Società pubblica sono nella sezione Contatti. Non condivido altri numeri o indirizzi non autorizzati."
          },
          botones: [{ ir: "contacto" }] },
        { claves: {
            es: ["balance", "sueldo", "ingresos", "cuanto es la cuota", "valor de la cuota", "precio de la cuota", "cuanto cuesta asociarse", "cuanto sale asociarse", "cuanto pago"],
            en: ["balance sheet", "salary", "income", "how much is the fee", "membership fee", "how much does it cost to join", "how much do i pay"],
            it: ["bilancio", "stipendio", "entrate", "quanto e la quota", "quota associativa", "quanto costa associarsi", "quanto pago"]
        } },
        { claves: {
            es: ["proximo evento", "proximos eventos", "fecha del evento", "fiesta grande", "fiesta de la colectividad", "cuando es la fiesta", "cuando hay"],
            en: ["next event", "upcoming events", "event date", "when is the party", "when is the festival", "big party"],
            it: ["prossimo evento", "prossimi eventi", "data dell evento", "quando e la festa", "festa della collettivita"]
        },
          respuesta: {
              es: "No hay eventos futuros publicados por ahora, así que prefiero no anunciar fechas. Cuando haya novedades, el lugar para buscarlas es Eventos y noticias.",
              en: "There are no upcoming events published for now, so I’d rather not announce dates. When there is news, the place to look is Events and news.",
              it: "Per ora non ci sono eventi futuri pubblicati, quindi preferisco non annunciare date. Quando ci saranno novità, il posto dove cercarle è Eventi e notizie."
          },
          botones: [{ ir: "eventos" }] }
    ],

    // ---------- Temas de «Preguntas frecuentes» ----------
    categorias: {
        institucion: { es: "La institución", en: "The institution", it: "L’istituzione" },
        teatro: { es: "El teatro", en: "The theater", it: "Il teatro" },
        historia: { es: "La historia", en: "The history", it: "La storia" },
        cultura: { es: "La cultura", en: "Culture", it: "La cultura" }
    },

    // ---------- Preguntas frecuentes e intenciones ----------
    // claves: frases que el visitante podría escribir (sin tildes ni signos). Gana la frase más larga que coincida.
    // categoria: si tiene una, aparece en la lista de «Preguntas frecuentes».
    // boton: texto corto para cuando otra respuesta ofrece esta como botón.
    preguntas: [
        // --- Navegación (lo que el visitante quiere hacer) ---
        { id: "ir-historia",
          boton: { es: "📜 Ver la Historia", en: "📜 See the History", it: "📜 Vedere la Storia" },
          claves: {
              es: ["quiero conocer la historia", "conocer la historia", "quiero saber la historia", "ver la historia", "donde esta la historia"],
              en: ["i want to know the history", "learn the history", "see the history", "where is the history", "show me the history"],
              it: ["voglio conoscere la storia", "conoscere la storia", "vedere la storia", "dove e la storia"]
          },
          respuesta: {
              es: "La historia de la Sociedad Italiana y el Teatro se encuentra en la sección Historia. Te puedo llevar directamente.",
              en: "The history of the Italian Society and the Theater is in the History section. I can take you straight there.",
              it: "La storia della Società Italiana e del Teatro si trova nella sezione Storia. Posso portarti direttamente lì."
          },
          botones: [{ ir: "historia" }, { accion: "faq:momentos" }] },
        { id: "eventos",
          boton: { es: "📅 Eventos y noticias", en: "📅 Events and news", it: "📅 Eventi e notizie" },
          claves: {
              es: ["donde veo los eventos", "ver los eventos", "ver eventos", "los eventos", "novedades", "que hay de nuevo", "agenda", "actividades de la sociedad"],
              en: ["where can i see the events", "see the events", "the events", "what s new", "whats new", "news", "schedule"],
              it: ["dove vedo gli eventi", "vedere gli eventi", "gli eventi", "novita", "che c e di nuovo", "agenda"]
          },
          respuesta: {
              es: "Podés consultar los eventos y novedades desde la sección Eventos y noticias.",
              en: "You can check events and news in the Events and news section.",
              it: "Puoi consultare eventi e novità nella sezione Eventi e notizie."
          },
          botones: [{ ir: "eventos" }] },
        { id: "contactar",
          boton: { es: "📍 Contacto", en: "📍 Contact", it: "📍 Contatti" },
          claves: {
              es: ["como contactarlos", "contactarlos", "contactar", "contactarme", "comunicarme", "hablar con alguien", "escribirles", "contacto", "consultar algo"],
              en: ["how can i contact you", "contact you", "get in touch", "talk to someone", "write to you", "contact"],
              it: ["come posso contattarvi", "contattarvi", "contattare", "mettermi in contatto", "parlare con qualcuno", "scrivervi", "contatti", "contatto"]
          },
          respuesta: {
              es: "La información de contacto está disponible en la sección Contacto. Ahí también tenés el mapa para llegar. Tené en cuenta que todo el trabajo de la comisión es voluntario, así que responden cuando pueden.",
              en: "Contact information is in the Contact section, along with the map to get here. Keep in mind that all of the committee’s work is voluntary, so they reply when they can.",
              it: "Le informazioni di contatto sono nella sezione Contatti, dove trovi anche la mappa per arrivare. Tieni presente che tutto il lavoro del consiglio direttivo è volontario, quindi rispondono quando possono."
          },
          botones: [{ ir: "contacto" }] },
        { id: "fotos",
          claves: {
              es: ["quiero ver fotos", "ver fotos", "fotos", "fotografias", "imagenes", "galeria"],
              en: ["i want to see photos", "see photos", "photos", "pictures", "images", "gallery"],
              it: ["voglio vedere le foto", "vedere le foto", "foto", "fotografie", "immagini", "galleria"]
          },
          respuesta: {
              es: "Hay fotos en varias secciones: en el <b>Inicio</b> (el Microcine y el teatro antes de su remodelación), en <b>Historia</b> (la fachada, cómo estaba en 2025, la obra y los chicos de la Escuela de Comercio), en <b>Microcine</b> y en los temas de <b>Cultura italiana</b>.",
              en: "There are photos in several sections: <b>Home</b> (the Micro-cinema and the theater before its renovation), <b>History</b> (the front of the building, what it looked like in 2025, the works and the Escuela de Comercio students), <b>Micro-cinema</b> and the <b>Italian culture</b> topics.",
              it: "Ci sono foto in diverse sezioni: nella <b>Home</b> (il Microcinema e il teatro prima della ristrutturazione), in <b>Storia</b> (la facciata, com’era nel 2025, i lavori e i ragazzi della Escuela de Comercio), in <b>Microcinema</b> e nei temi di <b>Cultura italiana</b>."
          },
          botones: [{ ir: "inicio" }, { ir: "historia" }, { ir: "cultura" }] },
        { id: "actualidad",
          claves: {
              es: ["que estan haciendo", "que estan haciendo actualmente", "que hacen ahora", "que hacen actualmente", "en que estan", "como van"],
              en: ["what are you doing", "what are you doing now", "what is happening now", "what s going on", "how is the project going"],
              it: ["cosa state facendo", "cosa fate adesso", "cosa fate ora", "a che punto siete"]
          },
          respuesta: {
              es: "Hoy la Sociedad está en plena reconstrucción: la obra del edificio avanza (techo, paredes y baños), la comisión sigue sumando socios y colaboradores, y los chicos de la Escuela de Comercio preparan propuestas para el sitio web. Las novedades se reúnen en Eventos y noticias.",
              en: "Right now the Society is in the middle of rebuilding: work on the building is moving forward (roof, walls and bathrooms), the committee keeps adding members and collaborators, and the Escuela de Comercio students are preparing proposals for the website. News is gathered in Events and news.",
              it: "Oggi la Società è in piena ricostruzione: i lavori dell’edificio vanno avanti (tetto, pareti e bagni), il consiglio direttivo continua a trovare soci e collaboratori, e i ragazzi della Escuela de Comercio preparano proposte per il sito web. Le novità si raccolgono in Eventi e notizie."
          },
          botones: [{ accion: "faq:obras" }, { ir: "eventos" }] },
        { id: "italia",
          boton: { es: "🇮🇹 Cultura italiana", en: "🇮🇹 Italian culture", it: "🇮🇹 Cultura italiana" },
          claves: {
              es: ["quiero saber sobre italia", "saber sobre italia", "sobre italia", "cultura italiana", "italia", "capital de italia", "donde queda italia"],
              en: ["tell me about italy", "about italy", "italian culture", "italy", "capital of italy", "where is italy"],
              it: ["parlami dell italia", "sull italia", "cultura italiana", "capitale d italia", "capitale dell italia", "dove si trova l italia"]
          },
          respuesta: {
              es: "Italia está en el sur de Europa y su capital es Roma. Todo lo relacionado con Italia está en <b>Cultura italiana</b>: historia, gastronomía, familia y costumbres, idioma, bellas artes, fiestas y tradiciones, y la cultura italiana en Argentina.",
              en: "Italy is in southern Europe and its capital is Rome. Everything about Italy is in <b>Italian culture</b>: history, food, family and customs, language, fine arts, festivals and traditions, and Italian culture in Argentina.",
              it: "L’Italia si trova nell’Europa meridionale e la sua capitale è Roma. Tutto ciò che riguarda l’Italia è in <b>Cultura italiana</b>: storia, gastronomia, famiglia e usanze, lingua, belle arti, feste e tradizioni, e la cultura italiana in Argentina."
          },
          botones: [{ ir: "cultura" }, { ir: "idioma" }] },

        { id: "noticias-italia",
          claves: {
              es: ["noticias de italia", "noticias italianas", "que pasa en italia", "diario", "diarios", "corriere", "corriere della sera"],
              en: ["news from italy", "italian news", "what s happening in italy", "whats happening in italy", "newspaper", "newspapers", "corriere", "corriere della sera"],
              it: ["notizie dall italia", "notizie italiane", "cosa succede in italia", "giornale", "giornali", "corriere", "corriere della sera"]
          },
          respuesta: {
              es: "En <b>Eventos y noticias</b> hay entre 6 y 9 noticias y eventos importantes de Italia, del Corriere della Sera. Se actualizan todos los días a las 11 y a las 23 (hora argentina) y cada una lleva al artículo original, en italiano.",
              en: "<b>Events and news</b> has 6 to 9 important news stories and events from Italy, from the Corriere della Sera. They are updated every day at 11 a.m. and 11 p.m. (Argentina time), and each one links to the original article, in Italian.",
              it: "In <b>Eventi e notizie</b> ci sono da 6 a 9 notizie ed eventi importanti dall’Italia, dal Corriere della Sera. Si aggiornano ogni giorno alle 11 e alle 23 (ora argentina) e ognuno rimanda all’articolo originale."
          },
          botones: [{ ir: "eventos" }] },

        // --- La institución ---
        { id: "que-es-sociedad", categoria: "institucion",
          pregunta: { es: "¿Qué es la Sociedad Italiana?", en: "What is the Italian Society?", it: "Che cos’è la Società Italiana?" },
          boton: { es: "🏛️ Conocer la Sociedad", en: "🏛️ About the Society", it: "🏛️ Conoscere la Società" },
          claves: {
              es: ["que es la sociedad", "que es la sociedad italiana", "conocer la sociedad", "sobre la sociedad", "que es esta institucion", "que es la institucion", "quienes son ustedes"],
              en: ["what is the society", "what is the italian society", "about the society", "what is this institution", "who are you people", "who are you guys"],
              it: ["che cos e la societa", "cos e la societa", "cos e la societa italiana", "conoscere la societa", "sulla societa", "che cos e questa istituzione", "chi siete"]
          },
          respuesta: {
              es: "La Sociedad Italiana es la institución que sostiene y da sentido al proyecto del edificio y del teatro. Tiene una historia vinculada a la inmigración italiana y originalmente tuvo carácter mutual.<br>Actualmente atraviesa una etapa de reconstrucción institucional, edilicia y de vínculos.<br>Si querés, puedo contarte su historia.",
              en: "The Italian Society is the institution that supports and gives meaning to the building and theater project. Its history is linked to Italian immigration, and it was originally a mutual aid society.<br>It is currently going through a stage of rebuilding: as an institution, as a building and in its ties with the community.<br>If you like, I can tell you its story.",
              it: "La Società Italiana è l’istituzione che sostiene e dà senso al progetto dell’edificio e del teatro. La sua storia è legata all’immigrazione italiana e in origine era una società di mutuo soccorso.<br>Oggi attraversa una fase di ricostruzione istituzionale, edilizia e dei legami.<br>Se vuoi, posso raccontarti la sua storia."
          },
          botones: [{ texto: { es: "📜 Conocer la historia", en: "📜 Hear its story", it: "📜 Conoscere la storia" }, accion: "faq:momentos" }, { ir: "sociedad" }] },
        { id: "relacion", categoria: "institucion",
          pregunta: { es: "¿Qué relación tiene la Sociedad con el Teatro?", en: "How are the Society and the Theater related?", it: "Che rapporto c’è tra la Società e il Teatro?" },
          claves: {
              es: ["relacion", "sociedad y el teatro", "sociedad con el teatro", "teatro y la sociedad", "de quien es el teatro", "el teatro es de", "son lo mismo"],
              en: ["relationship", "society and the theater", "society and the theatre", "who owns the theater", "who owns the theatre", "are they the same"],
              it: ["rapporto", "relazione", "societa e il teatro", "di chi e il teatro", "sono la stessa cosa"]
          },
          respuesta: {
              es: "El teatro es de la Sociedad Italiana. Comparten el mismo edificio y la misma historia, pero no son lo mismo: la raíz es la Sociedad, y el teatro es la parte más visible desde la vereda.",
              en: "The theater belongs to the Italian Society. They share the same building and the same history, but they are not the same thing: the Society is the root, and the theater is the part you see from the sidewalk.",
              it: "Il teatro appartiene alla Società Italiana. Condividono lo stesso edificio e la stessa storia, ma non sono la stessa cosa: la radice è la Società, e il teatro è la parte più visibile dalla strada."
          },
          botones: [{ ir: "sociedad" }, { ir: "teatro" }] },
        { id: "donde-esta", categoria: "institucion",
          pregunta: { es: "¿Dónde está la Sociedad Italiana?", en: "Where is the Italian Society?", it: "Dove si trova la Società Italiana?" },
          claves: {
              es: ["donde esta el teatro", "donde esta la sociedad", "donde queda", "donde esta", "donde estan", "donde se encuentra", "direccion", "ubicacion", "como llego", "como llegar", "mapa"],
              en: ["where is the theater", "where is the theatre", "where is the society", "where is it", "where are you", "where is", "address", "location", "how do i get there", "how to get there", "directions", "map"],
              it: ["dove si trova il teatro", "dove si trova la societa", "dove si trova", "dove siete", "dove e", "indirizzo", "posizione", "come arrivo", "come arrivare", "mappa"]
          },
          respuesta: {
              es: "La Sociedad Italiana y el Teatro Marconi están en <b>Belgrano 654, Gálvez</b>. En Contacto tenés el mapa, un botón para abrir la ruta en Google Maps y la opción de ver el recorrido desde tu ubicación.",
              en: "The Italian Society and Teatro Marconi are at <b>Belgrano 654, Gálvez</b>. In Contact you’ll find the map, a button to open the route in Google Maps and the option to see the route from where you are.",
              it: "La Società Italiana e il Teatro Marconi si trovano in <b>via Belgrano 654, a Gálvez</b>. In Contatti trovi la mappa, un pulsante per aprire il percorso su Google Maps e la possibilità di vedere il percorso dalla tua posizione."
          },
          botones: [{ texto: { es: "📍 Ver el mapa en Contacto", en: "📍 See the map in Contact", it: "📍 Vedi la mappa in Contatti" }, ir: "contacto" }, { ir: "teatro" }] },
        { id: "quienes-forman", categoria: "institucion",
          pregunta: { es: "¿Quiénes forman parte actualmente?", en: "Who is part of it today?", it: "Chi ne fa parte oggi?" },
          boton: { es: "👥 ¿Quiénes la forman?", en: "👥 Who is part of it?", it: "👥 Chi ne fa parte?" },
          claves: {
              es: ["quienes forman", "quien forma parte", "forman parte", "quienes integran", "integrantes", "quienes estan", "quien dirige", "autoridades", "presidente"],
              en: ["who is part of it", "who are the members", "who runs it", "who is in charge", "members of the committee", "president", "authorities"],
              it: ["chi ne fa parte", "chi fa parte", "chi sono i membri", "chi la dirige", "presidente", "autorita"]
          },
          respuesta: {
              es: "Hoy la Sociedad funciona con dos grupos: la <b>comisión</b> y un grupo de <b>colaboradores</b>, en su mayoría gente joven que se sumó al enterarse del reinicio. Además hay más de ciento cincuenta socios. Todo el trabajo es voluntario. Los nombres de las personas no están publicados en el sitio.",
              en: "Today the Society works with two groups: the <b>committee</b> and a group of <b>collaborators</b>, mostly young people who joined when they heard about the restart. There are also more than one hundred and fifty members. All the work is voluntary. People’s names are not published on the site.",
              it: "Oggi la Società funziona con due gruppi: il <b>consiglio direttivo</b> e un gruppo di <b>collaboratori</b>, per lo più giovani che si sono uniti quando hanno saputo della ripartenza. Ci sono inoltre più di centocinquanta soci. Tutto il lavoro è volontario. I nomi delle persone non sono pubblicati sul sito."
          },
          botones: [{ accion: "faq:colaborar" }] },
        { id: "cuantos-socios", categoria: "institucion",
          pregunta: { es: "¿Cuántos socios tiene?", en: "How many members does it have?", it: "Quanti soci ha?" },
          claves: {
              es: ["cuantos socios", "cantidad de socios", "numero de socios", "cuantos son"],
              en: ["how many members", "number of members"],
              it: ["quanti soci", "numero di soci", "quanti sono"]
          },
          respuesta: {
              es: "Hoy son más de ciento cincuenta socios. La comisión arrancó sin socios y salió a buscarlos; sumar gente sigue siendo una necesidad permanente.",
              en: "Today there are more than one hundred and fifty members. The committee started with no members and went out to find them; bringing in more people is still an ongoing need.",
              it: "Oggi i soci sono più di centocinquanta. Il consiglio direttivo è partito senza soci ed è andato a cercarli; trovare nuove persone resta un bisogno costante."
          },
          botones: [{ accion: "faq:asociarse" }] },
        { id: "asociarse", categoria: "institucion",
          pregunta: { es: "¿Qué significa asociarse actualmente?", en: "What does becoming a member mean today?", it: "Cosa significa associarsi oggi?" },
          boton: { es: "🙋 ¿Qué significa asociarse?", en: "🙋 What does joining mean?", it: "🙋 Cosa significa associarsi?" },
          claves: {
              es: ["que significa asociarse", "asociarme", "asociarse", "hacerme socio", "ser socio", "quiero ser socio", "como me asocio", "quiero asociarme", "socio", "socia"],
              en: ["become a member", "becoming a member", "join the society", "how do i join", "i want to join", "membership", "member"],
              it: ["diventare socio", "diventare socia", "associarmi", "associarsi", "come mi associo", "voglio associarmi", "iscrivermi", "socio", "socia"]
          },
          respuesta: {
              es: "La Sociedad se está reconstruyendo: asociarse ahora es <b>participar de esa reconstrucción</b>, no comprar un servicio ya armado. La cuota y la colaboración existen; una programación estable, todavía no. Para asociarte, comunicate por los medios de la sección Contacto.",
              en: "The Society is rebuilding itself: joining now means <b>taking part in that rebuilding</b>, not buying a ready-made service. Membership fees and volunteering exist; a regular program doesn’t yet. To join, get in touch through the channels in the Contact section.",
              it: "La Società si sta ricostruendo: associarsi oggi significa <b>partecipare a questa ricostruzione</b>, non acquistare un servizio già pronto. La quota e la collaborazione esistono; una programmazione stabile, non ancora. Per associarti, scrivi tramite i contatti della sezione Contatti."
          },
          botones: [{ ir: "contacto" }] },
        { id: "colaborar", categoria: "institucion",
          pregunta: { es: "¿Cómo puedo colaborar?", en: "How can I help?", it: "Come posso collaborare?" },
          boton: { es: "🤝 Quiero colaborar", en: "🤝 I want to help", it: "🤝 Voglio collaborare" },
          claves: {
              es: ["como puedo colaborar", "quiero colaborar", "colaborar", "quiero ayudar", "como ayudo", "ayudar", "ayuda con la obra", "voluntario", "voluntaria", "sumarme", "participar", "donar", "donar material", "donacion", "donaciones"],
              en: ["how can i help", "i want to help", "help out", "helping", "volunteer", "volunteering", "join in", "take part", "donate", "donation", "donations"],
              it: ["come posso collaborare", "voglio collaborare", "collaborare", "voglio aiutare", "come posso aiutare", "aiutare", "volontario", "volontaria", "partecipare", "donare", "donazione", "donazioni"]
          },
          respuesta: {
              es: "Podés colaborar con tareas relacionadas con la obra, electricidad, butacas, difusión, fotografías, papeles y otras necesidades. Hay tareas chicas y tareas más grandes, y todas suman. Todo es voluntario. Para ofrecer tu ayuda, comunicate desde Contacto.",
              en: "You can help with tasks related to the building works, electrics, seats, spreading the word, photos, paperwork and other needs. There are small tasks and bigger ones, and they all count. Everything is voluntary. To offer your help, get in touch through Contact.",
              it: "Puoi collaborare con compiti legati ai lavori, all’impianto elettrico, alle poltroncine, alla diffusione, alle fotografie, alle pratiche e ad altre necessità. Ci sono compiti piccoli e più grandi, e tutti contano. Tutto è volontario. Per offrire il tuo aiuto, scrivi dalla sezione Contatti."
          },
          botones: [{ ir: "contacto" }, { accion: "faq:tareas" }] },
        { id: "sin-ser-socio", categoria: "institucion",
          pregunta: { es: "¿Puedo ayudar aunque no sea socio?", en: "Can I help without being a member?", it: "Posso aiutare anche se non sono socio?" },
          claves: {
              es: ["sin ser socio", "no soy socio", "aunque no sea socio", "sin asociarme", "no ser socio"],
              en: ["without being a member", "i m not a member", "im not a member", "not a member"],
              it: ["senza essere socio", "non sono socio", "anche se non sono socio", "senza associarmi"]
          },
          respuesta: {
              es: "Sí. Además de los socios, hay un grupo de colaboradores: personas que se enteraron del reinicio y quisieron ayudar. También pueden sumarse amigos que no sean estudiantes.",
              en: "Yes. Besides the members, there is a group of collaborators: people who heard about the restart and wanted to help. Friends who aren’t students can join in too.",
              it: "Sì. Oltre ai soci, c’è un gruppo di collaboratori: persone che hanno saputo della ripartenza e hanno voluto aiutare. Possono unirsi anche amici che non sono studenti."
          },
          botones: [{ accion: "faq:colaborar" }] },
        { id: "tareas", categoria: "institucion",
          pregunta: { es: "¿Qué tipo de tareas necesitan?", en: "What kind of tasks are needed?", it: "Di che tipo di compiti c’è bisogno?" },
          boton: { es: "🧰 ¿Qué tareas necesitan?", en: "🧰 What tasks are needed?", it: "🧰 Di quali compiti c’è bisogno?" },
          claves: {
              es: ["que tareas", "tareas", "que necesitan", "que hace falta", "en que puedo ayudar"],
              en: ["what tasks", "tasks", "what do you need", "what is needed"],
              it: ["quali compiti", "compiti", "di cosa avete bisogno", "cosa serve", "in cosa posso aiutare"]
          },
          respuesta: {
              es: "Las ayudas concretas que pidió la comisión son: <b>instalaciones eléctricas</b>, <b>retiro de residuos</b>, <b>butacas</b> (ya empezaron a arreglarlas), <b>difusión</b>, <b>fotos</b> y <b>trámites o papeles</b>. También hay tareas simples, como barrer, y tareas de contenido.",
              en: "The specific help the committee asked for is: <b>electrical installations</b>, <b>waste removal</b>, <b>seats</b> (they’ve already started fixing them), <b>spreading the word</b>, <b>photos</b> and <b>paperwork</b>. There are also simple tasks, like sweeping, and content tasks.",
              it: "Gli aiuti concreti chiesti dal consiglio direttivo sono: <b>impianti elettrici</b>, <b>rimozione dei rifiuti</b>, <b>poltroncine</b> (hanno già iniziato a sistemarle), <b>diffusione</b>, <b>foto</b> e <b>pratiche e documenti</b>. Ci sono anche compiti semplici, come spazzare, e compiti di contenuto."
          },
          botones: [{ texto: { es: "📍 Ofrecer ayuda en Contacto", en: "📍 Offer help in Contact", it: "📍 Offri aiuto in Contatti" }, ir: "contacto" }] },
        { id: "comision", categoria: "institucion",
          pregunta: { es: "¿Hay una comisión actualmente?", en: "Is there a committee today?", it: "C’è un consiglio direttivo oggi?" },
          claves: {
              es: ["hay comision", "hay una comision", "comision directiva", "comision"],
              en: ["is there a committee", "board of directors", "committee", "board"],
              it: ["c e un consiglio", "consiglio direttivo", "commissione", "consiglio"]
          },
          respuesta: {
              es: "Sí. Hay una comisión nueva que arrancó prácticamente de cero: salió a buscar socios y reordenó papeles y vínculos. Trabaja junto a un grupo de colaboradores, y todo es voluntario.",
              en: "Yes. There is a new committee that started practically from scratch: it went out to find members and put papers and relationships back in order. It works alongside a group of collaborators, and everything is voluntary.",
              it: "Sì. C’è un nuovo consiglio direttivo partito praticamente da zero: è andato a cercare soci e ha rimesso in ordine documenti e rapporti. Lavora insieme a un gruppo di collaboratori, e tutto è volontario."
          },
          botones: [{ accion: "faq:quienes-forman" }] },
        { id: "jovenes",
          claves: {
              es: ["jovenes", "joven", "subcomision", "subcomisiones", "proponer una idea", "tengo una idea"],
              en: ["young people", "youth", "subcommittee", "subcommittees", "suggest an idea", "i have an idea"],
              it: ["giovani", "giovane", "sottocommissione", "sottocommissioni", "proporre un idea", "ho un idea"]
          },
          respuesta: {
              es: "Hay lugar para jóvenes en una subcomisión propia, para proponer ideas. Las subcomisiones están pensadas como lugares para sumarse: institucional, teatro, jóvenes e idiomas. La comisión deja probar ideas nuevas.",
              en: "There is room for young people in their own subcommittee, to suggest ideas. The subcommittees are meant as places to join in: institutional, theater, youth and languages. The committee lets people try out new ideas.",
              it: "C’è spazio per i giovani in una sottocommissione tutta loro, per proporre idee. Le sottocommissioni sono pensate come luoghi in cui unirsi: istituzionale, teatro, giovani e lingue. Il consiglio direttivo lascia provare idee nuove."
          },
          botones: [{ accion: "faq:colaborar" }] },
        { id: "logo",
          claves: {
              es: ["logo", "isologo", "escudo", "membrete"],
              en: ["logo", "emblem", "letterhead"],
              it: ["logo", "stemma", "carta intestata"]
          },
          respuesta: {
              es: "El sitio usa el logo «Teatro Marconi · Sociedad Italiana · Gálvez» que ves arriba, en el menú. En los archivos históricos no apareció un logo estable ni un membrete único: hay una bandera italiana muy vieja y cartas con distintos membretes.",
              en: "The site uses the “Teatro Marconi · Sociedad Italiana · Gálvez” logo you can see at the top, in the menu. No consistent logo or single letterhead turned up in the historical archives: there is a very old Italian flag and letters with different letterheads.",
              it: "Il sito usa il logo «Teatro Marconi · Sociedad Italiana · Gálvez» che vedi in alto, nel menu. Negli archivi storici non è emerso un logo stabile né un’unica carta intestata: c’è una bandiera italiana molto vecchia e lettere con intestazioni diverse."
          } },
        { id: "objetos",
          claves: {
              es: ["donar objetos", "donar un objeto", "objetos", "museo", "reliquias", "cosas viejas"],
              en: ["donate objects", "donate an object", "objects", "museum", "relics", "old things"],
              it: ["donare oggetti", "donare un oggetto", "oggetti", "museo", "cimeli", "cose vecchie"]
          },
          respuesta: {
              es: "Por ahora no se reciben objetos: no hay un depósito seco donde guardarlos. La idea de un pequeño museo les gusta, pero todavía no está en marcha.",
              en: "Objects can’t be accepted for now: there is no dry storage space to keep them. They like the idea of a small museum, but it isn’t under way yet.",
              it: "Per ora non si accettano oggetti: non c’è un deposito asciutto dove conservarli. L’idea di un piccolo museo piace, ma non è ancora partita."
          },
          botones: [{ texto: { es: "🤝 Otras formas de colaborar", en: "🤝 Other ways to help", it: "🤝 Altri modi per collaborare" }, accion: "faq:colaborar" }] },

        // --- El teatro ---
        { id: "que-es-teatro", categoria: "teatro",
          pregunta: { es: "¿Qué es el Teatro Marconi?", en: "What is Teatro Marconi?", it: "Che cos’è il Teatro Marconi?" },
          boton: { es: "🎭 Conocer el Teatro", en: "🎭 About the Theater", it: "🎭 Conoscere il Teatro" },
          claves: {
              es: ["que es el teatro", "teatro marconi", "conocer el teatro", "quiero conocer el teatro", "sobre el teatro", "el teatro"],
              en: ["what is the theater", "what is the theatre", "about the theater", "about the theatre", "the theater", "the theatre"],
              it: ["che cos e il teatro", "cos e il teatro", "conoscere il teatro", "il teatro"]
          },
          respuesta: {
              es: "El Teatro Marconi es el teatro de la Sociedad Italiana de Gálvez y el único de la ciudad pensado como teatro. Hoy está en obra: como dice el Inicio del sitio, «el teatro está volviendo».",
              en: "Teatro Marconi is the theater of the Italian Society of Gálvez and the only one in town that was designed as a theater. It is under renovation today: as the Home page says, “the theater is coming back”.",
              it: "Il Teatro Marconi è il teatro della Società Italiana di Gálvez e l’unico della città pensato come teatro. Oggi è in ristrutturazione: come dice la Home del sito, «il teatro sta tornando»."
          },
          botones: [{ ir: "teatro" }, { accion: "faq:obras" }] },
        { id: "importancia", categoria: "teatro",
          pregunta: { es: "¿Cuál es la importancia del teatro para Gálvez?", en: "Why does the theater matter to Gálvez?", it: "Perché il teatro è importante per Gálvez?" },
          claves: {
              es: ["importancia", "importante para galvez", "por que es importante", "para que sirve el teatro"],
              en: ["importance", "why is it important", "why does it matter", "important for galvez"],
              it: ["importanza", "perche e importante", "importante per galvez", "a cosa serve il teatro"]
          },
          respuesta: {
              es: "Es el único teatro de la ciudad pensado como teatro: otros espacios se usan, pero no fueron hechos para eso. Por eso la idea es proyectarlo como un bien cultural de Gálvez. La fórmula que usa la comisión es: «No es de nadie y es de todos».",
              en: "It is the only venue in town designed as a theater: other spaces are used, but they weren’t built for that. That’s why the idea is to project it as a cultural asset of Gálvez. The committee’s motto is: “It belongs to no one and to everyone.”",
              it: "È l’unico teatro della città pensato come teatro: altri spazi vengono usati, ma non sono nati per questo. Per questo l’idea è valorizzarlo come bene culturale di Gálvez. La formula del consiglio direttivo è: «Non è di nessuno ed è di tutti»."
          },
          botones: [{ accion: "faq:historia-teatro" }] },
        { id: "funcionando", categoria: "teatro",
          pregunta: { es: "¿El teatro está funcionando actualmente?", en: "Is the theater open now?", it: "Il teatro è aperto adesso?" },
          claves: {
              es: ["esta funcionando", "funcionando", "esta abierto", "abierto", "esta cerrado", "se puede visitar", "funciona"],
              en: ["is it open", "is it working", "open now", "is it closed", "can i visit", "visit it"],
              it: ["e aperto", "aperto", "e chiuso", "si puo visitare", "funziona"]
          },
          respuesta: {
              es: "El teatro está en obra. Todavía no hay una programación estable y, por ahora, el sitio no tiene funciones publicadas.",
              en: "The theater is under renovation. There is no regular program yet and, for now, the site has no shows published.",
              it: "Il teatro è in ristrutturazione. Non c’è ancora una programmazione stabile e, per ora, il sito non ha spettacoli pubblicati."
          },
          botones: [{ accion: "faq:obras" }, { ir: "funciones" }] },
        { id: "obras", categoria: "teatro",
          pregunta: { es: "¿Qué obras se están realizando?", en: "What works are being done?", it: "Quali lavori si stanno facendo?" },
          boton: { es: "🏗️ Cómo va la obra", en: "🏗️ How the works are going", it: "🏗️ Come vanno i lavori" },
          claves: {
              es: ["que obras", "obras", "la obra", "remodelacion", "arreglos", "refaccion", "reconstruccion", "techo", "banos", "avance"],
              en: ["what works", "the works", "building works", "renovation", "repairs", "rebuilding", "roof", "bathrooms", "progress"],
              it: ["quali lavori", "i lavori", "lavori", "ristrutturazione", "riparazioni", "ricostruzione", "tetto", "bagni", "avanzamento"]
          },
          respuesta: {
              es: "La obra está en marcha: <b>techo, paredes y baños</b>. El techo era el problema mayor, porque se llovía. Los baños se están rehaciendo porque los viejos no servían. El criterio es hacer la obra bien, para que dure, y no como un parche. En Historia hay fotos de cómo avanza.",
              en: "Work is under way on the <b>roof, walls and bathrooms</b>. The roof was the biggest problem, because it leaked. The bathrooms are being rebuilt because the old ones were unusable. The idea is to do the work properly, so it lasts, not as a quick patch. There are photos of the progress in History.",
              it: "I lavori sono in corso: <b>tetto, pareti e bagni</b>. Il tetto era il problema più grande, perché ci pioveva dentro. I bagni si stanno rifacendo perché quelli vecchi non erano utilizzabili. Il criterio è fare i lavori bene, perché durino, e non come una toppa. In Storia ci sono le foto dell’avanzamento."
          },
          botones: [{ ir: "historia" }, { texto: { es: "🤝 Ayudar con la obra", en: "🤝 Help with the works", it: "🤝 Aiutare con i lavori" }, accion: "faq:colaborar" }] },
        { id: "espacios", categoria: "teatro",
          pregunta: { es: "¿Qué espacios tiene?", en: "What spaces does it have?", it: "Quali spazi ha?" },
          boton: { es: "🏗️ Los espacios", en: "🏗️ The spaces", it: "🏗️ Gli spazi" },
          claves: {
              es: ["que espacios", "espacios", "salas", "sala", "que tiene el edificio", "el edificio", "piso de arriba"],
              en: ["what spaces", "spaces", "rooms", "hall", "the building", "upstairs"],
              it: ["quali spazi", "spazi", "sale", "sala", "l edificio", "piano di sopra"]
          },
          respuesta: {
              es: "Lo que se puede afirmar hoy: el <b>acceso y la sala</b> del teatro; el <b>piso de arriba</b>, donde funcionaron la secretaría y la escuela italiana; y los <b>baños</b>, que se están rehaciendo. Además está el <b>Microcine</b>, en la primera puerta a la derecha antes de la entrada principal.",
              en: "What can be said today: the theater’s <b>entrance and hall</b>; the <b>upstairs floor</b>, where the office and the Italian school used to be; and the <b>bathrooms</b>, which are being rebuilt. There is also the <b>Micro-cinema</b>, behind the first door on the right before the main entrance.",
              it: "Quello che si può affermare oggi: l’<b>ingresso e la sala</b> del teatro; il <b>piano di sopra</b>, dove c’erano la segreteria e la scuola italiana; e i <b>bagni</b>, che si stanno rifacendo. C’è poi il <b>Microcinema</b>, dietro la prima porta a destra prima dell’ingresso principale."
          },
          botones: [{ accion: "faq:microcine" }] },
        { id: "microcine", categoria: "teatro",
          pregunta: { es: "¿Qué es el microcine?", en: "What is the Micro-cinema?", it: "Che cos’è il Microcinema?" },
          boton: { es: "🎬 ¿Qué es el Microcine?", en: "🎬 What is the Micro-cinema?", it: "🎬 Che cos’è il Microcinema?" },
          claves: {
              es: ["que es el microcine", "microcine", "micro cine", "cine"],
              en: ["what is the micro cinema", "what is the microcinema", "micro cinema", "microcinema", "cinema"],
              it: ["che cos e il microcinema", "cos e il microcinema", "microcinema", "cinema"]
          },
          respuesta: {
              es: "Es un espacio dentro del edificio: comenzó a construirse en 2014 y se inauguró en 2015, en la primera puerta a la derecha antes de la entrada principal del teatro. Cuando se compró el edificio, en 2025, estaba sin proyector y sin pantalla.",
              en: "It’s a space inside the building: construction began in 2014 and it opened in 2015, behind the first door on the right before the theater’s main entrance. When the building was bought in 2025, it had neither projector nor screen.",
              it: "È uno spazio all’interno dell’edificio: la costruzione iniziò nel 2014 e fu inaugurato nel 2015, dietro la prima porta a destra prima dell’ingresso principale del teatro. Quando l’edificio è stato acquistato, nel 2025, era senza proiettore e senza schermo."
          },
          botones: [{ ir: "microcine" }] },
        { id: "abrir-microcine", categoria: "teatro",
          pregunta: { es: "¿Cuándo abre el Microcine?", en: "When will the Micro-cinema open?", it: "Quando apre il Microcinema?" },
          claves: {
              es: ["cuando abre el microcine", "apertura del microcine", "abre el microcine", "inauguran el microcine"],
              en: ["when does the micro cinema open", "when will the micro cinema open", "micro cinema opening", "microcinema opening"],
              it: ["quando apre il microcinema", "aprire il microcinema", "apertura del microcinema", "apre il microcinema"]
          },
          respuesta: {
              es: "Según la sección Futuro, la idea es abrir el Microcine cuando los baños estén terminados e inaugurados. Todavía no hay una fecha publicada.",
              en: "According to the Future section, the idea is to open the Micro-cinema once the bathrooms are finished and inaugurated. There is no published date yet.",
              it: "Secondo la sezione Futuro, l’idea è aprire il Microcinema quando i bagni saranno terminati e inaugurati. Non c’è ancora una data pubblicata."
          },
          botones: [{ ir: "futuro" }, { ir: "microcine" }] },
        { id: "funciones", categoria: "teatro",
          pregunta: { es: "¿Hay funciones actualmente?", en: "Are there any shows now?", it: "Ci sono spettacoli adesso?" },
          boton: { es: "🎟️ Las funciones", en: "🎟️ The shows", it: "🎟️ Gli spettacoli" },
          claves: {
              es: ["hay funciones", "funciones", "cartelera", "calendario", "calendario de funciones", "que dan", "obras de teatro", "espectaculos", "peliculas", "entradas", "proxima funcion", "donde veo las funciones", "donde puedo ver las funciones"],
              en: ["are there shows", "any shows", "shows", "calendar", "show calendar", "plays", "performances", "movies", "films", "tickets", "next show", "where can i see the shows", "what s on"],
              it: ["ci sono spettacoli", "spettacoli", "cartellone", "calendario", "calendario degli spettacoli", "programma", "proiezioni", "film", "biglietti", "prossimo spettacolo", "dove vedo gli spettacoli"]
          },
          respuesta: {
              es: "Por ahora no hay funciones publicadas: el teatro está en obra y todavía no hay una programación estable. Las funciones se publican en <b>Funciones</b> (Teatro) y en <b>Funciones del Microcine</b>.",
              en: "There are no shows published for now: the theater is under renovation and there is no regular program yet. Shows will be published in <b>Shows</b> (Theater) and <b>Micro-cinema screenings</b>.",
              it: "Per ora non ci sono spettacoli pubblicati: il teatro è in ristrutturazione e non c’è ancora una programmazione stabile. Gli spettacoli si pubblicano in <b>Spettacoli</b> (Teatro) e in <b>Proiezioni del Microcinema</b>."
          },
          botones: [{ ir: "funciones" }, { ir: "funciones-microcine" }] },
        { id: "compra", categoria: "teatro",
          pregunta: { es: "¿Cómo estaba el teatro cuando se compró?", en: "What was the theater like when it was bought?", it: "Com’era il teatro quando è stato acquistato?" },
          claves: {
              es: ["cuando se compro", "se compro", "compraron", "comprado", "compra del teatro", "puesto en venta", "venta", "como estaba", "2025"],
              en: ["when was it bought", "bought", "purchase", "for sale", "what was it like", "2025"],
              it: ["quando e stato acquistato", "acquistato", "comprato", "acquisto", "in vendita", "com era", "2025"]
          },
          respuesta: {
              es: "Según la sección Historia, el teatro fue puesto en venta y fue comprado en 2025. Ahí hay fotos de cómo estaba en ese momento: baños, techos y paredes deteriorados. Hoy el edificio está en remodelación.",
              en: "According to the History section, the theater was put up for sale and was bought in 2025. There are photos there of what it looked like at that time: damaged bathrooms, ceilings and walls. Today the building is being renovated.",
              it: "Secondo la sezione Storia, il teatro fu messo in vendita ed è stato acquistato nel 2025. Lì ci sono le foto di com’era in quel momento: bagni, soffitti e pareti deteriorati. Oggi l’edificio è in ristrutturazione."
          },
          botones: [{ ir: "historia" }, { accion: "faq:obras" }] },

        // --- La historia ---
        { id: "momentos", categoria: "historia",
          pregunta: { es: "¿Cuáles son los principales momentos de la historia?", en: "What are the main moments in its history?", it: "Quali sono i momenti principali della storia?" },
          boton: { es: "📜 Los principales momentos", en: "📜 The main moments", it: "📜 I momenti principali" },
          claves: {
              es: ["principales momentos", "momentos", "resumen de la historia", "contame la historia", "historia de la sociedad"],
              en: ["main moments", "key moments", "summary of the history", "tell me the history", "tell me the story", "history of the society"],
              it: ["momenti principali", "momenti", "riassunto della storia", "raccontami la storia", "storia della societa"]
          },
          respuesta: {
              es: "En pocas palabras: una <b>mutual de inmigrantes</b> que prestó servicios de salud y tuvo una escuela italiana. Una <b>sala</b> que durante décadas fue el centro cultural de la ciudad. Un <b>corte</b>, en el que se perdieron papeles, socios y vínculos. Y una <b>comisión nueva</b> que recupera el edificio antes de que deje de ser teatro.",
              en: "In a few words: an <b>immigrants’ mutual aid society</b> that provided health services and had an Italian school. A <b>hall</b> that for decades was the cultural center of the town. A <b>break</b>, in which papers, members and ties were lost. And a <b>new committee</b> that is recovering the building before it stops being a theater.",
              it: "In poche parole: una <b>mutua di immigrati</b> che offriva servizi sanitari e aveva una scuola italiana. Una <b>sala</b> che per decenni è stata il centro culturale della città. Una <b>frattura</b>, in cui si sono persi documenti, soci e legami. E un <b>nuovo consiglio direttivo</b> che recupera l’edificio prima che smetta di essere un teatro."
          },
          botones: [{ accion: "faq:origen" }, { ir: "historia" }] },
        { id: "origen", categoria: "historia",
          pregunta: { es: "¿Cuál es el origen de la Sociedad Italiana?", en: "What are the origins of the Italian Society?", it: "Quali sono le origini della Società Italiana?" },
          boton: { es: "📅 Fechas clave", en: "📅 Key dates", it: "📅 Date chiave" },
          claves: {
              es: ["cual es el origen", "origen", "cuando se fundo", "fundacion", "fundada", "como empezo", "como nacio", "cuantos anos tiene", "antiguedad", "1897", "1910"],
              en: ["origins", "origin", "when was it founded", "founded", "founding", "how did it start", "how old is it", "1897", "1910"],
              it: ["origini", "origine", "quando e stata fondata", "fondata", "fondazione", "come e nata", "quanti anni ha", "1897", "1910"]
          },
          respuesta: {
              es: "Según la sección Historia, la entidad dio sus primeros pasos a fines del siglo XIX: hay registros de la solicitud de aprobación de sus estatutos como Sociedad Italiana de Socorros Mutuos ante el Ministerio de Gobierno de Santa Fe en <b>1897</b>. La fecha fundacional consolidada, que la institución celebra formalmente, es el <b>9 de enero de 1910</b>.",
              en: "According to the History section, the institution took its first steps at the end of the 19th century: there are records of its application to the Ministry of Government of Santa Fe for approval of its statutes as the Sociedad Italiana de Socorros Mutuos in <b>1897</b>. The consolidated founding date, which the institution formally celebrates, is <b>January 9, 1910</b>: it was created to bring together the Italian immigrants of the area.",
              it: "Secondo la sezione Storia, l’ente mosse i primi passi alla fine dell’Ottocento: esistono documenti della richiesta di approvazione dei suoi statuti come Società Italiana di Mutuo Soccorso al Ministero di Governo di Santa Fe nel <b>1897</b>. La data di fondazione consolidata, che l’istituzione celebra ufficialmente, è il <b>9 gennaio 1910</b>."
          },
          botones: [{ ir: "historia" }] },
        { id: "mutual", categoria: "historia",
          pregunta: { es: "¿Fue una mutual?", en: "Was it a mutual aid society?", it: "Era una società di mutuo soccorso?" },
          claves: {
              es: ["fue una mutual", "mutual", "socorros mutuos", "mutualidad"],
              en: ["mutual aid", "mutual society", "was it a mutual"],
              it: ["mutuo soccorso", "mutua", "era una mutua"]
          },
          respuesta: {
              es: "Sí. Nació como Sociedad Italiana de Socorros Mutuos: una mutual de inmigrantes. Hoy está inscripta en el Registro Nacional de Mutuales con el número 166.",
              en: "Yes. It was founded as the Sociedad Italiana de Socorros Mutuos (Italian Mutual Aid Society): an immigrants’ mutual aid society. Today it is registered in the National Registry of Mutual Societies under number 166.",
              it: "Sì. Nacque come Società Italiana di Mutuo Soccorso: una mutua di immigrati. Oggi è iscritta al Registro Nazionale delle Mutue con il numero 166."
          },
          botones: [{ accion: "faq:servicios" }] },
        { id: "servicios", categoria: "historia",
          pregunta: { es: "¿Qué servicios tenía originalmente?", en: "What services did it originally offer?", it: "Quali servizi offriva in origine?" },
          boton: { es: "🩺 ¿Qué servicios tenía?", en: "🩺 What services did it offer?", it: "🩺 Quali servizi offriva?" },
          claves: {
              es: ["que servicios", "servicios", "que ofrecia", "que hacia la mutual"],
              en: ["what services", "services", "what did it offer"],
              it: ["quali servizi", "servizi", "cosa offriva"]
          },
          respuesta: {
              es: "Los primeros servicios que se recuerdan fueron de <b>salud</b>, con un convenio ligado a Rosario, como correspondía a una mutual. Además, en el piso de arriba funcionaron la secretaría y la escuela italiana. Es parte del origen: hoy la Sociedad no presta servicios de salud.",
              en: "The first services people remember were <b>health</b> services, through an agreement linked to Rosario, as befitted a mutual aid society. The office and the Italian school were also upstairs. That is part of its origins: today the Society does not provide health services.",
              it: "I primi servizi che si ricordano erano <b>sanitari</b>, con una convenzione legata a Rosario, come si addiceva a una mutua. Inoltre, al piano di sopra c’erano la segreteria e la scuola italiana. Fa parte delle origini: oggi la Società non offre servizi sanitari."
          },
          botones: [{ accion: "faq:escuela" }] },
        { id: "escuela", categoria: "historia",
          pregunta: { es: "¿Funcionó una escuela italiana?", en: "Was there an Italian school?", it: "C’era una scuola italiana?" },
          boton: { es: "🏫 La escuela italiana", en: "🏫 The Italian school", it: "🏫 La scuola italiana" },
          claves: {
              es: ["escuela italiana", "escuela", "colegio", "clases antes"],
              en: ["italian school", "school"],
              it: ["scuola italiana", "scuola"]
          },
          respuesta: {
              es: "Sí. En el piso de arriba del edificio funcionaron la secretaría y la escuela italiana. Es parte de la historia de la institución, no una actividad actual.",
              en: "Yes. The office and the Italian school were on the upper floor of the building. It is part of the institution’s history, not a current activity.",
              it: "Sì. Al piano di sopra dell’edificio c’erano la segreteria e la scuola italiana. Fa parte della storia dell’istituzione, non è un’attività attuale."
          },
          botones: [{ ir: "historia" }] },
        { id: "salud", categoria: "historia",
          pregunta: { es: "¿Qué relación tenía con la salud?", en: "What was its connection with health care?", it: "Che rapporto aveva con la salute?" },
          claves: {
              es: ["relacion con la salud", "tenia con la salud", "con la salud", "salud", "medico", "hospital"],
              en: ["health care", "healthcare", "health", "doctor", "hospital"],
              it: ["rapporto con la salute", "con la salute", "salute", "sanita", "medico", "ospedale"]
          },
          respuesta: {
              es: "Como mutual, sus primeros servicios fueron de salud, con un convenio ligado a Rosario. Eso pertenece al origen de la institución: hoy no hay prestación de salud.",
              en: "As a mutual aid society, its first services were health services, through an agreement linked to Rosario. That belongs to the institution’s origins: there are no health services today.",
              it: "Come mutua, i suoi primi servizi erano sanitari, con una convenzione legata a Rosario. Questo appartiene alle origini dell’istituzione: oggi non ci sono servizi sanitari."
          },
          botones: [{ accion: "faq:momentos" }] },
        { id: "que-paso", categoria: "historia",
          pregunta: { es: "¿Qué pasó con la institución?", en: "What happened to the institution?", it: "Cosa è successo all’istituzione?" },
          claves: {
              es: ["que paso con la institucion", "que paso", "que le paso", "por que cerro", "cerro", "abandonado", "abandonada", "estuvo cerrado"],
              en: ["what happened", "what happened to the institution", "why did it close", "abandoned", "was it closed"],
              it: ["cosa e successo", "che e successo", "perche ha chiuso", "abbandonato", "abbandonata", "era chiuso"]
          },
          respuesta: {
              es: "Hubo un corte en el que se perdieron papeles, socios y vínculos. La comisión actual arrancó prácticamente de cero: salió a buscar socios, reordenó papeles y vínculos, y hoy recupera el edificio antes de que deje de ser teatro.",
              en: "There was a break in which papers, members and ties were lost. The current committee started practically from scratch: it went out to find members, put papers and relationships back in order, and today it is recovering the building before it stops being a theater.",
              it: "C’è stata una frattura in cui si sono persi documenti, soci e legami. L’attuale consiglio direttivo è partito praticamente da zero: è andato a cercare soci, ha rimesso in ordine documenti e rapporti, e oggi recupera l’edificio prima che smetta di essere un teatro."
          },
          botones: [{ accion: "faq:obras" }] },
        { id: "inmigrantes", categoria: "historia",
          pregunta: { es: "¿Qué se sabe sobre sus primeros inmigrantes?", en: "What is known about its first immigrants?", it: "Cosa si sa dei primi immigrati?" },
          claves: {
              es: ["primeros inmigrantes", "inmigrantes", "inmigracion", "primeros italianos", "fundadores", "mis antepasados", "region de italia", "de donde venian"],
              en: ["first immigrants", "immigrants", "immigration", "first italians", "founders", "my ancestors", "region of italy", "where did they come from"],
              it: ["primi immigrati", "immigrati", "immigrazione", "primi italiani", "fondatori", "i miei antenati", "regione d italia", "da dove venivano"]
          },
          respuesta: {
              es: "La historia de los primeros inmigrantes que llegaron a la ciudad todavía no está escrita: hoy es tradición oral. La comisión quiere juntar esos relatos para que cada familia pueda reconocer de qué región de Italia venían los suyos. Si tenés fotos o historias, podés acercarlas desde Contacto.",
              en: "The story of the first immigrants who came to the town has not been written yet: today it is oral tradition. The committee wants to collect those stories so every family can find out which region of Italy their people came from. If you have photos or stories, you can share them through Contact.",
              it: "La storia dei primi immigrati arrivati in città non è ancora stata scritta: oggi è tradizione orale. Il consiglio direttivo vuole raccogliere quei racconti perché ogni famiglia possa riconoscere da quale regione d’Italia venivano i propri cari. Se hai foto o storie, puoi condividerle dalla sezione Contatti."
          },
          botones: [{ ir: "contacto" }] },
        { id: "historia-teatro", categoria: "historia",
          pregunta: { es: "¿Cuál es la historia del teatro?", en: "What is the theater’s history?", it: "Qual è la storia del teatro?" },
          boton: { es: "📜 La historia del teatro", en: "📜 The theater’s history", it: "📜 La storia del teatro" },
          claves: {
              es: ["historia del teatro", "cuando se construyo el teatro", "teatro antes", "el teatro antiguamente"],
              en: ["history of the theater", "history of the theatre", "theater history", "theater s history", "when was the theater built"],
              it: ["storia del teatro", "quando e stato costruito il teatro", "il teatro una volta"]
          },
          respuesta: {
              es: "Del teatro hay memoria viva y pocas fotos, sobre todo de escenario, de los años sesenta a los noventa. Se recuerdan coros de escuelas y funciones que movían a los chicos del pueblo. Durante décadas fue el centro cultural de la ciudad.",
              en: "The theater lives on in people’s memories, with few photos, mostly taken on stage between the sixties and the nineties. People remember school choirs and shows that drew the town’s children. For decades it was the cultural center of the town.",
              it: "Del teatro resta una memoria viva e poche foto, soprattutto di scena, dagli anni Sessanta agli anni Novanta. Si ricordano cori di scuole e spettacoli che coinvolgevano i bambini del paese. Per decenni è stato il centro culturale della città."
          },
          botones: [{ texto: { es: "🏠 Ver el teatro antes de la remodelación", en: "🏠 See the theater before the renovation", it: "🏠 Vedi il teatro prima della ristrutturazione" }, ir: "inicio" }] },
        { id: "decadas", categoria: "historia",
          pregunta: { es: "¿Qué importancia tuvo el teatro durante décadas?", en: "How important was the theater over the decades?", it: "Che importanza ha avuto il teatro per decenni?" },
          claves: {
              es: ["durante decadas", "decadas", "importancia tuvo", "antes era", "en su epoca"],
              en: ["for decades", "decades", "in its day", "back in the day"],
              it: ["per decenni", "decenni", "ai suoi tempi", "una volta era"]
          },
          respuesta: {
              es: "Durante décadas, la sala fue el centro cultural de la ciudad: hubo coros de escuelas y funciones que reunían a los chicos del pueblo.",
              en: "For decades, the hall was the cultural center of the town: there were school choirs and shows that brought the town’s children together.",
              it: "Per decenni la sala è stata il centro culturale della città: c’erano cori di scuole e spettacoli che riunivano i bambini del paese."
          },
          botones: [{ accion: "faq:historia-teatro" }] },
        { id: "material", categoria: "historia",
          pregunta: { es: "¿Existe material histórico?", en: "Is there historical material?", it: "Esiste materiale storico?" },
          claves: {
              es: ["material historico", "fotos antiguas", "fotos viejas", "archivo", "documentos", "papeles historicos"],
              en: ["historical material", "old photos", "archive", "archives", "documents", "historical papers"],
              it: ["materiale storico", "foto antiche", "foto vecchie", "archivio", "documenti", "carte storiche"]
          },
          respuesta: {
              es: "Hay pocas fotos, sobre todo de escenario, de los años sesenta a los noventa, y papeles de otras comisiones que todavía se están revisando. En los archivos no apareció un logo estable: hay una bandera italiana muy vieja y cartas con distintos membretes. Si tenés fotos ligadas a la Sociedad o al teatro, la comisión quiere juntarlas.",
              en: "There are few photos, mostly taken on stage between the sixties and the nineties, and papers from earlier committees that are still being reviewed. No consistent logo turned up in the archives: there is a very old Italian flag and letters with different letterheads. If you have photos related to the Society or the theater, the committee would like to collect them.",
              it: "Ci sono poche foto, soprattutto di scena, dagli anni Sessanta agli anni Novanta, e documenti di altri consigli direttivi che si stanno ancora esaminando. Negli archivi non è emerso un logo stabile: c’è una bandiera italiana molto vecchia e lettere con intestazioni diverse. Se hai foto legate alla Società o al teatro, il consiglio direttivo vuole raccoglierle."
          },
          botones: [{ texto: { es: "📍 Acercar fotos desde Contacto", en: "📍 Share photos through Contact", it: "📍 Condividi foto da Contatti" }, ir: "contacto" }, { ir: "historia" }] },
        { id: "estudiantes", categoria: "historia",
          pregunta: { es: "¿Qué hacen los chicos de la Escuela de Comercio?", en: "What are the Escuela de Comercio students doing?", it: "Cosa fanno i ragazzi della Escuela de Comercio?" },
          claves: {
              es: ["escuela de comercio", "chicos de la escuela", "estudiantes", "alumnos", "concurso", "sitio web", "pagina web", "quien hizo la pagina", "quien hizo el sitio"],
              en: ["school of commerce", "escuela de comercio", "students", "contest", "competition", "website", "who made the website", "who made this site"],
              it: ["scuola di commercio", "escuela de comercio", "studenti", "ragazzi della scuola", "concorso", "sito web", "chi ha fatto il sito"]
          },
          respuesta: {
              es: "Los estudiantes del terciario de la Escuela de Comercio participan de un concurso para preparar el sitio web de la Sociedad Italiana: la mejor página de los tres grupos será la que use la institución. En Historia hay fotos de los chicos en la Sociedad.",
              en: "Students from the higher-education program of the Escuela de Comercio are taking part in a contest to build the Italian Society’s website: the best of the three groups’ sites will be the one the institution uses. There are photos of the students at the Society in History.",
              it: "Gli studenti del corso terziario della Escuela de Comercio partecipano a un concorso per realizzare il sito web della Società Italiana: il miglior sito dei tre gruppi sarà quello che userà l’istituzione. In Storia ci sono le foto dei ragazzi alla Società."
          },
          botones: [{ ir: "historia" }] },

        // --- La cultura ---
        { id: "actividades-cultura", categoria: "cultura",
          pregunta: { es: "¿Qué actividades de cultura italiana existen?", en: "What Italian culture activities are there?", it: "Quali attività di cultura italiana ci sono?" },
          claves: {
              es: ["actividades de cultura", "actividades culturales", "que actividades", "actividades", "talleres"],
              en: ["cultural activities", "what activities", "activities", "workshops"],
              it: ["attivita culturali", "quali attivita", "attivita", "laboratori"]
          },
          respuesta: {
              es: "Hoy la cultura italiana en la Sociedad pasa por fechas, comida, memoria familiar e idioma. La comisión quiere recuperar el Día del Inmigrante y el Día de Italia, pero todavía no hay actos con fecha publicada. En el sitio, la sección Cultura italiana reúne contenidos de cada tema.",
              en: "Today, Italian culture at the Society is about dates, food, family memories and language. The committee wants to bring back Immigrant’s Day and Italy Day, but no events have a published date yet. On the site, the Italian culture section gathers content on each topic.",
              it: "Oggi la cultura italiana nella Società passa per le ricorrenze, il cibo, la memoria familiare e la lingua. Il consiglio direttivo vuole recuperare la Giornata dell’Immigrato e la Giornata dell’Italia, ma non ci sono ancora eventi con data pubblicata. Sul sito, la sezione Cultura italiana raccoglie contenuti su ogni tema."
          },
          botones: [{ ir: "cultura" }] },
        { id: "cultura-institucion", categoria: "cultura",
          pregunta: { es: "¿Qué es la cultura italiana para la institución?", en: "What does Italian culture mean to the institution?", it: "Cosa significa la cultura italiana per l’istituzione?" },
          claves: {
              es: ["cultura para la institucion", "que es la cultura italiana para", "que significa la cultura"],
              en: ["culture mean to the institution", "what does italian culture mean"],
              it: ["cultura per l istituzione", "cosa significa la cultura italiana"]
          },
          respuesta: {
              es: "Para la Sociedad, la cultura italiana pasa por las fechas, la comida, la memoria familiar y el idioma. Hoy no pasa por un servicio de salud.",
              en: "For the Society, Italian culture is about dates, food, family memories and language. Today it is not about a health service.",
              it: "Per la Società, la cultura italiana passa per le ricorrenze, il cibo, la memoria familiare e la lingua. Oggi non passa per un servizio sanitario."
          },
          botones: [{ ir: "cultura" }] },
        { id: "platos", categoria: "cultura",
          pregunta: { es: "¿Qué platos típicos italianos hay?", en: "What are some typical Italian dishes?", it: "Quali sono i piatti tipici italiani?" },
          claves: {
              es: ["platos tipicos", "platos", "comida italiana", "comida", "comidas", "cocina", "recetas", "pizza", "pasta", "risotto", "gelato", "tiramisu", "gastronomia"],
              en: ["typical dishes", "dishes", "italian food", "food", "cooking", "recipes", "pizza", "pasta", "risotto", "gelato", "tiramisu", "cuisine"],
              it: ["piatti tipici", "piatti", "cibo italiano", "cibo", "cucina italiana", "ricette", "pizza", "pasta", "risotto", "gelato", "tiramisu", "gastronomia"]
          },
          respuesta: {
              es: "Según la página de Gastronomía italiana, algunos platos tradicionales son la <b>pizza</b> (sobre todo la napolitana), la <b>pasta</b> (espaguetis, ravioles, lasaña), el <b>risotto</b>, el <b>gelato</b> y el <b>tiramisú</b>. Las recetas cambian según la región: en el norte son comunes el arroz y la manteca; en el sur, el aceite de oliva, el tomate y la pasta.",
              en: "According to the Italian food page, some traditional dishes are <b>pizza</b> (especially Neapolitan), <b>pasta</b> (spaghetti, ravioli, lasagna), <b>risotto</b>, <b>gelato</b> and <b>tiramisu</b>. Recipes change by region: rice and butter are common in the north; olive oil, tomato and pasta in the south.",
              it: "Secondo la pagina Gastronomia italiana, alcuni piatti tradizionali sono la <b>pizza</b> (soprattutto quella napoletana), la <b>pasta</b> (spaghetti, ravioli, lasagne), il <b>risotto</b>, il <b>gelato</b> e il <b>tiramisù</b>. Le ricette cambiano da regione a regione: al nord sono comuni il riso e il burro; al sud l’olio d’oliva, il pomodoro e la pasta."
          },
          botones: [{ ir: "gastronomia" }, { accion: "faq:gastronomia" }] },
        { id: "gastronomia", categoria: "cultura",
          pregunta: { es: "¿Se realizan actividades gastronómicas?", en: "Are there any food events?", it: "Si organizzano attività gastronomiche?" },
          claves: {
              es: ["actividades gastronomicas", "eventos gastronomicos", "cenas", "almuerzos de la sociedad"],
              en: ["food events", "food activities", "dinners"],
              it: ["attivita gastronomiche", "eventi gastronomici", "cene"]
          },
          respuesta: {
              es: "Las comidas y tradiciones, como la bagna cauda, son parte de la identidad de la Sociedad, pero por ahora no hay eventos gastronómicos publicados: la idea es empezar por cosas simples. En el sitio podés ver la página de Gastronomía italiana.",
              en: "Food and traditions, like bagna cauda, are part of the Society’s identity, but for now there are no food events published: the idea is to start with simple things. On the site you can see the Italian food page.",
              it: "I cibi e le tradizioni, come la bagna cauda, fanno parte dell’identità della Società, ma per ora non ci sono eventi gastronomici pubblicati: l’idea è cominciare da cose semplici. Sul sito puoi vedere la pagina Gastronomia italiana."
          },
          botones: [{ ir: "gastronomia" }] },
        { id: "bagna", categoria: "cultura",
          pregunta: { es: "¿Qué es la bagna cauda?", en: "What is bagna cauda?", it: "Che cos’è la bagna cauda?" },
          claves: { es: ["bagna cauda", "bagna", "bagnacauda"] },
          respuesta: {
              es: "La bagna cauda es una de las comidas y tradiciones que la Sociedad reconoce como parte de su identidad italiana. Hoy no hay un evento de bagna cauda organizado ni publicado.",
              en: "Bagna cauda is one of the dishes and traditions the Society sees as part of its Italian identity. There is no bagna cauda event organized or published today.",
              it: "La bagna cauda è uno dei cibi e delle tradizioni che la Società riconosce come parte della sua identità italiana. Oggi non c’è un evento di bagna cauda organizzato né pubblicato."
          } },
        { id: "cursos", categoria: "cultura",
          pregunta: { es: "¿Hay cursos de italiano?", en: "Are there Italian courses?", it: "Ci sono corsi di italiano?" },
          claves: {
              es: ["cursos de italiano", "curso de italiano", "clases de italiano", "aprender italiano", "estudiar italiano", "italiano"],
              en: ["italian courses", "italian course", "italian classes", "learn italian", "study italian", "italian lessons"],
              it: ["corsi di italiano", "corso di italiano", "lezioni di italiano", "imparare l italiano", "studiare l italiano"]
          },
          respuesta: {
              es: "Por ahora no hay cursos de italiano confirmados en la Sociedad. Lo que sí tiene el sitio es el tutor interactivo de <b>Idioma italiano</b>: soy yo, con 18 lecciones en tres niveles.",
              en: "For now there are no confirmed Italian courses at the Society. What the site does have is the interactive tutor in <b>Italian language</b>: that’s me, with 18 lessons in three levels.",
              it: "Per ora non ci sono corsi di italiano confermati alla Società. Quello che il sito ha è il tutor interattivo di <b>Lingua italiana</b>: sono io, con 18 lezioni su tre livelli."
          },
          botones: [{ ir: "idioma" }] },
        { id: "idioma-italiano", categoria: "cultura",
          pregunta: { es: "¿Qué se cuenta sobre el idioma italiano?", en: "What does the site say about the Italian language?", it: "Cosa si dice sulla lingua italiana?" },
          claves: {
              es: ["idioma italiano", "el idioma", "idioma", "lengua italiana", "dialectos", "dialecto", "latin", "palabras en italiano", "como se dice"],
              en: ["italian language", "the language", "language", "dialects", "dialect", "latin", "words in italian", "how do you say"],
              it: ["lingua italiana", "la lingua", "lingua", "dialetti", "dialetto", "latino", "parole in italiano", "come si dice"]
          },
          respuesta: {
              es: "El idioma oficial de Italia es el italiano, que deriva del latín, como el español, el francés y el portugués. Algunas palabras comunes: <i>ciao</i> (hola / chau), <i>grazie</i> (gracias), <i>prego</i> (de nada). Además existen dialectos y lenguas regionales, como el sardo, el friulano y el napolitano. En la misma página está mi tutor de italiano.",
              en: "Italy’s official language is Italian, which comes from Latin, like Spanish, French and Portuguese. Some common words: <i>ciao</i> (hi / bye), <i>grazie</i> (thank you), <i>prego</i> (you’re welcome). There are also dialects and regional languages, such as Sardinian, Friulian and Neapolitan. My Italian tutor is on the same page.",
              it: "La lingua ufficiale dell’Italia è l’italiano, che deriva dal latino, come lo spagnolo, il francese e il portoghese. Alcune parole comuni: <i>ciao</i>, <i>grazie</i>, <i>prego</i>. Esistono inoltre dialetti e lingue regionali, come il sardo, il friulano e il napoletano. Nella stessa pagina c’è il mio tutor di italiano."
          },
          botones: [{ ir: "idioma" }] },
        { id: "ciudadania", categoria: "cultura",
          pregunta: { es: "¿Hay información sobre ciudadanía italiana?", en: "Is there information about Italian citizenship?", it: "Ci sono informazioni sulla cittadinanza italiana?" },
          claves: { es: ["informacion sobre ciudadania"], en: ["information about citizenship"], it: ["informazioni sulla cittadinanza"] },
          respuesta: {
              es: "Es un tema que le interesa a la comisión, porque mucha información oficial está en italiano. Pero hoy la Sociedad no ofrece asesoramiento de ciudadanía ni recepción de votos: es una idea que todavía no está armada.",
              en: "It’s a topic the committee cares about, because a lot of official information is in Italian. But today the Society does not offer citizenship advice or collect votes: it’s an idea that hasn’t taken shape yet.",
              it: "È un tema che interessa al consiglio direttivo, perché molte informazioni ufficiali sono in italiano. Ma oggi la Società non offre consulenza sulla cittadinanza né raccolta di voti: è un’idea non ancora definita."
          } },
        { id: "actividades-italia", categoria: "cultura",
          pregunta: { es: "¿Se realizan actividades relacionadas con Italia?", en: "Are there activities related to Italy?", it: "Si organizzano attività legate all’Italia?" },
          claves: {
              es: ["actividades relacionadas con italia", "actividades con italia", "actividades italianas", "dia de italia", "dia del inmigrante"],
              en: ["activities related to italy", "italian activities", "italy day", "immigrant s day", "immigrants day"],
              it: ["attivita legate all italia", "attivita italiane", "giornata dell italia", "giornata dell immigrato"]
          },
          respuesta: {
              es: "La comisión quiere recuperar fechas como el <b>Día del Inmigrante</b> y el <b>Día de Italia</b>, pero todavía no hay actos con fecha publicada. Si se confirman, el lugar para verlos es Eventos y noticias.",
              en: "The committee wants to bring back dates such as <b>Immigrant’s Day</b> and <b>Italy Day</b>, but no events have a published date yet. If they are confirmed, you’ll find them in Events and news.",
              it: "Il consiglio direttivo vuole recuperare ricorrenze come la <b>Giornata dell’Immigrato</b> e la <b>Giornata dell’Italia</b>, ma non ci sono ancora eventi con data pubblicata. Se verranno confermati, li troverai in Eventi e notizie."
          },
          botones: [{ ir: "eventos" }] },
        { id: "historia-italia", categoria: "cultura",
          pregunta: { es: "¿Qué se cuenta sobre la historia de Italia?", en: "What does the site say about Italy’s history?", it: "Cosa si racconta sulla storia dell’Italia?" },
          claves: {
              es: ["historia de italia", "imperio romano", "romanos", "roma antigua", "renacimiento", "leonardo", "da vinci", "miguel angel", "rafael", "coliseo", "foro romano"],
              en: ["history of italy", "italy s history", "italian history", "roman empire", "romans", "ancient rome", "renaissance", "leonardo", "da vinci", "michelangelo", "raphael", "colosseum", "roman forum"],
              it: ["storia d italia", "storia dell italia", "impero romano", "romani", "roma antica", "rinascimento", "leonardo", "da vinci", "michelangelo", "raffaello", "colosseo", "foro romano"]
          },
          respuesta: {
              es: "Según la página Historia y origen: en Italia surgió el <b>Imperio romano</b>, que influyó enormemente en el derecho, la arquitectura, la lengua y la organización de muchos países. Entre los siglos XIV y XVI se desarrolló el <b>Renacimiento</b>, que impulsó la pintura, la escultura, la ciencia y la literatura, con figuras como Leonardo da Vinci, Miguel Ángel y Rafael.",
              en: "According to the History and origins page: Italy was the birthplace of the <b>Roman Empire</b>, which had an enormous influence on the law, architecture, language and organization of many countries. Between the 14th and 16th centuries came the <b>Renaissance</b>, which boosted painting, sculpture, science and literature, with figures such as Leonardo da Vinci, Michelangelo and Raphael.",
              it: "Secondo la pagina Storia e origini: in Italia nacque l’<b>Impero romano</b>, che influenzò enormemente il diritto, l’architettura, la lingua e l’organizzazione di molti paesi. Tra il XIV e il XVI secolo si sviluppò il <b>Rinascimento</b>, che diede impulso alla pittura, alla scultura, alla scienza e alla letteratura, con figure come Leonardo da Vinci, Michelangelo e Raffaello."
          },
          botones: [{ ir: "cultura-historia" }] },
        { id: "costumbres", categoria: "cultura",
          pregunta: { es: "¿Qué costumbres familiares italianas se cuentan?", en: "What Italian family customs are described?", it: "Quali usanze familiari italiane si raccontano?" },
          claves: {
              es: ["costumbres", "costumbres italianas", "familia italiana", "familia", "almuerzo del domingo", "gestos", "gestos con las manos", "tradiciones familiares"],
              en: ["customs", "italian customs", "italian family", "family", "sunday lunch", "gestures", "hand gestures", "family traditions"],
              it: ["usanze", "usanze italiane", "famiglia italiana", "famiglia", "pranzo della domenica", "gesti", "gesti delle mani", "tradizioni familiari"]
          },
          respuesta: {
              es: "Según la página Familia y costumbres, la familia y las reuniones tienen gran importancia en muchas comunidades italianas. Algunas costumbres conocidas: almorzar juntos los domingos, compartir comidas largas, conversar en cafés y plazas, expresarse con gestos de las manos y celebrar fiestas familiares y religiosas. Varían según la familia y la región.",
              en: "According to the Family and customs page, family and gatherings are very important in many Italian communities. Some well-known customs: Sunday lunch together, sharing long meals, chatting in cafés and squares, talking with hand gestures and celebrating family and religious holidays. They vary by family and region.",
              it: "Secondo la pagina Famiglia e usanze, la famiglia e i momenti insieme hanno grande importanza in molte comunità italiane. Alcune usanze conosciute: il pranzo della domenica insieme, i lunghi pasti condivisi, le chiacchiere nei caffè e nelle piazze, i gesti delle mani e le feste familiari e religiose. Variano da famiglia a famiglia e da regione a regione."
          },
          botones: [{ ir: "familia" }] },
        { id: "arte", categoria: "cultura",
          pregunta: { es: "¿Qué aportes artísticos tiene Italia?", en: "What are Italy’s artistic contributions?", it: "Quali sono i contributi artistici dell’Italia?" },
          claves: {
              es: ["bellas artes", "arte italiano", "arte", "pintura", "escultura", "opera", "verdi", "puccini", "arquitectura", "torre de pisa", "venecia", "moda", "milan", "david"],
              en: ["fine arts", "italian art", "art", "painting", "sculpture", "opera", "verdi", "puccini", "architecture", "tower of pisa", "leaning tower", "venice", "fashion", "milan", "david"],
              it: ["belle arti", "arte italiana", "arte", "pittura", "scultura", "opera", "verdi", "puccini", "architettura", "torre di pisa", "venezia", "moda", "milano", "david"]
          },
          respuesta: {
              es: "Según la página Bellas artes, Italia se destaca en <b>pintura y escultura</b> (Leonardo da Vinci y Miguel Ángel), <b>ópera</b> (Giuseppe Verdi y Giacomo Puccini), <b>arquitectura</b> (el Coliseo de Roma, la Torre de Pisa y los edificios históricos de Venecia) y <b>moda</b> (Milán es reconocida internacionalmente).",
              en: "According to the Fine arts page, Italy stands out in <b>painting and sculpture</b> (Leonardo da Vinci and Michelangelo), <b>opera</b> (Giuseppe Verdi and Giacomo Puccini), <b>architecture</b> (the Colosseum in Rome, the Leaning Tower of Pisa and the historic buildings of Venice) and <b>fashion</b> (Milan is internationally renowned).",
              it: "Secondo la pagina Belle arti, l’Italia si distingue nella <b>pittura e scultura</b> (Leonardo da Vinci e Michelangelo), nell’<b>opera</b> (Giuseppe Verdi e Giacomo Puccini), nell’<b>architettura</b> (il Colosseo di Roma, la Torre di Pisa e gli edifici storici di Venezia) e nella <b>moda</b> (Milano è riconosciuta a livello internazionale)."
          },
          botones: [{ ir: "arte" }] },
        { id: "fiestas", categoria: "cultura",
          pregunta: { es: "¿Qué fiestas y tradiciones italianas se cuentan?", en: "What Italian festivals and traditions are described?", it: "Quali feste e tradizioni italiane si raccontano?" },
          claves: {
              es: ["fiestas italianas", "fiestas", "tradiciones", "carnaval", "carnaval de venecia", "mascaras", "palio", "palio de siena", "navidad", "pesebre", "ferragosto", "15 de agosto"],
              en: ["italian festivals", "festivals", "traditions", "carnival", "carnival of venice", "venice carnival", "masks", "palio", "palio di siena", "christmas", "nativity", "ferragosto", "august 15"],
              it: ["feste italiane", "feste", "tradizioni", "carnevale", "carnevale di venezia", "maschere", "palio", "palio di siena", "natale", "presepe", "ferragosto", "15 agosto"]
          },
          respuesta: {
              es: "Según la página Fiestas y tradiciones populares, algunas celebraciones conocidas de Italia son el <b>Carnaval de Venecia</b> (máscaras y trajes elaborados), el <b>Palio de Siena</b> (una carrera de caballos entre barrios), la <b>Navidad</b> (reuniones familiares, comidas especiales y pesebres) y el <b>Ferragosto</b>, el 15 de agosto.",
              en: "According to the Festivals and popular traditions page, some well-known Italian celebrations are the <b>Carnival of Venice</b> (masks and elaborate costumes), the <b>Palio di Siena</b> (a horse race between neighborhoods), <b>Christmas</b> (family gatherings, special meals and nativity scenes) and <b>Ferragosto</b>, on August 15.",
              it: "Secondo la pagina Feste e tradizioni popolari, alcune feste italiane conosciute sono il <b>Carnevale di Venezia</b> (maschere e costumi elaborati), il <b>Palio di Siena</b> (una corsa di cavalli tra le contrade), il <b>Natale</b> (riunioni di famiglia, pranzi speciali e presepi) e il <b>Ferragosto</b>, il 15 agosto."
          },
          botones: [{ ir: "fiestas" }] },
        { id: "argentina", categoria: "cultura",
          pregunta: { es: "¿Cómo influyó la cultura italiana en Argentina?", en: "How did Italian culture influence Argentina?", it: "Come ha influenzato l’Argentina la cultura italiana?" },
          claves: {
              es: ["influencia italiana", "cultura italiana en argentina", "italianos en argentina", "inmigracion italiana", "argentina", "rioplatense", "apellidos italianos"],
              en: ["italian influence", "italian culture in argentina", "italians in argentina", "italian immigration", "argentina", "river plate", "italian surnames"],
              it: ["influenza italiana", "cultura italiana in argentina", "italiani in argentina", "immigrazione italiana", "argentina", "rioplatense", "cognomi italiani"]
          },
          respuesta: {
              es: "Según la página La cultura italiana en Argentina, la inmigración italiana tuvo una enorme influencia, sobre todo entre fines del siglo XIX y comienzos del XX. Se nota en la comida (pastas, pizza, helados), los apellidos y tradiciones familiares, algunas expresiones del español rioplatense y la entonación, la arquitectura y las asociaciones y celebraciones de las comunidades italianas.",
              en: "According to the Italian culture in Argentina page, Italian immigration had an enormous influence, especially between the late 19th and early 20th centuries. You can see it in food (pasta, pizza, ice cream), surnames and family traditions, some expressions and the intonation of River Plate Spanish, architecture, and the associations and celebrations of Italian communities.",
              it: "Secondo la pagina La cultura italiana in Argentina, l’immigrazione italiana ebbe un’influenza enorme, soprattutto tra la fine dell’Ottocento e l’inizio del Novecento. Si nota nel cibo (pasta, pizza, gelato), nei cognomi e nelle tradizioni familiari, in alcune espressioni e nell’intonazione dello spagnolo rioplatense, nell’architettura e nelle associazioni e feste delle comunità italiane."
          },
          botones: [{ ir: "cultura-argentina" }] },

        // --- Charla ---
        { id: "hola",
          claves: {
              es: ["hola", "buenas", "buen dia", "buenas tardes", "buenas noches", "que tal"],
              en: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"],
              it: ["ciao", "salve", "buongiorno", "buonasera", "come stai"]
          },
          respuesta: { es: "¡Hola! ¿En qué te puedo ayudar?", en: "Hi! How can I help you?", it: "Ciao! Come posso aiutarti?" },
          botones: [{ accion: "inicio" }] },
        { id: "gracias",
          claves: {
              es: ["gracias", "muchas gracias", "genial", "perfecto", "buenisimo", "joya"],
              en: ["thanks", "thank you", "great", "perfect", "awesome", "cool"],
              it: ["grazie", "grazie mille", "perfetto", "ottimo", "fantastico"]
          },
          respuesta: { es: "¡De nada! Si necesitás algo más, acá estoy.", en: "You’re welcome! If you need anything else, I’m here.", it: "Prego! Se ti serve altro, sono qui." },
          botones: [{ accion: "inicio" }] },
        { id: "quien-sos",
          claves: {
              es: ["quien sos", "como te llamas", "que sos", "sos un robot", "sos una persona", "lorenzo"],
              en: ["who are you", "what is your name", "what s your name", "are you a robot", "are you a person", "are you human"],
              it: ["chi sei", "come ti chiami", "sei un robot", "sei una persona"]
          },
          respuesta: {
              es: "Soy <b>Lorenzo</b>, el Guía Virtual de la Sociedad Italiana y el Teatro Marconi. No soy una persona: respondo con la información del sitio y de la Sociedad, y si no sé algo, te lo digo.",
              en: "I’m <b>Lorenzo</b>, the Virtual Guide of the Italian Society and Teatro Marconi. I’m not a person: I answer with the information on the site and from the Society, and if I don’t know something, I tell you.",
              it: "Sono <b>Lorenzo</b>, la Guida Virtuale della Società Italiana e del Teatro Marconi. Non sono una persona: rispondo con le informazioni del sito e della Società, e se non so qualcosa, te lo dico."
          } },
        { id: "idiomas-sitio",
          claves: {
              es: ["en que idiomas", "que idiomas", "cambiar el idioma", "cambiar idioma", "otro idioma", "traducir"],
              en: ["what languages", "which languages", "change the language", "change language", "another language", "translate"],
              it: ["quali lingue", "in che lingue", "cambiare lingua", "cambiare la lingua", "un altra lingua", "tradurre"]
          },
          respuesta: {
              es: "El sitio está en <b>español</b>, <b>inglés</b> e <b>italiano</b>. Cambiás el idioma con los botones <b>ES · EN · IT</b> de arriba a la derecha, y yo te hablo en el idioma que elijas. Entiendo preguntas en los tres.",
              en: "The site is in <b>Spanish</b>, <b>English</b> and <b>Italian</b>. You can change the language with the <b>ES · EN · IT</b> buttons at the top right, and I’ll talk to you in the language you choose. I understand questions in all three.",
              it: "Il sito è in <b>spagnolo</b>, <b>inglese</b> e <b>italiano</b>. Puoi cambiare lingua con i pulsanti <b>ES · EN · IT</b> in alto a destra, e io ti parlo nella lingua che scegli. Capisco domande in tutte e tre."
          },
          botones: [{ texto: "Español", accion: "idioma:es" }, { texto: "English", accion: "idioma:en" }, { texto: "Italiano", accion: "idioma:it" }] }
    ]
};
