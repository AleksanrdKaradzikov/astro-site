document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', handleClick);
});

function handleClick(event) {
    event.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    if (scrollTarget) {
        const topOffset = document.querySelector('.navigation').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        const mobileMenuOverlay = document.querySelector('.mobile-menu');
        const mobileMenu = document.querySelector('.mobile-menu__content');
        const burgerMenu = document.querySelector('.burger-menu');

        burgerMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        mobileMenu.classList.remove('active');

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}