    var dci_pos = { 
        lat: 53.551623,
        lng: 10.007720599999999
    }
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
    let gm_api_key = "AIzaSyDLOKCxtRd_pEqn4_1eD2WjVXdtS8V4p3s";//Ahmads API Key
    var map;
    function initMap() {          
        map = new google.maps.Map(document.getElementById('map'), {
            center: dci_pos,
            zoom: 15
        });
        initMarker();
    }
    $(".buttonSubmit").on("click",function(e){
        e.preventDefault();
    });