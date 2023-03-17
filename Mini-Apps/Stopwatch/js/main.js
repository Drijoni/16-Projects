var mins = 0;
var sec = 0;
var ms = 0;
var Interval;

var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var mseconds = document.getElementById("mseconds");

var time = document.getElementsByClassName("time-container");
var cont = document.getElementById("main-container");

var play = document.getElementById("play");


function animation() {
	cont.style.animation = 'coloranimation 1s infinite';
}


function stopanimation() {
	cont.style.animation = 'coloranimation 0s 0';
}


function start() {
	ms++;
	if (ms <= 9) {
		mseconds.innerHTML = "0" + ms;
	}

	if (ms > 9) {
		mseconds.innerHTML = ms;
	}

	if (ms > 99) {
		sec++;
		seconds.innerHTML = sec + " :";
		ms = 0;
		mseconds.innerHTML = "0" + ms;
	}

	if (sec <= 9) {
		seconds.innerHTML = "0" + sec + " :";
	}

	if (sec > 9) {
		seconds.innerHTML = sec + " :";
	}

	if (sec > 59) {
		mins++;
		sec = 0;
		minutes.innerHTML = mins + " :";
	}

	if (mins <= 9) {
		minutes.innerHTML = "0" + mins + " :";
	}

	if (mins > 9) {
		minutes.innerHTML = mins + " :";
	}

	if (mins > 59) {
		mins = 0;
	}
	animation();
	clearInterval(Interval);
	Interval = setInterval(start, 9);
}


function stop() {
	clearInterval(Interval);
	stopanimation();
}

function reset() {
	mins = 0;
	sec = 0;
	ms = 0;
	minutes.innerHTML = '0' + mins + " :";
	seconds.innerHTML = '0' + sec + " :";
	mseconds.innerHTML = '0' + ms;
	clearInterval(Interval);
	stopanimation();
}