$(document).ready(function() {
  $('.guest-setter__option_confirm').on('click', function() {
    $('.guest-setter').hide();
  });
  $('.guest-setter-input').on('focus', function() {
      $(this).siblings('.guest-setter').show();
  });
  $('.guest-setter').hide();
})