$(window).on("scroll", function(){
    var scrollTopButton = $("#scrollTopButton");
        headerHeight = $("#header").height();

    if($(window).scrollTop() > headerHeight) {
        scrollTopButton.addClass("visiable");
    } else {
        scrollTopButton.removeClass("visiable");
    }
});