// this function, plot_waypoints_array was used to plot waypoints on the show page before the google directions service was implemented to show paths
function plot_waypoints_array(pt_array, map) {
  for (var i=0; i<pt_array.length; i++) {
    lat = pt_array[i][0]
    lng = pt_array[i][1]

    var marker = new google.maps.Marker({
      position: {lat: lat, lng: lng},
      title: 'Hello World!'
    });

    marker.setMap(map);
  }
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
        summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
        summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
        summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
      } // ***** CHANGE TEXT HERE TO PROVIDE DIRECTIONS ********//
    } else { // if response status is not ok
      window.alert('Directions request failed due to ' + status);
    }
  });

}

function initPathMap(returnedWaypoints) {
  // ******THIS IS FROM THE DIRECTIONS SERVICES ******//
  var directionsService = new google.maps.DirectionsService; // geocode and calculate direction between pts
  var directionsDisplay = new google.maps.DirectionsRenderer; // creates an empty rendering object, which will later be used to show pts, paths

  directionsDisplay.setMap(map_show); // var directionsDisplay is tied to map
//on submit click, execute function, CalculateandDisplayRoute with 2 input variables: directionsService object, and directionsDisplay object

// ******** REMOVE event listener for submit button. Replace with 'on page load, where URL matches show pattern ***********// '
  calculateAndDisplayRoute(directionsService, directionsDisplay, returnedWaypoints);
}


$(document).on('ready page:load', function(){

  //if the url matches the regex(/ + walks + >1 number):
  var UrlWalkShow = new RegExp("\\Swalks\\S\\d{1,}");

  if (UrlWalkShow.test(document.location.pathname)) {
    console.log('show page registered regex pass')

    $.ajax({
      dataType: 'json',
      url: document.location.pathname,
      method: 'GET',
      success: function(return_data){
        var returnedWaypoints = return_data.coords;
        console.log('returned json file: ' + returnedWaypoints);
        plot_waypoints_array(returnedWaypoints, map_show);

        initPathMap(returnedWaypoints);
      }

    });
  }
});
