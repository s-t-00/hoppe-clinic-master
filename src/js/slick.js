/*!
 * Slick
 * use : slick.min.js
 */

$(function() {
    var icon = '<span class="icon"><i class="icon-item-arrow"></i></span>';
    var commonOption = {
        breakPointTouch: 768,
        prevArrow: '<span class="slick-arrow is-prev">' + icon + "</span>",
        nextArrow: '<span class="slick-arrow is-next">' + icon + "</span>"
    };
    slick = function() {
        // use product-list
        $("[slick-01]").slick({
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: commonOption.breakPointTouch,
                    settings: {
                        dots: false
                    }
                }
            ]
        });
    };
    slick();
});
