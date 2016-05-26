function plot_waypoints_array(pt_array, map) {
  for (var i=0; i<pt_array.length; i++) {
    lat = pt_array[i][0];
    lng = pt_array[i][1];

    var marker = new google.maps.Marker({
      position: {lat: lat, lng: lng},
      title: 'Hello World!'
    });

    marker.setMap(map);

    address = pt_array[i][2];
    description = pt_array[i][3];

    addInfoWindow(marker, map, address, description)
  }
}

function addInfoWindow(marker, map, address, description) {
  var infowindow = new google.maps.InfoWindow({
    content: ('<b>Starting Point:</b><br>'+address+"<br><b>Details</b><br>"+description),
    maxWidth: 200
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}
// function home_index_waypoints(pt_array, map, mapElement, zoomlevel) {
//   initialize(mapElement, zoomlevel);
//   plot_waypoints_array(pt_array, map);
// }

function calculateAndDisplayRoute(directionsService, directionsDisplay, returnWaypoints) {
  //chunk below iterates over input menu on htmlpage and plucks out selected waypoints, pushing into waypts array
  var waypt_array_length = returnWaypoints.length;

  //for each pt, format in {lat: value, lng: value}
  var formatted_waypoints = [];
  for (var i = 0; i< returnWaypoints.length; i++) {
    formatted_waypoints.push(
      {location: new google.maps.LatLng(returnWaypoints[i][0], returnWaypoints[i][1])}
    )
  }

  if (waypt_array_length >2) {
    var waypts = formatted_waypoints.slice(1, waypt_array_length-1);
  } else {
    var waypts = []
  }
  //call .route method on directionsService object. inputs: 1 hash, 1 success-callback function
  directionsService.route({
    origin: formatted_waypoints[0], //****Waypoints.first
    destination: formatted_waypoints[waypt_array_length-1], //****waypoints.last
    waypoints: waypts, // *****Waypoints between first and last
    optimizeWaypoints: true, // leave for now
    travelMode: google.maps.TravelMode.WALKING //******** .WALKING
  }, function(response, status) { // response, status are returned from .route method

    //if successful directionsService request
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response); //call setDirections method on input variable, directionsDisplay (a google object, 'renderer'), feeding it 'response' (contains waypoints, paths from directionsService.route)
      var route = response.routes[0]; //returns all info between a-->b and b-->c etc. (each leg of journey)
      var summaryPanel = document.getElementById('directions-panel'); //stores DOM element, 'directions-panel' in variable

      //******SET NEW DIV ID FOR DIRECTIONS  in VIEW ********//
      summaryPanel.innerHTML = '';//sets html of summaryPanel to blank
      // For each leg of route, display summary information.
      for (var i = 0; i < route.legs.length; i++) {
        var routeSegment = i + 1;
        summaryPanel.innerHTML += '<b>Segments: ' + '#' + routeSegment +
            '</b><br>';
        summaryPanel.innerHTML += 'Starting point: ' + route.legs[i].start_address + '<br>';
        summaryPanel.innerHTML += 'End point: ' + route.legs[i].end_address + '<br><br>';
        summaryPanel.innerHTML += 'Total length of walk segment: ' + route.legs[i].distance.text + '<br><br>';
      } // ***** CHANGE TEXT HERE TO PROVIDE DIRECTIONS ********//
    } else { // if response status is not ok
      window.alert('Directions request failed due to ' + status);
    }
  });

}

function initPathMap(returnedWaypoints) {
  // ******THIS IS FROM THE DIRECTIONS SERVICES ******//
  var directionsService = new google.maps.DirectionsService; // geocode and calculate direction between pts
  var directionsDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers: true,
            suppressInfoWindows: true,
       }); ; // creates an empty rendering object, which will later be used to show pts, paths

  directionsDisplay.setMap(map_show); // var directionsDisplay is tied to map
//on submit click, execute function, CalculateandDisplayRoute with 2 input variables: directionsService object, and directionsDisplay object

// ******** REMOVE event listener for submit button. Replace with 'on page load, where URL matches show pattern ***********// '
  calculateAndDisplayRoute(directionsService, directionsDisplay, returnedWaypoints);
}
