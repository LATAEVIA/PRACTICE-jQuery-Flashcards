$(document).ready(function() {
  // $(".container").load(function() {
  //   $(".panel-body").hide();
  // });
  $(".panel").click(function() {
    $(".panel-body", this).toggle("hiding");
  });
});
//   $("button#green").click(function() {
//     $("body").removeClass();
//     $("body").addClass("green-background");
//   });
//
//   $("button#yellow").click(function() {
//     $("body").removeClass();
//     $("body").addClass("yellow-background");
//   });
//
//   $("button#red").click(function() {
//     $("body").removeClass();
//     $("body").addClass("red-background");
//   });
//   $("button#white").click(function() {
//     $("body").removeClass();
//     $("body").addClass("revert-colors");
//   });
//   $("button#blue").click(function() {
//     // $("body").removeClass();
//     $("#blue-text-border").addClass("add-border");
//   });
