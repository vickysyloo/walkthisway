$(document).on('ready page:load', function() {

  var search_acAddress;
  var acOptions = {
    // types: ['establishment']
  };
  var autocomplete1 = new google.maps.places.Autocomplete(document.getElementById('autocomplete'),acOptions);

  google.maps.event.addListener(autocomplete1, 'place_changed', function() {
    var search_ACaddress = autocomplete1.getPlace();
  });

  $('input#search-button').on('click', function(event) {
    // event.preventDefault();
    console.log('search button click event is registering');
    $.ajax({
      url: "/walks",
      method: "GET",
      data: {search: search_ACaddress},
      dataType: 'HTML',
      success: function(data) {
        console.log('ajax success called');
        console.log('data is' + data);
        $('#walklist').html(data);
       }
     });
  });
});
