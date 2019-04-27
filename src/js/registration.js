import main from './main';
import '../blocks/datepicker/datepicker';

main();

$(document).ready(function() {
  $('.registration-field__datepicker').datepicker({
    position: "bottom center", 
    clearButton: true
  })
});