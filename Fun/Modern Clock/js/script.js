/// Containers
var hourN = document.getElementById("n-Hours");
var minsN = document.getElementById("n-Mins");
var secN = document.getElementById("n-Sec");
var dateN = document.getElementById("n-Date");

function showTime() {

var date = new Date();
var day = date.getDay();
var hour = date.getHours();
var mins = date.getMinutes();
var seconds = date.getSeconds();
var month = date.getMonth();
var dNumeric = date.getUTCDate();



// Display as 2 digit number

//hours
if(hour<=9){
	hour ="0" + hour;
}
else{
hour=hour;
}


// mins
if(seconds<=9){
	seconds = "0" + seconds;
}
else{
	seconds =seconds;
}


//secs
if(mins<=9){
	mins = "0" + mins;
}
else{
	mins = mins;
}



//day 

switch(day) {

	case 1 :
	day = "Monday";
	break;

	case 2 :
	day = "Tuesday";
	break;

	case 3 :
	day = "Wednsday";
	break;

	case 4 :
	day = "Thursday";
	break;

	case 5 :
	day = "Friday";
	break;

	case 6 :
	day = "Saturday";
	break;

	case 0 :
	day = "Sunday";
	break;


}


/// month

switch(month){
	case 0 :
	month = "January";
	break;

	case 1 :
	month = "February";
	break;

	case 2 :
	month = "March";
	break;

	case 3 :
	month = "April";
	break;

	case 4 :
	month = "May";
	break;

	case 5 :
	month = "June";
	break;

	case 6 :
	month = "July";
	break;

	case 7 :
	month = "August";
	break;

	case 8 :
	month = "September";
	break;

	case 9 :
	month = "October";
	break;

	case 10 :
	month = "November";
	break;

	case 11 :
	month = "December";
	break;
}


/// Display

hourN.innerHTML = hour;
minsN.innerHTML = mins;
secN.innerHTML = seconds;

dateN.innerHTML = day+"   | "+ dNumeric+" " + month;

setTimeout(showTime,1000);

}

showTime();