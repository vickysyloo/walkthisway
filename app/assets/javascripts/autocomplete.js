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
if ($('#autocomplete').length >0) {
  var acElement = document.getElementById('autocomplete');
  acOptions = {
    types: ['(cities)']
  }
  autocomplete_maker(acElement, acOptions);
}

//on new walks form
  $('#mkpts').on('cocoon:after-insert', function(e){
    $('input.address').each( function(index){

      autocomplete_maker(this);
      console.log('cocoon created, autocomplete event fired');
    });
  });

// every time the search button is clicked
//   $('input#search-button').on('click', function(event) {
//     //intercept the default behaviour (full HTML request)

//     // confirm click is registered in JS console in chrome
//     console.log('search button click event is registering');
//
//     //fire an ajax request
//     $.ajax({
//       url: "/walks",
//       method: "GET",
//       //send the key-value pair, search: (contents of the AC search text box) with the ajax request to the controller (added to params)
//       data: {search: $('input#autocomplete').val()},
//       dataType: 'HTML',
//       //on success, console log the returned data. inject returned ata into div#walklist on splash page for now
//       success: function(data_returned) {
//         console.log('ajax success called');
//         console.log('data is' + data_returned);
//         $('#walklist').html(data_returned);
//        }
//      });
//   });

});
