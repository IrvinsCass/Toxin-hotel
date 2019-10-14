$(document).ready(function() {
  let button = document.querySelector('.mi-menu-button');
  let menu = document.querySelector('.header-nav-hidden-menu-ul');

  button.onclick = function() {
    menu.hidden = !menu.hidden;
  }
})