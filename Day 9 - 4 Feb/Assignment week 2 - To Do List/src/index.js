import "./styles.css";
console.clear();
function addTask() {
  let task = document.createElement("div");
  task.setAttribute("class", "task");
  let taskname = document.getElementById("input").value;
  let tasktext = document.createElement("textbox");
  tasktext.setAttribute("class", "text");
  document.getElementById("input").value = "";
  tasktext.textContent = taskname;
  tasktext.setAttribute("contentEditable", "true");

  //checkbox
  let checktask = document.createElement("input");
  checktask.setAttribute("type", "checkbox");
  checktask.setAttribute("class", "check");
  checktask.addEventListener("change", function () {
    if (this.checked) {
      tasktext.setAttribute("style", "text-decoration: line-through;");
    } else {
      tasktext.setAttribute("style", "text-decoration: none;");
    }
  });

  //button to delete task
  let taskdelete = document.createElement("button");
  taskdelete.textContent = "DELETE";
  taskdelete.setAttribute("class", "delete");
  taskdelete.addEventListener("click", (e) => {
    e.preventDefault();
    task.remove();
  });
  task.appendChild(checktask);
  task.appendChild(tasktext);
  task.appendChild(taskdelete);
  let list = document.getElementById("list");
  if (taskname !== "") {
    list.appendChild(task);
  }
}

let btn = document.getElementById("add");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  addTask();
});
