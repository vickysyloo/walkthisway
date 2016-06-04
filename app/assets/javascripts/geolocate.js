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
  $('button#geolocate_me').on('click', function() {
    if ("geolocation" in navigator) {
      console.log("geolocation supported")

      navigator.geolocation.getCurrentPosition(geolocateSuccess, geolocateFail);
      // console.log(pos)
    } else {
      alert("Geolocation not supported!");
    }
  })
})


// function success(pos) {
//   var crd = pos.coords;
//
//   console.log('Your current position is:');
//   console.log('Latitude : ' + crd.latitude);
//   console.log('Longitude: ' + crd.longitude);
//   console.log('More or less ' + crd.accuracy + ' meters.');
// };

function geolocateSuccess(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;

  $.ajax({
    url: '/walks',
    method: 'get',
    dataType: 'html',
    data: {lat: lat, lon: lon},
    success: function(data) {
      $('.walks_container').html(data);
    }
  });

}
//
function geolocateFail(error) {
  console.log(error.message);
}

//
// $(document).on('ready page:load', function() {
//   // $('button#geolocate_me').on('click', function(event) {
//     console.log('click registered');
//
//
//
//   });
