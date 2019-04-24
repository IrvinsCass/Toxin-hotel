import main from './main';
import './datepicker';
import './jquery.nice-select';

main();

$(document).ready(function() {
  $('.datepicker-plugin').datepicker({
    range: true,
    multipleDatesSeparator: "                       ",
    position: "bottom center", 
    clearButton: true
  })

  $('.guest-setter-input').on('blur', function() {
    $('.guest-setter').fadeOut('medium');
  });
  $('.guest-setter-input').on('focus', function() {
      $(this).siblings('.guest-setter').show();
  });
  $('.guest-setter').hide();
});