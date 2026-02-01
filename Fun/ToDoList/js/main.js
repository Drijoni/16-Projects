var inputi = document.getElementById('input');
var add = document.getElementById('addbtn');
var container = document.getElementById('added-items');
var taskInfo = document.getElementById('info-tasks');
var clearBtn = document.getElementById('Clear');

var taskCounter = 0;
var completedTasks = 0;


add.addEventListener('click', function() {
if (inputi.value == "") {
	alert("Please write something");	
}

else{

var paragraph = document.createElement('p');
taskCounter++;
taskInfo.textContent = completedTasks + " / " + taskCounter;

paragraph.innerText = inputi.value;
inputi.value ="";
paragraph.classList.add('paragraph-style');
container.appendChild(paragraph);



var isClicked = true;
paragraph.addEventListener('click', function () {
	if (isClicked) {
		paragraph.classList.add('completed');
		completedTasks++;
	} else {
		paragraph.classList.remove('completed');
		completedTasks--;
	}
	isClicked = !isClicked;

	taskInfo.textContent = completedTasks + " / " + taskCounter;
	taskInfo.classList.toggle('done', taskCounter > 0 && taskCounter === completedTasks);
});

}

});

clearBtn.addEventListener('click', function () {
	container.innerHTML = '';
	completedTasks = 0;
	taskCounter = 0;
	taskInfo.textContent = '0 / 0';
	taskInfo.classList.remove('done');
});

