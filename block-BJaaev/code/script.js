let inputText = document.querySelector("#text");
let root = document.querySelector("ul");
// let button = document.querySelector('.button');
let all = document.querySelector(".all");
let active = document.querySelector(".active");
let completed = document.querySelector(".completed");
let clear = document.querySelector(".clear-completed");
let leftItem = document.querySelector(".left-item");
let buttonParent = document.querySelector(".button-parent");

let allTodos = [];

function createUI(allTodos = allTodos) {
  root.innerHTML = "";
  if (allTodos.length) {
    allTodos.forEach((todo, index) => {
      let li = document.createElement("li");

      let input = document.createElement("input");
      input.type = "checkbox";
      input.addEventListener("input", handleToggle);
      input.setAttribute("data-id", index);
      input.checked = todo.isDone;

      let p = document.createElement("p");
      p.innerText = todo.name;
      if (input.checked) {
        p.style.textDecoration = "line-through";
      }

      let span = document.createElement("span");
      span.innerText = "╳";
      span.setAttribute("data-id", index);
      span.addEventListener("click", handleDelete);

      li.append(input, p, span);
      root.append(li);
    });
  }
  leftItem.innerText = `${allTodos.length} item left`;
}

function handleInput(event) {
  // console.log(event.keyCode)
  let value = event.target.value;

  if (event.keyCode === 13 && value !== "") {
    let todo = {
      name: value,
      isDone: false,
    };

    leftItem.style.display = "inline-block";
    all.style.display = "inline-block";
    active.style.display = "inline-block";
    completed.style.display = "inline-block";
    clear.style.display = "inline-block";

    allTodos.push(todo);
    event.target.value = "";
    createUI(allTodos);
  }
}

function handleDelete(event) {
  let id = event.target.dataset.id;
  allTodos.splice(id, 1);
  createUI(allTodos);
}

function handleToggle(event) {
  let id = event.target.dataset.id;
  allTodos[id].isDone = !allTodos[id].isDone;
  createUI(allTodos);
}

all.addEventListener("click", function (event) {
  event.preventDefault();
  let filterall = allTodos;
  createUI(filterall);
});

active.addEventListener("click", function (event) {
  event.preventDefault();
  let filterActive = allTodos.filter((elm) => {
    return elm.isDone == false;
  });
  createUI(filterActive);
});

completed.addEventListener("click", function (event) {
  event.preventDefault();
  let filterComplete = allTodos.filter((elm) => {
    return elm.isDone;
  });
  createUI(filterComplete);
});

clear.addEventListener("click", function(event){
    event.preventDefault();
    allTodos = allTodos.filter((todo)=>!todo.isDone)
    createUI(allTodos)
})

inputText.addEventListener("keyup", handleInput);
