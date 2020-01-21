'use strict'

let comments = document.querySelector('.booking-page-content-comments')

comments.addEventListener('click', function() {
  let target = event.target.closest('button');

  if (!target) return

  if (target.classList.contains('button-like')) {
    target.classList.toggle('button-like_pressed');

    let likes = target.querySelector('span').innerHTML;
    target.querySelector('span').innerHTML = likes * 1 - 1;

    if (target.classList.contains('button-like_pressed')) {
      target.querySelector('span').innerHTML = likes * 1 + 1;
    }
  }
})