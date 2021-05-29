/*global $, console, alert, window */

$(function () {
    'use strict';
    
    $(".navbar-inverse .navbar-nav li").click(function () {
       
        $(this).addClass('active').siblings().removeClass('active');
        
    });
    
    
    

    
    
    
    
    
    
    
    //scroll to top
    
    var scrollToTop =  $(".scroll-to-top");
        
    $(window).scroll(function () {
           
        if ($(window).scrollTop() >= 1000) {
                
            scrollToTop.fadeIn(400);
        } else {
            scrollToTop.fadeOut(400);
        }
    });
        
        
    scrollToTop.click(function (e) {
           
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 2000);
            
    });
    
        // Add Nice Scroll
    
    $("body").niceScroll({
        cursorcolor: '#EA2027',
        cursorwidth: '10',
        cursorborder: '1px solid #EA2027',
        cursorborderradius: 0
    });
    
});


$(window).on('load',function () {
    "use strict";
    $(".loading-overlay").fadeOut(1000);
});
    