// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on('ready page:load', function() {
  if ($('#comment-list-and-form').length > 0) {

  $('form.new_comment').submit(function(event){
    console.log('click registered on form');
    event.preventDefault();
    event.stopPropagation();
    var walkid = $('form.new_comment')[0].dataset.walkid;
    var urlid = ($(this).attr('action')).toString() + '/';
    $.ajax({
      url: urlid,
      method: 'POST',
      data: $(this).serialize(),
      success: function(return_data){
        console.log('this is the return of form submission'+ return_data);
        // $('comment-list').append(return_data);
        console.log('this is' + this);
        return false;
      },
      fail: function(){
        alert('error');
        return false
      },
      dataType: 'script'
    });
  });

  }

});
