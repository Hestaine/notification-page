const mark = document.querySelector('#read');
const allBox = document.querySelectorAll('.single-box');
const dot = document.querySelectorAll('.dot');
const num = document.querySelector('#num');


mark.addEventListener('click', (e) => {
    allBox.forEach(e => {
      e.classList.remove('unseen')
    });
    dot.forEach(e => {
      e.classList.remove('dot')
    });
    num.innerText = "0";
})