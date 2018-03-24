$('.nav-wrapper a').click(function() {
    $(this).addClass('active');
    $('.nav-wrapper a').removeClass('active');
});

$(document).ready(function(){
    $('.sidenav').sidenav();
});