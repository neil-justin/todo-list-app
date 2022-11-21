export {
    isValueEmpty,
    filterByTaskProperty,
    getTaskDetails,
    shouldDeleteTask,
    getTaskIndex,
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

function getTaskDetails(taskForm) {
    const taskDetails = Object.assign({}, taskForm);

    for (const property in taskDetails) {
        if (property === 'dueDate') {
            taskDetails.dueDate = taskDetails.dueDate.valueAsDate;
        } else {
            taskDetails[property] = taskDetails[property].value;
        }
    }

    return taskDetails;
}

function shouldDeleteTask() {
    return window.confirm('Are you sure you want to delete this item?')
}

function getTaskIndex(event) {
    let taskIndex;

    if (event.target.hasAttribute('data-task-index')) {
        taskIndex = event.target.getAttribute('data-task-index');
    } else {
        taskIndex = event.target.closest('.task').
            getAttribute('data-task-index');
    }

    return taskIndex;
}