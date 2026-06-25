const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function addTask() {

    const taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttons");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.classList.add("complete-btn");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    completeBtn.addEventListener("click", () => {
        span.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    buttonContainer.appendChild(completeBtn);
    buttonContainer.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttonContainer);

    taskList.appendChild(li);

    taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (event) => {
    if(event.key === "Enter"){
        addTask();
    }
});