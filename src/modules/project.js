export { defaultProjects, Project };

const defaultProjects = {
    'inbox': [
        {
            name: 'Go to the wet market',
            notes: null,
            project: 'inbox',
            priority: 'Priority 4',
            dueDate: new Date(2022, 10, 18)
        },
        {
            name: 'Export bitwarden passwords',
            notes: null,
            project: 'inbox',
            priority: 'Priority 1',
            dueDate: new Date(2022, 10, 25)
        },
        {
            name: 'Wash laptop\'s cleaning clothes',
            notes: 'Do not forget that you have three of these!',
            project: 'inbox',
            priority: 'Priority 2',
            dueDate: new Date(2022, 11, 13)
        }
    ]
}

function Project() {
    function updateProjects(projects, project) {
        projects[project.value] = null;

        return projects;
    }

    return {
        updateProjects
    }
}