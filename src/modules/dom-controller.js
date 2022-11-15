export {
    displayTask,
    resetTaskModal,
    createTaskCheckbox,
    createDeleteTaskElem,
    defineTaskItemElem,
    listProjectName,
    displayProjectName,
};

/* I can't find in their documentation how to use the "import" keyword.
to import the library, so I just imported it the old-fashioned way. */
const he = require('he');

function displayTask(task, isNotesEmpty, taskDueDate = null) {
    const taskListElem = document.querySelector('#task-list');

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

    /* this element wraps the taskDueDate and taskPriority elements */
    const taskAdditionalInfoElem = document.createElement('p');
    taskAdditionalInfoElem.classList.add('task-additional-info', 'text-ellipsis');
    taskInfoContainerElem.appendChild(taskAdditionalInfoElem);

    if (taskDueDate !== null) {
        const taskDueDateElem = document.createElement('span');
        taskDueDateElem.textContent = `${taskDueDate}`;
        taskAdditionalInfoElem.appendChild(taskDueDateElem);

        const dividerElem = document.createElement('span');
        /* Since textContent property can't decode HTML entity, I have to use
        the he.decode method to do so. Element.innerhtml can decode HTML entity,
        however, Element.innerhtml is unsafe and may cause vulnerabilities */
        dividerElem.textContent = ` ${he.decode('&bull;')} `;
        taskAdditionalInfoElem.appendChild(dividerElem);
    }

    const taskPriorityElem = document.createElement('span');
    taskPriorityElem.textContent = `${task.priority}`;
    taskPriorityElem.classList.add('small-text');
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

function defineTaskItemElem(event) {
    if (event.target.classList.contains('task')) {
        return event.target;
    } else {
        return event.target.closest('.task');
    }
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