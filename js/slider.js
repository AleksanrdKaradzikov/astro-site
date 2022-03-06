$('.services__slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    prevArrow: document.querySelector('.services__slider-arrow-btn--prev'),
    nextArrow: document.querySelector('.services__slider-arrow-btn--next'),
    variableWidth: true,
});

$('.reviews__slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: document.querySelector('.reviews__slider--prev'),
    nextArrow: document.querySelector('.reviews__slider--next'),
    appendDots: document.querySelector('.reviews__slider-dots'),
    dotsClass: "reviews__slider-dots-list",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        }
    ]
})

$('.services__slider').slick('refresh');
$('.reviews__slider').slick('refresh');