	$(document).ready(function() {
	var geocoder;
	var map;

	//initialize map
	function initialize() {
		geocoder = new google.maps.Geocoder();	// create geocoder object to geocode address
		var latlng = new google.maps.LatLng(43.6532, -79.3832);	// set default lat/long to toronto
		var mapOptions = {
			zoom: 16,
			center: latlng
		}
		map = new google.maps.Map(document.getElementById('map_walk'), mapOptions);	// create new map div
	}
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
            map.setCenter(results[0].geometry.location);			// center the map on address
            var marker = new google.maps.Marker({					// place a marker on the map at the address
              map: map,
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
	google.maps.event.addDomListener(window, 'load', initialize);		// execute init map function on page load
	});
