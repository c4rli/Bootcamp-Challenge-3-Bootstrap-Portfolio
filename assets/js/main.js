// Inspiration (reverse engineered) taken from :
// https://codepen.io/JGallardo/pen/ZEBbeP


/* Once window scrolls down the equibalent of 100vh the navbar will appear
and apply these classes to make the navbar stay at the top and apply 
fancy transiton color changing effects */

$(window).scroll(function(){
    if ($(window).scrollTop() >= window.innerHeight ) {
        $('nav').addClass('fixed-header');
        $('nav img').addClass('fixed-header-img');
        $('nav').removeClass('navbar-dark'); 
        $('nav').addClass('navbar-light');
        // $('nav').removeClass('fixed-header-reverse');
    }

    // else {
    //     $('nav').removeClass('fixed-header');
    //     $('nav img').removeClass('fixed-header-img');
    //     $('nav').addClass('fixed-header-reverse');
    //     $('nav').addClass('navbar-dark');
    // }
});