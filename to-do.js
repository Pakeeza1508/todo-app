const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("you must write somethig")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML = "\u00d7";  //a line o create cross icon
        li.appendChild(span);
        
    }
    inputBox.value = '';
    saveData();
}

// funcion to add and remove tasks
listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
// so here basic functionality for to do app ends now i am going to add few mre features

// Access elements
const navBtn = document.getElementById('nav-btn');

// Event listeners for buttons
navBtn.addEventListener('click', function(event) {
  // Check if the clicked element is a button
  if (event.target.tagName === 'BUTTON') {
    filterTasks(event.target.id);
  }
});

// Function to filter tasks based on button click
function filterTasks(filter) {
  const tasks = listContainer.getElementsByTagName('li');
  
  for (let task of tasks) {
    if (filter === 'complete') {
      // Show only completed tasks
      task.style.display = task.classList.contains('checked') ? '' : 'none';
    } else if (filter === 'uncomplete') {
      // Show only uncompleted tasks
      task.style.display = !task.classList.contains('checked') ? '' : 'none';
    } else if (filter === 'all') {
      // Show all tasks
      task.style.display = '';
    }
  }
}

