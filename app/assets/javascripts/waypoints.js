function plot_waypoints_array(pt_array, map) {
  for (var i=0; i<pt_array.length; i++) {
    lat = pt_array[i][0]
    lng = pt_array[i][1]

    var marker = new google.maps.Marker({
      position: {lat: lat, lng: lng},
      map: map,
      title: 'Hello World!'
    });
  }
}

$(document).on('ready page:load', function(){
  // $('#walks-list-item a').on('click', function(e){

  //if the url matches the regex(/ + walks + >1 number):
  var UrlWalkShow = new RegExp("\\Swalks\\S\\d{1,}");

  if (UrlWalkShow.test(document.location.pathname)) {
    console.log('show page registered regex pass')

    $.ajax({
      dataType: 'json',
      url: document.location.pathname,
      method: 'GET',
      success: function(return_data){
        alert('ajax call success');
        var waypoints = return_data.coords;
        console.log('returned json file: ' + waypoints);
        plot_waypoints_array(waypoints, map_show);



        // var marker = new google.maps.Marker({					// place a marker on the map at the address
        //   map: new_walk_form_map,
        //   position: results[0].geometry.location
        // });
      }
    });
  }
});
