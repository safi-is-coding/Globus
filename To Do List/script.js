const addBtn = document.querySelector('#add-btn')
const newTaskInput = document.querySelector('#wrapper input')
const taskContainer = document.querySelector('#tasks')
const error = document.getElementById('error')
const newTaskAdded = document.getElementById('task-added')
const countValue = document.querySelector('.count-value')

let taskCount = []

const displayCount = (taskCount) => {
    countValue.innerText = taskCount.length
}

const addTask = () => {
    
    // displayCount(taskCount)
    const taskName = newTaskInput.value.trim()
    // error.style.display = 'none'

    if (!taskName) {
        error.style.display = 'block'
        setTimeout(() => {
            error.style.display = 'none';
        }, 3000)
        return;
    }
    else{
        taskCount.push(taskName)
        displayCount(taskCount)

        const task = document.createElement('div')
        task.classList.add('task')
        task.innerHTML = `
                        <input type="checkbox" class="task-check">
                        <span class="taskname">${taskName}</span>
                        <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="delete"><i class="fa-solid fa-delete-left"></i></button>
                        `;

        const li = document.createElement('li')
        li.appendChild(task)
        newTaskAdded.appendChild(li)

        
        
        // deleting the list container
        const deleteBtns = task.querySelector('.delete')
        console.log(deleteBtns);

        deleteBtns.addEventListener('click', (e)=> {
            // console.log(e);
            e.target.parentElement.parentElement.remove();
            // console.log(taskCount);
            taskCount.pop()
            // console.log(taskCount);
            displayCount(taskCount)

        })

        //editing the list container
        const editBtns = task.querySelector('.edit')
        editBtns.addEventListener('click', (e)=> {
            // console.log(e.target.parentElement.parentElement.innerText);
            let editInput = e.target.parentElement.parentElement.innerText
            newTaskInput.value = editInput

        })

        const checked = task.querySelector('.task-check')
        checked.addEventListener('click', (e)=> {
            if (e.target.checked) {
                e.target.parentElement.classList.add('checked')
                console.log(task);
            }else{
                e.target.parentElement.classList.remove('checked')
                console.log(task);
            }
        })

        
    }
    newTaskInput.value = ''

}



addBtn.addEventListener("click", addTask)

