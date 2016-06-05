// Function for geolocation


//on success

  // send get request to walks index
  //retrieve all walks within set distance
  //re-initialize google maps map with center on browser location
  //setmarkers for start of walk
  //replace html at bottom of form with the returned data

//on fail

  //notify user of request failure
  // leave google map centered on toronto?

//jquery selection


var user_position;

$(document).on('ready page:load', function() {
  $('button#geolocate_me').on('click', function() {
    if ("geolocation" in navigator) {
      console.log("geolocation supported")

      navigator.geolocation.getCurrentPosition(geolocateSuccess, geolocateFail);
      // console.log(pos)
      // codecity();
    } else {
      alert("Geolocation not supported!");
    }
  })
})

function geolocateSuccess(position) {
  // var lat = position.coords.latitude;
  // var lon = position.coords.longitude;
  var user_position = position
  console.log(user_position)


  function geocodeLatLng(geocoder, map_new) {
    var user_lat = user_position.coords.latitude;
    var user_lon = user_position.coords.longitude;
    var latlng = {lat: parseFloat(user_lat), lng: parseFloat(user_lon)}
    geocoder = new google.maps.Geocoder();
    var map = new google.maps.Map(document.getElementById('map_walk-index'));
    geocoder.geocode({'location': latlng}, function(results, status) {
      console.log("geocodelatlng running");

      if (status === google.maps.GeocoderStatus.OK) {
        console.log("geocoding ok")
          map.setCenter(latlng)
          map.setZoom(11);
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  };

  geocodeLatLng(geocoder, map_new);
};


//
function geolocateFail(error) {
  console.log(error.message);
};
