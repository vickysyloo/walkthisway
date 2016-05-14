$(document).on('ready page:load', function(){
  //initialize map
  function initialize() {
    // geocoder = new google.maps.Geocoder();	// create geocoder object to geocode address
    var mapPlaceholder = $('#map_walk');
    var latlng = { lat: mapPlaceholder.data('latitude'), lng: mapPlaceholder.data('longitude') };	// set default to search params geocoded = @centerpoint in walks controller
    var mapOptions = {
      zoom: 12,
      center: latlng
    };
    map = new google.maps.Map(document.getElementById('map_walk'), mapOptions);	// create new map div
  };
  google.maps.event.addDomListener(window, 'load', initialize);		// execute init map function on page load
});
