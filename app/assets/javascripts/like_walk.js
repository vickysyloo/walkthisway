$(document).on('ready page:load', function() {


  if ($('#like-walk').length > 0) {
    console.log('right page');


    $('#like-walk').on('click', function(e){
      console.log('click registered!');
      var dom_element = $('#like-walk')
      var walk_id = this.dataset.walkid;
      var userid = dom_element.data('user');

      $.ajax({
        url: '/users/'+String(userid)+'/bookmarked_walks',
        method: 'POST',
        data: {walk_id: walk_id, user_id: userid, type: 'like'},
        success: function(return_data){
          console.log(return_data);
      $(this).html('liked!');
      $(this).css('color', '#f75c4f');
        }
      });
    });

  }


});
