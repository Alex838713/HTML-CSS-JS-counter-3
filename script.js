const Task = document.createElement("li");

const bullet = document.getElementById("#tasks");
const button = document.getElementById("#add-btn");
const li = document.getElementById("#list");
function addOne() {
    Task = Task + 1;
    li.textContent = "Task";
}
button.addEventListener("click", addOne);
li.appendChild("Task");