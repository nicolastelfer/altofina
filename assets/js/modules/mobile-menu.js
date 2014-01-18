$(function($) {

    var menuWrapper = $('#right-col');
    var menuBtn = menuWrapper.find('#toggle-menu');
    var menuNav = menuWrapper.find('.nav');

    menuBtn.click(function() {
        $(this).toggleClass('active');
        menuNav.slideToggle('slow');
    });


    function menu() {
        if($(window).width >= 640) {
            menuNav.show();
        }
    }
    menu();
    $(window).resize(function() {
        menu();
    })


});
