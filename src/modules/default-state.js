import { defaultTasks, Task } from './task';
import {
    displayTask,
    createTaskCheckbox,
    createDeleteTaskElem
} from './dom-controller';
import { filterByTaskProperty } from './helper';
import { differenceInCalendarDays } from 'date-fns';
import { accessLocalStorage } from './local-storage';

const inboxTabElem = document.querySelector('#inbox-nav-link');
inboxTabElem.setAttribute('current-tab', '');
const mainContentHeadingElem = document.querySelector('#main-content-heading');
mainContentHeadingElem.textContent = 'Inbox';
const storedTasks = accessLocalStorage('getItem', 'tasks');
const userTasks = storedTasks ?? defaultTasks;

accessLocalStorage('setItem', userTasks);
const inboxTasks = filterByTaskProperty(userTasks, 'project');

for (let i = 0; i < inboxTasks.length; i++) {
    let parsedTaskDueDate = inboxTasks[i].dueDate;
    const taskInstance = Task(inboxTasks[i]);

    /* Parsing the task's due date before passing the task object as the
    parameter of the 'Task' object in order to avoid receiving date error in
    the console */
    if (inboxTasks[i].dueDate !== null) {
        parsedTaskDueDate = new Date(`${inboxTasks[i].dueDate}`);
        inboxTasks[i].dueDate = parsedTaskDueDate;

        displayTask(
            inboxTasks[i], !inboxTasks[i].notes,
            taskInstance.getTaskDueDate(differenceInCalendarDays(
                parsedTaskDueDate, new Date()
            )),
        );
    } else {
        displayTask(inboxTasks[i], !inboxTasks[i].notes,)
    }

    const taskListElem = document.querySelector('#task-list');
    const taskItemElem = taskListElem.lastElementChild;
    const taskInfoElem = taskItemElem.querySelector('.task-info-container');

    createTaskCheckbox(taskItemElem, taskInfoElem);
    createDeleteTaskElem(taskItemElem);
    taskItemElem.setAttribute('data-task-index', `${i}`);
}