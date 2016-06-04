$(document).on('ready page:load', function() {

  //if walks show page (url: /walks/##)
  var UrlWalkShow = new RegExp("\\Swalks\\S\\d{1,}");

  if (UrlWalkShow.test(document.location.pathname)) {

    $('.walk-show-directions').on('click', function() {
      console.log("directions clicked");
      $('#directions-modal').fadeIn('slow');
      $('#directions-panel').fadeIn('slow');
      $('hide-directions').fadeIn('slow');
    });

    $('#hide-directions').on('click', function() {
      console.log("close button clicked");
      $('#directions-panel').fadeOut('slow');
      $('#directions-modal').fadeOut('slow');
      $(this).fadeOut('slow');
    });

  }

});
