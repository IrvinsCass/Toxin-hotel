import main from './main';
import '../blocks/checkbox-list/checkbox-list';
import '../blocks/datepicker/datepicker';
import '../blocks/dropdown/dropdown';
import '../blocks/range-slider/range-slider';

main();

$(document).ready(function() {
  $('.search-page-datepicker-plugin').datepicker({
    range: true,
    multipleDatesSeparator: " - ",
    position: "bottom center", 
    clearButton: true
  })

  $('.range-slider-bar').jRange({
    from: 1,
    to: 30000,
    step: 500,
    isRange : true
    });
});