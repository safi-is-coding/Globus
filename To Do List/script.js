const addBtn = document.querySelector('#add-btn')
const newTaskInput = document.querySelector('#wrapper input')
const taskContainer = document.querySelector('#tasks')
const error = document.getElementById('error')
const newTaskAdded = document.getElementById('task-added')
const countValue = document.querySelector('.count-value')

let taskCount = 0

const displayCount = (taskCount) => {
    countValue.innerText = taskCount
}

const addTask = () => {
    const taskName = newTaskInput.value.trim()
    error.style.display = 'none'

    if (!taskName) {
        setTimeout(() => {
            error.style.display = 'block'
        }, 200)
        return;
    }

    const task = `<div class="task">
                    <input type="checkbox" class="task-check">
                    <span class="taskname">${taskName}</span>
                    <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="delete"><i class="fa-solid fa-delete-left"></i></button>
                </div>`

                let li = document.createElement('li')
                li.appendChild(document.createElement(task));
                newTaskAdded.appendChild(li);


}

addBtn.addEventListener("click", addTask)