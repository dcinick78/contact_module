    var dci_pos = { 
        lat: 53.555630,
        lng: 10.009230
    }
    /*
    TODO :  onclick marker open link with key,
            on click icon route directions,

    */
   function setMapFocus () {
        if ($(window).width() >= 992 ) {
        var qtMapinPX = ( $('#map').width() / 4 ) * 1.1;
        map.setCenter(dci_pos);
        map.panBy(-qtMapinPX, 0);
            $(".seperator h3").show();
        } else {
            $(".seperator h3").hide();
        }
    };
    function initMarker () {
        var marker = new google.maps.Marker({
            position: dci_pos,
            map: map, 
            animation: google.maps.Animation.DROP,
            //icon: "dci_pin.png",
            title: 'DCI Hamburg'
        });
        window.setTimeout(function(){marker.setAnimation(google.maps.Animation.BOUNCE);},600);
    };
    let API_Key = "AIzaSyDLOKCxtRd_pEqn4_1eD2WjVXdtS8V4p3s";//Ahmads API Key
    var map;
    function initMap() {          
        map = new google.maps.Map(document.getElementById('map'), {
            center: dci_pos,
            zoom: 15
        });
        initMarker();
        setMapFocus();
    }
    /**
     * Event Handler for Contact
     */
    $(".buttonSubmit").on("click",function(e){
        e.preventDefault();
    });
    $(".btn.openRoute").on("click",function(e){
        e.preventDefault();
        /* open Route in new or same window*/
    });
    $(window).on("resize",function() {
        setMapFocus();
    })