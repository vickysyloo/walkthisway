$(document).on('ready',function() {
$( ".walkcard" ).hover(
  function() {
    $( this ).find('.walkcard_desc').fadeIn('slow');
  }, function() {
    $( this ).find('.walkcard_desc').fadeOut('slow');
  });

  /** create walks **/

  $('.create_form_step_two').hide();
  $('.create_form_step_three').hide();

$( ".next_first_btn" ).on('click',function (){
  (this).preventDefault();
  (this).stopPropagation();
  $('.create_form_step_one').hide();
  $('.create_form_step_one').show();
});

$( ".next_second_btn" ).on('click',function (){
  $('.create_form_step_one').hide();
  $('.create_form_step_one').show();
});


});
