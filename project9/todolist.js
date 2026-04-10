const allTask = document.querySelector('#alltask');
const input = document.querySelector('#task');
const form = document.querySelector('form');


window.onload = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(t => createTask(t.text, t.done));
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if (text === "") return;

    createTask(text, false);
    saveTasks();

    input.value = "";
});

function createTask(text, isDone) {
    const parent = document.createElement('div');
    parent.style.display = "flex";
    parent.style.alignItems = "center";
    parent.style.gap = "10px";
    parent.style.marginTop = "10px";

    const Task = document.createElement('span');
    Task.textContent = text;
    Task.style.color = "lightgray";
    Task.style.fontStyle = "italic";

    if (isDone) {
        Task.style.textDecoration = "line-through";
    }

    const DoneButton = document.createElement('button');
    DoneButton.textContent = "Done";

    const DeleteButton = document.createElement('button');
    DeleteButton.textContent = "Delete";


    DoneButton.addEventListener('click', () => {
        Task.style.textDecoration =
            Task.style.textDecoration === "line-through" ? "none" : "line-through";
        saveTasks();
    });

    DeleteButton.addEventListener('click', () => {
        parent.remove();
        saveTasks();
    });

    parent.append(Task, DoneButton, DeleteButton);
    allTask.append(parent);
}

// to save the list 
function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#alltask div').forEach(div => {
        const text = div.querySelector('span').textContent;
        const done = div.querySelector('span').style.textDecoration === "line-through";
        tasks.push({ text, done });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}