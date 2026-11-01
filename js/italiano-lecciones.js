// ===== Contenido del curso de italiano =====
// Acá están TODAS las lecciones. Para corregir o agregar contenido, editá solo este archivo.
//
// Cada lección tiene:
//   titulo, resumen      → { es: "...", en: "..." }
//   explicacion          → lista de mensajes del robot, cada uno en español y en inglés
//   vocabulario          → { it: "palabra en italiano", es: "traducción", en: "translation" }
//   ejercicios           → dos tipos:
//       tipo "opcion":   opciones (la CORRECTA va SIEMPRE PRIMERA; en pantalla se mezclan solas)
//       tipo "escribir": respuestas aceptadas, en minúsculas
//   "nota" (opcional)    → explicación que el robot da después de responder
//
// En los textos se puede usar <b>negrita</b> e <i>cursiva</i>.

const CURSO_ITALIANO = [
    // =====================================================================
    // NIVEL PRINCIPIANTE
    // =====================================================================
    {
        id: "principiante",
        nombre: { es: "Principiante", en: "Beginner" },
        descripcion: {
            es: "Saludos, pronunciación, números, artículos y tus primeras frases.",
            en: "Greetings, pronunciation, numbers, articles and your first phrases."
        },
        lecciones: [
            {
                titulo: { es: "Saludos y presentaciones", en: "Greetings and introductions" },
                resumen: { es: "Saludar, despedirte y decir cómo te llamás.", en: "Say hello, goodbye and your name." },
                explicacion: [
                    {
                        es: "En italiano hay saludos informales y formales. <b>Ciao</b> sirve para decir «hola» y también «chau», pero solo con amigos y familia.",
                        en: "Italian has informal and formal greetings. <b>Ciao</b> means both “hi” and “bye”, but only with friends and family."
                    },
                    {
                        es: "Con personas que no conocés usá <b>Buongiorno</b> (buen día, hasta la tarde) y <b>Buonasera</b> (buenas tardes o noches, desde la tarde). Para despedirte: <b>Arrivederci</b>.",
                        en: "With people you don't know, use <b>Buongiorno</b> (good morning, until the afternoon) and <b>Buonasera</b> (good evening, from late afternoon). To say goodbye: <b>Arrivederci</b>."
                    },
                    {
                        es: "Para presentarte decí <b>Mi chiamo…</b> (me llamo…). Cuando conocés a alguien se dice <b>Piacere!</b> (¡mucho gusto!).",
                        en: "To introduce yourself, say <b>Mi chiamo…</b> (my name is…). When you meet someone, say <b>Piacere!</b> (nice to meet you!)."
                    },
                    {
                        es: "Para preguntar cómo está alguien: <b>Come stai?</b> (informal) o <b>Come sta?</b> (formal, de «usted»). La respuesta típica es <b>Bene, grazie. E tu?</b>",
                        en: "To ask how someone is: <b>Come stai?</b> (informal) or <b>Come sta?</b> (formal). A typical answer is <b>Bene, grazie. E tu?</b> (Fine, thanks. And you?)"
                    }
                ],
                vocabulario: [
                    { it: "Ciao", es: "Hola / Chau", en: "Hi / Bye" },
                    { it: "Buongiorno", es: "Buen día", en: "Good morning" },
                    { it: "Buonasera", es: "Buenas tardes / noches", en: "Good evening" },
                    { it: "Arrivederci", es: "Adiós / Hasta luego", en: "Goodbye" },
                    { it: "Mi chiamo…", es: "Me llamo…", en: "My name is…" },
                    { it: "Piacere", es: "Mucho gusto", en: "Nice to meet you" },
                    { it: "Come stai?", es: "¿Cómo estás?", en: "How are you?" },
                    { it: "Grazie", es: "Gracias", en: "Thank you" },
                    { it: "Prego", es: "De nada", en: "You're welcome" }
                ],
                ejercicios: [
                    {
                        tipo: "opcion",
                        pregunta: { es: "Son las 10 de la mañana y entrás a un negocio. ¿Qué decís?", en: "It's 10 a.m. and you walk into a shop. What do you say?" },
                        opciones: ["Buongiorno", "Buonasera", "Arrivederci", "Ciao"],
                        correcta: 0,
                        nota: { es: "«Ciao» es demasiado informal con alguien que no conocés.", en: "“Ciao” is too informal with someone you don't know." }
                    },
                    {
                        tipo: "escribir",
                        pregunta: { es: "Escribí en italiano: «Me llamo Ana».", en: "Write in Italian: “My name is Ana”." },
                        respuestas: ["Mi chiamo Ana", "Io mi chiamo Ana"]
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "¿Qué significa «Piacere»?", en: "What does “Piacere” mean?" },
                        opciones: [
                            { es: "Mucho gusto", en: "Nice to meet you" },
                            { es: "Por favor", en: "Please" },
                            { es: "Perdón", en: "Sorry" },
                            { es: "Buen provecho", en: "Enjoy your meal" }
                        ],
                        correcta: 0
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "Un amigo te pregunta «Come stai?». ¿Qué respondés?", en: "A friend asks you “Come stai?”. What do you answer?" },
                        opciones: ["Bene, grazie. E tu?", "Mi chiamo Luca.", "Arrivederci!", "Prego."],
                        correcta: 0
                    }
                ]
            },
            {
                titulo: { es: "Pronunciación", en: "Pronunciation" },
                resumen: { es: "Cómo suenan las letras que más confunden.", en: "How the trickiest letters sound." },
                explicacion: [
                    {
                        es: "¡Buena noticia! El italiano se lee casi como se escribe, igual que el español. Las vocales <b>a, e, i, o, u</b> suenan igual que en castellano.",
                        en: "Good news! Italian is read almost exactly as it's written. Vowels are short and pure: a as in “father”, e as in “bed”, i as in “machine”, o as in “or”, u as in “rule”."
                    },
                    {
                        es: "<b>C</b> y <b>G</b> cambian según la vocal que sigue. Delante de <b>e</b> o <b>i</b>: <b>ce/ci</b> suena «che/chi» (<b>ciao</b> = «chao») y <b>ge/gi</b> suena como la «j» del inglés <i>jeans</i> (<b>gelato</b>). Delante de a, o, u suenan como en español: <b>casa</b>, <b>gatto</b>.",
                        en: "<b>C</b> and <b>G</b> change with the next vowel. Before <b>e</b> or <b>i</b>: <b>ce/ci</b> sounds like “ch” in <i>church</i> (<b>ciao</b>) and <b>ge/gi</b> like “j” in <i>jam</i> (<b>gelato</b>). Before a, o, u they are hard, as in <i>cat</i> and <i>go</i>: <b>casa</b>, <b>gatto</b>."
                    },
                    {
                        es: "Para que suenen duras delante de e/i se agrega una <b>h</b>: <b>che</b> («que»), <b>chiesa</b> («kiesa»), <b>spaghetti</b> («spaguetti»). La h sola nunca suena.",
                        en: "To keep them hard before e/i, Italian adds an <b>h</b>: <b>che</b> (“keh”), <b>chiesa</b> (“kyeh-zah”), <b>spaghetti</b> (“spah-get-tee”). The h itself is always silent."
                    },
                    {
                        es: "Otros grupos: <b>gn</b> = «ñ» (<b>gnocchi</b> = «ñoki»), <b>gli</b> ≈ «lli» con la lengua pegada al paladar (<b>famiglia</b>) y <b>sce/sci</b> = «sh» del inglés (<b>pesce</b>). Las consonantes dobles se sostienen más: <b>pala</b> (pala) ≠ <b>palla</b> (pelota).",
                        en: "Other groups: <b>gn</b> sounds like “ny” in <i>canyon</i> (<b>gnocchi</b>), <b>gli</b> like “lli” in <i>million</i> (<b>famiglia</b>), and <b>sce/sci</b> like “sh” (<b>pesce</b>). Double consonants are held longer: <b>pala</b> (shovel) ≠ <b>palla</b> (ball)."
                    },
                    {
                        es: "La <b>z</b> suena «ts» o «ds»: <b>pizza</b> («pitsa»), <b>zero</b> («dsero»). La mayoría de las palabras se acentúa en la anteúltima sílaba; si el acento cae en la última, se escribe: <b>caffè</b>, <b>città</b>.",
                        en: "<b>Z</b> sounds like “ts” or “dz”: <b>pizza</b> (“peet-tsah”), <b>zero</b> (“dzeh-ro”). Most words are stressed on the second-to-last syllable; when the stress falls on the last one, it's written: <b>caffè</b>, <b>città</b>."
                    }
                ],
                vocabulario: [
                    { it: "ciao", es: "hola / chau", en: "hi / bye" },
                    { it: "gelato", es: "helado", en: "ice cream" },
                    { it: "chiesa", es: "iglesia", en: "church" },
                    { it: "spaghetti", es: "espaguetis", en: "spaghetti" },
                    { it: "gnocchi", es: "ñoquis", en: "gnocchi" },
                    { it: "famiglia", es: "familia", en: "family" },
                    { it: "pesce", es: "pescado / pez", en: "fish" },
                    { it: "pizza", es: "pizza", en: "pizza" },
                    { it: "caffè", es: "café", en: "coffee" },
                    { it: "città", es: "ciudad", en: "city" }
                ],
                ejercicios: [
                    {
                        tipo: "opcion",
                        pregunta: { es: "¿En qué palabra la «c» suena como «ch»?", en: "In which word does “c” sound like “ch” in <i>church</i>?" },
                        opciones: ["cena", "casa", "chiave", "cuore"],
                        correcta: 0,
                        nota: { es: "Delante de e o i, la c suena «ch». En «chiave» la h la vuelve dura: «kiave».", en: "Before e or i, c sounds like “ch”. In “chiave” the h makes it hard: “kyah-veh”." }
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "¿Cómo suena «gn» en «lasagna»?", en: "How does “gn” sound in “lasagna”?" },
                        opciones: [
                            { es: "Como la «ñ»", en: "Like “ny” in <i>canyon</i>" },
                            { es: "Como «gn» en «ignorar»", en: "Like “gn” in <i>signal</i>" },
                            { es: "Como una «n» sola", en: "Like a plain “n”" },
                            { es: "Como una «g» suave", en: "Like a soft “g”" }
                        ],
                        correcta: 0
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "¿Qué palabra significa «pelota»?", en: "Which word means “ball”?" },
                        opciones: ["palla", "pala"],
                        correcta: 0,
                        nota: { es: "La doble consonante cambia el significado: «pala» es una pala de jardín.", en: "The double consonant changes the meaning: “pala” is a shovel." }
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "¿Qué palabra lleva el acento en la última sílaba?", en: "Which word is stressed on the last syllable?" },
                        opciones: ["città", "casa", "pizza", "gelato"],
                        correcta: 0
                    }
                ]
            },
            {
                titulo: { es: "Números del 0 al 20", en: "Numbers from 0 to 20" },
                resumen: { es: "Contar, decir tu edad y entender precios simples.", en: "Count, say your age and understand simple prices." },
                explicacion: [
                    {
                        es: "Del 0 al 10: <b>zero, uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci</b>.",
                        en: "From 0 to 10: <b>zero, uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci</b>."
                    },
                    {
                        es: "Del 11 al 16 terminan en <b>-dici</b>: <b>undici, dodici, tredici, quattordici, quindici, sedici</b>.",
                        en: "From 11 to 16 they end in <b>-dici</b>: <b>undici, dodici, tredici, quattordici, quindici, sedici</b>."
                    },
                    {
                        es: "Del 17 al 19 el orden se invierte y empiezan con <b>dici-</b>: <b>diciassette, diciotto, diciannove</b>. Y el 20 es <b>venti</b>.",
                        en: "From 17 to 19 the order flips and they start with <b>dici-</b>: <b>diciassette, diciotto, diciannove</b>. And 20 is <b>venti</b>."
                    },
                    {
                        es: "Ojo con la pronunciación: <b>cinque</b> suena «chinkue» y <b>dieci</b>, «diechi». Para preguntar la edad: <b>Quanti anni hai?</b> → <b>Ho venti anni</b> (tengo veinte años). Igual que en español, se usa «tener».",
                        en: "Pronunciation tip: <b>cinque</b> sounds like “cheen-kweh” and <b>dieci</b> like “dyeh-chee”. To ask someone's age: <b>Quanti anni hai?</b> → <b>Ho venti anni</b>, literally “I have twenty years”."
                    }
                ],
                vocabulario: [
                    { it: "uno", es: "1 (uno)", en: "1 (one)" },
                    { it: "due", es: "2 (dos)", en: "2 (two)" },
                    { it: "tre", es: "3 (tres)", en: "3 (three)" },
                    { it: "quattro", es: "4 (cuatro)", en: "4 (four)" },
                    { it: "cinque", es: "5 (cinco)", en: "5 (five)" },
                    { it: "sei", es: "6 (seis)", en: "6 (six)" },
                    { it: "sette", es: "7 (siete)", en: "7 (seven)" },
                    { it: "otto", es: "8 (ocho)", en: "8 (eight)" },
                    { it: "nove", es: "9 (nueve)", en: "9 (nine)" },
                    { it: "dieci", es: "10 (diez)", en: "10 (ten)" },
                    { it: "quindici", es: "15 (quince)", en: "15 (fifteen)" },
                    { it: "diciotto", es: "18 (dieciocho)", en: "18 (eighteen)" },
                    { it: "venti", es: "20 (veinte)", en: "20 (twenty)" }
                ],
                ejercicios: [
                    {
                        tipo: "opcion",
                        pregunta: { es: "¿Cuál es el número 7?", en: "Which one is number 7?" },
                        opciones: ["sette", "sei", "otto", "dieci"],
                        correcta: 0
                    },
                    {
                        tipo: "escribir",
                        pregunta: { es: "Escribí con letras el número 3.", en: "Write the number 3 in words." },
                        respuestas: ["tre"]
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "¿Cómo se dice 17?", en: "How do you say 17?" },
                        opciones: ["diciassette", "settedici", "diciasette", "sedici"],
                        correcta: 0,
                        nota: { es: "Del 17 al 19 empiezan con «dici-», y «diciassette» lleva doble s.", en: "17 to 19 start with “dici-”, and “diciassette” has a double s." }
                    },
                    {
                        tipo: "escribir",
                        pregunta: { es: "Completá: «Ho ___ anni» (tengo 20 años).", en: "Fill in: “Ho ___ anni” (I'm 20 years old)." },
                        respuestas: ["venti"]
                    }
                ]
            },
            {
                titulo: { es: "Artículos y género", en: "Articles and gender" },
                resumen: { es: "Il, lo, la, i, gli, le… y cómo se forma el plural.", en: "Il, lo, la, i, gli, le… and how plurals work." },
                explicacion: [
                    {
                        es: "Como en español, los sustantivos son masculinos o femeninos. Casi siempre <b>-o</b> es masculino (<b>il libro</b>) y <b>-a</b> es femenino (<b>la casa</b>). Los que terminan en <b>-e</b> pueden ser de los dos: <b>il pane</b>, <b>la notte</b>.",
                        en: "Nouns are masculine or feminine. Usually <b>-o</b> is masculine (<b>il libro</b>, the book) and <b>-a</b> is feminine (<b>la casa</b>, the house). Nouns ending in <b>-e</b> can be either: <b>il pane</b> (bread), <b>la notte</b> (night)."
                    },
                    {
                        es: "Masculino singular: <b>il</b> (il libro), pero <b>lo</b> delante de s + consonante, z, gn, ps o y (<b>lo studente</b>, <b>lo zaino</b>) y <b>l'</b> delante de vocal (<b>l'amico</b>).",
                        en: "Masculine singular “the”: <b>il</b> (il libro), but <b>lo</b> before s + consonant, z, gn, ps or y (<b>lo studente</b>, <b>lo zaino</b>) and <b>l'</b> before a vowel (<b>l'amico</b>)."
                    },
                    {
                        es: "Femenino singular: <b>la</b> (la casa) y <b>l'</b> delante de vocal (<b>l'amica</b>). En plural, el masculino usa <b>i</b> o <b>gli</b> (i libri, gli studenti, gli amici) y el femenino, siempre <b>le</b> (le case, le amiche).",
                        en: "Feminine singular: <b>la</b> (la casa) and <b>l'</b> before a vowel (<b>l'amica</b>). In the plural, masculine uses <b>i</b> or <b>gli</b> (i libri, gli studenti, gli amici) and feminine always <b>le</b> (le case, le amiche)."
                    },
                    {
                        es: "El plural: <b>-o → -i</b> (libro → libri), <b>-a → -e</b> (casa → case), <b>-e → -i</b> (notte → notti). El artículo indeterminado: <b>un</b>, <b>uno</b>, <b>una</b>, <b>un'</b> (un libro, uno studente, una casa, un'amica).",
                        en: "Plurals: <b>-o → -i</b> (libro → libri), <b>-a → -e</b> (casa → case), <b>-e → -i</b> (notte → notti). For “a/an”: <b>un</b>, <b>uno</b>, <b>una</b>, <b>un'</b> (un libro, uno studente, una casa, un'amica)."
                    }
                ],
                vocabulario: [
                    { it: "il libro", es: "el libro", en: "the book" },
                    { it: "la casa", es: "la casa", en: "the house" },
                    { it: "lo studente", es: "el estudiante", en: "the student" },
                    { it: "lo zaino", es: "la mochila", en: "the backpack" },
                    { it: "l'amico", es: "el amigo", en: "the friend (male)" },
                    { it: "l'amica", es: "la amiga", en: "the friend (female)" },
                    { it: "gli amici", es: "los amigos", en: "the friends" },
                    { it: "le case", es: "las casas", en: "the houses" },
                    { it: "il pane", es: "el pan", en: "the bread" },
                    { it: "la notte", es: "la noche", en: "the night" }
                ],
                ejercicios: [
                    {
                        tipo: "opcion",
                        pregunta: { es: "Elegí el artículo: «___ studente».", en: "Choose the article: “___ studente”." },
                        opciones: ["lo", "il", "la", "l'"],
                        correcta: 0,
                        nota: { es: "Delante de s + consonante va «lo».", en: "Before s + consonant you use “lo”." }
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "Elegí el artículo: «___ amici».", en: "Choose the article: “___ amici”." },
                        opciones: ["gli", "i", "le", "lo"],
                        correcta: 0,
                        nota: { es: "Masculino plural delante de vocal: «gli».", en: "Masculine plural before a vowel: “gli”." }
                    },
                    {
                        tipo: "escribir",
                        pregunta: { es: "Escribí el plural de «la casa».", en: "Write the plural of “la casa”." },
                        respuestas: ["le case"]
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "Elegí el artículo: «___ zaino» (una mochila).", en: "Choose the article: “___ zaino” (a backpack)." },
                        opciones: ["uno", "un", "una", "un'"],
                        correcta: 0,
                        nota: { es: "Delante de z va «uno», igual que «lo».", en: "Before z you use “uno”, just like “lo”." }
                    }
                ]
            },
            {
                titulo: { es: "Los verbos essere y avere", en: "The verbs essere and avere" },
                resumen: { es: "Ser, estar y tener: los dos verbos más usados.", en: "To be and to have: the two most common verbs." },
                explicacion: [
                    {
                        es: "<b>Essere</b> es «ser» y «estar» a la vez: <b>io sono, tu sei, lui/lei è, noi siamo, voi siete, loro sono</b>.",
                        en: "<b>Essere</b> means “to be”: <b>io sono, tu sei, lui/lei è, noi siamo, voi siete, loro sono</b>."
                    },
                    {
                        es: "<b>Avere</b> es «tener»: <b>io ho, tu hai, lui/lei ha, noi abbiamo, voi avete, loro hanno</b>. La <b>h</b> no se pronuncia: <b>ho</b> suena «o».",
                        en: "<b>Avere</b> means “to have”: <b>io ho, tu hai, lui/lei ha, noi abbiamo, voi avete, loro hanno</b>. The <b>h</b> is silent: <b>ho</b> sounds like “oh”."
                    },
                    {
                        es: "Como en español, el pronombre casi siempre se omite: <b>Sono argentino</b> (soy argentino), <b>Ho fame</b> (tengo hambre). Ojo: <b>è</b> con acento significa «es»; <b>e</b> sin acento significa «y».",
                        en: "The subject pronoun is usually dropped: <b>Sono americano</b> (I'm American), <b>Ho fame</b> (I'm hungry). Note: <b>è</b> with an accent means “is”; <b>e</b> without it means “and”."
                    },
                    {
                        es: "Muchas expresiones usan <b>avere</b>, igual que en español: <b>ho fame</b>, <b>ho sete</b>, <b>ho freddo</b>, <b>ho sonno</b>. ¡Cuidado! <b>Ho caldo</b> es «tengo calor»: <b>caldo</b> significa «calor» o «caliente».",
                        en: "Several expressions use <b>avere</b> where English uses “to be”: <b>ho fame</b> (I'm hungry), <b>ho sete</b> (thirsty), <b>ho freddo</b> (cold), <b>ho caldo</b> (hot), <b>ho sonno</b> (sleepy)."
                    }
                ],
                vocabulario: [
                    { it: "sono", es: "soy / estoy", en: "I am" },
                    { it: "sei", es: "sos / eres / estás", en: "you are" },
                    { it: "è", es: "es / está", en: "he / she / it is" },
                    { it: "siamo", es: "somos / estamos", en: "we are" },
                    { it: "ho", es: "tengo", en: "I have" },
                    { it: "hai", es: "tenés / tienes", en: "you have" },
                    { it: "abbiamo", es: "tenemos", en: "we have" },
                    { it: "ho fame", es: "tengo hambre", en: "I'm hungry" },
                    { it: "ho sete", es: "tengo sed", en: "I'm thirsty" },
                    { it: "ho freddo", es: "tengo frío", en: "I'm cold" }
                ],
                ejercicios: [
                    {
                        tipo: "opcion",
                        pregunta: { es: "Completá: «Noi ___ di Gálvez» (somos de Gálvez).", en: "Fill in: “Noi ___ di Gálvez” (we are from Gálvez)." },
                        opciones: ["siamo", "sono", "siete", "abbiamo"],
                        correcta: 0
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "Completá: «Loro ___ due figli» (tienen dos hijos).", en: "Fill in: “Loro ___ due figli” (they have two children)." },
                        opciones: ["hanno", "ha", "avete", "sono"],
                        correcta: 0
                    },
                    {
                        tipo: "escribir",
                        pregunta: { es: "Escribí en italiano: «tengo hambre».", en: "Write in Italian: “I'm hungry”." },
                        respuestas: ["Ho fame", "Io ho fame"]
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "¿Qué significa «Marco è stanco»?", en: "What does “Marco è stanco” mean?" },
                        opciones: [
                            { es: "Marco está cansado", en: "Marco is tired" },
                            { es: "Marco y el cansancio", en: "Marco and tiredness" },
                            { es: "Marco tiene sueño", en: "Marco is sleepy" },
                            { es: "Marco es alto", en: "Marco is tall" }
                        ],
                        correcta: 0,
                        nota: { es: "«è» con acento es el verbo; «stanco» es «cansado».", en: "“è” with an accent is the verb; “stanco” means “tired”." }
                    }
                ]
            },
            {
                titulo: { es: "En el bar y el restaurante", en: "At the café and the restaurant" },
                resumen: { es: "Pedir, preguntar el precio y pagar la cuenta.", en: "Order, ask the price and pay the bill." },
                explicacion: [
                    {
                        es: "En Italia el «bar» es la cafetería: ahí se desayuna. Para pedir, la forma más amable es <b>Vorrei…</b> (quisiera…): <b>Vorrei un caffè, per favore</b>.",
                        en: "In Italy a “bar” is a café, where people have breakfast. The politest way to order is <b>Vorrei…</b> (I would like…): <b>Vorrei un caffè, per favore</b>."
                    },
                    {
                        es: "Ojo: si pedís <b>un caffè</b>, te traen un espresso. Con leche es <b>un cappuccino</b> o <b>un caffè macchiato</b>. Y si pedís solo <b>un latte</b>, ¡te dan un vaso de leche!",
                        en: "Careful: <b>un caffè</b> is an espresso. With milk, ask for <b>un cappuccino</b> or <b>un caffè macchiato</b>. If you just say <b>un latte</b>, you'll get a glass of milk!"
                    },
                    {
                        es: "Para preguntar el precio: <b>Quanto costa?</b> (¿cuánto cuesta?). Para pagar en el restaurante: <b>Il conto, per favore</b> (la cuenta, por favor).",
                        en: "To ask the price: <b>Quanto costa?</b> (how much is it?). To pay at a restaurant: <b>Il conto, per favore</b> (the bill, please)."
                    },
                    {
                        es: "Antes de comer se dice <b>Buon appetito!</b> y para brindar, <b>Salute!</b> o <b>Cin cin!</b>",
                        en: "Before eating, say <b>Buon appetito!</b> and to make a toast, <b>Salute!</b> or <b>Cin cin!</b>"
                    }
                ],
                vocabulario: [
                    { it: "Vorrei…", es: "Quisiera…", en: "I would like…" },
                    { it: "per favore", es: "por favor", en: "please" },
                    { it: "un caffè", es: "un café (espresso)", en: "an espresso" },
                    { it: "l'acqua", es: "el agua", en: "water" },
                    { it: "il menù", es: "el menú", en: "the menu" },
                    { it: "Quanto costa?", es: "¿Cuánto cuesta?", en: "How much is it?" },
                    { it: "il conto", es: "la cuenta", en: "the bill" },
                    { it: "Buon appetito!", es: "¡Buen provecho!", en: "Enjoy your meal!" },
                    { it: "Salute!", es: "¡Salud!", en: "Cheers!" }
                ],
                ejercicios: [
                    {
                        tipo: "opcion",
                        pregunta: { es: "¿Cuál es la forma más amable de pedir?", en: "Which is the politest way to order?" },
                        opciones: ["Vorrei un caffè, per favore.", "Voglio un caffè.", "Un caffè!", "Dammi un caffè."],
                        correcta: 0
                    },
                    {
                        tipo: "escribir",
                        pregunta: { es: "Escribí en italiano: «la cuenta, por favor».", en: "Write in Italian: “the bill, please”." },
                        respuestas: ["Il conto, per favore"]
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "Pedís «un latte» en un bar italiano. ¿Qué te traen?", en: "You order “un latte” in an Italian bar. What do you get?" },
                        opciones: [
                            { es: "Un vaso de leche", en: "A glass of milk" },
                            { es: "Un café con leche", en: "A latte coffee" },
                            { es: "Un helado", en: "An ice cream" },
                            { es: "Un té", en: "A tea" }
                        ],
                        correcta: 0
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "¿Qué se dice al brindar?", en: "What do you say when making a toast?" },
                        opciones: ["Cin cin!", "Prego!", "Buonasera!", "Il conto!"],
                        correcta: 0
                    }
                ]
            }
        ]
    },

    // =====================================================================
    // NIVEL MEDIO
    // =====================================================================
    {
        id: "medio",
        nombre: { es: "Medio", en: "Intermediate" },
        descripcion: {
            es: "Verbos en presente y en pasado, preposiciones, pronombres y la rutina diaria.",
            en: "Present and past tenses, prepositions, pronouns and daily routine."
        },
        lecciones: [
            {
                titulo: { es: "El presente de los verbos regulares", en: "Present tense of regular verbs" },
                resumen: { es: "Verbos en -are, -ere e -ire.", en: "Verbs ending in -are, -ere and -ire." },
                explicacion: [
                    {
                        es: "Los verbos italianos terminan en <b>-are</b>, <b>-ere</b> o <b>-ire</b>. Para conjugar en presente sacás esa terminación y agregás la de cada persona.",
                        en: "Italian verbs end in <b>-are</b>, <b>-ere</b> or <b>-ire</b>. For the present tense, drop that ending and add the one for each person."
                    },
                    {
                        es: "<b>parlare</b> (hablar): parlo, parli, parla, parliamo, parlate, parlano.<br><b>prendere</b> (tomar): prendo, prendi, prende, prendiamo, prendete, prendono.",
                        en: "<b>parlare</b> (to speak): parlo, parli, parla, parliamo, parlate, parlano.<br><b>prendere</b> (to take): prendo, prendi, prende, prendiamo, prendete, prendono."
                    },
                    {
                        es: "<b>dormire</b> (dormir): dormo, dormi, dorme, dormiamo, dormite, dormono.<br>Algunos verbos en -ire agregan <b>-isc-</b>: <b>finire</b> → finisco, finisci, finisce, finiamo, finite, finiscono.",
                        en: "<b>dormire</b> (to sleep): dormo, dormi, dorme, dormiamo, dormite, dormono.<br>Some -ire verbs add <b>-isc-</b>: <b>finire</b> → finisco, finisci, finisce, finiamo, finite, finiscono."
                    },
                    {
                        es: "Fijate que la forma de «noi» siempre termina en <b>-iamo</b>, en los tres grupos. Y en <b>parlano</b> el acento va en la primera sílaba: PAR-la-no.",
                        en: "Notice that the “noi” form always ends in <b>-iamo</b> in all three groups. And <b>parlano</b> is stressed on the first syllable: PAR-la-no."
                    }
                ],
                vocabulario: [
                    { it: "parlare", es: "hablar", en: "to speak" },
                    { it: "mangiare", es: "comer", en: "to eat" },
                    { it: "lavorare", es: "trabajar", en: "to work" },
                    { it: "prendere", es: "tomar", en: "to take" },
                    { it: "leggere", es: "leer", en: "to read" },
                    { it: "dormire", es: "dormir", en: "to sleep" },
                    { it: "partire", es: "salir / partir", en: "to leave" },
                    { it: "finire", es: "terminar", en: "to finish" },
                    { it: "capire", es: "entender", en: "to understand" }
                ],
                ejercicios: [
                    {
                        tipo: "opcion",
                        pregunta: { es: "Completá: «Io ___ italiano» (parlare).", en: "Fill in: “Io ___ italiano” (parlare)." },
                        opciones: ["parlo", "parla", "parli", "parlano"],
                        correcta: 0
                    },
                    {
                        tipo: "escribir",
                        pregunta: { es: "Conjugá «leggere» con «noi»: «noi ___».", en: "Conjugate “leggere” for “noi”: “noi ___”." },
                        respuestas: ["leggiamo", "noi leggiamo"]
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "Completá: «Loro ___ alle sette» (partire).", en: "Fill in: “Loro ___ alle sette” (partire)." },
                        opciones: ["partono", "partano", "partiscono", "parte"],
                        correcta: 0,
                        nota: { es: "«Partire» no lleva -isc-: partono.", en: "“Partire” doesn't take -isc-: partono." }
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "Completá: «Tu ___ la lezione?» (capire).", en: "Fill in: “Tu ___ la lezione?” (capire)." },
                        opciones: ["capisci", "capi", "capisce", "capite"],
                        correcta: 0,
                        nota: { es: "«Capire» es como «finire»: capisco, capisci, capisce…", en: "“Capire” works like “finire”: capisco, capisci, capisce…" }
                    }
                ]
            },
            {
                titulo: { es: "Preposiciones articuladas", en: "Articulated prepositions" },
                resumen: { es: "Del, al, nel, sul, della, degli…", en: "Del, al, nel, sul, della, degli…" },
                explicacion: [
                    {
                        es: "En italiano, las preposiciones <b>di, a, da, in, su</b> se unen al artículo que sigue, como en español «a + el = al», pero con muchas más combinaciones.",
                        en: "The prepositions <b>di</b> (of), <b>a</b> (to/at), <b>da</b> (from), <b>in</b> (in) and <b>su</b> (on) merge with the following article into one word."
                    },
                    {
                        es: "Con <b>il</b>: di + il = <b>del</b>, a + il = <b>al</b>, da + il = <b>dal</b>, in + il = <b>nel</b>, su + il = <b>sul</b>. Con <b>la</b>: <b>della, alla, dalla, nella, sulla</b>.",
                        en: "With <b>il</b>: di + il = <b>del</b>, a + il = <b>al</b>, da + il = <b>dal</b>, in + il = <b>nel</b>, su + il = <b>sul</b>. With <b>la</b>: <b>della, alla, dalla, nella, sulla</b>."
                    },
                    {
                        es: "La regla: la preposición copia la forma del artículo. Con <b>lo</b> → dello, allo, nello; con <b>l'</b> → dell', all', nell'; con <b>i</b> → dei, ai, nei; con <b>gli</b> → degli, agli, negli; con <b>le</b> → delle, alle, nelle.",
                        en: "The rule: the preposition copies the article's shape. With <b>lo</b> → dello, allo, nello; with <b>l'</b> → dell', all', nell'; with <b>i</b> → dei, ai, nei; with <b>gli</b> → degli, agli, negli; with <b>le</b> → delle, alle, nelle."
                    },
                    {
                        es: "Ejemplos: <b>il teatro della Società Italiana</b>, <b>vado al cinema</b>, <b>il libro è sul tavolo</b>. Ojo: <b>da</b> + persona significa «a lo de» o «a la casa de»: <b>vado da Marco</b>, <b>vado dal medico</b>.",
                        en: "Examples: <b>il teatro della Società Italiana</b>, <b>vado al cinema</b> (I go to the cinema), <b>il libro è sul tavolo</b> (on the table). Note: <b>da</b> + person means “to/at someone's place”: <b>vado da Marco</b>, <b>vado dal medico</b> (I'm going to the doctor's)."
                    }
                ],
                vocabulario: [
                    { it: "al cinema", es: "al cine", en: "to the cinema" },
                    { it: "nel centro", es: "en el centro", en: "in the center" },
                    { it: "sul tavolo", es: "sobre la mesa", en: "on the table" },
                    { it: "alle otto", es: "a las ocho", en: "at eight o'clock" },
                    { it: "nella borsa", es: "en la cartera", en: "in the bag" },
                    { it: "la casa dei nonni", es: "la casa de los abuelos", en: "the grandparents' house" },
                    { it: "il centro della città", es: "el centro de la ciudad", en: "the city center" },
                    { it: "vado dal medico", es: "voy al médico", en: "I'm going to the doctor's" }
                ],
                ejercicios: [
                    {
                        tipo: "opcion",
                        pregunta: { es: "Completá: «Vado ___ cinema» (a + il).", en: "Fill in: “Vado ___ cinema” (a + il)." },
                        opciones: ["al", "allo", "alla", "ai"],
                        correcta: 0
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "Completá: «Le chiavi sono ___ borsa» (in + la).", en: "Fill in: “Le chiavi sono ___ borsa” (in + la)." },
                        opciones: ["nella", "nel", "sulla", "alla"],
                        correcta: 0
                    },
                    {
                        tipo: "escribir",
                        pregunta: { es: "Uní «di + gli»: «i libri ___ studenti».", en: "Combine “di + gli”: “i libri ___ studenti”." },
                        respuestas: ["degli"]
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "Completá: «Il gatto dorme ___ divano» (su + il).", en: "Fill in: “Il gatto dorme ___ divano” (su + il)." },
                        opciones: ["sul", "sullo", "nel", "al"],
                        correcta: 0
                    }
                ]
            },
            {
                titulo: { es: "El passato prossimo", en: "The passato prossimo (past tense)" },
                resumen: { es: "Contar lo que hiciste: ho mangiato, sono andato…", en: "Say what you did: ho mangiato, sono andato…" },
                explicacion: [
                    {
                        es: "El <b>passato prossimo</b> es el pasado más usado al hablar: sirve para «comí» y para «he comido». Se forma con <b>avere</b> o <b>essere</b> en presente + el participio.",
                        en: "The <b>passato prossimo</b> is the most common spoken past tense: it covers both “I ate” and “I have eaten”. It's formed with <b>avere</b> or <b>essere</b> in the present + the past participle."
                    },
                    {
                        es: "Participios regulares: <b>-are → -ato</b> (parlato), <b>-ere → -uto</b> (venduto), <b>-ire → -ito</b> (dormito). Muchos son irregulares: <b>fatto</b> (fare), <b>visto</b> (vedere), <b>preso</b> (prendere), <b>scritto</b> (scrivere), <b>letto</b> (leggere).",
                        en: "Regular participles: <b>-are → -ato</b> (parlato), <b>-ere → -uto</b> (venduto), <b>-ire → -ito</b> (dormito). Many are irregular: <b>fatto</b> (fare), <b>visto</b> (vedere), <b>preso</b> (prendere), <b>scritto</b> (scrivere), <b>letto</b> (leggere)."
                    },
                    {
                        es: "La mayoría usa <b>avere</b>: <b>Ho mangiato una pizza</b>. Los verbos de movimiento o de cambio de estado usan <b>essere</b>, y entonces el participio concuerda con el sujeto: <b>Marco è andato</b>, <b>Laura è andata</b>, <b>siamo arrivati</b>.",
                        en: "Most verbs use <b>avere</b>: <b>Ho mangiato una pizza</b>. Verbs of movement or change of state use <b>essere</b>, and then the participle agrees with the subject like an adjective: <b>Marco è andato</b>, <b>Laura è andata</b>, <b>siamo arrivati</b>."
                    },
                    {
                        es: "Verbos frecuentes con essere: <b>andare, venire, arrivare, partire, uscire, entrare, tornare, restare, nascere, morire</b>, y el propio <b>essere</b>: <b>sono stato/a</b> (estuve, fui).",
                        en: "Common verbs with essere: <b>andare, venire, arrivare, partire, uscire, entrare, tornare, restare, nascere, morire</b>, and <b>essere</b> itself: <b>sono stato/a</b> (I have been)."
                    }
                ],
                vocabulario: [
                    { it: "ho mangiato", es: "comí / he comido", en: "I ate / I have eaten" },
                    { it: "ho visto", es: "vi", en: "I saw" },
                    { it: "ho fatto", es: "hice", en: "I did / I made" },
                    { it: "ho preso", es: "tomé", en: "I took" },
                    { it: "sono andato / andata", es: "fui", en: "I went" },
                    { it: "sono arrivato / arrivata", es: "llegué", en: "I arrived" },
                    { it: "sono stato / stata", es: "estuve / fui", en: "I was / I have been" },
                    { it: "ieri", es: "ayer", en: "yesterday" }
                ],
                ejercicios: [
                    {
                        tipo: "opcion",
                        pregunta: { es: "Completá: «Ieri ___ un film» (vedere).", en: "Fill in: “Ieri ___ un film” (vedere)." },
                        opciones: ["ho visto", "sono visto", "ho vedere", "ho vistato"],
                        correcta: 0
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "Completá: «Laura ___ a Roma» (andare).", en: "Fill in: “Laura ___ a Roma” (andare)." },
                        opciones: ["è andata", "ha andato", "è andato", "ha andata"],
                        correcta: 0,
                        nota: { es: "«Andare» va con essere y el participio concuerda con Laura: andata.", en: "“Andare” takes essere, and the participle agrees with Laura: andata." }
                    },
                    {
                        tipo: "escribir",
                        pregunta: { es: "Escribí el participio de «fare».", en: "Write the past participle of “fare”." },
                        respuestas: ["fatto"]
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "¿Qué auxiliar usa «arrivare»?", en: "Which auxiliary does “arrivare” take?" },
                        opciones: ["essere", "avere"],
                        correcta: 0,
                        nota: { es: "Es un verbo de movimiento: sono arrivato/a.", en: "It's a verb of movement: sono arrivato/a." }
                    }
                ]
            },
            {
                titulo: { es: "Verbos reflexivos y la rutina", en: "Reflexive verbs and daily routine" },
                resumen: { es: "Mi sveglio, mi alzo… y decir la hora.", en: "Mi sveglio, mi alzo… and telling the time." },
                explicacion: [
                    {
                        es: "Los verbos reflexivos terminan en <b>-si</b>: <b>svegliarsi</b> (despertarse), <b>alzarsi</b> (levantarse), <b>lavarsi</b> (lavarse), <b>vestirsi</b> (vestirse). Funcionan casi igual que en español.",
                        en: "Reflexive verbs end in <b>-si</b>: <b>svegliarsi</b> (to wake up), <b>alzarsi</b> (to get up), <b>lavarsi</b> (to wash oneself), <b>vestirsi</b> (to get dressed)."
                    },
                    {
                        es: "El pronombre va antes del verbo: <b>mi</b> sveglio, <b>ti</b> svegli, <b>si</b> sveglia, <b>ci</b> svegliamo, <b>vi</b> svegliate, <b>si</b> svegliano.",
                        en: "The pronoun goes before the verb: <b>mi</b> sveglio (I wake up), <b>ti</b> svegli, <b>si</b> sveglia, <b>ci</b> svegliamo, <b>vi</b> svegliate, <b>si</b> svegliano."
                    },
                    {
                        es: "En el passato prossimo los reflexivos siempre usan <b>essere</b>: <b>Mi sono svegliato alle sette</b> (una mujer dice <b>svegliata</b>).",
                        en: "In the passato prossimo, reflexive verbs always take <b>essere</b>: <b>Mi sono svegliato alle sette</b> (a woman says <b>svegliata</b>)."
                    },
                    {
                        es: "Para la hora: <b>Che ore sono?</b> → <b>Sono le otto</b> (son las ocho), <b>È l'una</b> (es la una), <b>alle nove e mezza</b> (a las nueve y media).",
                        en: "Telling the time: <b>Che ore sono?</b> → <b>Sono le otto</b> (it's eight o'clock), <b>È l'una</b> (it's one o'clock), <b>alle nove e mezza</b> (at half past nine)."
                    }
                ],
                vocabulario: [
                    { it: "mi sveglio", es: "me despierto", en: "I wake up" },
                    { it: "mi alzo", es: "me levanto", en: "I get up" },
                    { it: "mi lavo", es: "me lavo", en: "I wash" },
                    { it: "mi vesto", es: "me visto", en: "I get dressed" },
                    { it: "faccio colazione", es: "desayuno", en: "I have breakfast" },
                    { it: "vado a letto", es: "me voy a dormir", en: "I go to bed" },
                    { it: "Che ore sono?", es: "¿Qué hora es?", en: "What time is it?" },
                    { it: "alle otto", es: "a las ocho", en: "at eight o'clock" }
                ],
                ejercicios: [
                    {
                        tipo: "opcion",
                        pregunta: { es: "Completá: «Noi ___ alle sette» (alzarsi).", en: "Fill in: “Noi ___ alle sette” (alzarsi)." },
                        opciones: ["ci alziamo", "si alziamo", "ci alzano", "mi alziamo"],
                        correcta: 0
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "Completá: «Ieri Anna ___ tardi» (svegliarsi).", en: "Fill in: “Ieri Anna ___ tardi” (svegliarsi)." },
                        opciones: ["si è svegliata", "si ha svegliata", "si è svegliato", "ha svegliata"],
                        correcta: 0,
                        nota: { es: "Reflexivo → essere, y el participio concuerda con Anna.", en: "Reflexive → essere, and the participle agrees with Anna." }
                    },
                    {
                        tipo: "escribir",
                        pregunta: { es: "Escribí en italiano: «me visto».", en: "Write in Italian: “I get dressed”." },
                        respuestas: ["Mi vesto", "Io mi vesto"]
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "¿Cómo se dice «son las tres»?", en: "How do you say “it's three o'clock”?" },
                        opciones: ["Sono le tre", "È le tre", "Sono tre", "È la tre"],
                        correcta: 0
                    }
                ]
            },
            {
                titulo: { es: "Pronombres de objeto directo", en: "Direct object pronouns" },
                resumen: { es: "Lo, la, li, le… para no repetir.", en: "Lo, la, li, le… to avoid repeating." },
                explicacion: [
                    {
                        es: "Para no repetir el objeto se usan pronombres: <b>mi, ti, lo, la, ci, vi, li, le</b>. Van antes del verbo conjugado: <b>Conosci Marco? Sì, lo conosco</b>.",
                        en: "To avoid repeating the object, use: <b>mi</b> (me), <b>ti</b> (you), <b>lo</b> (him/it), <b>la</b> (her/it), <b>ci</b> (us), <b>vi</b> (you all), <b>li</b> (them, masc.), <b>le</b> (them, fem.). They go before the conjugated verb: <b>Conosci Marco? Sì, lo conosco</b>."
                    },
                    {
                        es: "Ojo: en plural es <b>li</b> (masculino) y <b>le</b> (femenino), no «los/las». <b>Compri i biglietti? Sì, li compro.</b> <b>Mangi le mele? Sì, le mangio.</b>",
                        en: "In the plural: <b>li</b> for masculine and <b>le</b> for feminine. <b>Compri i biglietti? Sì, li compro.</b> <b>Mangi le mele? Sì, le mangio.</b>"
                    },
                    {
                        es: "Con un infinitivo, el pronombre se pega al final, como en español: <b>Voglio vederla</b> (quiero verla). También puede ir antes: <b>La voglio vedere</b>.",
                        en: "With an infinitive it attaches to the end: <b>Voglio vederla</b> (I want to see her). It can also go before the modal verb: <b>La voglio vedere</b>."
                    },
                    {
                        es: "En el passato prossimo, <b>lo</b> y <b>la</b> se apostrofan y el participio concuerda: <b>Hai visto Laura? Sì, l'ho vista.</b> <b>Hai comprato le mele? Sì, le ho comprate.</b>",
                        en: "In the passato prossimo, <b>lo</b> and <b>la</b> become <b>l'</b> and the participle agrees: <b>Hai visto Laura? Sì, l'ho vista.</b> <b>Hai comprato le mele? Sì, le ho comprate.</b>"
                    }
                ],
                vocabulario: [
                    { it: "lo conosco", es: "lo conozco", en: "I know him" },
                    { it: "la vedo", es: "la veo", en: "I see her" },
                    { it: "li compro", es: "los compro", en: "I buy them (masc.)" },
                    { it: "le mangio", es: "las como", en: "I eat them (fem.)" },
                    { it: "ti chiamo", es: "te llamo", en: "I'll call you" },
                    { it: "mi aiuti?", es: "¿me ayudás?", en: "can you help me?" },
                    { it: "l'ho vista", es: "la vi", en: "I saw her" }
                ],
                ejercicios: [
                    {
                        tipo: "opcion",
                        pregunta: { es: "«Leggi il giornale?» — «Sì, ___ leggo.»", en: "“Leggi il giornale?” — “Sì, ___ leggo.”" },
                        opciones: ["lo", "la", "li", "gli"],
                        correcta: 0
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "«Inviti Paolo e Luca?» — «Sì, ___ invito.»", en: "“Inviti Paolo e Luca?” — “Sì, ___ invito.”" },
                        opciones: ["li", "le", "gli", "lo"],
                        correcta: 0
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "«Hai visto la mostra?» — «Sì, l'ho ___.»", en: "“Hai visto la mostra?” — “Sì, l'ho ___.”" },
                        opciones: ["vista", "visto", "viste", "visti"],
                        correcta: 0,
                        nota: { es: "«La mostra» es femenino singular: vista.", en: "“La mostra” is feminine singular: vista." }
                    },
                    {
                        tipo: "escribir",
                        pregunta: { es: "Respondé con un pronombre: «Compri le arance?» — «Sì, ___ compro.»", en: "Answer with a pronoun: “Compri le arance?” — “Sì, ___ compro.”" },
                        respuestas: ["le"]
                    }
                ]
            },
            {
                titulo: { es: "El imperfetto", en: "The imperfetto" },
                resumen: { es: "Cómo eran las cosas y lo que hacías de chico.", en: "How things were and what you used to do." },
                explicacion: [
                    {
                        es: "El <b>imperfetto</b> es el pretérito imperfecto: describe cómo eran las cosas o lo que se hacía habitualmente. <b>Da bambino giocavo a calcio</b> (de chico jugaba al fútbol).",
                        en: "The <b>imperfetto</b> describes how things were or what used to happen: <b>Da bambino giocavo a calcio</b> (as a child I used to play football)."
                    },
                    {
                        es: "Se forma con <b>-avo, -evo, -ivo</b>: <b>parlavo, parlavi, parlava, parlavamo, parlavate, parlavano</b>; <b>leggevo</b>; <b>dormivo</b>.",
                        en: "Endings: <b>-avo, -evo, -ivo</b>: <b>parlavo, parlavi, parlava, parlavamo, parlavate, parlavano</b>; <b>leggevo</b>; <b>dormivo</b>."
                    },
                    {
                        es: "<b>Essere</b> es irregular: <b>ero, eri, era, eravamo, eravate, erano</b>. También <b>fare → facevo</b>, <b>dire → dicevo</b>, <b>bere → bevevo</b>.",
                        en: "<b>Essere</b> is irregular: <b>ero, eri, era, eravamo, eravate, erano</b>. Also <b>fare → facevo</b>, <b>dire → dicevo</b>, <b>bere → bevevo</b>."
                    },
                    {
                        es: "Con el passato prossimo: el imperfetto es el fondo de la escena y el passato prossimo, la acción puntual. <b>Mentre leggevo, è arrivato Marco</b> (mientras leía, llegó Marco).",
                        en: "With the passato prossimo: the imperfetto sets the scene, the passato prossimo tells the event. <b>Mentre leggevo, è arrivato Marco</b> (while I was reading, Marco arrived)."
                    }
                ],
                vocabulario: [
                    { it: "ero", es: "era / estaba", en: "I was" },
                    { it: "avevo", es: "tenía", en: "I had" },
                    { it: "facevo", es: "hacía", en: "I used to do" },
                    { it: "andavo", es: "iba", en: "I used to go" },
                    { it: "c'era", es: "había", en: "there was" },
                    { it: "da bambino", es: "de chico", en: "as a child" },
                    { it: "mentre", es: "mientras", en: "while" },
                    { it: "sempre", es: "siempre", en: "always" }
                ],
                ejercicios: [
                    {
                        tipo: "opcion",
                        pregunta: { es: "Completá: «Da piccola Giulia ___ ogni sera» (leggere).", en: "Fill in: “Da piccola Giulia ___ ogni sera” (leggere)." },
                        opciones: ["leggeva", "ha letto", "leggevo", "leggerà"],
                        correcta: 0,
                        nota: { es: "Es algo habitual en el pasado («todas las noches»): imperfetto.", en: "It's a past habit (“every evening”): imperfetto." }
                    },
                    {
                        tipo: "escribir",
                        pregunta: { es: "Conjugá «essere» en imperfetto con «noi».", en: "Conjugate “essere” in the imperfetto for “noi”." },
                        respuestas: ["eravamo", "noi eravamo"]
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "Completá: «Mentre ___ la cena, è suonato il telefono» (preparare).", en: "Fill in: “Mentre ___ la cena, è suonato il telefono” (preparare)." },
                        opciones: ["preparavo", "ho preparato", "preparo", "preparerò"],
                        correcta: 0
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "¿Qué significa «C'era una volta…»?", en: "What does “C'era una volta…” mean?" },
                        opciones: [
                            { es: "Había una vez…", en: "Once upon a time…" },
                            { es: "Era una vuelta…", en: "It was a turn…" },
                            { es: "Pasó una sola vez…", en: "It happened only once…" },
                            { es: "Cada vez…", en: "Every time…" }
                        ],
                        correcta: 0
                    }
                ]
            }
        ]
    },

    // =====================================================================
    // NIVEL ALTO
    // =====================================================================
    {
        id: "alto",
        nombre: { es: "Alto", en: "Advanced" },
        descripcion: {
            es: "Futuro, condicional, subjuntivo, frases con «se», pronombres combinados y modismos.",
            en: "Future, conditional, subjunctive, “if” clauses, combined pronouns and idioms."
        },
        lecciones: [
            {
                titulo: { es: "El futuro", en: "The future tense" },
                resumen: { es: "Planes, promesas y suposiciones.", en: "Plans, promises and guesses." },
                explicacion: [
                    {
                        es: "El futuro se forma con el infinitivo sin la -e final y las terminaciones <b>-ò, -ai, -à, -emo, -ete, -anno</b>. En los verbos en -are, la <b>a</b> pasa a <b>e</b>: <b>parlare → parlerò</b>.",
                        en: "The future uses the infinitive minus the final -e, plus <b>-ò, -ai, -à, -emo, -ete, -anno</b>. In -are verbs, the <b>a</b> becomes <b>e</b>: <b>parlare → parlerò</b>."
                    },
                    {
                        es: "<b>parlerò, parlerai, parlerà, parleremo, parlerete, parleranno</b>. Lo mismo con <b>prenderò</b> y <b>partirò</b>.",
                        en: "<b>parlerò, parlerai, parlerà, parleremo, parlerete, parleranno</b>. Same pattern for <b>prenderò</b> and <b>partirò</b>."
                    },
                    {
                        es: "Irregulares frecuentes: <b>essere → sarò</b>, <b>avere → avrò</b>, <b>andare → andrò</b>, <b>fare → farò</b>, <b>venire → verrò</b>, <b>potere → potrò</b>, <b>volere → vorrò</b>, <b>vedere → vedrò</b>.",
                        en: "Common irregulars: <b>essere → sarò</b>, <b>avere → avrò</b>, <b>andare → andrò</b>, <b>fare → farò</b>, <b>venire → verrò</b>, <b>potere → potrò</b>, <b>volere → vorrò</b>, <b>vedere → vedrò</b>."
                    },
                    {
                        es: "Como en español, el futuro también expresa suposición: <b>Che ore saranno? Saranno le dieci</b> (¿qué hora será? Serán las diez). Y en el habla de todos los días se usa mucho el presente para el futuro cercano: <b>Domani vado a Roma</b>.",
                        en: "The future also expresses guesses: <b>Che ore saranno? Saranno le dieci</b> (what time could it be? It's probably ten). And in everyday speech the present is often used for the near future: <b>Domani vado a Roma</b>."
                    }
                ],
                vocabulario: [
                    { it: "sarò", es: "seré / estaré", en: "I will be" },
                    { it: "avrò", es: "tendré", en: "I will have" },
                    { it: "andrò", es: "iré", en: "I will go" },
                    { it: "farò", es: "haré", en: "I will do" },
                    { it: "verrò", es: "vendré", en: "I will come" },
                    { it: "domani", es: "mañana", en: "tomorrow" },
                    { it: "l'anno prossimo", es: "el año que viene", en: "next year" },
                    { it: "fra due giorni", es: "dentro de dos días", en: "in two days" }
                ],
                ejercicios: [
                    {
                        tipo: "opcion",
                        pregunta: { es: "Completá: «L'anno prossimo ___ in Italia» (io, andare).", en: "Fill in: “L'anno prossimo ___ in Italia” (io, andare)." },
                        opciones: ["andrò", "anderò", "andarò", "andrei"],
                        correcta: 0,
                        nota: { es: "«Andare» es irregular en futuro: andrò.", en: "“Andare” is irregular in the future: andrò." }
                    },
                    {
                        tipo: "escribir",
                        pregunta: { es: "Escribí el futuro de «essere» con «noi».", en: "Write the future of “essere” for “noi”." },
                        respuestas: ["saremo", "noi saremo"]
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "Completá: «Domani Luca e Sara ___ la cena» (preparare).", en: "Fill in: “Domani Luca e Sara ___ la cena” (preparare)." },
                        opciones: ["prepareranno", "prepararanno", "preparerà", "prepareremo"],
                        correcta: 0
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "«Dov'è Paolo?» — «Non lo so, ___ a casa.» (es una suposición)", en: "“Dov'è Paolo?” — “Non lo so, ___ a casa.” (it's a guess)" },
                        opciones: ["sarà", "è stato", "era", "sia"],
                        correcta: 0,
                        nota: { es: "El futuro sirve para suponer: «sarà a casa» = «estará en casa».", en: "The future expresses a guess: “sarà a casa” = “he's probably at home”." }
                    }
                ]
            },
            {
                titulo: { es: "El condicional", en: "The conditional" },
                resumen: { es: "Pedir con cortesía, aconsejar y desear.", en: "Polite requests, advice and wishes." },
                explicacion: [
                    {
                        es: "El condicional usa la misma raíz que el futuro, con <b>-ei, -esti, -ebbe, -emmo, -este, -ebbero</b>: <b>parlerei, parleresti, parlerebbe, parleremmo, parlereste, parlerebbero</b>.",
                        en: "The conditional uses the future stem with <b>-ei, -esti, -ebbe, -emmo, -este, -ebbero</b>: <b>parlerei, parleresti, parlerebbe, parleremmo, parlereste, parlerebbero</b>."
                    },
                    {
                        es: "Los irregulares son los mismos que en el futuro: <b>sarei, avrei, andrei, farei, verrei, potrei, vorrei, dovrei</b>.",
                        en: "The irregulars are the same as in the future: <b>sarei, avrei, andrei, farei, verrei, potrei, vorrei, dovrei</b>."
                    },
                    {
                        es: "Sirve para pedir con cortesía (<b>Potrebbe aiutarmi?</b>, ¿podría ayudarme?), aconsejar (<b>Dovresti riposare</b>, deberías descansar) y expresar deseos (<b>Mi piacerebbe viaggiare</b>, me gustaría viajar).",
                        en: "Use it for polite requests (<b>Potrebbe aiutarmi?</b>, could you help me?), advice (<b>Dovresti riposare</b>, you should rest) and wishes (<b>Mi piacerebbe viaggiare</b>, I'd love to travel)."
                    },
                    {
                        es: "Ojo con la doble m: <b>parleremmo</b> (hablaríamos, condicional) ≠ <b>parleremo</b> (hablaremos, futuro).",
                        en: "Watch the double m: <b>parleremmo</b> (we would speak, conditional) ≠ <b>parleremo</b> (we will speak, future)."
                    }
                ],
                vocabulario: [
                    { it: "vorrei", es: "quisiera / me gustaría", en: "I would like" },
                    { it: "potrei", es: "podría", en: "I could" },
                    { it: "dovrei", es: "debería", en: "I should" },
                    { it: "sarebbe", es: "sería", en: "it would be" },
                    { it: "mi piacerebbe", es: "me gustaría", en: "I would love to" },
                    { it: "Potrebbe…?", es: "¿Podría…? (formal)", en: "Could you…? (formal)" },
                    { it: "al posto tuo", es: "en tu lugar", en: "if I were you" }
                ],
                ejercicios: [
                    {
                        tipo: "opcion",
                        pregunta: { es: "La forma más cortés: «___ un bicchiere d'acqua?»", en: "The politest form: “___ un bicchiere d'acqua?”" },
                        opciones: ["Potrebbe darmi", "Mi dà", "Dammi", "Mi darà"],
                        correcta: 0
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "Completá: «Al posto tuo, ___ con lei» (io, parlare).", en: "Fill in: “Al posto tuo, ___ con lei” (io, parlare)." },
                        opciones: ["parlerei", "parlerò", "parlassi", "parlavo"],
                        correcta: 0
                    },
                    {
                        tipo: "escribir",
                        pregunta: { es: "Condicional de «dovere» con «tu»: «Tu ___ studiare di più».", en: "Conditional of “dovere” for “tu”: “Tu ___ studiare di più”." },
                        respuestas: ["dovresti"]
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "¿Cuál es condicional (y no futuro)?", en: "Which one is conditional (not future)?" },
                        opciones: ["andremmo", "andremo", "andiamo", "andavamo"],
                        correcta: 0,
                        nota: { es: "Condicional: andremmo (iríamos). Futuro: andremo (iremos).", en: "Conditional: andremmo (we would go). Future: andremo (we will go)." }
                    }
                ]
            },
            {
                titulo: { es: "El subjuntivo (congiuntivo)", en: "The subjunctive (congiuntivo)" },
                resumen: { es: "Penso che sia, voglio che tu venga…", en: "Penso che sia, voglio che tu venga…" },
                explicacion: [
                    {
                        es: "El <b>congiuntivo</b> es el subjuntivo. Va después de verbos de opinión, deseo, duda o emoción + <b>che</b>: <b>Voglio che tu venga</b> (quiero que vengas), <b>Spero che vada bene</b> (espero que salga bien).",
                        en: "The <b>congiuntivo</b> is the subjunctive. It follows verbs of opinion, wish, doubt or emotion + <b>che</b>: <b>Voglio che tu venga</b> (I want you to come), <b>Penso che sia vero</b> (I think it's true)."
                    },
                    {
                        es: "Terminaciones: verbos en -are → <b>-i, -i, -i, -iamo, -iate, -ino</b> (che io parli); verbos en -ere/-ire → <b>-a, -a, -a, -iamo, -iate, -ano</b> (che io prenda, che io dorma).",
                        en: "Endings: -are verbs → <b>-i, -i, -i, -iamo, -iate, -ino</b> (che io parli); -ere/-ire verbs → <b>-a, -a, -a, -iamo, -iate, -ano</b> (che io prenda, che io dorma)."
                    },
                    {
                        es: "Como las tres primeras personas son iguales, se suele aclarar el sujeto: <b>che io parli</b>, <b>che tu parli</b>, <b>che lui parli</b>. Irregulares: <b>essere → sia</b>, <b>avere → abbia</b>, <b>andare → vada</b>, <b>fare → faccia</b>, <b>potere → possa</b>, <b>venire → venga</b>.",
                        en: "Since the first three persons are identical, the subject is often stated: <b>che io parli</b>, <b>che tu parli</b>, <b>che lui parli</b>. Irregulars: <b>essere → sia</b>, <b>avere → abbia</b>, <b>andare → vada</b>, <b>fare → faccia</b>, <b>potere → possa</b>, <b>venire → venga</b>."
                    },
                    {
                        es: "¡Ojo, diferencia con el español! Después de <b>penso che</b> o <b>credo che</b> el italiano usa congiuntivo, aunque nosotros digamos «creo que <i>es</i>»: <b>Penso che sia vero</b>, <b>Credo che Marco abbia ragione</b>.",
                        en: "It's also used after impersonal expressions: <b>È importante che tu studi</b> (it's important that you study), <b>Bisogna che partiamo</b> (we need to leave), and after <b>benché</b> (although) and <b>prima che</b> (before)."
                    }
                ],
                vocabulario: [
                    { it: "che io sia", es: "que yo sea / esté", en: "that I be" },
                    { it: "che tu abbia", es: "que tengas", en: "that you have" },
                    { it: "che lui vada", es: "que él vaya", en: "that he go" },
                    { it: "che lei faccia", es: "que ella haga", en: "that she do" },
                    { it: "penso che", es: "creo que / pienso que", en: "I think that" },
                    { it: "spero che", es: "espero que", en: "I hope that" },
                    { it: "bisogna che", es: "hace falta que", en: "it's necessary that" },
                    { it: "benché", es: "aunque", en: "although" }
                ],
                ejercicios: [
                    {
                        tipo: "opcion",
                        pregunta: { es: "Completá: «Penso che Roma ___ bellissima».", en: "Fill in: “Penso che Roma ___ bellissima”." },
                        opciones: ["sia", "è", "essere", "sei"],
                        correcta: 0,
                        nota: { es: "Después de «penso che» va congiuntivo: sia.", en: "After “penso che” you need the congiuntivo: sia." }
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "Completá: «Voglio che tu ___ con noi» (venire).", en: "Fill in: “Voglio che tu ___ con noi” (venire)." },
                        opciones: ["venga", "vieni", "venissi", "verrai"],
                        correcta: 0
                    },
                    {
                        tipo: "escribir",
                        pregunta: { es: "Congiuntivo de «avere» con «lui»: «Spero che lui ___ tempo».", en: "Congiuntivo of “avere” for “lui”: “Spero che lui ___ tempo”." },
                        respuestas: ["abbia"]
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "Completá: «È importante che loro ___» (studiare).", en: "Fill in: “È importante che loro ___” (studiare)." },
                        opciones: ["studino", "studiano", "studiino", "studieranno"],
                        correcta: 0,
                        nota: { es: "Verbo en -are, «loro» → -ino: studino.", en: "-are verb, “loro” → -ino: studino." }
                    }
                ]
            },
            {
                titulo: { es: "Frases con «se»", en: "“If” sentences (periodo ipotetico)" },
                resumen: { es: "Se avessi tempo, viaggerei…", en: "Se avessi tempo, viaggerei…" },
                explicacion: [
                    {
                        es: "Para algo real y posible se usa el indicativo: <b>Se piove, resto a casa</b> (si llueve, me quedo en casa).",
                        en: "For real, possible situations use the indicative: <b>Se piove, resto a casa</b> (if it rains, I stay home)."
                    },
                    {
                        es: "Para algo imaginario o poco probable: <b>se + congiuntivo imperfetto</b>, y en la otra parte el <b>condicional</b>: <b>Se avessi tempo, viaggerei di più</b> (si tuviera tiempo, viajaría más). ¡Igual que en español!",
                        en: "For imaginary or unlikely situations: <b>se + congiuntivo imperfetto</b>, then the <b>conditional</b>: <b>Se avessi tempo, viaggerei di più</b> (if I had time, I would travel more)."
                    },
                    {
                        es: "El congiuntivo imperfetto termina en <b>-assi, -essi, -issi</b>: parlassi, parlassi, parlasse, parlassimo, parlaste, parlassero. Irregulares: <b>essere → fossi</b>, <b>fare → facessi</b>, <b>dare → dessi</b>, <b>stare → stessi</b>.",
                        en: "The congiuntivo imperfetto ends in <b>-assi, -essi, -issi</b>: parlassi, parlassi, parlasse, parlassimo, parlaste, parlassero. Irregulars: <b>essere → fossi</b>, <b>fare → facessi</b>, <b>dare → dessi</b>, <b>stare → stessi</b>."
                    },
                    {
                        es: "Error típico: después de <b>se</b> nunca va condicional. ✗ <i>Se avrei soldi…</i> ✓ <b>Se avessi soldi, comprerei una casa</b> (si tuviera plata, compraría una casa).",
                        en: "Classic mistake: never put the conditional after <b>se</b>. ✗ <i>Se avrei soldi…</i> ✓ <b>Se avessi soldi, comprerei una casa</b> (if I had money, I'd buy a house)."
                    }
                ],
                vocabulario: [
                    { it: "se fossi", es: "si fuera / estuviera", en: "if I were" },
                    { it: "se avessi", es: "si tuviera", en: "if I had" },
                    { it: "se potessi", es: "si pudiera", en: "if I could" },
                    { it: "se sapessi", es: "si supiera", en: "if I knew" },
                    { it: "farei", es: "haría", en: "I would do" },
                    { it: "comprerei", es: "compraría", en: "I would buy" },
                    { it: "se fossi in te", es: "si yo fuera vos", en: "if I were you" }
                ],
                ejercicios: [
                    {
                        tipo: "opcion",
                        pregunta: { es: "Completá: «Se ___ ricco, comprerei una barca».", en: "Fill in: “Se ___ ricco, comprerei una barca”." },
                        opciones: ["fossi", "sarei", "ero", "sia"],
                        correcta: 0
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "Completá: «Se avessi tempo, ___ di più» (leggere).", en: "Fill in: “Se avessi tempo, ___ di più” (leggere)." },
                        opciones: ["leggerei", "leggessi", "leggerò", "leggo"],
                        correcta: 0
                    },
                    {
                        tipo: "escribir",
                        pregunta: { es: "Congiuntivo imperfetto de «potere» con «io»: «Se ___, verrei».", en: "Congiuntivo imperfetto of “potere” for “io”: “Se ___, verrei”." },
                        respuestas: ["potessi"]
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "¿Cuál está bien?", en: "Which one is correct?" },
                        opciones: ["Se piove, resto a casa.", "Se pioverebbe, resterei a casa.", "Se piovesse, resto a casa.", "Se pioverà, restassi a casa."],
                        correcta: 0
                    }
                ]
            },
            {
                titulo: { es: "Pronombres combinados, ci y ne", en: "Combined pronouns, ci and ne" },
                resumen: { es: "Me lo, glielo, ne ho due, ci vado…", en: "Me lo, glielo, ne ho due, ci vado…" },
                explicacion: [
                    {
                        es: "Cuando se juntan un pronombre indirecto y uno directo, <b>mi, ti, ci, vi</b> pasan a <b>me, te, ce, ve</b>: <b>Me lo dai?</b> (¿me lo das?), <b>Te la porto</b> (te la llevo).",
                        en: "When an indirect and a direct pronoun meet, <b>mi, ti, ci, vi</b> become <b>me, te, ce, ve</b>: <b>Me lo dai?</b> (will you give it to me?), <b>Te la porto</b> (I'll bring it to you)."
                    },
                    {
                        es: "Para «a él / a ella / a usted» se usa <b>glie-</b> pegado al directo: <b>glielo, gliela, glieli, gliele</b>. <b>Gliel'ho detto</b> = se lo dije. Es como el «se lo» del español.",
                        en: "For “to him / to her / to you (formal)”, use <b>glie-</b> joined to the direct pronoun: <b>glielo, gliela, glieli, gliele</b>. <b>Gliel'ho detto</b> = I told him/her."
                    },
                    {
                        es: "<b>Ne</b> reemplaza una cantidad o algo que va con «di»: <b>Quanti caffè bevi? Ne bevo due</b> (tomo dos). <b>Che ne pensi?</b> (¿qué pensás de eso?).",
                        en: "<b>Ne</b> replaces a quantity or something introduced by “di”: <b>Quanti caffè bevi? Ne bevo due</b> (I drink two of them). <b>Che ne pensi?</b> (what do you think about it?)."
                    },
                    {
                        es: "<b>Ci</b> reemplaza un lugar: <b>Vai a Roma? Sì, ci vado domani</b> (sí, voy mañana). Y aparece en <b>c'è / ci sono</b> (hay).",
                        en: "<b>Ci</b> replaces a place: <b>Vai a Roma? Sì, ci vado domani</b> (yes, I'm going there tomorrow). It's also in <b>c'è / ci sono</b> (there is / there are)."
                    }
                ],
                vocabulario: [
                    { it: "Me lo dai?", es: "¿Me lo das?", en: "Will you give it to me?" },
                    { it: "Te la porto", es: "Te la llevo", en: "I'll bring it to you" },
                    { it: "Glielo dico", es: "Se lo digo", en: "I'll tell him / her" },
                    { it: "ne ho due", es: "tengo dos", en: "I have two (of them)" },
                    { it: "ci vado", es: "voy (ahí)", en: "I go there" },
                    { it: "c'è", es: "hay (singular)", en: "there is" },
                    { it: "ci sono", es: "hay (plural)", en: "there are" },
                    { it: "Che ne pensi?", es: "¿Qué opinás?", en: "What do you think about it?" }
                ],
                ejercicios: [
                    {
                        tipo: "opcion",
                        pregunta: { es: "«Mi presti la penna?» — «Sì, ___ presto.»", en: "“Mi presti la penna?” — “Sì, ___ presto.”" },
                        opciones: ["te la", "ti la", "te lo", "gliela"],
                        correcta: 0,
                        nota: { es: "«A ti» + «la penna» → te la.", en: "“To you” + “la penna” → te la." }
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "«Hai dato il libro a Marco?» ¿Cuál es la respuesta correcta?", en: "“Hai dato il libro a Marco?” Which answer is correct?" },
                        opciones: ["Sì, gliel'ho dato.", "Sì, gli l'ho dato.", "Sì, le l'ho dato.", "Sì, lo gli ho dato."],
                        correcta: 0,
                        nota: { es: "«A Marco» + «il libro» → glielo, y delante de «ho» queda gliel'ho.", en: "“To Marco” + “il libro” → glielo, which becomes gliel' before “ho”." }
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "«Quante sorelle hai?» — «___ ho tre.»", en: "“Quante sorelle hai?” — “___ ho tre.”" },
                        opciones: ["Ne", "Ci", "Le", "Li"],
                        correcta: 0
                    },
                    {
                        tipo: "escribir",
                        pregunta: { es: "«Vieni al teatro stasera?» — «Sì, ___ vengo.»", en: "“Vieni al teatro stasera?” — “Sì, ___ vengo.”" },
                        respuestas: ["ci"]
                    }
                ]
            },
            {
                titulo: { es: "Modismos y falsos amigos", en: "Idioms and false friends" },
                resumen: { es: "Hablar como un italiano y no caer en trampas.", en: "Sound like a native and avoid traps." },
                explicacion: [
                    {
                        es: "Antes de un examen o de un estreno, los italianos dicen <b>In bocca al lupo!</b> (literalmente «en la boca del lobo») y se responde <b>Crepi!</b> Equivale a desear mucha suerte.",
                        en: "Before an exam or a premiere, Italians say <b>In bocca al lupo!</b> (literally “into the wolf's mouth”) and the answer is <b>Crepi!</b> It's like “break a leg”."
                    },
                    {
                        es: "Más expresiones: <b>essere al verde</b> (estar sin plata), <b>costare un occhio della testa</b> (costar un ojo de la cara), <b>non vedo l'ora!</b> (¡no veo la hora!) y <b>avere le mani in pasta</b> (estar metido en el asunto).",
                        en: "More idioms: <b>essere al verde</b> (to be broke), <b>costare un occhio della testa</b> (to cost an arm and a leg), <b>non vedo l'ora!</b> (I can't wait!) and <b>avere le mani in pasta</b> (to have a finger in the pie)."
                    },
                    {
                        es: "Falsos amigos para hispanohablantes: <b>burro</b> = manteca, <b>salire</b> = subir, <b>guardare</b> = mirar, <b>caldo</b> = calor o caliente, <b>aceto</b> = vinagre e <b>imbarazzata</b> = avergonzada (embarazada se dice <b>incinta</b>).",
                        en: "False friends for English speakers: <b>camera</b> = room, <b>fattoria</b> = farm (a factory is a <b>fabbrica</b>), <b>libreria</b> = bookshop (a library is a <b>biblioteca</b>), <b>parenti</b> = relatives (parents are <b>genitori</b>) and <b>eventualmente</b> = possibly, not “eventually”."
                    },
                    {
                        es: "Un comodín: <b>Magari!</b> solo significa «¡ojalá!», pero dentro de una frase significa «tal vez»: <b>Magari vengo domani</b> (tal vez venga mañana).",
                        en: "A handy word: <b>Magari!</b> on its own means “I wish!”, but inside a sentence it means “maybe”: <b>Magari vengo domani</b> (maybe I'll come tomorrow)."
                    }
                ],
                vocabulario: [
                    { it: "In bocca al lupo!", es: "¡Mucha suerte!", en: "Good luck! / Break a leg!" },
                    { it: "Crepi!", es: "(respuesta a «in bocca al lupo»)", en: "(reply to “in bocca al lupo”)" },
                    { it: "essere al verde", es: "estar sin plata", en: "to be broke" },
                    { it: "non vedo l'ora", es: "no veo la hora", en: "I can't wait" },
                    { it: "costare un occhio della testa", es: "costar un ojo de la cara", en: "to cost an arm and a leg" },
                    { it: "magari", es: "¡ojalá! / tal vez", en: "I wish! / maybe" },
                    { it: "il burro", es: "la manteca", en: "butter" },
                    { it: "la camera", es: "la habitación", en: "the room" }
                ],
                ejercicios: [
                    {
                        tipo: "opcion",
                        pregunta: { es: "Una amiga te dice «In bocca al lupo!» antes de un examen. ¿Qué respondés?", en: "A friend says “In bocca al lupo!” before your exam. What do you answer?" },
                        opciones: ["Crepi!", "Grazie al lupo!", "Anche a te!", "Salute!"],
                        correcta: 0
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "«Sono al verde» significa…", en: "“Sono al verde” means…" },
                        opciones: [
                            { es: "No tengo plata", en: "I'm broke" },
                            { es: "Estoy en el campo", en: "I'm in the countryside" },
                            { es: "Estoy nervioso", en: "I'm nervous" },
                            { es: "Soy ecologista", en: "I'm an environmentalist" }
                        ],
                        correcta: 0
                    },
                    {
                        tipo: "opcion",
                        pregunta: { es: "¿Qué significa «la camera»?", en: "What does “la camera” mean?" },
                        opciones: [
                            { es: "La habitación", en: "The room" },
                            { es: "La cámara de fotos", en: "The photo camera" },
                            { es: "La cama", en: "The bed" },
                            { es: "La cocina", en: "The kitchen" }
                        ],
                        correcta: 0,
                        nota: { es: "La cámara de fotos es «la macchina fotografica».", en: "A photo camera is “la macchina fotografica”." }
                    },
                    {
                        tipo: "escribir",
                        pregunta: { es: "Escribí en italiano: «¡no veo la hora!».", en: "Write in Italian: “I can't wait!”." },
                        respuestas: ["Non vedo l'ora!"]
                    }
                ]
            }
        ]
    }
];
