let buttonId = document.getElementById("buttonId");
let inputId = document.getElementById("inputId");
let divId = document.getElementById("divId");
let pandingDiv = document.getElementById("pandingDiv");
let count = 0;
console.log(count);
let spanValue = document.createElement("span");
let newButton = document.createElement("button");
newButton.innerHTML = "clear all";
newButton.classList.add("newButton1");
spanValue.innerHTML = `you have ${count} pending task`;
pandingDiv.appendChild(spanValue);
pandingDiv.appendChild(newButton);
let newButton1 = document.querySelector(".newButton1");
buttonId.addEventListener("click", () => {
  if (inputId.value) {
    count += 1;
    let container = document.createElement("div");
    container.classList.add("container");
    let containerInput = document.createElement("div");
    let containerButton = document.createElement("div");
    let divCon = document.createElement("div");
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.onclick = (event) => {
      // event.target.parentElement.parentElement.remove();
      container.remove();
      spanValue.innerHTML = `you have ${(count -= 1)} pending task`;
    };
    deleteButton.innerHTML = "delete button";
    divCon.classList.add("divCon");
    let toDoList = document.createElement("h3");
    toDoList.classList.add("toDoList");
    toDoList.innerHTML = inputId.value;
    divCon.appendChild(toDoList);
    containerButton.appendChild(deleteButton);
    containerInput.appendChild(divCon);
    container.appendChild(containerInput);
    container.appendChild(containerButton);
    divId.appendChild(container);
    spanValue.innerHTML = `you have ${count} pending task`;
    newButton1.addEventListener("click", () => {
      count = 0;
      container.remove();
      spanValue.innerHTML = `you have ${count} pending task`;
    });
  }
  inputId.value = "";
  console.log(newButton1);
});
