export { displayTask, resetTaskModal };

function displayTask(task, isNotesEmpty, taskDueDate) {
    const taskListElem = document.querySelector('#task-list');

    const taskElem = document.createElement('li');
    taskElem.classList.add('task');
    taskListElem.appendChild(taskElem);

    const taskInfoContainerElem = document.createElement('section');
    taskInfoContainerElem.classList.add('task-info-container');
    taskElem.appendChild(taskInfoContainerElem); 0

    const taskNameElem = document.createElement('h2');
    taskNameElem.textContent = `${task.name.value}`;
    taskNameElem.classList.add('task-name');
    taskInfoContainerElem.appendChild(taskNameElem);

    if (isNotesEmpty) {
        const taskNotesElem = document.createElement('p');
        taskNotesElem.textContent = `${task.notes.value}`;
        taskNotesElem.classList.add('task-notes');
        taskInfoContainerElem.appendChild(taskNotesElem);
    }

    if (task.dueDate.valueAsDate !== '') {
        const taskDueDateElem = document.createElement('p');
        taskDueDateElem.textContent = `${taskDueDate}`;
        taskDueDateElem.classList.add('task-due-date');
        taskInfoContainerElem.appendChild(taskDueDateElem);
    }

    switch (task.priority.value) {
        case 'Priority 4':
            taskElem.classList.add('priority4-task');
            break;
        case 'Priority 3':
            taskElem.classList.add('priority3-task');
            break;
        case 'Priority 2':
            taskElem.classList.add('priority2-task');
            break;
        case 'Priority 1':
            taskElem.classList.add('priority1-task');
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