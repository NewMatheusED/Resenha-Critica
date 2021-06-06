$('.button').click(function() {
    $('body').toggleClass('dark')

    if($('body').hasClass('dark')) {
        $('.button span').css({
            'left': '100%',
            'transform': 'translateX(-100%)'
        })
    }else{
        $('.button span').css({
            'left': '0%',
            'transform': 'translateX(0%)'
        })
    }
})