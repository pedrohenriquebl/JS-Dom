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

export default buttonDelete