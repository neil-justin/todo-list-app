import '../stylesheets/index.css';
import '../stylesheets/main-content.css';
import '../stylesheets/sidebar.css';
import '../stylesheets/modal.css';
import '../stylesheets/task-modal.css';
import '../stylesheets/project-modal.css';
import { Task, tasks, } from './task';
import {
    displayTask,
    resetTaskModal,
    createTaskCheckbox,
    createDeleteTaskElem,
    defineTaskItemElem,
    populateFormControl,
    updateTaskDisplay
} from './dom-controller';
import {
    isValueEmpty,
    filterByTaskProperty,
    getTaskDetails,
    shouldDeleteTask,
    getTaskIndex
} from './helper';
import { differenceInCalendarDays } from 'date-fns';
import { accessLocalStorage } from './local-storage';

const taskNameTextareaElem = document.querySelector('#task-name');
const taskModalElem = document.querySelector('#task-modal');
const taskFormControl = {
    name: taskNameTextareaElem,
    notes: document.querySelector('#task-notes'),
    project: document.querySelector('#task-project'),
    priority: document.querySelector('#task-priority'),
    dueDate: document.querySelector('#task-due-date')
}

const addTaskElems = document.querySelectorAll('.add-task-elem');
addTaskElems.forEach(addTaskElem => {
    addTaskElem.addEventListener('click', () => {
        taskModalElem.removeAttribute('open');
        taskModalElem.showModal();

        if (!taskNameTextareaElem.hasAttribute('required')) {
            taskNameTextareaElem.setAttribute('required', '');
        }

        resetTaskModal(taskFormControl);
    });
});

let taskInstance;
let taskItemElem;
let taskInfoElem;

const taskListElem = document.querySelector('#task-list');
taskListElem.addEventListener('click', (e) => {
    if (e.target === taskListElem) return;

    const taskIndex = getTaskIndex(e);
    const storedTasks = accessLocalStorage('getItem', 'tasks');
    taskInstance = Task(storedTasks[taskIndex]);

    for (let i = 0; i < storedTasks.length; i++) {
        taskInstance.updateTasks(storedTasks[i], 'add');
    }

    taskItemElem = defineTaskItemElem(e);
    taskInfoElem = taskItemElem.querySelector('.task-info-container');
    const taskCheckboxElem = taskInfoElem.previousElementSibling;
    const deleteTaskElem = taskInfoElem.nextElementSibling;

    if (e.target === taskCheckboxElem || e.target === deleteTaskElem) {
        if (e.target === deleteTaskElem && !shouldDeleteTask()) return;

        tasks.splice(taskIndex, 1);
        taskItemElem.remove();
        accessLocalStorage('setItem', tasks);
    } else {
        taskModalElem.showModal();
        taskItemElem.setAttribute('data-editing-task', '');
        populateFormControl(taskFormControl, tasks[taskIndex], taskInstance);
    }
});

let editedTaskElem;

const taskModalCloseButtonElem = document.querySelector('#task-modal-close-button');
taskModalCloseButtonElem.addEventListener('click', () => {
    // this allows the task modal from closing
    taskNameTextareaElem.removeAttribute('required');

    editedTaskElem = document.querySelector('[data-editing-task]');

    if (editedTaskElem) {
        editedTaskElem.removeAttribute('data-editing-task');
    }
});

const taskModalConfirmButtonElem = document.querySelector('#task-modal-confirm-button');
taskModalConfirmButtonElem.addEventListener('click', (e) => {
    const taskDetails = getTaskDetails(taskFormControl);

    if (isValueEmpty(taskDetails.name)) return;

    taskInstance = Task(taskDetails);
    editedTaskElem = document.querySelector('[data-editing-task')

    if (editedTaskElem) {
        const editedTaskIndex = parseInt(editedTaskElem.getAttribute('data-task-index'));

        taskInstance.updateTasks(taskDetails, 'edit', editedTaskIndex);

        if (taskDetails.dueDate !== null) {
            updateTaskDisplay(
                taskDetails, defineTaskItemElem(e, editedTaskIndex),
                isValueEmpty(taskDetails.notes),
                taskInstance.getTaskDueDate(
                    differenceInCalendarDays(
                        taskDetails.dueDate, new Date()
                    )
                ),
            );
        } else {
            updateTaskDisplay(
                taskDetails, defineTaskItemElem(e, editedTaskIndex),
                isValueEmpty(taskDetails.notes),
            );
        }
    } else {
        taskInstance.updateTasks(taskDetails, 'add');

        if (taskDetails.dueDate !== null) {
            displayTask(
                taskDetails, isValueEmpty(taskDetails.notes),
                taskInstance.getTaskDueDate(differenceInCalendarDays(
                    taskDetails.dueDate, new Date()
                )),
            );
        } else {
            displayTask(
                taskDetails, isValueEmpty(taskDetails.notes),
            );
        }

        taskItemElem = taskListElem.lastElementChild;
        taskInfoElem = taskItemElem.querySelector('.task-info-container');

        createTaskCheckbox(taskItemElem, taskInfoElem);
        createDeleteTaskElem(taskItemElem);
        taskItemElem.setAttribute('data-task-index', `${tasks.length - 1}`);
    }

    accessLocalStorage('setItem', tasks);
});

const projectInboxListElem = document.querySelector('#project-inbox-container');
projectInboxListElem.addEventListener('click', (e) => {
    const filteredTasks = filterByTaskProperty(tasks, 'project', e);

    if (filteredTasks.length === 0) return;

    for (let i = 0; i < filteredTasks.length; i++) {
        displayTask(
            filteredTasks[i], isValueEmpty(filteredTasks[i].notes),
            filteredTasks[i].dueDate
        );
    }

    taskItemElem = taskListElem.lastElementChild;
    taskInfoElem = taskItemElem.querySelector('.task-info-container');

    createTaskCheckbox(taskItemElem, taskInfoElem);
    createDeleteTaskElem(taskItemElem);
    taskItemElem.setAttribute('data-task-index', `${tasks.length - 1}`);
});