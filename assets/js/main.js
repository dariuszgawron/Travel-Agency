// MOBILE MENU
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// Open / Close menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav__menu--show');
});

// Close menu
navLinks.forEach(navLink => {
    navLink.addEventListener('click',() => {
        navMenu.classList.remove('nav__menu--show');
    })
});