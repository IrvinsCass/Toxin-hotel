import main from './main';
import '../blocks/pie-chart/pie-chart';
import '../blocks/datepicker/datepicker';
import '../blocks/dropdown/dropdown';

$(document).ready(function() {
  $('.datepicker-plugin').datepicker({
    range: true,
    multipleDatesSeparator: " - ",
    position: "bottom center", 
    clearButton: true
  })
});

main();