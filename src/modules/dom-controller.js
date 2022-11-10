export {
    displayTask,
    resetTaskModal,
    addTaskCheckbox,
    addDeleteTaskElem,
    removeTaskDisplay,
    defineElem,
};
/* I can't find in their documentation how to use the "import" keyword.
to import the library, so I just imported it the old-fashioned way. */
const he = require('he');

function displayTask(task, isNotesEmpty, taskDueDate = null) {
    const taskListElem = document.querySelector('#task-list');

    const taskElem = document.createElement('li');
    taskElem.classList.add('task', 'cursor-pointer');
    taskListElem.appendChild(taskElem);

    const taskInfoContainerElem = document.createElement('section');
    taskInfoContainerElem.classList.add('task-info-container');
    taskElem.appendChild(taskInfoContainerElem);

    const taskNameElem = document.createElement('h3');
    taskNameElem.textContent = `${task.name.value}`;
    taskNameElem.classList.add('task-name');
    taskInfoContainerElem.appendChild(taskNameElem);

    if (isNotesEmpty) {
        const taskNotesElem = document.createElement('p');
        taskNotesElem.textContent = `${task.notes.value}`;
        taskNotesElem.classList.add('task-notes', 'task-elem-small-text');
        taskInfoContainerElem.appendChild(taskNotesElem);
    }

    /* this element wraps the taskDueDate and taskPriority elements */
    const taskAdditionalInfoElem = document.createElement('p');
    taskAdditionalInfoElem.classList.add('task-additional-info', 'task-elem-small-text');
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
    taskPriorityElem.textContent = `${task.priority.value}`;
    taskAdditionalInfoElem.appendChild(taskPriorityElem);
}

function resetTaskModal(taskFormControl) {
    for (const key in taskFormControl) {
        if (key === 'priority') {
            taskFormControl[key].value = 'Priority 4';
        } else if (key === 'project') {
            taskFormControl[key].value = 'None';
        } else {
            taskFormControl[key].value = '';
        }
    }
}

function addTaskCheckbox(taskElem, taskInfoElem) {
    const taskCheckboxElem = document.createElement('button');
    taskCheckboxElem.classList.add('task-checkbox');
    taskElem.insertBefore(taskCheckboxElem, taskInfoElem);
}

function addDeleteTaskElem(taskElem) {
    const deleteTaskElem = document.createElement('span');
    deleteTaskElem.textContent = 'Delete';
    deleteTaskElem.classList.add('delete-task-elem', 'task-elem-small-text');
    taskElem.appendChild(deleteTaskElem);

    deleteTaskElem.addEventListener('mouseover', () => {
        taskElem.classList.add('delete-task-elem-hovered-effect');
    });

    deleteTaskElem.addEventListener('mouseleave', () => {
        taskElem.classList.remove('delete-task-elem-hovered-effect');
    });
}

function removeTaskDisplay(taskElem) {
    taskElem.remove();
}

function defineElem(event, elem) {
    switch (elem) {
        case 'taskElem':
            if (event.target.classList.contains('task')) {
                return event.target;
            } else {
                return event.target.closest('.task');
            }
        case 'taskInfoElem':
            if (event.target.classList.contains('task')) {
                return event.target.querySelector('.task-info-container');
            } else if (event.target.classList.contains('task-info-container')) {
                return event.target;
            } else {
                return event.target.closest('.task');
            }
    }
}