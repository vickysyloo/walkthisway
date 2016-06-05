$(document).on('ready page:load', function() {

  if ($('#map_walk-form').length > 0) {
    console.log("true")
    $('input.autocomplete_city').on('keypress', function(event) {
      if (event.which === 13) {
        event.preventDefault();
        // event.stopPropagation();
        var city = $('input#form_city').val();
        console.log('city in jquery is' + city);
        codeCity(geocoder, city, map_new);
      }
    });

    $('button#centerbutton').on('click', function(event) {
        var city = $('input#form_city').val();
        console.log('city is' + city);
        codeCity(geocoder, city, map_new);
      });



    $('button.plot_walk_btn').on('click', function(e){
      if ($('input.address').val() == undefined || $('input.address').val() == '' || $('input.address').length < 2 ) {
        alert('Need at least 2 points to plot a path');
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
          plot_waypoints_array(return_data, map_new);
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
      $('.form_edit_new').trigger('submit');
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

      $(".plot_btn").on('click', function(event){
         // console.log("button.waypoint-btn jquery event registered");
         var address = $(this).closest(".nested-fields").find(".address").val();
         codeAddress(geocoder, address, map_new);
       });



    });
  }
});
