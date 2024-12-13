const burger = document.querySelector('.burger');
const nav = document.querySelector('.burger-links');
const navLinks = [...document.querySelectorAll('.burger-links li')];
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

let isScrolled = false;

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    if (!nav.classList.contains('nav-active')) {
        dropdownMenu.classList.remove('nav-active');
    }

    navLinks.forEach((link, index) => {
        link.style.animation = link.style.animation
            ? ''
            : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    });

    burger.classList.toggle('toggle');
});

dropdownToggle.addEventListener('click', (e) => {
    e.preventDefault();
    dropdownMenu.classList.toggle('nav-active');
});

window.addEventListener('scroll', () => {
    if (!isScrolled) {
        requestAnimationFrame(() => {
            const header = document.querySelector('header');
            header.classList.toggle('scrolled', window.scrollY > 50);
            isScrolled = false;
        });
        isScrolled = true;
    }
});