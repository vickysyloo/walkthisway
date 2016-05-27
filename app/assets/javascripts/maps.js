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
    var moreOptions = {disableDefaultUI: true, disableDoubleClickZoom: false, draggable: true, mapTypeControlOptions: {position: google.maps.ControlPosition.BOTTOM_CENTER}};
    map_show = initialize('map_walk-show', 9, moreOptions);
    google.maps.event.addDomListener(window, 'load', map_show);		// execute init map function on page load

    var UrlWalkShow = new RegExp("\\Swalks\\S\\d{1,}");

    if (UrlWalkShow.test(document.location.pathname)) {
      console.log('show page registered regex pass')

      $.ajax({
        dataType: 'json',
        url: document.location.pathname,
        method: 'GET',
        success: function(return_data){
          console.log('returned json file: ' + return_data);
          plot_waypoints_array(return_data, map_show);
          initPathMap(return_data);
        }
      });
    }
  }

  if ($('#map_walk-new').length > 0) {
    var geocoder;
    var waypt_order = 1;
    geocoder = new google.maps.Geocoder(); // create geocoder object to geocode address

    map_new = initialize('map_walk-new', 1);
    google.maps.event.addDomListener(window, 'load', map_new);		// execute init map function on page load

    var urlWalknew = new RegExp("\\Swalks");
    if (urlWalknew.test(document.location.pathname) == true) {
      // var map_new = initialize('map_walk-new', 1);
      google.maps.event.addDomListener(window, 'load', map_new);// execute init map function on page load

      $('#mkpts').on('cocoon:after-insert', function(e){
        $('input.hidden_order').attr({name: 'order', value: waypt_order});
        waypt_order +=1;

        console.log("waypoint div selected");
        $(".plot_btn").on('click', function(event){
          // console.log("button.waypoint-btn jquery event registered");
          var address = $(this).closest(".nested-fields").find(".address").val();
          codeAddress(geocoder, address, map_new);
        });
      });


      $('#centerbutton').on('click', function(e){
        var city = $('#autocomplete').val();
        console.log('city is' + city);
        codeCity(geocoder, city, map_new);
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
  }

}

$(document).on('ready page:load', renderMap);
