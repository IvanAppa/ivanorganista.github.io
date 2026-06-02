document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 24);
        });
    }

    console.log("Sitio cargado correctamente");
});
