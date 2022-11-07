import './stylesheets/main.css';
import './stylesheets/mainbar.css';
import './stylesheets/sidebar.css';
import './stylesheets/task-modal.css';

import { tasks, Task } from './modules/tasks';
import { displayNewTask } from './modules/dom-controller';
import { differenceInCalendarDays, differenceInCalendarYears } from 'date-fns';

const taskNameElem = document.querySelector('#task-name');

const addTaskElems = document.querySelectorAll('.add-task-elem');
addTaskElems.forEach(addTaskElem => {
    addTaskElem.addEventListener('click', () => {
        const taskModalElem = document.querySelector('#task-modal');
        taskModalElem.showModal();

        if (!taskNameElem.hasAttribute('required')) {
            taskNameElem.setAttribute('required', '');
        }
    });
});

const taskModalCloseButtonElem = document.querySelector('#task-modal-close-button');
taskModalCloseButtonElem.addEventListener('click', () => {
    // this allows the task modal from closing
    taskNameElem.removeAttribute('required');
});

const taskFormControl = {
    name: document.querySelector('#task-name'),
    notes: document.querySelector('#task-notes'),
    project: document.querySelector('#task-project'),
    priority: document.querySelector('#task-priority'),
    dueDate: document.querySelector('#task-due-date')
}

const taskModalConfirmButtonElem = document.querySelector('#task-modal-confirm-button');
taskModalConfirmButtonElem.addEventListener('click', () => {
    if (taskNameElem.value !== '') {
        const newTask = Task(taskFormControl);
        newTask.addTask();

        displayNewTask(
            taskFormControl,
            differenceInCalendarDays(
                taskFormControl.dueDate.valueAsDate, new Date()
            ),
            differenceInCalendarYears(
                taskFormControl.dueDate.valueAsDate, new Date()
            ),
        );
    }
});