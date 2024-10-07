document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");

  
  taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskDescription = document.getElementById("new-task-description").value;
    const taskPriority = document.getElementById("task-priority").value;
    const taskColor = document.getElementById("select_colors").value; 

    if (taskDescription.trim() !== "") {
      addTaskToList(taskDescription, taskPriority, taskColor); 
      taskForm.reset(); 
    }
  });
});

function addTaskToList(task, priority, color) {
  const taskList = document.getElementById("tasks"); 
  const newTask = document.createElement("li");

  newTask.textContent = `${task} - Priority: ${priority}`;
  newTask.style.color = color; 

  
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    newTask.remove(); 
  });

  
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", () => {
    const newDescription = prompt("Edit current task description:", task);
    if (newDescription !== null && newDescription.trim() !== "") {
      newTask.firstChild.textContent = `${newDescription} - Priority: ${priority}`;
    }
  });

  newTask.appendChild(deleteButton);
  newTask.appendChild(editButton);
  taskList.appendChild(newTask); 
}
