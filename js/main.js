document.addEventListener("DOMContentLoaded", function() {
    
    // Configuración del Intersection Observer (Animaciones al hacer Scroll)
    // Funciona para contenedores, títulos, textos y botones
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añade la clase 'show' para desencadenar la animación CSS
                entry.target.classList.add('show');
                // Opcional: Descomenta la siguiente línea si quieres que la animación se reproduzca solo la primera vez que bajas
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Seleccionamos todos los elementos que tienen clases de animación
    const animatedElements = document.querySelectorAll('.animate-fade-up, .animate-slide-left, .animate-fade-in');
    
    animatedElements.forEach(el => {
        scrollObserver.observe(el);
    });

});