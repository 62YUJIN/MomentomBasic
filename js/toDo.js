const form = document.querySelector(".jsToDo");
const input = document.querySelector(".jsAddToDo");
const list = document.querySelector(".jsList");

let toDos = [];

function hangOnToDos() {
    const stringToDo = JSON.stringify(toDos);
    localStorage.setItem("toDos", stringToDo);
}

function saveToDo(text) {
    const toDoObj = {
        id : toDos.length + 1,
        value : text
    };
    toDos.push(toDoObj);
    hangOnToDos();
}

function handleDelete(event) {
    const target = event.target;
    const li = target.parentElement;
    const ul = li.parentElement;
    const toDoId = li.id;
    ul.removeChild(li);
    toDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(toDoId);
    });
    hangOnToDos();
}

function addToDo(text) {
    const toDo = document.createElement("li");
    toDo.className = "toDo";
    toDo.id = toDos.length + 1;
    const deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "Del";
    deleteBtn.className = "toDoBtn";
    deleteBtn.addEventListener("click", handleDelete);
    const label = document.createElement("label");
    label.innerHTML = text;
    toDo.appendChild(deleteBtn);
    toDo.appendChild(label);
    list.appendChild(toDo);
    saveToDo(text);
}

function submit(event) {
    event.preventDefault();
    const value = input.value;
    input.value = "";
    addToDo(value);
}

function loadToDos() {
    const loadedToDos = localStorage.getItem("toDos");
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            addToDo(toDo.value);
        });
    }
    return;
}

function init() {
    loadToDos();
}

form.addEventListener("submit", submit);

init();
