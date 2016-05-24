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
  $('button#geolocate_me').on('click', function(event) {
    console.log('click registered');



  })
});
