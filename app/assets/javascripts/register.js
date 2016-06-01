$(document).on('ready page:load', function() {

  $('#register-button').on('click', function() {
    console.log("register clicked");
    $('.register-modal').fadeIn('slow');
  });

  $('.form_field').on('click', function(e) {
    e.stopPropagation();
  });

  $('.register-modal').on('click', function(e) {
    $(this).fadeOut('slow');
  });
});
