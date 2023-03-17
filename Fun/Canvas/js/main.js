const canvas = document.getElementById('draw');

 /// we get the element by Id
const ctx = canvas.getContext('2d'); // get the context  as 2 dimensional



 /// Calculate the Line Width
var widthInput = document.getElementById('widthInput');

function calculate(operator) {
    if(operator =='+'){
        widthInput.value++;
    }

    else if(widthInput.value<2){
        widthInput.value=1;
    }    
    
    else if(operator == '-'){
    widthInput.value-=1;
}

    else{
    return "ERROR";
}

/// Line's width  (px)
ctx.lineWidth = widthInput.value;

}

ctx.strokeStyle = "black"; /// default color
ctx.lineJoin="round";
ctx.lineCap="round";

let Drawing = false;    // identifies if we are drawing or no
let lastX = 0;
let lastY = 0;


/// Custom color
function color(col) {
ctx.strokeStyle =col;
}




// function that accepts an event
function draw(e){
if (!Drawing) return; /// stop the function when there isn't a mousedown event

//console.log(e);
ctx.beginPath();

//start
ctx.moveTo(lastX,lastY);

//go to
ctx.lineTo(e.offsetX,e.offsetY);
ctx.stroke();
[lastX,lastY] = [e.offsetX,e.offsetY];


}


canvas.addEventListener('mousedown',(e)=>{
Drawing=true;
[lastX,lastY] = [e.offsetX,e.offsetY];
});

canvas.addEventListener('mousemove',draw);


canvas.addEventListener('mouseup',()=>{Drawing=false});
canvas.addEventListener('mouseout',()=>{Drawing=false});

/// Clear everything

function clearAll(){    
ctx.clearRect(0, 0, canvas.width, canvas.height);


}




