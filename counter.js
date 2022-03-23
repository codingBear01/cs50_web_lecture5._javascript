if (!localStorage.getItem('counter')) {
  localStorage.setItem('counter', 0);
}

function count() {
  const countNum = document.querySelector('h1');
  let counter = localStorage.getItem('counter');

  counter++;
  countNum.innerHTML = counter;

  localStorage.setItem('counter', counter);
}

document.addEventListener('DOMContentLoaded', () => {
  const countButton = document.querySelector('button');
  document.querySelector('h1').innerHTML = localStorage.getItem('counter');
  countButton.onclick = count;
});
