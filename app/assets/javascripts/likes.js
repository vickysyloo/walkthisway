// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on('ready page:load', function() {
  if ($('form#likeform').length > 0) {

    $('form#likeform').submit(function(event){
      console.log('click registered on form');
      event.preventDefault();
      event.stopPropagation();
      var walkid = $('form#likeform')[0].dataset.walkid;
      var urlid = ($(this).attr('action')).toString() + '/';
      $.ajax({
        url: urlid,
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'script',
        success: function(return_data){
          alert('this is the return of form submission'+ return_data);
          // $('comment-list').append(return_data);
          console.log('this is' + this);
          $('div#likebtn').html(return_data);
          return false;
        },
        fail: function(){
          alert('error');
          return false;
        }

      });
    });

  }

});
