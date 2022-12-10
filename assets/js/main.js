$(window).scroll(function(){
    if ($(window).scrollTop() >= window.innerHeight + 48 ) {
        $('nav').addClass('fixed-header');
        $('nav img').addClass('fixed-header-img');
        $('nav').removeClass('navbar-dark');
        $('nav').removeClass('fixed-header-reverse');
        $('nav').addClass('navbar-light');

    }
    else {
        $('nav').removeClass('fixed-header');
        $('nav img').removeClass('fixed-header-img');
        $('nav').addClass('fixed-header-reverse');
        $('nav').addClass('navbar-dark');
    }
});