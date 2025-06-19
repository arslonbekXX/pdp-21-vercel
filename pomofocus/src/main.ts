import { times } from "./constants";
import { modeBtns, startBtn, timer } from "./elements";
import { type Mode, type Pomofocus } from "./types";

const pomofocus: Pomofocus = {
	mode: "POMODORO",
	time: times["POMODORO"],
	intervalId: null,
};

// HANDLE FUNCTIONS
function handleStartStop() {
	toggleTiming(true);
	renderStartStopBtn();
}

function handleMode(e: MouseEvent) {
	const modeBtn = e.target as HTMLButtonElement;

	modeBtns.forEach((btn) => btn.classList.remove("active"));
	modeBtn.classList.add("active");

	const mode = modeBtn.dataset.mode as Mode;
	const time = times[mode];
	pomofocus.time = time;

	toggleTiming();
	renderTimer(time);
	renderStartStopBtn();
}

// UI FUNCTIONS
function renderStartStopBtn() {
	startBtn.innerText = pomofocus.intervalId ? "Stop" : "Start";
}

function renderTimer(time: number) {
	const remainingMinute = Math.floor(time / 60);
	const remainingSecond = time % 60;

	const paddedRemainingMinute = remainingMinute.toString().padStart(2, "0");
	const paddedRemainingSecond = remainingSecond.toString().padStart(2, "0");
	timer.innerText = `${paddedRemainingMinute}:${paddedRemainingSecond}`;
}

// LOGIC FUNCTIONS
function toggleTiming(withStart = false) {
	if (pomofocus.intervalId) {
		clearInterval(pomofocus.intervalId);
		pomofocus.intervalId = null;
	} else {
		if (withStart) pomofocus.intervalId = setInterval(timing, 1000);
	}
}

function timing() {
	pomofocus.time--;
	renderTimer(pomofocus.time);
}
function init() {
	startBtn.addEventListener("click", handleStartStop);
	modeBtns.forEach((btn) => btn.addEventListener("click", handleMode));
}

window.addEventListener("load", init);
