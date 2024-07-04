let intervalId;
const timer = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
let seconds = 0;
let minutes = 0;
let hours = 0;

startBtn.addEventListener('click', function() {
  intervalId = setInterval(function() {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }
    timer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, 1000);
});

stopBtn.addEventListener('click', function() {
  clearInterval(intervalId);
});

resetBtn.addEventListener('click', function() {
  clearInterval(intervalId);
  seconds = 0;
  minutes = 0;
  hours = 0;
  timer.textContent = '00:00:00';
});