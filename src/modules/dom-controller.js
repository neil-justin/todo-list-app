export {
    createTaskComponents,
    resetTaskModal,
    createTaskCheckbox,
    createDeleteTaskElem,
    defineTaskItemElem,
    listProjectName,
    displayProjectName,
    populateFormControl,
    highlightChosenTab,
    updateMainContentHeading,
    appendTaskItemElem,
};

import { capitalizeString } from './helper';

/* I can't find in their documentation how to use the "import" keyword.
to import the library, so I just imported it the old-fashioned way. */
const he = require('he');

const taskListElem = document.querySelector('#task-list');

function createTaskComponents(task, isNotesEmpty, taskDueDate = null) {
    const taskItemElem = document.createElement('li');
    taskItemElem.classList.add('task', 'pointer-cursor');

    const taskInfoContainerElem = document.createElement('section');
    taskInfoContainerElem.classList.add('task-info-container');
    taskItemElem.appendChild(taskInfoContainerElem);

    const taskNameElem = document.createElement('h3');
    taskNameElem.textContent = `${task.name}`;
    taskNameElem.classList.add('task-name', 'medium-text', 'text-ellipsis');
    taskInfoContainerElem.appendChild(taskNameElem);

    if (!isNotesEmpty) {
        const taskNotesElem = document.createElement('p');
        taskNotesElem.textContent = `${task.notes}`;
        taskNotesElem.classList.add('task-notes', 'small-text', 'text-ellipsis');
        taskInfoContainerElem.appendChild(taskNotesElem);
    }

    const taskAdditionalInfoElem = document.createElement('p');
    taskAdditionalInfoElem.classList.add('task-additional-info', 'text-ellipsis', 'small-text');
    taskInfoContainerElem.appendChild(taskAdditionalInfoElem);

    if (taskDueDate !== null) {
        const taskDueDateText = document.createTextNode(taskDueDate);
        taskAdditionalInfoElem.appendChild(taskDueDateText);

        const bulletPointText = document.
            createTextNode(` ${he.decode('&bull;')} `);
        taskAdditionalInfoElem.appendChild(bulletPointText);
    }

    const taskPriorityText = document.createTextNode(task.priority);
    taskAdditionalInfoElem.appendChild(taskPriorityText);

    return taskItemElem;
}

function resetTaskModal(taskFormControl) {
    for (const key in taskFormControl) {
        if (key === 'priority') {
            taskFormControl[key].value = 'Priority 4';
        } else if (key === 'project') {
            taskFormControl[key].value = 'Inbox';
        } else {
            taskFormControl[key].value = '';
        }
    }
}

function createTaskCheckbox(taskItemElem, taskInfoElem) {
    const taskCheckboxElem = document.createElement('button');
    taskCheckboxElem.classList.add('task-checkbox');
    taskItemElem.insertBefore(taskCheckboxElem, taskInfoElem);
}

function createDeleteTaskElem(taskItemElem) {
    const deleteTaskElem = document.createElement('span');
    deleteTaskElem.textContent = 'Delete';
    deleteTaskElem.classList.add('delete-task-elem', 'small-text');
    taskItemElem.appendChild(deleteTaskElem);
}

function defineTaskItemElem(event, index = null) {
    if (event.currentTarget === taskListElem) {
        return event.target.closest('.task');
    }

    return document.querySelector(`[data-task-index='${index}']`);
}

function listProjectName(projectNameInputElem) {
    const taskModalProjectSelectElem = document.querySelector('#task-project');
    const taskModalProjectOptionElem = document.createElement('option');
    taskModalProjectOptionElem.value = `${projectNameInputElem.value}`;
    taskModalProjectOptionElem.textContent = `${projectNameInputElem.value}`;

    taskModalProjectSelectElem.appendChild(taskModalProjectOptionElem);
}

function displayProjectName(projectNameInputElem) {
    const projectListElem = document.querySelector('#project-list');
    const projectItemElem = document.createElement('li');
    projectItemElem.textContent = `${projectNameInputElem.value}`;
    projectItemElem.classList
        .add('sidebar-text', 'medium-text', 'pointer-cursor');

    projectListElem.appendChild(projectItemElem);
}

function populateFormControl(formControl, data) {
    for (const property in data) {
        if (!data[property]) continue;

        if (property === 'dueDate') {
            const dateString = data.dueDate.toISOString().slice(0, 10);
            formControl.dueDate.value = dateString;
        } else if (property === 'project') {
            const taskProject = capitalizeString(data.project);
            const projectSelectElem = formControl.project;
            const projectOptionValues = [...projectSelectElem.options]
                .map(option => option.value);
            const projectIndex = projectOptionValues.indexOf(taskProject);
            formControl.dueDate.selectedIndex = projectIndex;
        } else {
            formControl[property].value = data[property];
        }
    }
}


function highlightChosenTab(event = null) {
    if (event !== null) {
        const openedTabElem = document.querySelector('[data-opened-tab]');
        openedTabElem.removeAttribute('data-opened-tab');
    }

    const inboxTabElem = document.querySelector('#inbox-tab');
    const chosenTabElem = event === null ? inboxTabElem : event.target;
    chosenTabElem.setAttribute('data-opened-tab', '');
}

function updateMainContentHeading(event = null) {
    const mainContentHeading = event === null ? 'Inbox'
        : event.target.textContent;
    const mainContentHeadingElem = document.querySelector('#main-content-heading');
    mainContentHeadingElem.textContent = mainContentHeading;
}

function appendTaskItemElem(newTaskElem, editedTaskElem = null) {
    if (editedTaskElem) {
        return editedTaskElem.replaceWith(newTaskElem);
    }

    taskListElem.appendChild(newTaskElem);
}