import { defaultTasks, Task } from './task';
import {
    displayTask,
    createTaskCheckbox,
    createDeleteTaskElem
} from './dom-controller';
import { filterByTaskProperty } from './helper';
import { differenceInCalendarDays, format } from 'date-fns';

const inboxTabElem = document.querySelector('#inbox-nav-link');
inboxTabElem.setAttribute('current-tab', '');

const mainContentHeadingElem = document.querySelector('#main-content-heading');
mainContentHeadingElem.textContent = 'Inbox';

const storedTasks = JSON.parse(window.localStorage.getItem('tasks'));
const userTasks = storedTasks ?? defaultTasks;

window.localStorage.setItem('tasks', JSON.stringify(userTasks));

const inboxTasks = filterByTaskProperty(userTasks, 'project');

for (let i = 0; i < inboxTasks.length; i++) {
    const parsedTaskDueDate = new Date(`${inboxTasks[i].dueDate}`);

    /* Parsing the task's due date before passing the task object as the
    parameter of the 'Task' object in order to avoid receiving date error in
    the console */
    inboxTasks[i].dueDate = parsedTaskDueDate;
    const taskInstance = Task(inboxTasks[i]);

    displayTask(
        inboxTasks[i], !inboxTasks[i].notes,
        taskInstance.getTaskDueDate(differenceInCalendarDays(
            parsedTaskDueDate, new Date()
        )),
    );

    const taskListElem = document.querySelector('#task-list');
    const taskItemElem = taskListElem.lastElementChild;
    const taskInfoElem = taskItemElem.querySelector('.task-info-container');

    createTaskCheckbox(taskItemElem, taskInfoElem);
    createDeleteTaskElem(taskItemElem);
    taskItemElem.setAttribute('data-task-index', `${i}`);
}