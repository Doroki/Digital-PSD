$(function(){
    
    function smoothScroll(e) {
        e.preventDefault();
        
        var menuOpenStatus = $("#navbarSupportedContent").attr("aria-expanded"),
            target = $(this.getAttribute('href')),
            distance = target.offset().top;  
        
        if( target.length ) {
            $('html, body').stop().animate({
                scrollTop: distance
                }, 1000);
        }

        if(($(window).width() < 991) && (menuOpenStatus === "true")) { // Close menu for low resolution, I used setTimeout, becouse closeing it, changing html height, than scrolling to a bit wrong position
            setTimeout(function(){
                $("#navigation > button").trigger( "click" );
            }, 1100);
        }
    }

    $(".navigation__link").on("click", smoothScroll);
    $("#scrollTopButton").on("click", smoothScroll);
});