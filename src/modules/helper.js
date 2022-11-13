export {
    valueNotEmpty,
    filterByTaskProperty
};


function valueNotEmpty(data) {
    if (typeof data === 'object') {
        return data.value.trim().length !== 0;
    } else {
        return data.trim().length !== 0;
    }
}

function filterByTaskProperty(array, property, event) {
    switch (property) {
        case 'project':
            const PROJECT_INBOX = ['Inbox', 'Today', 'Upcoming'];
            const chosenProject = event.target.textContent;

            if (PROJECT_INBOX.includes(chosenProject)) {
                return array.filter(elem => elem['project'] === 'Inbox');
            } else {
                return array.filter(elem => elem['project'] === chosenProject);
            }
    }
}