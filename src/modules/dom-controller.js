export { displayTask, resetTaskModal };

function displayTask(task, isNotesEmpty, taskPriorityNumber, taskDueDate = null) {
    const taskListElem = document.querySelector('#task-list');

    const taskElem = document.createElement('li');
    taskElem.classList.add('task', `${taskPriorityNumber}`);
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
        taskNotesElem.classList.add('task-notes');
        taskInfoContainerElem.appendChild(taskNotesElem);
    }

    if (taskDueDate !== null) {
        const taskDueDateElem = document.createElement('p');
        taskDueDateElem.textContent = `${taskDueDate}`;
        taskDueDateElem.classList.add('task-due-date');
        taskInfoContainerElem.appendChild(taskDueDateElem);
    }
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