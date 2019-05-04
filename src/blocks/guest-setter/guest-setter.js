$(document).ready(function() {
  $('.guest-setter__option_confirm').on('click', function() {
    $('.guest-setter').hide();
  });
  $(document).on('click', function (e) {
    if ($(e.target).closest(".guest-setter-wrapper").length === 0) {
        $(".guest-setter").hide();
    }
  });
  $('.guest-setter-input').on('focus', function() {
      $(this).siblings('.guest-setter').show();
  });
  $('.guest-setter').hide();
})