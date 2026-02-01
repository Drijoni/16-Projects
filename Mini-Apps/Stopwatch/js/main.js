var mins = 0;
var sec = 0;
var ms = 0;
var Interval;

var minutesEl = document.getElementById("minutes");
var secondsEl = document.getElementById("seconds");
var msecondsEl = document.getElementById("mseconds");
var cont = document.getElementById("main-container");

function setRunning(running) {
	if (running) {
		cont.classList.add("running");
	} else {
		cont.classList.remove("running");
	}
}

function start() {
	ms++;
	if (ms <= 9) {
		msecondsEl.innerHTML = "0" + ms;
	} else {
		msecondsEl.innerHTML = ms;
	}

	if (ms > 99) {
		sec++;
		ms = 0;
		msecondsEl.innerHTML = "00";
	}

	if (sec <= 9) {
		secondsEl.innerHTML = "0" + sec;
	} else {
		secondsEl.innerHTML = sec;
	}

	if (sec > 59) {
		mins++;
		sec = 0;
		secondsEl.innerHTML = "00";
	}

	if (mins <= 9) {
		minutesEl.innerHTML = "0" + mins;
	} else {
		minutesEl.innerHTML = mins;
	}

	if (mins > 59) {
		mins = 0;
		minutesEl.innerHTML = "00";
	}

	setRunning(true);
	clearInterval(Interval);
	Interval = setInterval(start, 9);
}

function stop() {
	clearInterval(Interval);
	setRunning(false);
}

function reset() {
	mins = 0;
	sec = 0;
	ms = 0;
	minutesEl.innerHTML = "00";
	secondsEl.innerHTML = "00";
	msecondsEl.innerHTML = "00";
	clearInterval(Interval);
	setRunning(false);
}
