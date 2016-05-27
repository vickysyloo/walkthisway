$(document).on('ready page:load', function(){
  if ($('#map_walk-new').length > 0) {
  $('#mkpts').on('cocoon:after-insert', function() {
    $(function() {
      console.log("loading sortable")
      $( "#sortable" ).sortable();
      $( "#sortable" ).sortable('serialize');
      $( "#sortable" ).disableSelection();
    });
  });
}
});
