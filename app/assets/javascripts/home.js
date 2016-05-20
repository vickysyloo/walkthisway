// code below: adding global variables that wont conflict with other JS global variables
// window.walkThisWay = {};
// window.walkThisWay.acOptions = 'stuff';

$(document).on('ready page:load', function() {

  //optional input variable to narrow down autocomplete search
  var acOptions = {
    // types: ['establishment']
  };

  // option 1 - loop through classes
  // option 2 - can Autocomplete accept array? if so change get elementbyclass
  //google maps object, autocomplete, attached to 'autocomplete' html element

function autocomplete_maker(dom_element) {
  var autocomplete1 = new google.maps.places.Autocomplete(document.getElementById(dom_element),acOptions);



//value of search_acaddress updated by autocomplete for each autocomplete search
  google.maps.event.addListener(autocomplete1, 'place_changed', function() {
    var search_ACaddress = autocomplete1.getPlace();
  });
}

if ($('#autocomplete').length >0) {
autocomplete_maker('autocomplete');
}
//

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
