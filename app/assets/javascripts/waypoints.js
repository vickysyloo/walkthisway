$(document).on('ready page:load', function(){
  $('#walks-list-item a').on('click', function(e){
    console.log('clicked!')
    
    $.ajax({
      dataType: 'json',
      url: $(this).attr('href'),
      method: 'GET',
      success: function(data){
        console.log(data)
      }
    });
  });
});
