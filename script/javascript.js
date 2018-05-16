$(document).ready(function () {

    $('.intro').on('mousewheel', function (event) {

        if (event.deltaY < 0) {
            var speed = 2500; // Durée de l'animation (en ms)
            $('html, body').animate({
                    scrollTop: $('.menu').offset().top
                }, {
                    duration: speed,
                    easein: "easeOutBounce" //animation ease
                }
            );
            return false;
        }

        if (event.deltaY > 0) {
            var speed = 2500; // Durée de l'animation (en ms)
            $('html, body').animate({
                    scrollTop: $('.intro').offset().top
                }, {
                    duration: speed,
                    easein: "easeOutBounce" //animation ease
                }
            );
            return false;
        }
    });

});