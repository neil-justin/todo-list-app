export {
    isValueEmpty,
    filterByTaskProperty,
    getTaskInfo,
    shouldDeleteTask,
    getTaskIndex,
    checkTaskDuplicate,
};

function isValueEmpty(data) {
    return data.trim().length === 0;
}

function filterByTaskProperty(array, property, event = null) {
    const chosenProject = event === null ? 'Inbox' : event.target.textContent;

    switch (property) {
        case 'project':
            const INBOX_PROJECT = ['Inbox', 'Today', 'Upcoming'];

            if (INBOX_PROJECT.includes(chosenProject)) {
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

let project;

function getTaskIndex(storedProjects, task) {
    project = storedProjects[task.project];

    return project.findIndex(storedTask => {
        return storedTask.name === task.name;
    });
}

function checkTaskDuplicate(storedProjects, newTask) {
    project = storedProjects[newTask.project];

    return project.some(storedTask => {
        return storedTask.name === newTask.name;
    });
}