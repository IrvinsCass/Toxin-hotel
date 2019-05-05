$(document).ready(function() {
  $('.dropdown-option__confirm').on('click', function() {
    $('.dropdown').hide();
  });
  $(document).on('click', function (e) {
    if ($(e.target).closest(".dropdown-wrapper").length === 0) {
        $(".dropdown").hide();
    }
  });
  $('.dropdown-input').on('focus', function() {
      $(this).siblings('.dropdown').show();
  });
  $('.dropdown').hide();
})