$(document).on('ready page:load', function() {
  // limits the number of categories
  // function check_to_hide_or_show_add_link() {
  //   console.log('function function check to hide or show add link');
  //   if ($('.nested-fields').length > 8) {
  //     $('a.add_fields').hide();
  //   } else {
  //     $('a.add_fields').show();
  //   }
  // }

  $('#mkpts').on('cocoon:after-insert', function(e){
    $('#click_to_add_btn').on('click', function(e){
      // console.log('a.add_fields click registered');
      // if $('.nested-fields').length > 7 {
      //   console.log('.nested-fields length conditional passed');
      //   e.preventDefault();
      //   e.stopPropagation();
      //   check_to_hide_or_show_add_link;
      // }
    });
  });

});
