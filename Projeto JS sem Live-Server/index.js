(() => {
    const createTask = (event) => {
    event.preventDefault()

    const list = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const value = input.value

    const task = document.createElement('li')
    task.classList.add('task')
    const content = `<p class="content">${value}</p>`

    task.innerHTML = content

    task.appendChild(doneButton())
    task.appendChild(buttonDelete())
    list.appendChild(task)
    input.value = " "
}

const newTask = document.querySelector('[data-form-button]')

newTask.addEventListener('click' , createTask)

const doneButton = () => {
    const buttonChecked = document.createElement('button')

    buttonChecked.classList.add('check-button')
    buttonChecked.innerText = 'concluir'
    buttonChecked.addEventListener('click',doneTask)
  
    return buttonChecked
}

const doneTask = (event) => {
    const buttonChecked = event.target;

    const taskDone = buttonChecked.parentElement;

    taskDone.classList.toggle('done');
}

const buttonDelete = () => {
    const buttonRemove = document.createElement('button');

    buttonRemove.innerText = 'deletar';    
    buttonRemove.addEventListener('click', deleteTask);
    
    return buttonRemove;
}

const deleteTask = (event) => {
    const removeTask = event.target;

    const taskDone = removeTask.parentElement;

    taskDone.remove();

    return removeTask;
}
})()


