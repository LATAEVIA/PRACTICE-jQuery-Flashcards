$(document).ready(function() {
  $(".panel").click(function() {
    $(".panel-body", this).toggle("hiding");
  });
});
