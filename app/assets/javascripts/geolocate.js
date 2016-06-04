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




$(document).on('ready page:load', function() {
  $('#geolocate_me').on('click', function() {
    if ("geolocation" in navigator) {
      console.log("geolocation supported")
      function success(pos) {
        var crd = pos.coords;

        console.log('Your current position is:');
        console.log('Latitude : ' + crd.latitude);
        console.log('Longitude: ' + crd.longitude);
        console.log('More or less ' + crd.accuracy + ' meters.');
      };
      navigator.geolocation.getCurrentPosition(success, error);
      // console.log(pos)
    } else {
      var error = alert("Geolocation not supported :(");
    }
  })
})

// function itWorked(position){
//   var lat = position.coords.latitude;
//   var lon = position.coords.longitude;
//
//   $.ajax({
//     url: '/walks',
//     method: 'get',
//     dataType: 'html',
//     data: {lat: lat, lon: lon},
//     success: function(data) {
//       $('.walks-geolocate').html(data);
//     }
//   });
//
// }
//
// function itFailed(error) {
//   console.log(error.message);
// }
//
// //
// // $(document).on('ready page:load', function() {
// //   // $('button#geolocate_me').on('click', function(event) {
// //     console.log('click registered');
// //
// //
// //
// //   });
