import './stylesheets/main.css';
import './stylesheets/mainbar.css';
import './stylesheets/sidebar.css';
import './stylesheets/task-modal.css';
import './stylesheets/project-modal.css';
import { Task } from './modules/tasks';
import { Project } from './modules/projects';
import {
    displayTask,
    resetTaskModal,
    createTaskCheckbox,
    createDeleteTaskElem,
    removeTaskDisplay,
    defineTaskElem,
    insertEditingTaskAttr,
    insertTaskIndexAttr,
} from './modules/dom-controller';
import { differenceInCalendarDays } from 'date-fns';

const taskNameElem = document.querySelector('#task-name');
const taskModalElem = document.querySelector('#task-modal');
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
        taskModalElem.showModal();

        if (!taskNameElem.hasAttribute('required')) {
            taskNameElem.setAttribute('required', '');
        }

        resetTaskModal(taskFormControl);
    });
});

let task;
let taskElem;
let taskInfoElem;

const taskListElem = document.querySelector('#task-list');
taskListElem.addEventListener('click', (e) => {
    let taskIndex;

    while (typeof taskIndex === 'undefined') {
        taskElem = defineTaskElem(e);
        taskInfoElem = taskElem.querySelector('.task-info-container');
        taskIndex = task.getTaskIndex(e);

        const taskCheckboxElem = taskInfoElem.previousElementSibling;
        const deleteTaskElem = taskInfoElem.nextElementSibling;

        if (e.target === taskListElem) {
            break;
        } else if (e.target === taskCheckboxElem || e.target === deleteTaskElem) {
            if (e.target === deleteTaskElem) {
                if (!window.
                    confirm('Are you sure you want to delete this item?')) {
                    break;
                }
            }

            task.removeTask(taskIndex);
            removeTaskDisplay(taskElem);
        } else {
            taskModalElem.showModal();
            insertEditingTaskAttr(taskElem);
        }
    }
});

const taskModalCloseButtonElem = document.querySelector('#task-modal-close-button');
taskModalCloseButtonElem.addEventListener('click', () => {
    // this allows the task modal from closing
    taskNameElem.removeAttribute('required');

    if (document.querySelector('[data-editing-task')) {
        document.querySelector('[data-editing-task').
            removeAttribute('data-editing-task');
    }
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

    createTaskCheckbox(taskElem, taskInfoElem);
    createDeleteTaskElem(taskElem);
    insertTaskIndexAttr(taskElem);
});

const addProjectButtonElem = document.querySelector('#add-project-button');
addProjectButtonElem.addEventListener('click', () => {
    const projectModalElem = document.querySelector('#project-modal');
    projectModalElem.showModal();
});

const projectModalConfirmButtonElem = document.
    querySelector('#project-modal-confirm-button');
projectModalConfirmButtonElem.addEventListener('click', () => {
    const projectNameInputElem = document.querySelector('#project-name');
    const project = Project(projectNameInputElem);

    project.addProject();
    project.listProjectName();
    project.displayProjectName();
});