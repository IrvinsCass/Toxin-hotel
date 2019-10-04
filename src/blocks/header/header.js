$(document).ready(function() {
  let button = document.querySelector('.fa-align-justify');
  let menu = document.querySelector('.header-nav-hidden-menu-ul');

  button.onclick = function() {
    menu.hidden = !menu.hidden;
  }
})