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

      $('button#geolocate_me').css({backgroundColor:'#F1D01B', color:'white'});
      navigator.geolocation.getCurrentPosition(geolocateSuccess, geolocateFail);
    } else {
      alert("Geolocation not supported!");
    }
  })
})

// geolcoate successful function
function geolocateSuccess(position) {
  // var lat = position.coords.latitude;
  // var lon = position.coords.longitude;
  var user_position = position
  console.log(user_position)

// initializing map and geocoding browser location
  function geocodeLatLng(geocoder, map_new) {
    // getting user location from browser
    var user_lat = user_position.coords.latitude;
    var user_lon = user_position.coords.longitude;
    var latlng = {lat: parseFloat(user_lat), lng: parseFloat(user_lon)}

    // initializing map and map styling
    var styles = [
      {
        stylers: [
          { hue: "#00a1ff" },
          { saturation: -30 }
        ]
      },{
        featureType: "road",
        elementType: "geometry",
        stylers: [
          { lightness: 15 },
          { visibility: "simplified" }
        ]
      },{
        featureType: "road",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }
    ];

    var styledMap = new google.maps.StyledMapType(styles,
      {name: "Styled Map"});
    var map = new google.maps.Map(document.getElementById('map_walk-index'));
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
    // end of map initialization and styling

    // geocoding based on user location
    geocoder = new google.maps.Geocoder();
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
  $('.index_title').text('Walks around your area');

  // var startpoints = $('#map_walk-index').data('startpoints');
  // // startpoints_formatted =
  // plot_waypoints_array(startpoints, map_index); // function defined in waypoints.js. Takes array of startpoints (from html data attrib.), formats points to feed into map_index;

  // var user_lat = user_position.coords.latitude;
  // var user_lon = user_position.coords.longitude;
  // var latlng = {lat: parseFloat(user_lat), lng: parseFloat(user_lon)}
  //
  //   $.ajax({
  //     url: '/walks',
  //     dataType: 'html',
  //     data: {latlng},
  //     method: 'GET',
  //     success: function(return_data){
  //       console.log('returned json file: ' + return_data);
  //       $('.walks-list').html(return_data);
  //       plot_waypoints_array(return_data, map_new);
  //       initPathMap(return_data, map_new);
  //     }
  //   });
};

//error message if geolocate fails
function geolocateFail(error) {
  console.log(error.message);
};
