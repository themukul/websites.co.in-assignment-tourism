$(document).ready(function(){
    $('.sidenav').sidenav();
});

$('.carousel.carousel-slider').carousel({
    duration: 200,
    fullWidth: true,
    indicators: true
});

var navHeight = $('nav').height();
//console.log(navHeight);

var windowHeight = $(window).height();
//console.log(windowHeight);

var sliderHeight = windowHeight - navHeight;

$('.main-slider').height(sliderHeight);

//console.log($('.main-slider').height());
//console.log($('.main-slider').width());
$('.nav-wrapper a').click(function() {
    $(this).addClass('active');
    $('.nav-wrapper a').removeClass('active');
});