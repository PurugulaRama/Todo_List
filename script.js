const formEl = document.querySelector(".form");

const inputEl = document.querySelector(".input");

const ulEl = document.querySelector(".list");
//This line retrieves any previously stored to-do list items from local storage and assigns them to a variable called list. 
//The JSON.parse() method is used to convert the data from a string to an object
let list = JSON.parse(localStorage.getItem("list"));
if (list) {
  list.forEach((task) => {
    toDoList(task);
  });
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  toDoList();
});

function toDoList(task) {
  let newTask = inputEl.value;
  if (task) {
    newTask = task.name;
  }

  const liEl = document.createElement("li");
  if (task && task.checked) {
    liEl.classList.add("checked");
  }
  liEl.innerText = newTask;
  ulEl.appendChild(liEl);
  inputEl.value = "";
  const checkBtnEl = document.createElement("div");
  checkBtnEl.innerHTML = `
  <i class="fas fa-check-square">
  `;
  liEl.appendChild(checkBtnEl);
  const trashBtnEl = document.createElement("div");
  trashBtnEl.innerHTML = `
  <i class="fas fa-trash"></i>
  `;
  liEl.appendChild(trashBtnEl);

  checkBtnEl.addEventListener("click", () => {
    liEl.classList.toggle("checked");
    updateLocalStorage();
  });

  trashBtnEl.addEventListener("click", () => {
    liEl.remove();
    updateLocalStorage();
  });
  updateLocalStorage();
}

function updateLocalStorage() {
  const liEls = document.querySelectorAll("li");
  list = [];
  liEls.forEach((liEl) => {
    list.push({
      name: liEl.innerText,
      checked: liEl.classList.contains("checked"),
    });
  });
  localStorage.setItem("list", JSON.stringify(list));
}


/*This code is for a to-do list application that allows users to add tasks, mark them as completed, and delete them. Let's break down what each element of the code is doing:

const formEl = document.querySelector(".form");: This line selects the HTML element with the class "form" and assigns it to a variable called formEl. This element will be used to add event listeners to the form.

const inputEl = document.querySelector(".input");: This line selects the HTML element with the class "input" and assigns it to a variable called inputEl. This element will be used to get the user's input for new tasks.

const ulEl = document.querySelector(".list");: This line selects the HTML element with the class "list" and assigns it to a variable called ulEl. This element will be used to display the list of tasks.

let list = JSON.parse(localStorage.getItem("list"));: This line retrieves any previously stored to-do list items from local storage and assigns them to a variable called list. The JSON.parse() method is used to convert the data from a string to an object.

if (list) { list.forEach((task) => { toDoList(task); }); }: This code checks if there are any items in the list variable, and if so, it loops through each item and calls the toDoList() function to display it on the page.

formEl.addEventListener("submit", (event) => { event.preventDefault(); toDoList(); });: This code adds an event listener to the formEl element. When the user submits the form (by pressing Enter or clicking the submit button), the event listener prevents the default form submission behavior and calls the toDoList() function to add the new task to the list.

function toDoList(task) { ... }: This is the main function that handles adding tasks to the list. It takes an optional task parameter, which is used to display existing tasks retrieved from local storage.

let newTask = inputEl.value;: This line gets the user's input for the new task and assigns it to a variable called newTask.

if (task) { newTask = task.name; }: This code checks if there is an existing task being passed to the toDoList() function, and if so, it uses the name of that task instead of the user's input.

const liEl = document.createElement("li");: This code creates a new list item element (<li>) and assigns it to a variable called liEl.

if (task && task.checked) { liEl.classList.add("checked"); }: This code checks if there is an existing task being passed to the toDoList() function and if that task is checked (completed), and if so, it adds the "checked" class to the list item element.

liEl.innerText = newTask;: This code sets the text of the list item element to the name of the task.

ulEl.appendChild(liEl);: This code adds the list item element to the unordered list element (<ul>) on the page.

inputEl.value = "";: This code clears the user's input field after a new task has been added.

const checkBtnEl = document.createElement("div");: This code creates a new button element (<div>) and assigns it to a variable called checkBtnEl. This button will be used to mark tasks as completed.

checkBtnEl.innerHTML = ...;: This code sets the HTML content of the checkBtnEl element to an */