import main from './main';
import './datepicker';

main();

$(document).ready(function() {
  $('.datepicker-there').datepicker({
    range: true,
    multipleDatesSeparator: " - ",
    position: "bottom center", 
    clearButton: true
  })
});