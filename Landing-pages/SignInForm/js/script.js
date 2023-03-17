var SignIn = document.getElementById('SignIn-form');
var SignUp = document.getElementById('SignUp-form');

var SignInClick = document.getElementById('SignIn-span');
var SignUpClick = document.getElementById('SignUp-span');

var aam = document.getElementById('alreadyAmember');
var dha = document.getElementById('dont-have-account');

SignInClick.addEventListener('click',()=> {
    showSignIn();
})

SignUpClick.addEventListener('click',()=> {
    showSignUp();
})

aam.addEventListener('click',()=>{ 
    showSignIn();
})

dha.addEventListener('click',()=> {
    showSignUp();
})


function showSignIn() {
    SignIn.style.display = "flex";
    SignUp.style.display = "none";
    SignInClick.style.color = "white";
    SignUpClick.style.color = "grey";
}

function showSignUp() {
    SignIn.style.display = "none";
    SignUp.style.display = "flex";
    SignUpClick.style.color = "white";
    SignInClick.style.color = "grey";
}