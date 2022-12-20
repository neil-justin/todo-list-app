export { defaultProjects, Project };

const todayDate = new Date();
const tomorrowDate = new Date();
tomorrowDate.setDate(tomorrowDate.getDate() + 1);

const defaultProjects = {
    'inbox': [
        {
            name: 'Go to the wet market',
            notes: null,
            project: 'inbox',
            priority: 'Priority 4',
            dueDate: todayDate,
        },
        {
            name: 'Export bitwarden passwords',
            notes: null,
            project: 'inbox',
            priority: 'Priority 1',
            dueDate: tomorrowDate,
        },
        {
            name: 'Wash laptop\'s cleaning clothes',
            notes: 'Do not forget that you have three of these!',
            project: 'inbox',
            priority: 'Priority 2',
            dueDate: tomorrowDate,
        }
    ]
}

function Project(projects, project = null) {
    function updateProjects(todo, event) {
        let projectKey;

        switch (todo) {
            case 'add':
                projects[project.value] = null;
                break;
            case 'edit':
                projectKey = document.querySelector('[data-opened-tab]')
                    .textContent;
                projects[project.value] = projects[projectKey];
                delete projects[projectKey];
                break;
            case 'delete':
                projectKey = event.target.parentElement.textContent;
                delete projects[projectKey];
        }

        return projects;
    }

    return {
        updateProjects
    }
}