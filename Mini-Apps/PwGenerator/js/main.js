var input = document.getElementById('input');
var btn = document.getElementById('generate');
var howMany = document.getElementById('range');
var parag = document.getElementById('parag');


var chars =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", 
"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","!","@","$","^",
"&","*","(",")","[","]","/"];




/// Length of the pw
function howManyy(num){
    //console.log(num);
    howMany.value = num;
    parag.innerHTML = "Length of your password: "+num;
    

}


/// Generating the PW

function generate(){
    var j = howMany.value;
    var i =0;
    var password="";

    for(i;i<j;i++){
     password+=chars[Math.floor(Math.random()*chars.length)];


    }


    input.value = password;
    console.log(password,password.length);


}



/// Copy the password


function copy(){
    input.select();
    document.execCommand("copy");

    alert("Password copied to clipboard: \n" + input.value);

}

















