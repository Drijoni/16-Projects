function insert(num) { 

document.form.view.value=document.form.view.value+num;


var exp= document.form.view.value;

if (exp=='+' || exp=='-' || exp=='/' || exp=='*') {
	alert("Write a number!");
	back();

}

}

// result
function equal() {document.form.view.value = eval(document.form.view.value);}

/// clear
function c() {document.form.view.value ="";}

/// remove 
function back() {

  var exp = document.form.view.value;

 document.form.view.value = exp.substring(0,exp.length-1);

}


