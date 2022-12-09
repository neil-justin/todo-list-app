import { differenceInCalendarDays } from "date-fns";

export {
    isValueEmpty,
    filterByTaskProperty,
    getTaskInfo,
    shouldDeleteTask,
    getTaskIndex,
    checkTaskDuplicate,
    getProjectName,
    capitalizeString,
};

function isValueEmpty(data) {
    return data.trim().length === 0;
}

const PROJECT_INBOX = ['Inbox', 'Today', 'Upcoming'];

function filterByTaskProperty(project, property, event) {
    const chosenProjectName = event.target.textContent;

    switch (property) {
        case 'project':
            return PROJECT_INBOX.includes(chosenProjectName) ?
                project.inbox : project[chosenProjectName.toLowerCase()]
        case 'dueDate':
            const today = new Date();

            if (chosenProjectName === 'Today') {
                return project.filter(task => {
                    return task.dueDate.toDateString() === today.toDateString();
                });
            } else if (chosenProjectName === 'Upcoming') {
                return project.filter(task => {
                    const diffInCalendarDays =
                        differenceInCalendarDays(task.dueDate, new Date());

                    return diffInCalendarDays > 0;
                });
            }
    }
}

function getTaskInfo(taskForm) {
    const taskInfo = Object.assign({}, taskForm);

    for (const property in taskInfo) {
        if (property === 'dueDate') {
            taskInfo.dueDate = taskInfo.dueDate.valueAsDate;
        } else if (property === 'project') {
            taskInfo.project = taskInfo.project.value.toLowerCase();
        } else {
            taskInfo[property] = taskInfo[property].value;
        }
    }

    return taskInfo;
}

function shouldDeleteTask() {
    return window.confirm('Are you sure you want to delete this item?')
}


function getTaskIndex(projects, taskElem, chosenProjectName) {
    const chosenTask = taskElem.querySelector('.task-name');
    const project = projects[chosenProjectName];

    return project.findIndex(storedTask => {
        return storedTask.name === chosenTask.textContent;
    });
}

function checkTaskDuplicate(storedProjects, newTask) {
    const project = storedProjects[newTask.project];

    return project.some(storedTask => {
        return storedTask.name === newTask.name;
    });
}

function getProjectName() {
    const chosenProjectName = document.querySelector('[data-opened-tab]')
        .textContent.toLowerCase();

    if (PROJECT_INBOX.includes(chosenProjectName)) {
        return 'inbox';
    }

    return chosenProjectName;
}

function capitalizeString(string) {
    return string[0].toUpperCase() + string.slice(1);
}