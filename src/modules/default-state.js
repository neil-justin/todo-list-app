import '../stylesheets/index.css';
import '../stylesheets/main-content.css';
import '../stylesheets/sidebar.css';
import '../stylesheets/modal.css';
import '../stylesheets/task-modal.css';
import '../stylesheets/project-modal.css';

import { defaultTasks, Task } from './task';
import {
    displayTask,
    createTaskCheckbox,
    createDeleteTaskElem,
    highlightChosenTab,
    updateMainContentHeading
} from './dom-controller';
import { filterByTaskProperty } from './helper';
import { differenceInCalendarDays } from 'date-fns';
import { accessLocalStorage } from './local-storage';

highlightChosenTab();
updateMainContentHeading();

const storedTasks = accessLocalStorage('getItem', 'tasks');
const userTasks = storedTasks ?? defaultTasks;

for (let i = 0; i < userTasks.length; i++) {
    const taskInstance = Task(userTasks[i]);
    taskInstance.updateTasks(userTasks[i], 'add');
}

accessLocalStorage('setItem', userTasks);
const inboxTasks = filterByTaskProperty(userTasks, 'project');

for (let i = 0; i < inboxTasks.length; i++) {
    const taskInstance = Task(inboxTasks[i]);

    if (inboxTasks[i].dueDate !== null) {
        displayTask(
            inboxTasks[i], !inboxTasks[i].notes,
            taskInstance.getTaskDueDate(
                differenceInCalendarDays(inboxTasks[i].dueDate, new Date())
            ),
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