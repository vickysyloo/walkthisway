$(document).on('ready page:load', function() {
	var geocoder;

	geocoder = new google.maps.Geocoder();	// create geocoder object to geocode address

  if ($('#map_walk-new').length > 0) {
    var new_walk_form_map = initialize('map_walk-new', 1);
    google.maps.event.addDomListener(window, 'load', new_walk_form_map);		// execute init map function on page load

    $('#mkpts').on('cocoon:after-insert', function(e){
      // attempting to see if cocoon is effecting jquery order
      console.log("waypoint div selected");
      $("p#plot").on('click', function(event){
        //   event.preventDefault();
        console.log("button.waypoint-btn jquery event registered");
    //function to geocode adddress and plot it on map
          function codeAddress(address) {
            console.log("function codeAddress is running");

            geocoder.geocode( { 'address': address}, function(results, status) {
              if (status == google.maps.GeocoderStatus.OK) {
                new_walk_form_map.setCenter(results[0].geometry.location);			// center the map on address
                var marker = new google.maps.Marker({					// place a marker on the map at the address
                  map: new_walk_form_map,
                  position: results[0].geometry.location
                });
              } else {
                alert('something went wrong... Geocode was not successful');
              }
            });
            return false;
          }
          var address = $(this).closest(".nested-fields").find(".address").val();	// grab the address from the input field
          codeAddress(address);		// pass in the address into codeAddress function
      });
    });

    $('#centerbutton').on('click', function(e){
      function codeCity(city) {
        geocoder.geocode( { 'address': city }, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            new_walk_form_map.setCenter(results[0].geometry.location);			// center the map on address
            new_walk_form_map.setZoom(12);			// zoom map in
          } else {
            alert('something went wrong... Geocode was not successful');
          }
        });
        return false;
      };
      var city = $('#autocomplete').val();
      codeCity(city);
    });
  };

  // if ($('#map_walk-show').length > 0) {
  //   var waypoints = (add all waypoints to json file)
  //   var marker = new google.maps.Marker({					// place a marker on the map at the address
  //     map: new_walk_form_map,
  //     position: .geometry.location
  //   });
  // };
});
