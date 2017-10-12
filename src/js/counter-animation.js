$(function(){

    function animateCounter() {
        var counterPosition = $("#counter").offset().top,
            windowScrolledBottom = $(window).scrollTop() + $(window).height();

        if(windowScrolledBottom >= counterPosition) {

            $(".counter__number").each(function(element){

                var number = parseInt($(this).text()),
                    timer = Math.round(4000/number), // timer for Interval, to finish animate in same time no matter of number
                    element = $(this);
                    element.html(0);

                    var counting = setInterval(function () {
                        var value = parseInt(element.html());
                        value++;
                        element.html(value);

                        if(value >= number){
                            clearInterval(counting);
                        }
                }, timer);
            });

            $(window).unbind("scroll", animateCounter);
        }
    }

    $(window).bind("scroll", animateCounter);
});