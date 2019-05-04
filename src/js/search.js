import main from './main';
import '../blocks/checkbox-list/checkbox-list';
import '../blocks/datepicker/datepicker';
import '../blocks/guest-setter/guest-setter';
import '../blocks/range-slider/range-slider';

main();

$(document).ready(function() {
  $('.search-page-datepicker-plugin').datepicker({
    range: true,
    multipleDatesSeparator: " - ",
    position: "bottom center", 
    clearButton: true
  })

  $('.range-slider').jRange({
    from: 1,
    to: 30000,
    step: 500,
    isRange : true
    });
});