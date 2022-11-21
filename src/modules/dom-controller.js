import { add } from 'date-fns';

export {
    displayTask,
    resetTaskModal,
    createTaskCheckbox,
    createDeleteTaskElem,
    defineTaskItemElem,
    listProjectName,
    displayProjectName,
    populateFormControl,
    updateTaskDisplay,
    highlightChosenTab,
};

/* I can't find in their documentation how to use the "import" keyword.
to import the library, so I just imported it the old-fashioned way. */
const he = require('he');
const taskListElem = document.querySelector('#task-list');

function displayTask(task, isNotesEmpty, taskDueDate = null) {
    const taskItemElem = document.createElement('li');
    taskItemElem.classList.add('task', 'pointer-cursor');
    taskListElem.appendChild(taskItemElem);

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
        return event.target.classList.contains('task') ?
            event.target :
            event.target.closest('.task');
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

function populateFormControl(formControl, data, taskInstance) {
    for (const property in data) {
        if (!data[property]) continue;

        if (property === 'dueDate') {
            switch (data.dueDate) {
                case 'Today':
                    formControl.dueDate.valueAsDate = new Date;
                    break;
                case 'Tomorrow':
                    formControl.dueDate.valueAsDate =
                        add(new Date(), { days: 1 });
                    break;
                case 'Yesterday':
                    formControl.dueDate.valueAsDate =
                        taskInstance.dateFormatter.getYesterdayDate();
                    break;
                default:
                    formControl.dueDate.valueAsDate = data.dueDate.valueAsDate;
            }
        } else {
            formControl[property].value = data[property];
        }
    }
}

function updateTaskDisplay(taskDetails, taskItemElem, isNotesEmpty, taskDueDate = null) {
    const taskInfoElem = taskItemElem.querySelector('.task-info-container');

    const taskNameElem = taskInfoElem.querySelector('.task-name');
    taskNameElem.textContent = `${taskDetails.name}`;

    const taskNotesElem = taskInfoElem.querySelector('task-notes');

    if (!isNotesEmpty) {
        taskNotesElem.textContent = `${taskDetails.notes}`;
    }

    if (taskNotesElem) {
        taskNotesElem.remove();
    }

    const taskAdditionalInfoElem = taskInfoElem.
        querySelector('.task-additional-info');
    taskAdditionalInfoElem.textContent = '';


    if (taskDueDate !== null) {
        const taskDueDateText = document.createTextNode(taskDueDate);
        taskAdditionalInfoElem.appendChild(taskDueDateText);

        const bulletPointText = document.
            createTextNode(` ${he.decode('&bull;')} `);
        taskAdditionalInfoElem.appendChild(bulletPointText);
    }

    const taskPriorityText = document.createTextNode(taskDetails.priority);
    taskAdditionalInfoElem.appendChild(taskPriorityText);
}

function highlightChosenTab(event) {
    const previousItemElem = document.querySelector('[current-tab]');
    previousItemElem.removeAttribute('current-tab');

    const chosenItemElem = event.target;
    chosenItemElem.setAttribute('current-tab', '');
}