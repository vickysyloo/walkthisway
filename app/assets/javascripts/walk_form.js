$(document).on('ready page:load', function() {

  //after form partials are added
  if ($('#map_walk-new').length > 0) {
  $('#mkpts').on('cocoon:after-insert', function(e){
    $('button#up_reorder').on('click', function(e){
      console.log('button click registered');


    });
  });



  // on clicking 'submit', query for all waypoint partial forms (input.order hidden field), insert index value into hidden field, trigger submit on the form
  $('input.walk_submit').on('click', function(e) {
    e.preventDefault();

    $('input.order').each(function(index) {
      $(this).val(index);
    });
    $('form#new_walk').trigger('submit');
  });
}
});
