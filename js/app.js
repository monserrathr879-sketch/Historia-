console.log("Página sobre el Pacto de Varsovia cargada 📜");

// Efecto para resaltar el menú
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav a');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('activo');
                if(link.getAttribute('href') === '#' + id) {
                    link.classList.add('activo');
                }
            });
        }
    });
});
