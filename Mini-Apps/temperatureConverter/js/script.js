var kelvin = document.getElementById('kelvin');
var cels = document.getElementById('celsius');
var fahr = document.getElementById('fahr');


function kelvinCalc(kelvin) {
	cels.value = (kelvin - 273.1);
	fahr.value =(kelvin*(9/5) - 459.67);
    tbackground(kelvin - 273.1);
}

function celsCalc(celsius) {
	kelvin.value = (celsius + 273.15);
	fahr.value = ((celsius * 1.8) + 32);
	tbackground(celsius);
}

function fahrCalc(fahr) {
	kelvin.value = ((fahr + 459.67) * (5/9));
	celsius.value = ((fahr - 32)*(5/9));
tbackground((fahr-32)*(5/9));
}


function tbackground(celsius) {

	if(celsius<-19){
		document.body.style.background = "#00a6ff";
	}
	else if (celsius <= 0) {
		document.body.style.background = "#7beded";
	}

	else if (celsius > 0 && celsius <= 15) {
		document.body.style.background = "#faf75c";
	}

	else if (celsius > 15 && celsius <= 25) {
		document.body.style.background = "orange";
	}
	
	else if (celsius > 25)  {
		document.body.style.background = "#de4b4b";
	}


else {
	document.body.style.background = "#e8e8e8";
}
	
}