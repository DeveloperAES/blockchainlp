document.addEventListener('DOMContentLoaded', function () {
    new Splide('#miCarrusel', {
        type: 'splide', // Hace que el carrusel sea infinito
        perPage: 4, // Muestra 3 elementos por slide
        perMove: 1, // Mueve de 1 en 1
        gap: '1rem', // Espaciado entre slides
        autoplay: true, // Auto-play activado
        interval: 3000,
        pagination:true, // Tiempo entre cada cambio (3s)
        breakpoints: {
            768: { perPage: 1 }, // En pantallas pequeñas, solo 1 por slide
        }
    }).mount();
});