// Select all anchors with links
$('a[href*="#"]')

// Exceptions
    .not('[href="#"]')
    .not('[href="#0"]')
    .not('[href="#carouselIndicators"]')
    .click(function(event) {
        // Links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname
           ) {
            // Element to scroll
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate( {
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex','-1');
                        // Set focus again
                        $target.focus();
                    };
                });
            }
        }
    });
