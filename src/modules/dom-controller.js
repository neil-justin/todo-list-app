export {
    displayTask,
    resetTaskModal,
    createTaskCheckbox,
    createDeleteTaskElem,
    removeTaskDisplay,
    defineTaskElem,
    insertEditingTaskAttr,
    insertTaskIndexAttr,
    listProjectName,
    displayProjectName,
};

/* I can't find in their documentation how to use the "import" keyword.
to import the library, so I just imported it the old-fashioned way. */
const he = require('he');
import { tasks } from './task.js';

function displayTask(task, isNotesEmpty, taskDueDate = null) {
    const taskListElem = document.querySelector('#task-list');

    const taskElem = document.createElement('li');
    taskElem.classList.add('task', 'pointer-cursor');
    taskListElem.appendChild(taskElem);

    const taskInfoContainerElem = document.createElement('section');
    taskInfoContainerElem.classList.add('task-info-container');
    taskElem.appendChild(taskInfoContainerElem);

    const taskNameElem = document.createElement('h3');
    taskNameElem.textContent = `${task.name}`;
    taskNameElem.classList.add('task-name', 'medium-text-size', 'text-ellipsis');
    taskInfoContainerElem.appendChild(taskNameElem);

    if (isNotesEmpty) {
        const taskNotesElem = document.createElement('p');
        taskNotesElem.textContent = `${task.notes}`;
        taskNotesElem.classList.add('task-notes', 'small-text-size', 'text-ellipsis');
        taskInfoContainerElem.appendChild(taskNotesElem);
    }

    /* this element wraps the taskDueDate and taskPriority elements */
    const taskAdditionalInfoElem = document.createElement('p');
    taskAdditionalInfoElem.classList.add('task-additional-info', 'text-ellipsis');
    taskInfoContainerElem.appendChild(taskAdditionalInfoElem);

    if (taskDueDate !== null) {
        const taskDueDateElem = document.createElement('span');
        taskDueDateElem.textContent = `${taskDueDate}`;
        taskAdditionalInfoElem.appendChild(taskDueDateElem);

        const dividerElem = document.createElement('span');
        /* The he.decode method decode the passed argument, in this case the html
        entity 'bullet point', then display it as a symbol */
        /* Element.innerhtml may also work in this case, however the drawbacks
        is it may cause vulnerabilities if ever a malicious scripts were
        injected to it */
        dividerElem.textContent = ` ${he.decode('&bull;')} `;
        taskAdditionalInfoElem.appendChild(dividerElem);
    }

    const taskPriorityElem = document.createElement('span');
    taskPriorityElem.textContent = `${task.priority}`;
    taskPriorityElem.classList.add('small-text-size');
    taskAdditionalInfoElem.appendChild(taskPriorityElem);
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

function createTaskCheckbox(taskElem, taskInfoElem) {
    const taskCheckboxElem = document.createElement('button');
    taskCheckboxElem.classList.add('task-checkbox');
    taskElem.insertBefore(taskCheckboxElem, taskInfoElem);
}

function createDeleteTaskElem(taskElem) {
    const deleteTaskElem = document.createElement('span');
    deleteTaskElem.textContent = 'Delete';
    deleteTaskElem.classList.add('delete-task-elem', 'small-text-size');
    taskElem.appendChild(deleteTaskElem);
}

function removeTaskDisplay(taskElem) {
    taskElem.remove();
}

function defineTaskElem(event) {
    if (event.target.classList.contains('task')) {
        return event.target;
    } else {
        return event.target.closest('.task');
    }
}

function insertEditingTaskAttr(taskElem) {
    taskElem.setAttribute('data-editing-task', '');
}

function insertTaskIndexAttr(taskElem) {
    taskElem.setAttribute('data-task-index', `${tasks.length - 1}`);
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
        .add('sidebar-text', 'medium-text-size', 'pointer-cursor');

    projectListElem.appendChild(projectItemElem);
}