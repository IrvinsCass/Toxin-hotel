import main from './main';
import '../blocks/datepicker/datepicker';
import '../blocks/dropdown/dropdown';
import '../blocks/header/header';

main();

$(document).ready(function() {
  $('.datepicker-plugin').datepicker({
    range: true,
    multipleDatesSeparator: " - ",
    position: "bottom center", 
    clearButton: true
  })
});