$(document).on('ready page:load', function() {

  //after form partials are added
  $('#mkpts').on('cocoon:after-insert', function(e){
    $('button#up_reorder').on('click', function(e){
      console.log('button click registered');
  });

    window.NestedFormEvents.prototype.insertFields = function(content, assoc, link) {
      var $tr = $(link).closest('tr');
      return $(content).insertBefore($tr);
    }

});



  // on clicking 'submit', query for all waypoint partial forms (input.order hidden field), insert index value into hidden field, trigger submit on the form
  $('input.walk_submit').on('click', function(e) {
    e.preventDefault();

    $('input.order').each(function(index) {
      $(this).val(index);
      $('form#new_walk').trigger('submit');
    });
  });
});
