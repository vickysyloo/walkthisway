function codeAddress(geocoder, address, mapSelected) {
  console.log("function codeAddress is running");

  geocoder.geocode( { 'address': address}, function(results, status) {

    if (status == google.maps.GeocoderStatus.OK) {
      mapSelected.setCenter(results[0].geometry.location);// center the map on address
      plotMarkerAfterGeocode(results, mapSelected);
    } else {
      alert('something went wrong... Geocode was not successful');
    }

  });
  return false;

}



function plotMarkerAfterGeocode(results, mapSelected) {
  var marker1 = null;
    marker1 = new google.maps.Marker({
      position: results[0].geometry.location,
      map: mapSelected
    });
}

function codeCity(geocoder, city, form_map) {
  console.log('city in codeCity is ' + city)
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
