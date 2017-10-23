// JQuery counter using a for each loop

$('.counter').each(function () {
    $(this).prop('End', 0).animate({
        End: $(this).text()
    }, {
        duration: 6000,
        easing: 'swing',
        step: function (value) {
            $(this).text(Math.ceil(value));
        }
    });
});
