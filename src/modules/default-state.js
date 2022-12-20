import '../stylesheets/index.css';
import '../stylesheets/main-content.css';
import '../stylesheets/sidebar.css';
import '../stylesheets/modal.css';
import '../stylesheets/task-modal.css';
import '../stylesheets/project-modal.css';
import {
    Task,
} from './task';
import {
    createTaskComponents,
    createTaskCheckbox,
    highlightChosenTab,
    updateMainContentHeading,
    appendTaskItemElement,
    updateProjectNameDisplay,
    createDeleteTaskElement,
    createProjectNameForm,
    addDeleteProjectIcon,
} from './dom-controller';
import { accessLocalStorage } from './local-storage';
import { differenceInCalendarDays } from 'date-fns';
import { defaultProjects } from './project';

highlightChosenTab();
updateMainContentHeading();
createProjectNameForm();

const storedProjects = accessLocalStorage('getItem', 'projects');
const userProjects = storedProjects ?? defaultProjects;

accessLocalStorage('setItem', userProjects);

const projectNames = Object.keys(userProjects);

for (let i = 0; i < projectNames.length; i++) {
    if (projectNames[i] === 'inbox') continue;

    updateProjectNameDisplay(projectNames[i], 'add');
}

const sidebarProjectList = document.querySelector('#sidebar-project-list');
for (const child of sidebarProjectList.children) {
    addDeleteProjectIcon(child);
}

const inbox = userProjects.inbox;

for (let i = 0; i < inbox.length; i++) {
    const taskInstance = Task(inbox[i]);
    let taskItemElement;

    if (inbox[i].dueDate === null) {
        taskItemElement = createTaskComponents(inbox[i])
    } else {
        const displayedTaskDueDate = taskInstance.getDisplayedTaskDueDate(
            differenceInCalendarDays(inbox[i].dueDate, new Date())
        );

        taskItemElement = createTaskComponents(inbox[i], displayedTaskDueDate);
    }

    const taskInfoElement = taskItemElement.querySelector('.task-info-container');

    appendTaskItemElement(taskItemElement);
    createTaskCheckbox(taskItemElement, taskInfoElement);
    createDeleteTaskElement(taskItemElement);
}