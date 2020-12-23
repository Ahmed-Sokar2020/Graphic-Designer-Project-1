$(function() {
    "use strict";
    
    // Make Smooth Scroll
    $(".navbar ul li a").click(function() {
        $("html, body").animate({
            scrollTop:$("#" + $(this).data("value")).offset().top
        }, 2000);
       
    });
    
    // Trigger The NiCE Scroll
    $("html").niceScroll({
        cursorcolor:"#1BBC9A",
        cursorwidth:"7px",
        cursorborder: "1px solid #1BBC9A", 
        cursorborderradius: 0,
    });
});