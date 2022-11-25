import '../stylesheets/index.css';
import '../stylesheets/main-content.css';
import '../stylesheets/sidebar.css';
import '../stylesheets/modal.css';
import '../stylesheets/task-modal.css';
import '../stylesheets/project-modal.css';

import {
    defaultProjects,
    Task,
} from './task';
import {
    createTaskComponents,
    createTaskCheckbox,
    createDeleteTaskElem,
    highlightChosenTab,
    updateMainContentHeading,
    appendTaskItemElem
} from './dom-controller';
import { accessLocalStorage } from './local-storage';
import { differenceInCalendarDays } from 'date-fns';

highlightChosenTab();
updateMainContentHeading();

const storedProjects = accessLocalStorage('getItem', 'projects');
const userProjects = storedProjects ?? defaultProjects;

accessLocalStorage('setItem', userProjects);

const inboxTasks = userProjects['inbox'];

for (let i = 0; i < inboxTasks.length; i++) {
    const taskInstance = Task(inboxTasks[i]);
    let taskItemElem;

    if (inboxTasks[i].dueDate === null) {
        taskItemElem = createTaskComponents(inboxTasks[i], !inboxTasks[i].notes,)
    } else {
        const taskDueDateString = taskInstance.getTaskDueDateString(
            differenceInCalendarDays(inboxTasks[i].dueDate, new Date())
        );

        taskItemElem = createTaskComponents(
            inboxTasks[i], !inboxTasks[i].notes, taskDueDateString
        );
    }

    const taskInfoElem = taskItemElem.querySelector('.task-info-container');

    appendTaskItemElem(taskItemElem);
    createTaskCheckbox(taskItemElem, taskInfoElem);
    createDeleteTaskElem(taskItemElem);
}