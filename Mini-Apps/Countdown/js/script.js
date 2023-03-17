var daysC = document.getElementById('days');
var hoursC = document.getElementById('hours');
var minsC = document.getElementById('minutes');
var secC = document.getElementById('seconds');

var nameH = document.getElementById('nameH');

/// Default Values
var date="20 March 2023";
var Uname="Drijon";
var age=19;



var btn = document.getElementById('bDayBtn');





function countdown(){

    //// For a custom birthday countdown
    btn.onclick = function(){
    Uname = prompt("What's your name?");
    age = prompt("How old are you going to be on the next birthday?");
    date =prompt("Enter your next birthday \n Ex: 20 March 2022");

    if(Uname=="" || age==""|| date==""){
        nameH.innerHTML = "ERROR";
        date = "Error";  
    }
    else{
    nameH.innerHTML = `${Uname} turns ${age} in `;
        }
    }

    // calculating
    const bDayDate = new Date(date);
    const currentDate = new Date();

    const totalSeconds = (bDayDate - currentDate)/1000;

    const days = Math.floor((totalSeconds/24)/3600);
    const hours = Math.floor((totalSeconds/3600)%24);
    const minutes = Math.floor((totalSeconds/60)%60);
    const seconds = Math.floor((totalSeconds)%60);

    ///show the values
    daysC.innerHTML = days;
    hoursC.innerHTML = hours;
    minsC.innerHTML = minutes;
    secC.innerHTML = seconds;
    
    










}

countdown();

setInterval(countdown,1000);