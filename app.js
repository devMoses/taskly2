'use strict';
const ownerFirstName = document.querySelector('#owner__first-name')
const ownerLastName = document.querySelector('#owner__last-name')
const assignFirstName = document.querySelector('#assign__last-name')
const assignLastName = document.querySelector('#assign__last-name')
//QUERY SELECT THE DATE
const taskDate = document.querySelector('#task__date')
//QUERY SELECT THE SUBMIT BUTTON WITH THE ID
const submitButton = document.querySelector('#task__submit')
//QUERY SELECT THE DESCRIPTION
const test = document.querySelector('#task__description')

class TaskManager {
    constructor(currentId = 0) {
        ;(this.currentId = currentId), (this.tasks = [])
    }
    addTask(
        owner_first,
        owner__last,
        task__description,
        assign_first,
        assign_last,
        dueDate,
        statuss = 'new'
    ) {
        this.tasks.push({
            id: this.currentId++,
            owner_first,
            owner__last,
            task__description,
            assign_first,
            assign_last,
            dueDate,
            statuss,
        })
    }
}
const newProj = new TaskManager()

document.querySelector('.form').addEventListener('submit', grabForm)

//Button Listener and format Data
//reset input

//function creating the
function grabForm(e) {
    e.preventDefault()

    newProj.addTask(
        ownerFirstName.value,
        ownerLastName.value,
        test.value,
        assignFirstName.value,
        assignLastName.value,
        taskDate.value
    )
    ownerFirstName.value = ''
    ownerLastName.value = ''
    assignFirstName.value = ''
    assignLastName.value = ''
    test.value = ''
    taskDate.value = ''
    console.log(newProj.tasks)
}