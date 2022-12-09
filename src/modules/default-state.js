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

const inbox = userProjects.inbox;

for (let i = 0; i < inbox.length; i++) {
    const taskInstance = Task(inbox[i]);
    let taskItemElem;

    if (inbox[i].dueDate === null) {
        taskItemElem = createTaskComponents(inbox[i], !inbox[i].notes,)
    } else {
        const displayedTaskDueDate = taskInstance.getTaskDueDateString(
            differenceInCalendarDays(inbox[i].dueDate, new Date())
        );

        taskItemElem = createTaskComponents(
            inbox[i], !inbox[i].notes, displayedTaskDueDate
        );
    }

    const taskInfoElem = taskItemElem.querySelector('.task-info-container');

    appendTaskItemElem(taskItemElem);
    createTaskCheckbox(taskItemElem, taskInfoElem);
    createDeleteTaskElem(taskItemElem);
}