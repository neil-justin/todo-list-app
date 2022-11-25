import {
    Task,
    tasks,
} from './task';
import {
    createTaskComponents,
    resetTaskModal,
    createTaskCheckbox,
    createDeleteTaskElem,
    defineTaskItemElem,
    populateFormControl,
    highlightChosenTab,
    appendTaskItemElem,
} from './dom-controller';
import {
    isValueEmpty,
    filterByTaskProperty,
    getTaskInfo,
    shouldDeleteTask,
    getTaskIndex,
    checkTaskDuplicate,
} from './helper';
import { accessLocalStorage } from './local-storage';
import { differenceInCalendarDays } from 'date-fns';

const taskModalElem = document.querySelector('#task-modal');
const taskFormControl = {
    name: document.querySelector('#task-name'),
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
        resetTaskModal(taskFormControl);

        if (!taskFormControl.name.hasAttribute('required')) {
            taskFormControl.name.setAttribute('required', '');
        }
    });
});

let taskInstance;
let taskItemElem;
let taskInfoElem;
let storedTasks;

const taskListElem = document.querySelector('#task-list');
taskListElem.addEventListener('click', (e) => {
    if (e.target === taskListElem) return;

    const taskIndex = getTaskIndex(e);
    storedTasks = accessLocalStorage('getItem', 'projects');

    for (let i = 0; i < storedTasks.length; i++) {
        taskInstance = Task(storedTasks[i]);
        taskInstance.updateTasks(storedTasks[i], 'add');
    }

    taskItemElem = defineTaskItemElem(e);
    taskInfoElem = taskItemElem.querySelector('.task-info-container');
    const taskCheckboxElem = taskInfoElem.previousElementSibling;
    const deleteTaskElem = taskInfoElem.nextElementSibling;

    if (e.target === taskCheckboxElem ||
        e.target === deleteTaskElem && shouldDeleteTask()) {
        taskInstance = Task(storedTasks[taskIndex]);
        taskInstance.updateTasks(tasks[taskIndex], 'remove', taskIndex);
        taskItemElem.remove();
        accessLocalStorage('setItem', 'projects');
    } else {
        taskModalElem.showModal();
        taskItemElem.setAttribute('data-editing-task', '');
        populateFormControl(taskFormControl, tasks[taskIndex]);
    }
});

let editedTaskElem;

const taskModalCloseButtonElem = document.querySelector('#task-modal-close-button');
taskModalCloseButtonElem.addEventListener('click', () => {
    // this allows the task modal from closing
    taskFormControl.name.removeAttribute('required');

    editedTaskElem = document.querySelector('[data-editing-task]');

    if (editedTaskElem) {
        editedTaskElem.removeAttribute('data-editing-task');
    }
});

const taskModalConfirmButtonElem = document.querySelector('#task-modal-confirm-button');
taskModalConfirmButtonElem.addEventListener('click', () => {
    const taskInfo = getTaskInfo(taskFormControl);
    const isTaskNameEmpty = isValueEmpty(taskInfo.name);

    if (isTaskNameEmpty) return;

    const storedProjects = accessLocalStorage('getItem', 'projects');
    const isTaskDuplicate = checkTaskDuplicate(storedProjects, taskInfo);

    if (isTaskDuplicate) {
        window.alert('This task already exists in this project');
        return;
    }

    taskInstance = Task(taskInfo);
    const isTaskNotesEmpty = isValueEmpty(taskInfo.notes);
    const taskDueDateString = taskInstance.getTaskDueDateString(
        differenceInCalendarDays(taskInfo.dueDate, new Date())
    );

    if (taskInfo.dueDate === null) {
        taskItemElem = createTaskComponents(taskInfo, isTaskNotesEmpty);
    } else {
        taskItemElem = createTaskComponents(taskInfo, isTaskNotesEmpty, taskDueDateString);
    }

    taskInfoElem = taskItemElem.querySelector('.task-info-container');
    editedTaskElem = document.querySelector('[data-editing-task]')

    appendTaskItemElem(taskItemElem, editedTaskElem);
    createTaskCheckbox(taskItemElem, taskInfoElem);
    createDeleteTaskElem(taskItemElem);

    let updatedProjects;

    if (editedTaskElem) {
        const editedTaskIndex = getTaskIndex(storedProjects, taskInfo);
        updatedProjects = taskInstance.
            updateProjects(storedProjects, 'edit', taskInfo, editedTaskIndex);
    } else {
        updatedProjects = taskInstance.
            updateProjects(storedProjects, 'add', taskInfo);
    }

    accessLocalStorage('setItem', updatedProjects);
});

const projectInboxListElem = document.querySelector('#project-inbox-container');
projectInboxListElem.addEventListener('click', (e) => {
    if (e.target.hasAttribute('current-tab')) return;

    highlightChosenTab(e);
    taskListElem.replaceChildren();
    storedTasks = accessLocalStorage('getItem', 'projects');

    if (storedTasks.length === 0) return;

    let filteredTasks = filterByTaskProperty(storedTasks, 'project', e);

    if (e.target.textContent !== 'Inbox') {
        filteredTasks = filterByTaskProperty(filteredTasks, 'dueDate', e);
    }

    if (filteredTasks.length === 0) return;

    for (let i = 0; i < filteredTasks.length; i++) {
        taskInstance = Task(filteredTasks[i]);

        createTaskComponents(
            filteredTasks[i], !filteredTasks[i].notes,
            taskInstance.getTaskDueDateString(differenceInCalendarDays(
                new Date(`${filteredTasks[i].dueDate} `), new Date()
            ))
        );

        taskItemElem = taskListElem.lastElementChild;
        taskInfoElem = taskItemElem.querySelector('.task-info-container');

        createTaskCheckbox(taskItemElem, taskInfoElem);
        createDeleteTaskElem(taskItemElem);
        taskItemElem.setAttribute('data-task-index', `${tasks.length - 1} `);
    }
});