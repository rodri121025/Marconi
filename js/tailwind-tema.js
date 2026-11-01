// Diseño del sitio para Tailwind: colores, letras, animaciones y piezas que se repiten.
// Tailwind (la versión que se carga desde internet) solo lee el diseño si está escrito DENTRO de cada página,
// en un <style type="text/tailwindcss">. Para no copiarlo en las 19 páginas, este archivo lo agrega solo.
// Por eso se carga en el <head>, justo ANTES del script de Tailwind.
// Para cambiar un color o una pieza, se edita acá y cambia en todo el sitio.
document.head.insertAdjacentHTML('beforeend', `<style type="text/tailwindcss">
/* Colores, letras y animaciones propias del sitio. Se usan como clases: bg-verde, text-vino, font-serif, animate-flotar…
   (los @keyframes de las animaciones están en estilos.css, que es CSS común) */
@theme {
    --color-verde: #009246;
    --color-verde-oscuro: #00703a;
    --color-rojo: #ce2b37;
    --color-vino: #4a1c28;
    --color-oro: #c9a227;
    --color-texto: #2c2c2c;
    --font-serif: "Playfair Display", Georgia, serif;
    --font-sans: "Inter", system-ui, sans-serif;

    --animate-flotar: flotar 4s ease-in-out infinite;
    --animate-parpadeo: parpadeo 6s infinite;
    --animate-saludo: saludo 1.4s ease-in-out 2;
    --animate-aparecer: aparecer 0.35s ease-out;
    --animate-puntos: puntos 1s ease-in-out infinite;
    --animate-pulso: pulso 1.2s ease-in-out infinite;
}

/* Piezas que se repiten en muchas secciones: se cambian acá y cambian en todo el sitio */
@layer components {
    .contenedor { @apply mx-auto max-w-[1140px] px-6; }
    .cabecera-pagina { @apply bg-[#f4f4f4] px-5 pt-14 pb-10 text-center; }
    .titulo-pagina { @apply mb-2 font-serif text-[2.4rem] leading-tight font-bold md:text-[2.6rem]; }
    .contenido-pagina { @apply py-14; }
    .subtitulo { @apply mt-8 mb-3 font-serif text-[1.6rem] leading-tight font-bold first:mt-0; }
    .parrafo { @apply mb-3.5 text-[#444]; }
    .enlace { @apply font-semibold text-verde-oscuro underline underline-offset-2 hover:text-rojo; }
    .btn-verde { @apply inline-block rounded bg-verde px-7 py-3 text-[0.95rem] font-semibold text-white transition-colors hover:bg-[#007a3a]; }
    .btn-blanco { @apply inline-block rounded border border-white px-7 py-3 text-[0.95rem] font-semibold text-white transition-colors hover:bg-white hover:text-texto; }
    .btn-borde { @apply inline-block rounded border border-verde px-6 py-2.5 text-[0.95rem] font-semibold text-verde-oscuro transition-colors hover:bg-verde hover:text-white; }

    /* Foto con epígrafe (el texto de abajo dice qué muestra) */
    .foto { @apply overflow-hidden rounded-lg bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)]; }
    .foto img { @apply block w-full object-cover; }
    .pie-foto { @apply px-4 py-2.5 text-[0.88rem] text-[#555]; }

    /* Bloque de texto con foto al costado (en el celular, la foto va abajo) */
    .bloque { @apply mb-14 grid items-center gap-8 last:mb-0 lg:grid-cols-2 lg:gap-12; }

    /* Tarjetas de la portada de Cultura italiana */
    .tarjeta-cultura { @apply overflow-hidden rounded-lg bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-1; }
    .tarjeta-cultura img { @apply h-40 w-full object-cover; }
    .tarjeta-cultura h3 { @apply p-3.5 text-center font-serif text-[1.05rem] font-bold; }

    /* Tarjetas de cada tema (un plato, una costumbre, una fiesta…): con foto o sin foto */
    .grilla-temas { @apply mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3; }
    .tarjeta-tema { @apply flex flex-col overflow-hidden rounded-lg border-t-4 border-verde bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)]; }
    .tarjeta-tema img { @apply h-52 w-full object-cover; }
    .tarjeta-tema-texto { @apply flex-1 p-4 text-[#444]; }
    .tarjeta-tema h3 { @apply mb-1 font-serif text-[1.2rem] font-bold text-texto; }

    /* Menú */
    .menu-enlace { @apply px-0.5 py-1.5 font-medium whitespace-nowrap text-[#333] transition-colors hover:text-rojo aria-[current=page]:text-rojo max-lg:px-1.5 max-lg:py-3 max-lg:text-[1.05rem] lg:text-[0.95rem] xl:text-[1.02rem]; }
    .flechita { @apply inline-flex size-10 cursor-pointer items-center justify-center lg:ml-0.5 lg:size-[22px]; }
    .flechita-icono { @apply block size-2 -translate-y-0.5 rotate-45 border-r-[1.5px] border-b-[1.5px] border-[#333] transition-transform duration-200 group-data-[abierto]:rotate-[225deg] group-data-[abierto]:border-rojo lg:size-1.5 lg:group-hover:rotate-[225deg] lg:group-hover:border-rojo; }
    .menu-desplegable { @apply hidden group-data-[abierto]:block max-lg:w-full max-lg:bg-[#f7f7f7] max-lg:py-1.5 max-lg:text-center lg:absolute lg:top-full lg:left-1/2 lg:z-[1100] lg:min-w-[210px] lg:-translate-x-1/2 lg:rounded-b-md lg:border lg:border-t-[3px] lg:border-[#eee] lg:border-t-rojo lg:bg-white lg:py-2 lg:shadow-[0_10px_28px_rgba(0,0,0,0.12)] lg:group-hover:block lg:group-focus-within:block; }
    .menu-subenlace { @apply block px-5 py-2.5 whitespace-nowrap text-[0.97rem] text-[#333] transition-colors hover:bg-[#f7f7f7] hover:text-rojo aria-[current=page]:text-rojo lg:border-l-[3px] lg:border-transparent lg:hover:border-verde; }

    /* Botones ES · EN · IT */
    .boton-idioma { @apply min-w-9 cursor-pointer rounded-full px-2 py-1 text-[0.8rem] font-semibold text-[#555] transition-colors hover:text-rojo aria-pressed:bg-verde aria-pressed:text-white sm:min-w-10 sm:px-2.5; }

    /* Mapa: auto / a pie */
    .ruta-modo { @apply cursor-pointer bg-white px-5 py-2 text-[0.9rem] text-[#444] disabled:cursor-wait disabled:opacity-60 aria-pressed:bg-verde aria-pressed:text-white; }
}
</style>`);
