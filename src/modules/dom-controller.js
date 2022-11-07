export { displayTask, resetTaskModal };
import { getDayOfTheWeek, formatDate } from './helper';

function displayTask(task, isNotesEmpty, differenceInDays, differenceInYears) {
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
        taskDueDateElem.classList.add('task-due-date');
        taskInfoContainerElem.appendChild(taskDueDateElem);

        let taskDueDate;

        if (differenceInDays >= 0) {
            switch (true) {
                case differenceInDays === 0:
                    taskDueDate = 'Today';
                    break;
                case differenceInDays === 1:
                    taskDueDate = 'Tomorrow';
                    break;
                case differenceInDays <= 7:
                    taskDueDate = getDayOfTheWeek(task.dueDate.valueAsDate);
                    break;
                default:
                    taskDueDate = formatDate(task.dueDate.valueAsDate,
                        differenceInYears);
            }

            taskDueDateElem.textContent = `Due ${taskDueDate}`;
        } else {
            if (differenceInDays === -1) {
                taskDueDate = 'Yesterday';
            } else {
                taskDueDate = formatDate(task.dueDate.valueAsDate,
                    differenceInYears);
            }

            taskDueDateElem.textContent = `Overdue ${taskDueDate}`;
        }
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