const mobileMenuOverlay = document.querySelector('.mobile-menu');
const mobileMenu = document.querySelector('.mobile-menu__content');
const burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    mobileMenu.classList.toggle('active');
})

mobileMenuOverlay.addEventListener('click', ({ target }) => {
    if (target === mobileMenuOverlay) {
        burgerMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
})