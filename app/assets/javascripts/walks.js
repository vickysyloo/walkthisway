function codeAddress(geocoder, address, mapSelected) {
  console.log("function codeAddress is running");

  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      mapSelected.setCenter(results[0].geometry.location);// center the map on address
      var marker = new google.maps.Marker({// place a marker on the map at the address
        map: mapSelected,
        position: results[0].geometry.location
      });
    } else {
      alert('something went wrong... Geocode was not successful');
    }

  });
  return false;
}

function codeCity(geocoder, city, new_walk_form_map) {
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

$(document).on('ready page:load', function() {
	var geocoder;

	geocoder = new google.maps.Geocoder(); // create geocoder object to geocode address

  var urlWalknew = new RegExp("\\Swalks\\Snew");
  if (urlWalknew.test(document.location.pathname) == true) {
    var new_walk_form_map = initialize('map_walk-new', 1);
    google.maps.event.addDomListener(window, 'load', new_walk_form_map);// execute init map function on page load

    $('#mkpts').on('cocoon:after-insert', function(e){
      // attempting to see if cocoon is effecting jquery order
      console.log("waypoint div selected");
      $("p#plot").on('click', function(event){
        //   event.preventDefault();
        console.log("button.waypoint-btn jquery event registered");
    //function to geocode adddress and plot it on map
        var address = $(this).closest(".nested-fields").find(".address").val();	// grab the address from the input field
        codeAddress(geocoder, address, new_walk_form_map);// pass in the address into codeAddress function
      });
    });


    $('#centerbutton').on('click', function(e){
      var city = $('#autocomplete').val();
      codeCity(geocoder, city, new_walk_form_map);
    });

    $('#plot_new_walk').on('click', function(e){
      alert('click on plot new walk registered');
      var total = $('input.address')
      var addresses = [];
      for (i=0; i< total.length; i++) {
        addresses.push($(total[i]).val());
        console.log(addresses);
      }
    });
      //take all addresses
      //geocode address
      // create hash with lat/long of waypoints

      // initPathMap
      // var returnedWaypoints = return_data.coords;
      // console.log('returned json file: ' + returnedWaypoints);
      // plot_waypoints_array(returnedWaypoints, map_show);
      //
      // initPathMap(returnedWaypoints);
  }


  // if ($('#map_walk-show').length > 0) {
  //   var waypoints = (add all waypoints to json file)
  //   var marker = new google.maps.Marker({					// place a marker on the map at the address
  //     map: new_walk_form_map,
  //     position: .geometry.location
  //   });
  // };
});
