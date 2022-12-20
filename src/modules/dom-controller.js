export {
    createTaskComponents,
    resetTaskModal,
    createTaskCheckbox,
    createDeleteTaskElement,
    defineTaskItemElement,
    updateProjectNameDisplay,
    populateFormControl,
    highlightChosenTab,
    updateMainContentHeading,
    appendTaskItemElement,
    createProjectNameForm,
    addDeleteProjectIcon,
};

import { capitalizeString, setAttributes } from './helper';
import DeleteProjectIcon from '../delete-outline.png';
/* I can't find in their documentation how to use the "import" keyword.
to import the library, so I just imported it the old-fashioned way. */
const he = require('he');

const taskListElement = document.querySelector('#task-list');

function createTaskComponents(task, taskDueDate = null) {
    const taskItemElement = document.createElement('li');
    taskItemElement.classList.add('task', 'pointer-cursor');

    const taskInfoContainer = document.createElement('section');
    taskInfoContainer.classList.add('task-info-container');
    taskItemElement.appendChild(taskInfoContainer);

    const taskNameElement = document.createElement('h3');
    taskNameElement.textContent = `${task.name}`;
    taskNameElement.classList.add('task-name', 'medium-text', 'text-ellipsis');
    taskInfoContainer.appendChild(taskNameElement);

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

function updateProjectNameDisplay(projectName, todo, openedTabElement = null) {
    const taskModalProjectSelect = document
        .querySelector('#task-project');
    let taskModalProjectOption;

    if (todo === 'add') {
        const sidebarProjectList = document
            .querySelector('#sidebar-project-list');
        const sidebarProjectItem = document.createElement('li');
        sidebarProjectItem.textContent = `${projectName}`;
        sidebarProjectItem.classList
            .add('sidebar-text', 'medium-text', 'pointer-cursor');
        sidebarProjectList.appendChild(sidebarProjectItem);

        taskModalProjectOption = document.createElement('option');
        taskModalProjectOption.value = `${projectName}`;
        taskModalProjectOption.textContent = `${projectName}`;
        taskModalProjectSelect.appendChild(taskModalProjectOption);
    } else if (todo === 'edit') {
        taskModalProjectOption = taskModalProjectSelect
            .querySelector(`[value="${openedTabElement.textContent}"]`);
        taskModalProjectOption.value = `${projectName}`;
        taskModalProjectOption.textContent = `${projectName}`;
        openedTabElement.textContent = `${projectName}`;
    }
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

function updateMainContentHeading(event = null, projectNameInputValue = null) {
    let mainContentHeadingText;
    const projectInboxList = document.querySelector('#project-inbox');
    const projectList = document.querySelector('#sidebar-project-list');

    if (event === null || event.currentTarget === projectInboxList) {
        mainContentHeadingText = 'Inbox';
    } else if (event.currentTarget === projectList) {
        mainContentHeadingText = event.target.textContent;
    } else {
        mainContentHeadingText = projectNameInputValue;
    }

    const mainContentHeadingElement = document.querySelector('#main-content-heading');
    mainContentHeadingElement.textContent = mainContentHeadingText;
}

function appendTaskItemElement(newTaskElement, editedTaskElement = null) {
    if (editedTaskElement) {
        editedTaskElement.replaceWith(newTaskElement);
        return;
    }

    taskListElement.appendChild(newTaskElement);
}

function createProjectNameForm() {
    const projectNameForm = document.createElement('div');
    projectNameForm.setAttribute('id', 'main-content-project-name-form');
    const mainContentElement = document.querySelector('#main-content');
    const taskListElement = document.querySelector('#task-list');
    mainContentElement.insertBefore(projectNameForm, taskListElement);
    projectNameForm.classList.add('hidden');

    const projectNameInput = document.createElement('input');
    projectNameForm.appendChild(projectNameInput);

    setAttributes(projectNameInput, {
        'type': 'text',
        'id': 'main-content-project-name-input',
        'minlength': '1',
        'maxlength': '60'
    });

    const buttonsContainer = document.createElement('div');
    buttonsContainer.setAttribute('id', 'project-name-buttons-container');
    projectNameForm.appendChild(buttonsContainer);

    const saveProjectButton = document.createElement('button');
    saveProjectButton.textContent = 'Save';
    saveProjectButton.setAttribute('id', 'main-content-save-project-button');
    saveProjectButton.classList.add('modal-button', 'modal-confirm-button');
    buttonsContainer.appendChild(saveProjectButton);

    const cancelProjectButton = document.createElement('button');
    cancelProjectButton.textContent = 'Cancel';
    cancelProjectButton.setAttribute('id', 'main-content-cancel-project-button');
    cancelProjectButton.classList.add('modal-button', 'modal-cancel-button');
    buttonsContainer.appendChild(cancelProjectButton);
}

function addDeleteProjectIcon(sidebarProjectItem) {
    const deleteProjectIcon = new Image();
    deleteProjectIcon.src = DeleteProjectIcon;
    deleteProjectIcon.classList.add('delete-project-icon');
    sidebarProjectItem.appendChild(deleteProjectIcon);
}