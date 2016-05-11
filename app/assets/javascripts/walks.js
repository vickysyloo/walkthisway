$(document).on('ready page:load', function() {
  // function initMap() {

  //   var mapOptions = {
  //     center: {lat: 43.667, lng: -79.390},
  //     zoom: 13,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP,
  //   };
  //
  //   var map_walk = new google.maps.Map(document.getElementById('map_walk'), mapOptions);
  // };
  //
  // initMap();

// // code for gmaps4arails
// var directionsDisplay = new google.maps.DirectionsRenderer();
// var directionsService = new google.maps.DirectionsService();
//
// function calcRoute() {
//   var origin      = new google.maps.LatLng(41.850033, -87.6500523);
//   var destination = new google.maps.LatLng(42.850033, -85.6500523);
//   var hi = new google.maps.LatLng(42.850033, -85.6500523);
//
//   var request = {
//       origin:      origin,
//       destination: destination,
//
//        travelMode:  google.maps.TravelMode.DRIVING
//   };
//   directionsService.route(request, function(response, status) {
//     if (status == google.maps.DirectionsStatus.OK) {
//       directionsDisplay.setDirections(response);
//     }
//   });
// }
//
// calcRoute();
//
// var handler = Gmaps.build('Google');
// handler.buildMap({ internal: {id: 'directions'}}, function(){
//   directionsDisplay.setMap(handler.getMap());
// });

    var locations = [
      ['point one', -33.89, 151.274856],
      ['point two', -33.9236, 151.2590],
      ['point three', -34.0282, 151.157507],
      ['point four', -33.80010, 151.2874],
    ];

    var map = new google.maps.Map(document.getElementById('map_walk'), {
      zoom: 10,
      center: new google.maps.LatLng(-33.92, 151.25),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    for (var i = 0; i < locations.length; i++) {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

});
