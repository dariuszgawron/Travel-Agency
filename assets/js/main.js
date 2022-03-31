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
        clickable: true
    }
    
})

// SCROLLREVEAL
const sr = ScrollReveal({
    duration: 1000,
});

// HEADER
sr.reveal('.header', {origin: 'top',distance: '100%',delay: 1000});

// SECTION
sr.reveal('.section__title', {origin: 'left', distance: '10%', delay: 300});
sr.reveal('.section__subtitle', {origin: 'right', distance: '10%', delay: 300});

// HOME
sr.reveal('.home__subtitle',{origin: 'bottom',distance: '60px',delay: 400});
sr.reveal('.home__title',{origin: 'bottom',distance: '60px',delay: 500}); 
sr.reveal('.home__description',{origin: 'bottom',distance: '60px',delay: 600}); 
sr.reveal('.home__button',{origin: 'bottom',distance: '60px',delay: 600});

// SEARCH
sr.reveal('.search__content, .search__button', {origin: 'middle',scale: 0.85, easing: 'ease-in',delay: 600});

// ABOUT
sr.reveal('.about__swiper', {origin: 'left', distance: '100px', delay: 500});
sr.reveal('.about__data', {origin: 'right', distance: '100px', delay: 500});

// DESTINATION
sr.reveal('.destination__card', {scale: .65, delay: 600});

// SERVICES
sr.reveal('.services__card', {scale: .65, delay: 600});

// GALLERY
sr.reveal('.gallery__card', {origin: 'top', distance: '20%', delay: 200});

// TESTIMONIALS
sr.reveal('.testimonials__data', {origin: 'left', distance: '20%', delay: 800});
sr.reveal('.testimonials__card', {scale: .65, delay: 800});

// BLOGS
sr.reveal('.blogs__card', {rotate: {z: 20}, scale: .25, delay: 800});

// ADVENTURE
sr.reveal('.adventure__description',{scale: .55, delay: 800});
sr.reveal('.adventure__button',{scale: .25, delay: 800});

// FOOTER
sr.reveal('.footer__data',{ scale: 1.4, delay: 800});
sr.reveal('.footer__copy',{ origin: 'bottom', distance: '100%', delay: 800});