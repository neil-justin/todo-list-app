export { Project };

function Project() {
    function updateProjects(projects, project) {
        projects[project.value] = null;

        return projects;
    }

    return {
        updateProjects
    }
}