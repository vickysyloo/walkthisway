$(document).on('ready page:load', function() {
  $( ".walkcard" ).hover(function() {
    $( this ).find('.walkcard_desc').fadeIn('slow');
  }, function() {
    $( this ).find('.walkcard_desc').fadeOut('slow');
  });

  /** create walks **/
$('.create_form_step_one').hide();
$('.create_form_step_two').hide();
$('.create_form_step_three').hide();
$('.back_btn').hide();

var counter = 0;
var $curr = $('.create_form_step_one');
$curr.show();

$( '.next_btn' ).click(function() {
  if (counter === 0 ){
    $('.js_errors_list').html('');
       var error_array = error_msg();
       if (error_array !== null ) {
         _.each(error_array, function(err){
         $('.js_errors_list').append(err+'<br/>');
         })
        return false;
       }
       else {
         counter ++;
        $('.back_btn').show();
         $curr.hide();
         $curr = $curr.next();
         $curr.show();
       }
  }

  else if (counter===1) {
    $('.js_errors_list').html('');
    if ($('.nested-fields').length < 2  || $('.form_field_create_walk_address') == '') {
        $('.js_errors_list').html('Need at least two waypoints and waypoints require addresses.');
        return false;
    }

    else {
      counter ++;
      $curr.hide();
      $curr = $curr.next();
      $curr.show();
    }
  }

  else {
    $('.js_errors_list').html('');
  }
});

$( '.back_btn' ).click(function() {
  $('.js_errors_list').html('');
  counter --;
  $curr.hide();
  $curr = $curr.prev();
  $curr.show();

  if (counter===0){
    $('.back_btn').hide();
  }

  if (counter===2){
  }

});

});
