import main from './main';
import '../blocks/datepicker/datepicker';
import '../blocks/dropdown/dropdown';
import '../blocks/header/header';
import '../blocks/footer/footer';

$(document).ready(function() {
  $('.datepicker-plugin').datepicker({
    range: true,
    multipleDatesSeparator: " - ",
    position: "bottom center", 
    clearButton: true
  })
});

main();