$(document).on('ready page:load', function() {

  //optional input variable to narrow down autocomplete search
  var acOptions = {
    types: ['(cities)']
  };

  function autocomplete_maker(dom_element, acOptions){
    var autocomplete1 =
      new google.maps.places.Autocomplete(dom_element,
      acOptions);
  //value of search_acaddress updated by autocomplete for each autocomplete search
    google.maps.event.addListener(autocomplete1, 'place_changed', function() {
      var search_ACaddress = autocomplete1.getPlace();
    });
  }

//on home page
  if ($('input.autocomplete_city').length >0) {
    // var acElement = document.getElementByClass('autocomplete');
    //
    // $('input.autocomplete_city').on('keypress', function(event) {
    //   if (event.which === 13) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     var city = $('input.autocomplete_centermap').val();
    //     console.log('city is' + city);
    //     codeCity(geocoder, city, map_new);
    //   }
    // });

    acOptions = {
      types: ['(cities)']
    }
    $('input.autocomplete_city').each( function(index){
      autocomplete_maker(this, acOptions);
      console.log('each loop for autocomplete_city:' + index);
    });


  //on new walks form
    $('#mkpts').on('cocoon:after-insert', function(e){
      $('input.address').each( function(index){

        autocomplete_maker(this);
        console.log('cocoon created, autocomplete event fired');
      });


    });
  }
});
