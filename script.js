const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
const icon = mobileMenu.querySelector('i');

mobileMenu.addEventListener('click', () => {
    // Alterna a visibilidade do menu
    navLinks.classList.toggle('active'); 

    // Alterna o ícone entre 'fa-bars' e 'fa-times'
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});
