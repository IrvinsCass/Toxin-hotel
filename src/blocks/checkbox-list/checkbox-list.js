$(document).ready(function() {
  $(".checkbox-list-content").hide();
  $(".checkbox-list-header").click(function(){
    $(".checkbox-list-content").slideToggle("fast");
  });

  var rotated = false;

  $(".checkbox-list-header").click(function() {
    if (!rotated) {
      $(this).find(".checkbox-list-header__arrow").css({
        "transform": "rotate(180deg)"
      });
    } else {
      $(this).find(".checkbox-list-header__arrow").css({
        "transform": "rotate(0deg)"
      });
    }
    // Toggle the flag
    rotated = !rotated;
  });
})