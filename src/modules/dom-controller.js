export {
    createTaskComponents,
    resetTaskModal,
    createTaskCheckbox,
    createDeleteTaskElement,
    defineTaskItemElement,
    displayProjectName,
    populateFormControl,
    highlightChosenTab,
    updateMainContentHeading,
    appendTaskItemElement,
};

import { capitalizeString, PROJECT_INBOX } from './helper';
/* I can't find in their documentation how to use the "import" keyword.
to import the library, so I just imported it the old-fashioned way. */
const he = require('he');

const taskListElement = document.querySelector('#task-list');

function createTaskComponents(task, isNotesEmpty, taskDueDate = null) {
    const taskItemElement = document.createElement('li');
    taskItemElement.classList.add('task', 'pointer-cursor');

    const taskInfoContainer = document.createElement('section');
    taskInfoContainer.classList.add('task-info-container');
    taskItemElement.appendChild(taskInfoContainer);

    const taskNameElement = document.createElement('h3');
    taskNameElement.textContent = `${task.name}`;
    taskNameElement.classList.add('task-name', 'medium-text', 'text-ellipsis');
    taskInfoContainer.appendChild(taskNameElement);

    if (!isNotesEmpty) {
        const taskNotesElement = document.createElement('p');
        taskNotesElement.textContent = `${task.notes}`;
        taskNotesElement.classList.add('task-notes', 'small-text', 'text-ellipsis');
        taskInfoContainer.appendChild(taskNotesElement);
    }

    const taskAdditionalInfoElement = document.createElement('p');
    taskAdditionalInfoElement.classList.add('task-additional-info', 'text-ellipsis', 'small-text');
    taskInfoContainer.appendChild(taskAdditionalInfoElement);

    if (taskDueDate !== null) {
        const taskDueDateText = document.createTextNode(taskDueDate);
        taskAdditionalInfoElement.appendChild(taskDueDateText);

        const bulletPointSymbol = document.
            createTextNode(` ${he.decode('&bull;')} `);
        taskAdditionalInfoElement.appendChild(bulletPointSymbol);
    }

    const taskPriorityText = document.createTextNode(task.priority);
    taskAdditionalInfoElement.appendChild(taskPriorityText);

    return taskItemElement;
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

function createTaskCheckbox(taskItemElement, taskInfoElement) {
    const taskCheckboxElement = document.createElement('button');
    taskCheckboxElement.classList.add('task-checkbox');
    taskItemElement.insertBefore(taskCheckboxElement, taskInfoElement);
}

function createDeleteTaskElement(taskItemElement) {
    const deleteTaskElement = document.createElement('span');
    deleteTaskElement.textContent = 'Delete';
    deleteTaskElement.classList.add('delete-task-elem', 'small-text');
    taskItemElement.appendChild(deleteTaskElement);
}

function defineTaskItemElement(event, index = null) {
    if (event.currentTarget === taskListElement) {
        return event.target.closest('.task');
    }

    return document.querySelector(`[data-task-index='${index}']`);
}

function displayProjectName(projectName) {
    const projectListElement = document.querySelector('#project-list');
    const projectItemElement = document.createElement('li');
    projectItemElement.textContent = `${projectName}`;
    projectItemElement.classList
        .add('sidebar-text', 'medium-text', 'pointer-cursor');
    projectListElement.appendChild(projectItemElement);

    const projectSelectElement = document.querySelector('#task-project');
    const projectOptionElement = document.createElement('option');
    projectOptionElement.value = `${projectName}`;
    projectOptionElement.textContent = `${projectName}`;
    projectSelectElement.appendChild(projectOptionElement);
}

function populateFormControl(formControl, data) {
    for (const property in data) {
        if (!data[property]) continue;

        if (property === 'dueDate') {
            const dateString = data.dueDate.toISOString().slice(0, 10);
            formControl.dueDate.value = dateString;
        } else if (property === 'project') {
            const taskProject = capitalizeString(data.project);
            const projectSelectElement = formControl.project;
            const projectOptionValues = [...projectSelectElement.options]
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
        const openedTabElement = document.querySelector('[data-opened-tab]');
        openedTabElement.removeAttribute('data-opened-tab');
    }

    const inboxTabElement = document.querySelector('#inbox-tab');
    const chosenTabElement = event === null ? inboxTabElement : event.target;
    chosenTabElement.setAttribute('data-opened-tab', '');
}

function updateMainContentHeading(event = null) {
    let mainContentHeading;

    if (event === null || PROJECT_INBOX.includes(event.target.textContent)) {
        mainContentHeading = 'Inbox';
    } else {
        mainContentHeading = event.target.textContent;
    }

    const mainContentHeadingElement = document.querySelector('#main-content-heading');
    mainContentHeadingElement.textContent = mainContentHeading;
}

function appendTaskItemElement(newTaskElement, editedTaskElement = null) {
    if (editedTaskElement) {
        editedTaskElement.replaceWith(newTaskElement);
        return;
    }

    taskListElement.appendChild(newTaskElement);
}