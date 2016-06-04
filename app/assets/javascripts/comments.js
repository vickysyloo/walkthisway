// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on('ready page:load', function() {
  if ($('#comment-list-and-form').length > 0) {
  $('#comment-list-and-form').on('click', function(e){
    console.log('click registered on form');
  });

  }
  // $('form#new-comment').on('submit', function(e){
  //   console.log('click on submit button registered');
  //   e.preventDefault();
  //   e.stopPropagation();
  //
  //   $.ajax({
  //
  //     var commentform = $("form#new-comment");
  //     var walkid = commentform.data('walkid');
  //
  //     method: 'POST',
  //     URL: String(window.location.href)+'/comments'
  //     data: {walk_id: walkid},
  //     datatype: 'HTML',
  //     success: function(return_data){
  //       console.log('this is the return of form submission': return_data)
  //       $('div#comment-list-and-form').html(
  //         return_data
  //       )
  //     }
  //   });
  // });
});
