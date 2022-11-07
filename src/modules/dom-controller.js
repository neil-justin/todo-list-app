export { displayNewTask };
import { notesNotEmpty, getDifferenceInYear, getDayOfTheWeek, formatDate } from './helper';
import { differenceInDays } from 'date-fns';

function displayNewTask(task) {
    const taskListElem = document.querySelector('#task-list');

    const taskElem = document.createElement('li');
    taskElem.classList.add('task');
    taskListElem.appendChild(taskElem);

    const taskInfoContainerElem = document.createElement('section');
    taskInfoContainerElem.classList.add('task-info-container');
    taskElem.appendChild(taskInfoContainerElem);

    const taskNameElem = document.createElement('h2');
    taskNameElem.textContent = `${task.name.value}`;
    taskNameElem.classList.add('task-name');
    taskInfoContainerElem.appendChild(taskNameElem);

    if (notesNotEmpty(task.notes)) {
        const taskNotesElem = document.createElement('p');
        taskNotesElem.textContent = `${task.notes.value}`;
        taskNotesElem.classList.add('task-notes');
        taskInfoContainerElem.appendChild(taskNotesElem);
    }

    if (task.dueDate.valueAsDate !== '') {
        const taskDueDateElem = document.createElement('p');
        taskDueDateElem.classList.add('task-due-date');
        taskInfoContainerElem.appendChild(taskDueDateElem);

        const diffInDays = differenceInDays(
            task.dueDate.valueAsDate, new Date());

        /* Since date-fns' differenceInYears module doesn't work as expected */
        const diffInYears = getDifferenceInYear(
            task.dueDate.valueAsDate, new Date()
        );

        let taskDueDate;

        if (diffInDays >= 0) {
            switch (true) {
                case diffInDays === 0:
                    taskDueDate = 'Today';
                    break;
                case diffInDays === 1:
                    taskDueDate = 'Tommorow';
                    break;
                case diffInDays <= 7:
                    taskDueDate = getDayOfTheWeek(task.dueDate.valueAsDate);
                    break;
                default:
                    taskDueDate = formatDate(task.dueDate.valueAsDate,
                        diffInYears);
            }

            taskDueDateElem.textContent = `Due ${taskDueDate}`;
        } else {
            if (diffInDays === -1) {
                taskDueDate = 'Yesterday';
            } else {
                taskDueDate = formatDate(task.dueDate.valueAsDate, diffInYears);
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