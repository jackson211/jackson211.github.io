(function ($) {
    $(document).ready(function () {

        // hide .navbar first
        $(".hidden").hide();
        var header = $('.navbar');

        // fade in .navbar
        $(function () {
            var lastScrollTop = 0;
            $(window).scroll(function () {
                var st = $(this).scrollTop();
                // set distance user needs to scroll before we start fadeIn
                if (st >= header.height() && st > lastScrollTop) {
                    header.finish().fadeTo(150,0);
                } else {
                    header.finish().fadeTo(150,1);
                }

                if (st > 60) {
                    $('.hidden').fadeIn();
                } else {
                    $('.hidden').fadeOut();
                }

                lastScrollTop = st;
            });
        });



    });
}(jQuery));
