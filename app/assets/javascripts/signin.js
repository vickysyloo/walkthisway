$(document).on('ready page:load', function() {

  $('#login-button').on('click', function() {
    console.log("login clicked");
    $('.signin-modal').fadeIn('slow');
  });

  $('#close-button').on('click', function() {
    console.log("close button clicked");
    $('.signin-modal').fadeOut('slow');
  });

  $('#form_email, #form_password, #form_submit').on('click', function(e){
    e.stopPropagation();
  });

  $('#form_password').on('click', function(e) {
    $(this).attr('placeholder', "");
  });

  $('form').on('click', function(e) {
    e.stopPropagation();

    if (!$(e.target).is('#form_password')) {
      $('#form_password').attr('placeholder', '(at least 6 characters)');
    };
  });

  $('.signin-modal').on('click', function(e) {
    console.log('signin modal clicked')
    $(this).fadeOut('slow');
  });

}); // end of document function
