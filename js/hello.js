const name = document.querySelector(".jsName");

function createName(createdName) { 
    name.innerHTML = "";
    const title = document.createElement("span");
    title.className = "nameText";
    title.innerHTML = `안녕하세요. ${createdName}님`;
    name.appendChild(title);
}

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector("input");
    const value = input.value;
    localStorage.setItem("username", value);
    createName(value);
}

function createInput() {
    const input = document.createElement("input");
    input.placeholder = "이름을 알려주세요.";
    input.type = "text";
    input.className = "nameInput";
    const form = document.createElement("form");
    form.addEventListener("submit", handleSubmit);
    form.appendChild(input);
    name.appendChild(form);

}

function loadName() {
    const usrName = localStorage.getItem("username");
    if(usrName === null) {
        createInput();
    } else {
        createName(usrName);
    }
}

function init() {
    loadName();
} init();