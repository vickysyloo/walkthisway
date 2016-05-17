function initialize(mapElement, zoomlevel) {
  // geocoder = new google.maps.Geocoder();	// create geocoder object to geocode address
  var mapPlaceholder = $('#' + mapElement);
  var latlng = { lat: mapPlaceholder.data('latitude'), lng: mapPlaceholder.data('longitude') };	// set default to search params geocoded = @centerpoint in walks controller
  var mapOptions = {
    zoom: zoomlevel,
    center: latlng
  };
  var map = new google.maps.Map(document.getElementById(mapElement), mapOptions);	// create new map div
  return map;
};

$(document).on('ready page:load', function(){
  //initialize map

  if ($('#map_walk-index').length > 0) {
  map_index = initialize('map_walk-index', 12);
  google.maps.event.addDomListener(window, 'load',map_index);		// execute init map function on page load
  }

  if ($('#map_walk-show').length > 0) {
  map_show = initialize('map_walk-show', 12);
  google.maps.event.addDomListener(window, 'load', map_show);		// execute init map function on page load
  }

  if ($('#map_walk-new').length > 0) {
  map_new = initialize('map_walk-new', 1);
  google.maps.event.addDomListener(window, 'load', map_new);		// execute init map function on page load
  }

});
