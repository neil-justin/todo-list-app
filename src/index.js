import './stylesheets/main.css';
import './stylesheets/mainbar.css';
import './stylesheets/sidebar.css';
import './stylesheets/task-modal.css';
import { Task } from './modules/tasks';
import {
    displayTask,
    resetTaskModal,
    addTaskCheckbox,
    addDeleteTaskElem,
    removeTaskDisplay,
    defineElem,
} from './modules/dom-controller';
import { differenceInCalendarDays } from 'date-fns';

const taskNameElem = document.querySelector('#task-name');

const taskFormControl = {
    name: taskNameElem,
    notes: document.querySelector('#task-notes'),
    project: document.querySelector('#task-project'),
    priority: document.querySelector('#task-priority'),
    dueDate: document.querySelector('#task-due-date')
}

const addTaskElems = document.querySelectorAll('.add-task-elem');
addTaskElems.forEach(addTaskElem => {
    addTaskElem.addEventListener('click', () => {
        const taskModalElem = document.querySelector('#task-modal');
        taskModalElem.showModal();

        if (!taskNameElem.hasAttribute('required')) {
            taskNameElem.setAttribute('required', '');
        }

        resetTaskModal(taskFormControl);
    });
});

/* The task variable will contain the task DOM element that the user interacts
with */
let task;
let taskElem;
let taskInfoElem;

const taskListElem = document.querySelector('#task-list');
taskListElem.addEventListener('click', (e) => {
    let taskIndex;

    while (typeof taskIndex === 'undefined') {
        if (e.target === taskListElem) {
            break;
        } else {
            taskElem = defineElem(e, 'taskElem');
            taskInfoElem = defineElem(e, 'taskInfoElem');
            taskIndex = task.getTaskIndex(e);

            if (e.target === taskElem || e.target === taskInfoElem) {
                console.log(e.target);
            } else {
                task.removeTask(taskIndex);
                removeTaskDisplay(taskElem);
            }
        }
    }
});

const taskModalCloseButtonElem = document.querySelector('#task-modal-close-button');
taskModalCloseButtonElem.addEventListener('click', () => {
    // this allows the task modal from closing
    taskNameElem.removeAttribute('required');
});

const taskModalConfirmButtonElem = document.querySelector('#task-modal-confirm-button');
taskModalConfirmButtonElem.addEventListener('click', () => {
    task = Task(taskFormControl);

    if (task.textareaNotEmpty('name')) {
        task.addTask();

        if (taskFormControl.dueDate.valueAsDate !== null) {
            displayTask(
                taskFormControl, task.textareaNotEmpty('notes'),
                task.getTaskDueDate(differenceInCalendarDays(
                    taskFormControl.dueDate.valueAsDate, new Date()
                )),
            );
        } else {
            displayTask(
                taskFormControl, task.textareaNotEmpty('notes'),
            );
        }
    }

    taskElem = taskListElem.lastElementChild;
    taskInfoElem = taskElem.querySelector('.task-info-container');

    addTaskCheckbox(taskElem, taskInfoElem);
    addDeleteTaskElem(taskElem);
    task.insertTaskIndex(taskElem);
});
