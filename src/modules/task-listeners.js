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
    getProjectName,
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
let storedProjects;
let taskInfo;
let taskIndex;
let updatedProjects;

let storedTasks;

const taskListElem = document.querySelector('#task-list');
taskListElem.addEventListener('click', (e) => {
    if (e.target === taskListElem) return;

    storedProjects = accessLocalStorage('getItem', 'projects');
    taskItemElem = defineTaskItemElem(e);
    taskInfoElem = taskItemElem.querySelector('.task-info-container');
    const taskCheckboxElem = taskInfoElem.previousElementSibling;
    const deleteTaskElem = taskInfoElem.nextElementSibling;
    const chosenProject = getProjectName();
    taskIndex = getTaskIndex(storedProjects, taskItemElem, chosenProject);
    taskInfo = storedProjects[chosenProject][taskIndex];
    taskInstance = Task(taskInfo);

    if (e.target === deleteTaskElem && !shouldDeleteTask()) return;

    if (e.target === taskCheckboxElem || e.target === deleteTaskElem) {
        updatedProjects = taskInstance.
            updateTasks(storedProjects, 'remove', taskIndex);
        accessLocalStorage('setItem', updatedProjects);
        taskItemElem.remove();
    } else {
        taskModalElem.showModal();
        taskItemElem.setAttribute('data-editing-task', '');
        populateFormControl(taskFormControl, taskInfo);
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
    taskInfo = getTaskInfo(taskFormControl);
    const isTaskNameEmpty = isValueEmpty(taskInfo.name);

    if (isTaskNameEmpty) return;

    storedProjects = accessLocalStorage('getItem', 'projects');
    const isTaskDuplicate = checkTaskDuplicate(storedProjects, taskInfo);
    editedTaskElem = document.querySelector('[data-editing-task]')

    if (!editedTaskElem && isTaskDuplicate) {
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

    appendTaskItemElem(taskItemElem, editedTaskElem);
    createTaskCheckbox(taskItemElem, taskInfoElem);
    createDeleteTaskElem(taskItemElem);

    if (editedTaskElem) {
        updatedProjects = taskInstance.
            updateTasks(storedProjects, 'edit', taskIndex);
    } else {
        updatedProjects = taskInstance.
            updateTasks(storedProjects, 'add');
    }

    accessLocalStorage('setItem', updatedProjects);
});

const projectNavBars = document.querySelectorAll('.project-navbar');
projectNavBars.forEach(projectNavBar => {
    projectNavBar.addEventListener('click', (e) => {
        if (e.target.hasAttribute('data-current-tab')) return;

        highlightChosenTab(e);
        taskListElem.replaceChildren();

        storedProjects = accessLocalStorage('getItem', 'projects');
        if (storedProjects.length === 0) return;

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
});