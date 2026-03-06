let bigTime = 90 * 60;
let smallTime = 20 * 60;
let timerId = null;
let currentPhase = 0; // 0: 90m, 1: 15m, 2: 90m, 3: 30m
const phases = [90*60, 15*60, 90*60, 30*60];
const phaseLabels = ["Deep Work Phase", "Rest Phase", "Deep Work Phase", "Long Break"];

const bigDisplay = document.getElementById('big-timer');
const smallDisplay = document.getElementById('small-timer');
const startBtn = document.getElementById('start-pause-btn');
const modal = document.getElementById('choice-modal');
const statusText = document.getElementById('session-status');

function updateDisplay(seconds, displayElement) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    displayElement.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Set Task Logic
document.getElementById('set-task-btn').onclick = () => {
    const mins = document.getElementById('task-minutes').value;
    if(mins > 0) {
        smallTime = mins * 60;
        updateDisplay(smallTime, smallDisplay);
    }
};

function startTimer() {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
        startBtn.textContent = "Resume";
        return;
    }

    startBtn.textContent = "Pause";
    timerId = setInterval(() => {
        if (bigTime > 0) bigTime--;
        if (smallTime > 0) smallTime--;

        updateDisplay(bigTime, bigDisplay);
        updateDisplay(smallTime, smallDisplay);

        // ADHD Modal Logic
        if (bigTime === 0 && smallTime > 0) {
            clearInterval(timerId);
            timerId = null;
            modal.classList.remove('hidden');
        } else if (bigTime === 0 && smallTime === 0) {
            nextPhase();
        }
    }, 1000);
}

function nextPhase() {
    currentPhase = (currentPhase + 1) % 4;
    bigTime = phases[currentPhase];
    statusText.textContent = phaseLabels[currentPhase];
    updateDisplay(bigTime, bigDisplay);
    alert("Phase Complete: " + phaseLabels[currentPhase]);
}

// Reset Logic
document.getElementById('reset-btn').onclick = () => {
    clearInterval(timerId);
    timerId = null;
    currentPhase = 0;
    bigTime = phases[0];
    smallTime = 20 * 60;
    statusText.textContent = phaseLabels[0];
    updateDisplay(bigTime, bigDisplay);
    updateDisplay(smallTime, smallDisplay);
    startBtn.textContent = "Start Session";
};

// Button Listeners
startBtn.onclick = startTimer;
document.getElementById('break-now').onclick = () => {
    modal.classList.add('hidden');
    nextPhase();
    startTimer();
};
document.getElementById('finish-task').onclick = () => {
    modal.classList.add('hidden');
    startTimer(); 
};