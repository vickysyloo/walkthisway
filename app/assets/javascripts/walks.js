$(document).on('ready page:load', function() {
  var map_walk;
  var geocodeReturn;
  var geocoder = new google.maps.Geocoder();

  function initMap() {
    var mapOptions = {
      center: {lat: 43.667, lng: -79.390},
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    var map_walk = new google.maps.Map(document.getElementById('map_walk'), mapOptions);
  };



  function geocodeAddress(geocoder, resultsMap, typedInAddress) {
    var address = typedInAddress;
    geocoder.geocode({'address': address}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        console.log('results[0].geometry.location = ' + results[0].geometry.location);
        return results[0].geometry.location;
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  function addmarker(xy) {
    var marker
    return marker = new google.maps.Marker({
        position: xy,
        title: 'new marker',
        map: map_walk
    });

  };

  initMap();

  $('#mkpts').on('cocoon:after-insert', function(e) { //where is nested_fields on, listen after nested_fields is coccoon-inserted
    $('button.renderformwaypoint').on('click', function(e) {

      google.maps.event.addListener(map_walk, 'idle', function() {
        addmarker(geocodeReturn);
      });

      alert('button clicked')
      var typedIn = $('.address').val();
      console.log(typedIn);
      // var geocodedAddress = codeAddress();

      var geocodeReturn = new google.maps.LatLng(geocodeAddress(geocoder, map_walk, typedIn));
      var newmarker = addmarker(geocodeReturn);


    });
    //https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple


      // obtain value of address input field when click is registered
      // once address is obtained, throw into google code:
      // var marker1 = new google.maps.Marker({
      //   position: myLatLng, // input lat long from geocode of address
      //   map: map,
      //   title: 'Hello World!'
      // });

      // grap value from input address field
      // store in variable
      // put variable into google maps marker var
      // set variable marker onto map
  });


});
