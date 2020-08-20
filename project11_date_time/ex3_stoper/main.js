let startTime = new Date().getTime();
let timePassed = 0;
const startButton = document.querySelector('.main');
const resetButton = document.querySelector('.reset');
let intervalIndex;
let isStarted = false;
let isPaused = false;

const startStoper = () => {
    if (isStarted && isPaused) {
        console.log('wznawiam', isStarted, isPaused);
        startButton.textContent = 'Pause';
        let startTime = new Date().getTime();
        intervalIndex = setInterval(() => {
            const nowTime = new Date().getTime();
            time = timePassed + (nowTime - startTime);
            let seconds = Math.floor(time / 1000);
            let deciseconds = Math.floor((time % 1000) / 10);
            document.querySelector('.time > div').textContent = `${seconds}.${deciseconds < 10 ? '0'+deciseconds : deciseconds}`;
        }, 1);
        isPaused = false;
    } else if (isStarted && !isPaused) {
        console.log('pauzuje', isStarted, isPaused);
        startButton.textContent = 'Resume';
        isPaused = true;
        timePassed = time;
        clearInterval(intervalIndex);
    } else if (!isStarted && !isPaused) {
        console.log('zaczynam', isStarted, isPaused);
        startButton.textContent = 'Pause';
        isStarted = true;
        const startTime = new Date().getTime();
        intervalIndex = setInterval(() => {
            const nowTime = new Date().getTime();
            time = timePassed + (nowTime - startTime);
            let seconds = Math.floor(time / 1000);
            let deciseconds = Math.floor((time % 1000) / 10);
            document.querySelector('.time > div').textContent = `${seconds}.${deciseconds < 10 ? '0'+deciseconds : deciseconds}`;
        }, 1);
    }
}

startButton.addEventListener('click', startStoper);
resetButton.addEventListener('click', () => {
    if (isStarted && isPaused) {
        console.log('resetuje');
        timePassed = 0;
        document.querySelector('.time > div').textContent = '---';
        startButton.textContent = 'Start';
        isStarted = false;
        isPaused = false;
    }
});

// const btnTime = document.querySelector('.main');
// const btnReset = document.querySelector('.reset');
// const panel = document.querySelector('.time div');

// let time = 0; //setne sekundy
// let active = false;
// let idI;

// const timer = () => {
//  if (!active) {
//   active = !active
//   btnTime.textContent = 'Pauza';
//   idI = setInterval(start, 10);
//  } else {
//   active = !active
//   btnTime.textContent = 'Start';
//   clearInterval(idI)
//  }
// }

// const start = () => {
//  time++;
//  panel.textContent = (time / 100).toFixed(2);

// }

// const reset = () => {
//  time = 0;
//  panel.textContent = '---';
//  active = false;
//  btnTime.textContent = 'Start';
//  clearInterval(idI)
// }

// btnTime.addEventListener('click', timer);
// btnReset.addEventListener('click', reset);