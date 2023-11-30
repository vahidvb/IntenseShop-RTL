$(document).ready(function () {
    $('[data-bs-toggle=tooltip]').tooltip();
    wow = new WOW().init();
    $('.hamburger').click(function () {
        $('.navbar-collapse').css('transform', 'translateX(0)');
        $('.hover-collapse').css('visibility', 'visible');
    })
    $('.hamburger').click(function () {
        $('.hamburger').addClass('h-active');
        $('.navbar-collapse').css('transform', 'translateX(0)');
        $('.hover-collapse').css('visibility', 'visible');
        $('.hamburger').css('z-index', '2');
    })
    $('.hover-collapse').click(function () {
        $('.navbar-collapse').css('transform', 'translateX(100%)');
        $(this).css('visibility', 'hidden');
        $('.hamburger').removeClass('h-active');
        $('.hamburger').css('z-index', '3');
    })
    $('.page-preloader-cover').delay(100).fadeOut('slow');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
            $('header').addClass('sticky');
            $('.btn-up').show();
        } else {
            $('.btn-up').hide();
            $('header').removeClass('sticky');
        }
    });
    $(".btn-up").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    })
    $('.search').click(function () {
        $('.search-box').css('width', '100%');
        $('.search-box').css('opacity', '1');
        $('.search-box input').focus();
        $('.search').tooltip('hide');
        $('.search-box .close').click(function () {
            $('.search-box').css('width', '0');
            $('.search-box').css('opacity', '0');
        })
    })
})