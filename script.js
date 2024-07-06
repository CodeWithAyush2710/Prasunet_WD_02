// script.js
let startTime;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const lapResetButton = document.getElementById('lapReset');
const lapButton = document.getElementById('lap');
const lapsList = document.getElementById('laps');

startStopButton.addEventListener('click', startStop);
lapResetButton.addEventListener('click', reset);
lapButton.addEventListener('click', lap);

function startStop() {
    if (startStopButton.innerHTML === 'Start') {
        startStopButton.innerHTML = 'Stop';
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime, 10);
    } else {
        startStopButton.innerHTML = 'Start';
        clearInterval(timerInterval);
    }
}

function updateTime() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    display.textContent = formatTime(elapsedTime);
}

function formatTime(milliseconds) {
    let hours = Math.floor(milliseconds / 3600000);
    let minutes = Math.floor((milliseconds % 3600000) / 60000);
    let seconds = Math.floor((milliseconds % 60000) / 1000);
    let centiseconds = Math.floor((milliseconds % 1000) / 10);

    return (
        pad(hours) + ':' +
        pad(minutes) + ':' +
        pad(seconds) + ':' +
        pad(centiseconds)
    );
}

function pad(number) {
    return (number < 10 ? '0' : '') + number;
}

function reset() {
    clearInterval(timerInterval);
    startStopButton.innerHTML = 'Start';
    elapsedTime = 0;
    display.textContent = '00:00:00:00';
    lapsList.innerHTML = '';
}

function lap() {
    const lapTime = formatTime(elapsedTime);
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapsList.appendChild(lapItem);
}
