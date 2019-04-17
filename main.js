    var dci_pos = { 
        lat: 53.551623,
        lng: 10.007720599999999
    }
    /*
    TODO :  onclick marker open link with key,
            on click icon route directions,

    */
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
    }
    $(".buttonSubmit").on("click",function(e){
        e.preventDefault();
    });
    function getLocation() {
        return new Promise(function(resolve, reject){ 
            navigator.geolocation.getCurrentPosition(
                function(position) { resolve(position); },
                function(error) { reject(error); }
            )
            });
    };
  
    function returnRouteCall () {
        var _r_origin = "";
        var _r_destination = dci_pos;
        var RouteCall_URL = "https://maps.googleapis.com/maps/api/directions/json?origin="+_r_origin+"&destination="+_r_destination+"&key="+API_Key;
        return RouteCall_URL;
    }

    $(".btn.openRoute").on("click",function(e){
        e.preventDefault();
        const r_response = getLocation()
        .then(  position => 
        ( {
            "latitude": position.coords.latitude, 
            "longitude": position.coords.longitude
        } )
        .then(  latLong => { unlock_request(latLong) }, 
                error => { get_location_denied(error[1]) }
            )
        );
        console.log(r_response);
    });