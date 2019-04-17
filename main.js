    var _dci_pos = { 
        lat: 53.555630,
        lng: 10.009230
    }
    function setMapFocus () {
        if ($(window).width() >= 975 ) {
            var qtMapinPX = ( $('#map').width() / 4 ) * 0.9;
            map.setCenter(_dci_pos);
            map.panBy(-qtMapinPX, 0);
        } else {
            map.setCenter(_dci_pos);
        }
    };
    function initMarker () {
        var marker = new google.maps.Marker({
            position: _dci_pos,
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
            center: _dci_pos,
            mapTypeControl: true,
            mapTypeControlOptions: {
                position: google.maps.ControlPosition.RIGHT_BOTTOM,
            },
            fullscreenControl:true,
            fullscreenControlOptions: {
                position: google.maps.ControlPosition.TOP_LEFT
            },
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
        //check value of fields
            if (e.target.form[0].value.length > 0 &&
                e.target.form[1].value.length > 0 &&
                e.target.form[2].value.length > 0 &&
                e.target.form[3].value.length > 0 ) 
            {
                $(".modal-body").html("Danke, für ihre Nachricht, wir werden uns in Kürze mit Ihnen in Verbindung setzen. ");
            } else {
                $(".modal-body").html("Bitte füllen SIe alle Felder aus");
            }
    });
    $(".btn.openRoute").on("click",function(e){
        e.preventDefault();
        let _url = "https://www.google.com/maps/dir/?api=1&destination=Lange+Reihe+14+%2C+20099+Hamburg&destination_place_id=ChIJTd9ZcquPsUcRlgt0Xk2726g";
        var win = window.open(_url, '_blank');
        win.focus();
    });
    $(window).on("resize",function() {
        let _mapTimeout;
        if(_mapTimeout){ clearTimeout(_mapTimeout); }
            _mapTimeout = setTimeout(function(){
                setMapFocus();
            },250); 
    });