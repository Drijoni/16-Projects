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

ctx.strokeStyle = "#2c2c2c"; /// default color (matches color picker)
ctx.lineJoin="round";
ctx.lineCap="round";

let Drawing = false;    // identifies if we are drawing or no
let lastX = 0;
let lastY = 0;

/// Convert mouse/pointer position to canvas coordinates
function getCanvasCoords(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;
    return { x, y };
}

/// Custom color
function color(col) {
    ctx.strokeStyle = col;
}

// function that accepts an event
function draw(e) {
    if (!Drawing) return;

    const { x, y } = getCanvasCoords(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
    lastX = x;
    lastY = y;
}

canvas.addEventListener('mousedown', (e) => {
    Drawing = true;
    const { x, y } = getCanvasCoords(e);
    lastX = x;
    lastY = y;
});

canvas.addEventListener('mousemove',draw);


canvas.addEventListener('mouseup',()=>{Drawing=false});
canvas.addEventListener('mouseout',()=>{Drawing=false});

/// Clear everything
function clearAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Save canvas as PNG
function saveAsPNG() {
    const link = document.createElement('a');
    link.download = 'my-drawing.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}

/// Save canvas as JPG with white background (JPG has no transparency)
function saveAsJPG() {
    const tmp = document.createElement('canvas');
    tmp.width = canvas.width;
    tmp.height = canvas.height;
    const tctx = tmp.getContext('2d');
    tctx.fillStyle = '#ffffff';
    tctx.fillRect(0, 0, tmp.width, tmp.height);
    tctx.drawImage(canvas, 0, 0);
    const link = document.createElement('a');
    link.download = 'my-drawing.jpg';
    link.href = tmp.toDataURL('image/jpeg');
    link.click();
}




