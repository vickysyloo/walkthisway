function codeAddress(geocoder, address, mapSelected) {

  console.log("function codeAddress is running");

  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      mapSelected.setCenter(results[0].geometry.location);// center the map on address
      var image = 'http://s33.postimg.org/3onpkiuen/square_marker_small.png'
      var marker = new google.maps.Marker({// place a marker on the map at the address
        map: mapSelected,
        position: results[0].geometry.location,
        icon: image
      });
    } else {
      alert('something went wrong... Geocode was not successful');
    }

  });
  return false;
}

function codeCity(geocoder, city, form_map) {
  geocoder.geocode( { 'address': city }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      form_map.setCenter(results[0].geometry.location);			// center the map on address
      form_map.setZoom(12);			// zoom map in

    } else {
      alert('something went wrong... Geocode was not successful');
    }
  });

  return false;

};
