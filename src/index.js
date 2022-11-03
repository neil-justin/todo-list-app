import { consoleLog } from './modules/tasks';
import '../dist/stylesheets/main.css';
import '../dist/stylesheets/mainbar.css';
import '../dist/stylesheets/sidebar.css';
import '../dist/stylesheets/task-modal.css';

const taskModalElem = document.querySelector('#task-modal');
const taskNameTextareaElem = document.querySelector('#task-name');

const addTaskElems = document.querySelectorAll('.add-task-elem');
addTaskElems.forEach(addTaskButtonElem => {
    addTaskButtonElem.addEventListener('click', () => {
        taskModalElem.showModal();

        if (!taskNameTextareaElem.hasAttribute('required')) {
            taskNameTextareaElem.setAttribute('required', '');
        }
    });
});

const taskModalCloseButtonElem = document.querySelector('#task-modal-close-button');
taskModalCloseButtonElem.addEventListener('click', () => {
    // this allows the task modal from closing
    taskNameTextareaElem.removeAttribute('required');
});

const taskModalConfirmButtonElem = document.querySelector('#task-modal-confirm-button');
taskModalConfirmButtonElem.addEventListener('click', () => {
    if (taskModalElem.hasAttribute('editing-task')) {
        taskModalConfirmButtonElem.getAttribute('data-editted-task-index');
    }

    consoleLog;
});