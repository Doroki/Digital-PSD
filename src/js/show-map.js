$(function () {

    function showMap() {
        $("#map").animate({
            "height": "400px"
        }, 1000);

        setTimeout(function() {
            var map = new google.maps.Map(document.getElementById('map'), {
                center: {
                    lat: 50.2517543,
                    lng: 19.0030715
                },
                zoom: 10
            });

            var marker = new google.maps.Marker({
                position: {
                    lat: 50.2517543,
                    lng: 19.0030715
                },
                map: map,
                title: 'Hello World!'
              });

              function toggleBounce() {
                if (marker.getAnimation() !== null) {
                  marker.setAnimation(null);
                } else {
                  marker.setAnimation(google.maps.Animation.BOUNCE);
                }
              }
              marker.addListener('click', toggleBounce);

        }, 1500);

        $("#map").unbind("click", showMap);
    }
        $("#map").on("click", showMap);
});

