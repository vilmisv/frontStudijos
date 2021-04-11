const appEl = document.getElementById("app");
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("todo-add-btn");
const completedEl = document.getElementById("completed-count");
const totalEL = document.getElementById("total-count");

const state = {
  tasks: [
    {
      name: "Do laundry",
      done: false
    },
    {
      name: "Do some coding tasks",
      done: true
    }
  ]
};


function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function addOne(el) {
  el.textContent = Number(el.textContent) + 1;
}

function minusOne(el) {
  el.textContent = Number(el.textContent) - 1;
}

function generateError(errorText) {
  const p = document.createElement("p");
  p.id = "error";
  p.classList.add("color-danger");
  const textNode = document.createTextNode(errorText);
  p.appendChild(textNode);
  appEl.appendChild(p);
}

function getListItems() {
  const arr = [];
  const ul = document.getElementById("todo-list");
  ul.childNodes.forEach((li) => state.tasks.push(li.childNodes[1].textContent));
  return arr;
}

function addListItem(task) {
  const ul = document.getElementById("todo-list");
  const li = document.createElement("li");
  li.classList.add("list-item");
  li.setAttribute("draggable", true);
  let dragged;
  document.addEventListener("drag", function (event) {}, false);
  document.addEventListener(
    "dragstart",
    function (event) {
      // store a ref. on the dragged elem
      dragged = event.target;
      // make it half transparent
      event.target.style.opacity = 0.5;
    },
    false
  );

  document.addEventListener(
    "dragend",
    function (event) {
      // reset the transparency
      event.target.style.opacity = "";
    },
    false
  );

  document.addEventListener(
    "dragover",
    function (event) {
      // prevent default to allow drop
      event.preventDefault();
    },
    false
  );

  document.addEventListener(
    "dragenter",
    function (event) {
      // highlight potential drop target when the draggable element enters it
      if (event.target.className === "list-item") {
        event.target.style.background = "lightgrey";
      }
    },
    false
  );

  document.addEventListener(
    "dragleave",
    function (event) {
      // reset background of potential drop target when the draggable element leaves it
      if (event.target.className === "list-item") {
        event.target.style.background = "";
      }
    },
    false
  );

  document.addEventListener(
    "drop",
    function (event) {
      // prevent default action (open as link for some elements)
      event.preventDefault();
      event.stopImmediatePropagation();
      if (event.target.className === "list-item") {
        if (event.target !== dragged) {
          event.target.style.background = "";
          dragged.parentNode.removeChild(dragged);
          insertAfter(dragged, event.target);
        }
      }
    },
    false
  );

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.addEventListener("change", (event) => {
    const checked = event.target.checked;

    li.classList.toggle("line-through");

    if (checked) {
      addOne(completedEl);
    } else {
      minusOne(completedEl);
    }
  });

  const deleteSpan = document.createElement("span");
  deleteSpan.addEventListener("click", () => {
    // deleteSpan.parentElement.remove()
    li.remove();
    minusOne(totalEL);
  });
  deleteSpan.classList.add("icon", "color-danger");
  const x = document.createTextNode("✕");
  const textNode = document.createTextNode(task);

  deleteSpan.appendChild(x);

  li.appendChild(input);
  li.appendChild(textNode);
  li.appendChild(deleteSpan);
  ul.appendChild(li);
  addOne(totalEL);
}

addBtn.addEventListener("click", () => {
  const errorElement = document.getElementById("error");
  if (todoInput.value && todoInput.value.length > 3) {
    addListItem(todoInput.value);
    console.log(getListItems());
    if (errorElement) {
      errorElement.remove();
    }
  } else if (!errorElement) {
    generateError("Todo item too short...");
  }
});
