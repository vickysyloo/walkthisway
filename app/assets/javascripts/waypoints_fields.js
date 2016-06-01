$(document).on('ready page:load', function() {
  // limits the number of categories
  function check_to_hide_or_show_add_link() {
    if ($('#waypoint .nested-fields').length == 8) {
      $('#add-waypoint a').hide();
    } else {
      $('#add-waypoint a').show();
    }
  }

  $('#waypoint').on('cocoon:after-insert', function() {
    check_to_hide_or_show_add_link();
  });

  $('#waypoint').on('cocoon:after-remove', function() {
    check_to_hide_or_show_add_link();
  });

  check_to_hide_or_show_add_link();
})
