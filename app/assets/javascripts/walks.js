$(document).on('ready',function() {
$( ".walkcard" ).hover(
  function() {
    $( this ).find('.walkcard_desc').fadeIn('slow');
  }, function() {
    $( this ).find('.walkcard_desc').fadeOut('slow');
  });

});
