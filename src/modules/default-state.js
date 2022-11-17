import { defaultTasks, tasks } from './task';
import {
    displayTask,
    createTaskCheckbox,
    createDeleteTaskElem
} from './dom-controller';
import { taskListElem } from './task-listeners';
import { filterByTaskProperty } from './helper';

const inboxTabElem = document.querySelector('#inbox-nav-link');
inboxTabElem.setAttribute('current-tab', '');

const mainContentHeadingElem = document.querySelector('#main-content-heading');
mainContentHeadingElem.textContent = 'Inbox';

const storedTasks = JSON.parse(window.localStorage.getItem('tasks'));
const userTasks = storedTasks ?? defaultTasks;

const inboxTasks = filterByTaskProperty(userTasks, 'project');

for (let i = 0; i < inboxTasks.length; i++) {
    displayTask(inboxTasks[i], !inboxTasks[i].notes, inboxTasks[i].dueDate);
    tasks.push(inboxTasks[i]);

    const taskItemElem = taskListElem.lastElementChild;
    const taskInfoElem = taskItemElem.querySelector('.task-info-container');

    createTaskCheckbox(taskItemElem, taskInfoElem);
    createDeleteTaskElem(taskItemElem);
    taskItemElem.setAttribute('data-task-index', `${tasks.length - 1}`);
}
