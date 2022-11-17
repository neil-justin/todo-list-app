export {
    isValueEmpty,
    filterByTaskProperty,
    getTaskDetails,
    shouldDeleteTask
};


function isValueEmpty(data) {
    return data.trim().length === 0;
}

function filterByTaskProperty(array, property, event) {
    switch (property) {
        case 'project':
            const INBOX_PROJECT = ['Inbox', 'Today', 'Upcoming'];
            const chosenProject =  'Inbox' || event.target.textContent;

            if (INBOX_PROJECT.includes(chosenProject)) {
                return array.filter(elem => elem['project'] === 'Inbox');
            } else {
                return array.filter(elem => elem['project'] === chosenProject);
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