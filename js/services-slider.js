$('.services__slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    prevArrow: document.querySelector('.services__slider-arrow-btn--prev'),
    nextArrow: document.querySelector('.services__slider-arrow-btn--next'),
    variableWidth: true,
});

$('.services__slider').slick('refresh');