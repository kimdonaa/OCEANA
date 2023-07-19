//header
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('header').css({
            'background-color': 'rgba(0, 0, 0, 0.5)'
        });
    }
    else {

        $('header').css({
            'background-color': 'transparent'
        }); 
    }
});


//top_button
$('#btn').hide();
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#btn').fadeIn()
    } else {
        $('#btn').fadeOut()
    }
});
$('#btn').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 400);
})


