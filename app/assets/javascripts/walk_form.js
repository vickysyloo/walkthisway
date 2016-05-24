$(document).on('ready page:load', function() {

//
// base case
//   initialize counter = 1
//   assign value as 'add new waypoint' button is clicked
//     add hidden attribute field to THIS
//     assign counter value
//     increment counter by 1 for each click
//
//
//   $('up_reorder').on('click', function(){
//       listen for click on up reorder
//       add hidden field attribute, 'order'
//       assign counter value
//       increment counter value
//
//   })
//
//   $('down_reorder').on('click', function(){
//     listen for click on down order
//     reassign hidden attribute field
//   })

  $('button.add_orders').on('click', function(e) {

    $('.nested-fields').append("<br> order value: <input type='number'>")
    console.log('button add orders click event is registered')
    _.each($('.nested-fields'), function() {
      $('.nested-fields').val('value here');
    });  
  })

  // listen for form submit
  // go through and select every instance of the waypoint form
  // assign a hidden attribute field 'order'
  // add value to each form field
});
