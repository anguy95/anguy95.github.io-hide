$(document).ready(function() {
  var bg;
  $(".skill-box").hover(

  function() {
    bg = $(this).css("background-image");
    $(this).css("background-image", "none");
    $(this).css("color", "white");
  },
  function() {
    $(this).css("background-image", bg);
    $(this).css("color", "rgba(0, 0, 0, 0)");
  });
});
