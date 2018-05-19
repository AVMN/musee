$(document).ready(function () {

    $('.intro').on('mousewheel', function (event) {

        event.preventDefault();

        if (event.deltaY < 0) {
            console.log('down');
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

    });

});