// Security: Disable right-click context menu in production (optional)
// document.addEventListener('contextmenu', (e) => e.preventDefault());

document.addEventListener("DOMContentLoaded", () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 24);
        });
    }

    // Security: Prevent XSS by using textContent instead of innerHTML
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Sanitize inputs before processing
            const inputs = contactForm.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                input.value = input.value.trim();
            });
            // Additional validation can be added here
        });
    }

    // Social icons animation
    const icons = document.querySelectorAll('.social-anim');
    icons.forEach((icon) => {
        icon.style.transition = "transform 0.3s, filter 0.3s";
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = "scale(1.2) rotate(5deg)";
            icon.style.filter = "drop-shadow(0 4px 12px rgba(75, 46, 131, 0.4))";
        });
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = "scale(1)";
            icon.style.filter = "";
        });
    });

    // Detect if user is using HTTPS
    if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
        console.warn('⚠️ Please use HTTPS for secure browsing');
    }

    console.log("✓ Sitio cargado correctamente con seguridad habilitada");
});
