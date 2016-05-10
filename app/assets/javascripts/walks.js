$(document).on('ready page:load', function() {
  function initMap() {

    var mapOptions = {
      center: {lat: 43.667, lng: -79.390},
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    var map_walk = new google.maps.Map(document.getElementById('map_walk'), mapOptions);
  };

  initMap();
});
