const button = document.querySelector('.button-t')
const input = document.querySelector('.input-t')
const completeList = document.querySelector('.list-task')

let myItensList = []

function addNewValue() {
    myItensList.push(input.value)
    input.value = ''
    showNewTask()
}
// nova função para mostrar as tarefas:
function showNewTask() {
    let newTask = ''

    myItensList.forEach((task) => {
        newTask = newTask + `
        <li class="task">
                 <img src="img/check.png" alt="check">
                 <p>${task}</p>
                 <img src="img/Trash.png" alt="lixeira">
        </li>
        `
    })
    completeList.innerHTML = newTask
}
button.addEventListener('click', addNewValue)