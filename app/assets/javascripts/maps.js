var map_index;
var map_show;
var map_new;
var styles;

function initialize(mapElement, zoomlevel, moreOptions) {
  // geocoder = new google.maps.Geocoder();	// create geocoder object to geocode address
  var mapPlaceholder = $('#' + mapElement);
  var latlng = { lat: mapPlaceholder.data('latitude'), lng: mapPlaceholder.data('longitude') };	// set default to search params geocoded = @centerpoint in walks controller
  var mapOptions = {
    zoom: zoomlevel,
    center: latlng,
    scrollwheel: false
  };
  var extendedOptions = _.extend({}, mapOptions, moreOptions)
  var styles = [
    {
      stylers: [
        { hue: "#00a1ff" },
        { saturation: -30 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 15 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});
  var map = new google.maps.Map(document.getElementById(mapElement), extendedOptions);	// create new map div
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  return map;
};

function renderMap() {
  //initialize map
  if ($('#map_walk-index').length > 0) {
    var moreOptions = {maxZoom: 17,
      minZoom: 8};
    map_index = initialize('map_walk-index', 12, moreOptions);
    var startpoints = $('#map_walk-index').data('startpoints');
    // startpoints_formatted =
    google.maps.event.addDomListener(window, 'load', map_index);		// execute init map function on page load
    plot_waypoints_array(startpoints, map_index); // function defined in waypoints.js. Takes array of startpoints (from html data attrib.), formats points to feed into map_index;

  }

  if ($('#map_walk-show').length > 0) {
    var moreOptions = {disableDefaultUI: true, disableDoubleClickZoom: true, draggable: false};
    map_show = initialize('map_walk-show', 9, moreOptions);
    google.maps.event.addDomListener(window, 'load', map_show);		// execute init map function on page load
  }

  if ($('#map_walk-new').length > 0) {
    map_new = initialize('map_walk-new', 1);
    google.maps.event.addDomListener(window, 'load', map_new);		// execute init map function on page load
  }

}

$(document).on('ready page:load', renderMap);
