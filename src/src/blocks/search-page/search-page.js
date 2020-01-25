import { Transform } from "stream";

$(document).ready(function() {
  $('.search-page-slide-button').click(function() {
    $('.search-page-settings').toggle();
    $(this).toggleClass('search-page-slide-button_rotated')
  });
});