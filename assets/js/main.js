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

// SWIPER
const aboutSwiper = new Swiper(".about__swiper", {
    spaceBetween: 10,
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // bulletClass: 'about__swiper-pagination'
    }
    
})

// SCROLLREVEAL
const sr = ScrollReveal({
    origin: 'top',
    distance: '20px',
    duration: 2000,
    delay: 500
});

