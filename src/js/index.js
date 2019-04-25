import main from './main';
import '../blocks/datepicker/datepicker';
import '../blocks/guest-setter/guest-setter';

main();

$(document).ready(function() {
  $('.datepicker-plugin').datepicker({
    range: true,
    multipleDatesSeparator: "                       ",
    position: "bottom center", 
    clearButton: true
  })
});