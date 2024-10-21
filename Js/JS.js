// Mostrar el botón cuando el usuario se desplaza hacia abajo 100px //
window.onscroll = function() {
    var backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};


// Al hacer clic en la flecha, el usuario vuelve a la parte superior //
document.getElementById('backToTop').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
  
    // Cambiar imágenes del carrusel automáticamente //
    const carouselItems = document.querySelectorAll('#carouselExample .carousel-item');
    let currentIndex = 0;

    function changeSlide() {
        carouselItems[currentIndex].classList.remove('active'); // Ocultar la imagen actual
        currentIndex = (currentIndex + 1) % carouselItems.length; // Incrementar el índice
        carouselItems[currentIndex].classList.add('active'); // Mostrar la nueva imagen
    }

    // Cambiar la imagen segundos
    setInterval(changeSlide, 4000); //  ms = segundos
    

    document.getElementById('formulariocontacto').addEventListener('submit', function(event) {
        // Aquí no se usa event.preventDefault();
        // Permitir el envío real del formulario al archivo PHP
    });
    