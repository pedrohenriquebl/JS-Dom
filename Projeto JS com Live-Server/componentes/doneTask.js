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

export default doneButton


