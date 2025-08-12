let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("please add your task");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
}
inputBox.value = '';
}

function saveData(){
    
}