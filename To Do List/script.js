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
    error.style.display = 'none'

    if (!taskName) {
        setTimeout(() => {
            error.style.display = 'block'
        }, 200)
        return;
    }
    else{
        taskCount.push('added')
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

        const deleteBtns = document.querySelectorAll('.delete')
        console.log(deleteBtns);
        // deleteBtns.forEach((button) => {
        //     button.addEventListener('click', (e) => {
        //         e.target.parentElement.parentElement.remove()
        //         console.log(taskCount);
                
        //     }
        // )
        // });

        for(i=0; i<deleteBtns.length; i++)
        {
            deleteBtns[i].addEventListener('click', (e)=> {
                console.log(e);
                e.target.parentElement.parentElement.remove();
                console.log(taskCount);
                taskCount.pop()
                console.log(taskCount);
                displayCount(taskCount)

            })
        }


        // deleteBtns.addEventListener('click', (e)=> {
        //     console.log(e.target.parentElement.parentElement);

        // })

        // taskCount = taskCount-1
        // console.log(taskCount);

        // displayCount(taskCount)

    }

}
    



addBtn.addEventListener("click", addTask)

