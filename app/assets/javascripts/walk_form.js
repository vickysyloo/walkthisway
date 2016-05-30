$(document).on('ready page:load', function() {

  if ($('#map_walk-new').length > 0) {
    $('input.autocomplete_city').on('keypress', function(event) {
      if (event.which === 13) {
        event.preventDefault();
        event.stopPropagation();
        var city = $('#autocomplete_centermap').val();
        console.log('city is' + city);
        codeCity(geocoder, city, map_new);
      }
    });

    $('button#centerbutton').on('click', function(event) {
        var city = $('#autocomplete_centermap').val();
        console.log('city is' + city);
        codeCity(geocoder, city, map_new);
      });

    $('button.plot_walk').on('click', function(e){
      if ($('input.address').val() == undefined || $('input.address').length) {
        return;
      }

      console.log('button click!');
      renderMap;

      var waypoints = [];
      $('input.address').each(function (index){
        waypoints.push({address: $(this).val(), order: index});
      });
        console.log(waypoints);

          $.ajax({
            dataType: 'json',
            url: '/walks/new',
            method: 'GET',
            data: {waypoints: waypoints},
            success: function(return_data){
              console.log('returned json file: ' + return_data);
              // plot_waypoints_array(return_data, map_show);
              // initPathMap(return_data, map_show);
              initPathMap(return_data, map_new);
            }
        });
    });

    // on clicking 'submit', query for all waypoint partial forms (input.order hidden field), insert index value into hidden field, trigger submit on the form
    $('input.walk_submit').on('click', function(e) {
      e.preventDefault();
      $('input.order').each(function(index) {
        $(this).val(index);
      });
      $('form#new_walk').trigger('submit');
    });

    $('#mkpts').on('cocoon:after-insert', function(e){
      $('input.address').each(function() {
        $(this).on('keypress', function(e){
          console.log('key press fired');
          if (event.which === 13) {
            console.log('enter hit');
            event.preventDefault();
            event.stopPropagation();
            var address = $(this).val();
            console.log(address)
            codeAddress(geocoder, address, map_new);
          }
        });
      });
    });
  }
});
