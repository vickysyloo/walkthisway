$(document).on('ready page:load', function(){
  $('#mkpts').on('cocoon:after-insert', function() {
    $(function() {
      console.log("loading sortable")

      $("#sortable").sortable();

      $('#plot_walk').sortable({
        disabled: true
      });

      $('#walk_submit').sortable({
        disabled: true
      });

      $('#addwaypoint').sortable({
        disabled: true
      });

      $("#sortable").sortable('serialize');

      $("#sortable").disableSelection();
  });
});
});
