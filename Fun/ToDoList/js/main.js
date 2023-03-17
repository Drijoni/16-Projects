var inputi = document.getElementById('input');
var add = document.getElementById('addbtn');
var container = document.getElementById('added-items');
var taskInfo = document.getElementById('info-tasks');
var clearBtn = document.getElementById('Clear');

// Logical Variables
var flagColor = true;
var taskCounter = 0;
var completedTasks = 0;


add.addEventListener('click', function() {
if (inputi.value == "") {
	alert("Please write something");	
}

else{

var paragraph = document.createElement('p');
taskCounter++;
taskInfo.innerHTML = completedTasks + "/" + taskCounter; /// to overwrite html tag

/// changing the background color each time
if(flagColor) {
	paragraph.style.backgroundColor = "#F1F1F1";
}
else {
	paragraph.style.backgroundColor = "#F9F9F9";
}

flagColor = !flagColor;
//

paragraph.innerText =inputi.value;
inputi.value ="";
paragraph.classList.add('paragraph-style');
container.appendChild(paragraph);



var isClicked = true;
paragraph.addEventListener('click',function(){


	if(isClicked) {
		paragraph.style.textDecoration = 'line-through';
		paragraph.style.color = "green";
		completedTasks++;
	}
	if(!isClicked) {
		paragraph.style.textDecoration = 'none';
		paragraph.style.color = "black";
		completedTasks -=1;
	
	}	

	isClicked = !isClicked;

	taskInfo.innerHTML = completedTasks + "/" + taskCounter; // to update the completed tasks

	if(taskCounter == completedTasks) {
		taskInfo.style.color = "green";
	}

	else {
		taskInfo.style.color = "tomato"
	}

})


clearBtn.addEventListener('click', function(){
	container.innerHTML = '';
	completedTasks = 0;
	taskCounter = 0;
	taskInfo.style.color = 'tomato'
	taskInfo.innerHTML = completedTasks + "/" + taskCounter; // to update the completed tasks... again
})

}});

