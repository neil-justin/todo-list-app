import {
    Task,
} from './task';
import {
    createTaskComponents,
    resetTaskModal,
    createTaskCheckbox,
    createDeleteTaskElement,
    populateFormControl,
    highlightChosenTab,
    updateMainContentHeading,
    defineTaskItemElement,
    appendTaskItemElement,
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
import { Project } from './project';

const taskModalElement = document.querySelector('#task-modal');
const taskFormControl = {
    name: document.querySelector('#task-name'),
    notes: document.querySelector('#task-notes'),
    project: document.querySelector('#task-project'),
    priority: document.querySelector('#task-priority'),
    dueDate: document.querySelector('#task-due-date')
}

const addTaskElements = document.querySelectorAll('.add-task-elem');
addTaskElements.forEach(addTaskElement => {
    addTaskElement.addEventListener('click', () => {
        taskModalElement.removeAttribute('open');
        taskModalElement.showModal();
        resetTaskModal(taskFormControl);

        if (!taskFormControl.name.hasAttribute('required')) {
            taskFormControl.name.setAttribute('required', '');
        }
    });
});

let taskInstance;
let taskItemElement;
let taskInfoElement;
let storedProjects;
let taskInfo;
let taskIndex;
let updatedProjects;
let openedTabElement;

const taskListElement = document.querySelector('#task-list');
taskListElement.addEventListener('click', (e) => {
    if (e.target === taskListElement) return;

    storedProjects = accessLocalStorage('getItem', 'projects');
    taskItemElement = defineTaskItemElement(e);
    taskInfoElement = taskItemElement.querySelector('.task-info-container');
    const taskCheckboxElement = taskInfoElement.previousElementSibling;
    const deleteTaskElement = taskInfoElement.nextElementSibling;
    openedTabElement = document.querySelector('[data-opened-tab]');
    const chosenProjectName = getProjectName(openedTabElement);
    taskIndex = getTaskIndex(storedProjects, taskItemElement, chosenProjectName);
    taskInfo = storedProjects[chosenProjectName][taskIndex];
    taskInstance = Task(taskInfo);

    if (e.target === deleteTaskElement && !shouldDeleteTask()) return;

    if (e.target === taskCheckboxElement || e.target === deleteTaskElement) {
        updatedProjects = taskInstance.
            updateTasks(storedProjects, 'remove', taskIndex);
        accessLocalStorage('setItem', updatedProjects);
        taskItemElement.remove();
    } else {
        taskModalElement.showModal();
        taskItemElement.setAttribute('data-editing-task', '');
        populateFormControl(taskFormControl, taskInfo);
    }
});

let editedTaskElement;

const taskModalCloseButton = document.querySelector('#task-modal-close-button');
taskModalCloseButton.addEventListener('click', () => {
    // this allows the task modal from closing
    taskFormControl.name.removeAttribute('required');

    editedTaskElement = document.querySelector('[data-editing-task]');

    if (editedTaskElement) {
        editedTaskElement.removeAttribute('data-editing-task');
    }
});

let displayedTaskDueDate;

const taskModalConfirmButton = document.querySelector('#task-modal-confirm-button');
taskModalConfirmButton.addEventListener('click', () => {
    taskInfo = getTaskInfo(taskFormControl);
    const isTaskNameEmpty = isValueEmpty(taskInfo.name);

    if (isTaskNameEmpty) return;

    storedProjects = accessLocalStorage('getItem', 'projects');
    const isTaskDuplicate = checkTaskDuplicate(storedProjects, taskInfo);
    editedTaskElement = document.querySelector('[data-editing-task]')

    if (!editedTaskElement && isTaskDuplicate) {
        window.alert('This task already exists in this project');
        return;
    }

    taskInstance = Task(taskInfo);

    if (editedTaskElement) {
        updatedProjects = taskInstance.
            updateTasks(storedProjects, 'edit', taskIndex);
    } else {
        updatedProjects = taskInstance.updateTasks(storedProjects, 'add');
    }

    accessLocalStorage('setItem', updatedProjects);

    openedTabElement = document.querySelector('[data-opened-tab]');
    const shouldDisplayNewTask =
        shouldDisplayTask(taskInfo, openedTabElement);

    if (!shouldDisplayNewTask) return;

    displayedTaskDueDate = taskInstance.getDisplayedTaskDueDate(
        differenceInCalendarDays(taskInfo.dueDate, new Date())
    );

    if (taskInfo.dueDate === null) {
        taskItemElement = createTaskComponents(taskInfo);
    } else {
        taskItemElement = createTaskComponents(taskInfo, displayedTaskDueDate);
    }

    taskInfoElement = taskItemElement.querySelector('.task-info-container');

    appendTaskItemElement(taskItemElement, editedTaskElement);
    createTaskCheckbox(taskItemElement, taskInfoElement);
    createDeleteTaskElement(taskItemElement);
});

const projectNavBars = document.querySelectorAll('.project-navbar');
projectNavBars.forEach(projectNavBar => {
    projectNavBar.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-project-icon')) {
            if (window.confirm('Are you sure you want to delete this project?')) {
                const storedProjects = accessLocalStorage('getItem', 'projects');
                const projectInstance = Project(storedProjects)
                updatedProjects = projectInstance.updateProjects('delete', e);
                accessLocalStorage('setItem', updatedProjects);
                e.target.parentElement.remove();
            }

            return;
        }

        if (e.target.classList.contains('project-navbar') ||
            e.target.hasAttribute('data-opened-tab')) return;

        const projectNameForm = document
            .querySelector('#main-content-project-name-form');

        if (!projectNameForm.classList.contains('hidden')) {
            const mainContentHeadingElement = document
                .querySelector('#main-content-heading');
            mainContentHeadingElement.classList.remove('hidden');
            updateMainContentHeading(e);
            projectNameForm.classList.add('hidden');
        }

        highlightChosenTab(e);
        updateMainContentHeading(e);
        taskListElement.replaceChildren();

        storedProjects = accessLocalStorage('getItem', 'projects');
        let chosenProject = filterByTaskProperty(storedProjects, 'project', e);

        if (chosenProject === null || chosenProject.length === 0) return;

        const isProjectInbox = chosenProject[0].project === 'inbox';
        const inboxTabElement = document.querySelector('#inbox-tab');

        if (isProjectInbox && e.target !== inboxTabElement) {
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
                taskItemElement = createTaskComponents(chosenProject[i]);
            } else {
                displayedTaskDueDate = taskInstance.getDisplayedTaskDueDate(
                    differenceInCalendarDays(chosenProject[i].dueDate, new Date())
                );

                taskItemElement = createTaskComponents(
                    chosenProject[i], displayedTaskDueDate
                );
            }

            taskInfoElement = taskItemElement.querySelector('.task-info-container');

            appendTaskItemElement(taskItemElement);
            createTaskCheckbox(taskItemElement, taskInfoElement);
            createDeleteTaskElement(taskItemElement);
        }
    });
});