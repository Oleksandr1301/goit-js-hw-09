const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
buttonStop.disabled = true;

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonStart.addEventListener('click', changeColorStart);

function changeColorStart() {
  buttonStart.disabled = true;
  buttonStop.disabled = false;

  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

buttonStop.addEventListener('click', changeColorStop);

function changeColorStop() {
  clearInterval(timerId);
  buttonStart.disabled = false;
  buttonStop.disabled = true;
}
