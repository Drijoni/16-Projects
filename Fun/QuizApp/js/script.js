var QuestionText = document.getElementById('question');

/* Answers */
var Answer1 = document.getElementById('ans1');
var Answer2 = document.getElementById('ans2');
var Answer3 = document.getElementById('ans3');
var Answer4 = document.getElementById('ans4');


/*  Starting screen compoments */
var startingTitle = document.getElementById('startTitle');
var anotherTitle = document.getElementById('anotherTitle');
var startButton = document.getElementById('startBtn');

/* Ending screen */
var endingTitle = document.getElementById('endingTitle');
var endingBtn = document.getElementById('startAgain');
var anotherEndingTitle = document.getElementById('anotherEndingTitle');

/* Quizz Questions as Objects */
var questions = [
    {
        question: "Which programming language is used in more than 3 billion devices?",
        ans1: "Java",
        ans2: "Python",
        ans3: "JavaScript",
        ans4: "C++",
        correct: "Java"
    },  
    
    {
        question: "Which one of these programming languages is the oldest?",
        ans1: "Kotlin",
        ans2: "JavaScript",
        ans3: "C#",
        ans4: "Python",
        correct: "Python"
    },

    {
        question: "Very popular server-side scripting language designed for web development but also used for general-purpose programming",
        ans1: "JavaScript",
        ans2: "PHP",
        ans3: "C++",
        ans4: "Ajax",
        correct: "PHP"
    },
    
    {
        question: "Widely used programming language designed for managing data held in a relational database management system.",
        ans1: "BASIC",
        ans2: "C",
        ans3: "Pascal",
        ans4: "SQL",
        correct: "SQL"
    }, 
    {
        question: "One of the most widely used and influentual programming languages of all time. It is an imperative and compiled language.",
        ans1: "C",
        ans2: "Java",
        ans3: "Pascal",
        ans4: "Perl",
        correct: "C"
    },  

    
];

/* Global Variables*/
var i = 0;
var score =0;
var quizzLength = questions.length;
RealAnswer="";

function StartQuizz() {
    hideEnding();
    hideStarter();
    displayQuizz();

    QuestionText.innerHTML = questions[i].question;

    Answer1.innerHTML = questions[i].ans1;
    Answer1.value = questions[i].ans1;
    
    Answer2.innerHTML = questions[i].ans2;
    Answer2.value = questions[i].ans2;

    Answer3.innerHTML = questions[i].ans3;
    Answer3.value = questions[i].ans3;

    Answer4.innerHTML = questions[i].ans4;
    Answer4.value = questions[i].ans4;

    RealAnswer = questions[i].correct;
}

function next(thisAnswer){
    if(thisAnswer == RealAnswer){
        score++;
        //console.log(score);
        document.body.style.backgroundColor = "#00662a";
    }
    if(thisAnswer != RealAnswer){
        document.body.style.backgroundColor = " #660000";
    }

    buttonColor();
    i++;

    if(i<=quizzLength -1){
        setTimeout(StartQuizz,1000);
        setTimeout(originalColors,1000);
    }
    else{  
        hideQuizz();
        displayEnding();
        originalColors();
        endingTitle.innerHTML = `You scored ${score} out of ${quizzLength}`;
        if(score>=quizzLength-1){
            anotherEndingTitle.innerHTML = "Amazing!";
           
        }
        else if(score>quizzLength-3){
            anotherEndingTitle.innerHTML = "Nice but next time aim for a higher score";

        }
        else{
            anotherEndingTitle.innerHTML = "Try harder next time :)";
        }
        i=0;
        score=0;
     }
} 

function buttonColor(){

    if(Answer1.value == RealAnswer){
        Answer1.style.backgroundColor = "green";
        Answer2.style.backgroundColor ="red";
        Answer3.style.backgroundColor ="red";
        Answer4.style.backgroundColor ="red";
    }
        
    else if(Answer2.value == RealAnswer){
        Answer2.style.backgroundColor = "green";
        Answer1.style.backgroundColor ="red";
        Answer3.style.backgroundColor ="red";
        Answer4.style.backgroundColor ="red";
    }
        
    else if(Answer3.value == RealAnswer){
        Answer3.style.backgroundColor = "green";
        Answer1.style.backgroundColor ="red";
        Answer2.style.backgroundColor ="red";
        Answer4.style.backgroundColor ="red";
    }
        
    else if(Answer4.value == RealAnswer){
        Answer4.style.backgroundColor = "green";
        Answer2.style.backgroundColor ="red";
        Answer3.style.backgroundColor ="red";
        Answer1.style.backgroundColor ="red";
        
    } 
        
}       
    

function originalColors() {
    Answer1.style.backgroundColor = "#5151f7";
    Answer2.style.backgroundColor = "#5151f7";
    Answer3.style.backgroundColor = "#5151f7";
    Answer4.style.backgroundColor = "#5151f7";
    document.body.style.backgroundColor = "#034566";
 }



 function displayQuizz() {
    QuestionText.style.display = "block";
    Answer1.style.display = "block";
    Answer2.style.display = "block";
    Answer3.style.display = "block";
    Answer4.style.display = "block";
 }


 function hideQuizz() {
    QuestionText.style.display = "none";
    Answer1.style.display = "none";
    Answer2.style.display = "none";
    Answer3.style.display = "none";
    Answer4.style.display = "none";
 }

 function hideStarter() {
    startingTitle.style.display = "none";
    anotherTitle.style.display = "none";
    startButton.style.display = "none";
 }

 function displayStarter() {
    startingTitle.style.display = "block";
    anotherTitle.style.display = "block";
    startButton.style.display = "inline-block";
 }


 function hideEnding() {
    endingBtn.style.display = "none";
    endingTitle.style.display = "none";
    anotherEndingTitle.style.display ="none";
 }

 function displayEnding(){
    endingBtn.style.display = "inline-block";
    endingTitle.style.display = "block";
    anotherEndingTitle.style.display ="block";
 }

 function backToHome(){
     hideQuizz();
     hideEnding();
     displayStarter();
 }

