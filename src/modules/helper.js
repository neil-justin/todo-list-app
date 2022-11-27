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

function filterByTaskProperty(array, property, event = null) {
    const chosenProject = event === null ? 'Inbox' : event.target.textContent;

    switch (property) {
        case 'project':
            const PROJECT_INBOX = ['Inbox', 'Today', 'Upcoming'];

            if (PROJECT_INBOX.includes(chosenProject)) {
                return array.filter(elem => elem['project'] === 'Inbox');
            } else {
                return array.filter(elem => elem['project'] === chosenProject);
            }
        case 'dueDate':
            const today = new Date();

            if (chosenProject === 'Today') {
                return array.filter(item => {
                    return new Date(`${item.dueDate}`).toDateString()
                        === today.toDateString();
                });
            } else if (chosenProject === 'Upcoming') {
                return array.filter(item => {
                    return new Date(`${item.dueDate}`).toDateString()
                        !== today.toDateString();
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


function getTaskIndex(projects, taskElem, chosenProject) {
    const chosenTask = taskElem.querySelector('.task-name');
    const project = projects[chosenProject];

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
    const PROJECT_INBOX = ['Inbox', 'Today', 'Upcoming'];
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