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
    updateMainContentHeading,
} from './dom-controller';
import {
    isValueEmpty,
    filterByTaskProperty,
    getTaskInfo,
    shouldDeleteTask,
    getTaskIndex,
    checkTaskDuplicate,
    getProjectName,
    shouldDisplayTask,
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
let openedTabElem;

const taskListElem = document.querySelector('#task-list');
taskListElem.addEventListener('click', (e) => {
    if (e.target === taskListElem) return;

    storedProjects = accessLocalStorage('getItem', 'projects');
    taskItemElem = defineTaskItemElem(e);
    taskInfoElem = taskItemElem.querySelector('.task-info-container');
    const taskCheckboxElem = taskInfoElem.previousElementSibling;
    const deleteTaskElem = taskInfoElem.nextElementSibling;
    openedTabElem = document.querySelector('[data-opened-tab]');
    const chosenProjectName = getProjectName(openedTabElem);
    taskIndex = getTaskIndex(storedProjects, taskItemElem, chosenProjectName);
    taskInfo = storedProjects[chosenProjectName][taskIndex];
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

let displayedTaskDueDate;

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

    if (editedTaskElem) {
        updatedProjects = taskInstance.
            updateTasks(storedProjects, 'edit', taskIndex);
    } else {
        updatedProjects = taskInstance.updateTasks(storedProjects, 'add');
    }

    accessLocalStorage('setItem', updatedProjects);

    openedTabElem = document.querySelector('[data-opened-tab]');
    const shouldDisplayNewTask =
        shouldDisplayTask(taskInfo, openedTabElem);

    if (!shouldDisplayNewTask) return;

    const isTaskNotesEmpty = isValueEmpty(taskInfo.notes);
    displayedTaskDueDate = taskInstance.getTaskDueDateString(
        differenceInCalendarDays(taskInfo.dueDate, new Date())
    );

    if (taskInfo.dueDate === null) {
        taskItemElem = createTaskComponents(taskInfo, isTaskNotesEmpty);
    } else {
        taskItemElem = createTaskComponents(taskInfo, isTaskNotesEmpty, displayedTaskDueDate);
    }

    taskInfoElem = taskItemElem.querySelector('.task-info-container');

    appendTaskItemElem(taskItemElem, editedTaskElem);
    createTaskCheckbox(taskItemElem, taskInfoElem);
    createDeleteTaskElem(taskItemElem);
});

const projectNavBars = document.querySelectorAll('.project-navbar');
projectNavBars.forEach(projectNavBar => {
    projectNavBar.addEventListener('click', (e) => {
        if (
            e.target.classList.contains('project-navbar') ||
            e.target.hasAttribute('data-opened-tab')
        ) return;

        highlightChosenTab(e);
        taskListElem.replaceChildren();
        updateMainContentHeading(e);

        console.log(e.currentTarget);

        storedProjects = accessLocalStorage('getItem', 'projects');
        let chosenProject = filterByTaskProperty(storedProjects, 'project', e);

        if (chosenProject === null || chosenProject.length === 0) return;

        const isProjectInbox = chosenProject[0].project === 'inbox';
        const inboxTabElem = document.querySelector('#inbox-tab');

        if (isProjectInbox && e.target !== inboxTabElem) {
            for (let i = 0; i < chosenProject.length; i++) {
                /* parsing the date(s) into an appropriate and meaningful format,
                to be used in the filterByTaskProperty function */
                chosenProject[i].dueDate = new Date(`${chosenProject[i].dueDate}`);
            }

            chosenProject = filterByTaskProperty(chosenProject, 'dueDate', e)
        }

        if (chosenProject.length === 0) return;

        for (let i = 0; i < chosenProject.length; i++) {
            taskInstance = Task(chosenProject[i]);

            if (chosenProject[i].dueDate === null) {
                taskItemElem = createTaskComponents(
                    chosenProject[i], !chosenProject[i].notes
                );
            } else {
                displayedTaskDueDate = taskInstance.getTaskDueDateString(
                    differenceInCalendarDays(chosenProject[i].dueDate, new Date())
                );

                taskItemElem = createTaskComponents(
                    chosenProject[i], !chosenProject[i].notes, displayedTaskDueDate
                );
            }

            taskInfoElem = taskItemElem.querySelector('.task-info-container');

            appendTaskItemElem(taskItemElem);
            createTaskCheckbox(taskItemElem, taskInfoElem);
            createDeleteTaskElem(taskItemElem);
        }
    });
});