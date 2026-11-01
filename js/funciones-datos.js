// ===== Funciones del Teatro y del Microcine =====
// Hay dos calendarios: uno en Teatro → Funciones y otro en Microcine → Funciones.
// Cada uno tiene su propio interruptor y su propia lista de funciones.
//
// 👉 PARA DESBLOQUEAR UN CALENDARIO: cambiá «abiertas: false» por «abiertas: true» en el lugar que corresponda.
//    Mientras sea false, ese calendario se ve borroso, con el cartel «Próximamente», y no se puede usar.
//
// Cada función tiene:
//   fecha        → "año-mes-día", por ejemplo "2026-12-05"
//   hora         → en formato de 24 horas, por ejemplo "21:00"
//   titulo       → { es, en, it }
//   descripcion  → { es, en, it }
//
// Por ahora cada calendario tiene una sola función, DE EJEMPLO: cuando haya una real, se cambian sus datos (o se agregan más).

const FUNCIONES = {
    // ---------- Teatro → Funciones ----------
    teatro: {
        abiertas: false,
        lista: [
            {
                fecha: "2026-12-05",
                hora: "21:00",
                titulo: { es: "Función de ejemplo", en: "Sample show", it: "Spettacolo di esempio" },
                descripcion: {
                    es: "Esta función es solo un ejemplo para probar el calendario. Se reemplaza por la real cuando la haya.",
                    en: "This show is just an example to test the calendar. It will be replaced by a real one when there is one.",
                    it: "Questo spettacolo è solo un esempio per provare il calendario. Verrà sostituito da quello vero quando ci sarà."
                }
            }
        ]
    },

    // ---------- Microcine → Funciones ----------
    microcine: {
        abiertas: false,
        lista: [
            {
                fecha: "2026-12-12",
                hora: "20:00",
                titulo: { es: "Función de ejemplo", en: "Sample screening", it: "Proiezione di esempio" },
                descripcion: {
                    es: "Esta función es solo un ejemplo para probar el calendario. Se reemplaza por la real cuando la haya.",
                    en: "This screening is just an example to test the calendar. It will be replaced by a real one when there is one.",
                    it: "Questa proiezione è solo un esempio per provare il calendario. Verrà sostituita da quella vera quando ci sarà."
                }
            }
        ]
    }
};
