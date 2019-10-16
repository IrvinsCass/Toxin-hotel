import main from './main';
import '../blocks/header/header';
import '../blocks/footer/footer';
import '../blocks/datepicker/datepicker';

main();

$(document).ready(function() {
  $('.datepicker-plugin').datepicker({
    position: "bottom center", 
    clearButton: true
  })
});