$(function () {
    $('.slider').slick({
        dots: false,
        draggable: false,
        prevArrow: '<img chirik chirik src="img/arrow_left.png" alt="arrow left" class="slider-arrow-left">',
        nextArrow: '<img src="img/arrow_right.png" alt="arrow right" class="slider-arrow-right">',
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });

    $('a[title]').magnificPopup({
        type:'image'
    });
    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
            '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

            patterns: {
                youtube: {
                    index: 'http://www.youtube.com/',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                }

            },

            srcAction: 'iframe_src',
        },
        preloader: false,
    });
});