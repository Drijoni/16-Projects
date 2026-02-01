var daysC = document.getElementById('days');
var hoursC = document.getElementById('hours');
var minsC = document.getElementById('minutes');
var secC = document.getElementById('seconds');

var nameH = document.getElementById('nameH');
var btn = document.getElementById('bDayBtn');

/// Default: New Year countdown (no name)
var isBirthdayMode = false;
var targetDate = getNextNewYear();
var birthdayLabel = "Time until New Year";

function getNextNewYear() {
  var now = new Date();
  var currentYear = now.getFullYear();
  var jan1 = new Date(currentYear, 0, 1);
  return now > jan1 ? new Date(currentYear + 1, 0, 1) : jan1;
}

btn.onclick = function () {
  var Uname = prompt("What's your name?");
  var age = prompt("How old are you going to be on the next birthday?");
  var dateStr = prompt("Enter your next birthday\nEx: 20 March 2025");

  if (!Uname || !age || !dateStr) {
    return;
  }
  var parsed = new Date(dateStr);
  if (isNaN(parsed.getTime())) {
    nameH.innerHTML = "Invalid date";
    return;
  }
  isBirthdayMode = true;
  targetDate = parsed;
  birthdayLabel = Uname + " turns " + age + " in ";
};

function countdown() {
  nameH.innerHTML = birthdayLabel;

  var currentDate = new Date();
  var totalSeconds = (targetDate - currentDate) / 1000;

  if (totalSeconds < 0) {
    if (typeof confetti === "function") {
      confetti({ particleCount: 120, spread: 100, origin: { y: 0.6 } });
      setTimeout(function () {
        confetti({ particleCount: 80, angle: 60, spread: 55, origin: { x: 0 } });
        confetti({ particleCount: 80, angle: 120, spread: 55, origin: { x: 1 } });
      }, 200);
    }
    if (isBirthdayMode) {
      isBirthdayMode = false;
      targetDate = getNextNewYear();
      birthdayLabel = "Time until New Year";
    } else {
      targetDate = getNextNewYear();
    }
    totalSeconds = (targetDate - currentDate) / 1000;
  }

  var days = Math.max(0, Math.floor(totalSeconds / 86400));
  var hours = Math.max(0, Math.floor((totalSeconds % 86400) / 3600));
  var minutes = Math.max(0, Math.floor((totalSeconds % 3600) / 60));
  var seconds = Math.max(0, Math.floor(totalSeconds % 60));

  daysC.innerHTML = days;
  hoursC.innerHTML = hours;
  minsC.innerHTML = minutes;
  secC.innerHTML = seconds;
}

countdown();

setInterval(countdown,1000);