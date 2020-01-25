$(document).ready(function() {
  let footer = document.querySelector('.navigation-links');

  footer.addEventListener('click', function() {
    if (event.target.classList.contains('footer-list__header')) {
      let list = event.target.nextSibling;
      $(list).slideToggle('fast');
    }
  })
})