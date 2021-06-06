const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  bodyRef: document.querySelector('body'),
};


refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

let colorApply = null;

function onStartBtnClick() {
  refs.startBtn.disabled = true;
  colorApply = setInterval(() => {
  refs.bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
      }, 1000)
}

function onStopBtnClick() {
    refs.startBtn.disabled = false;
    clearInterval(colorApply);
}