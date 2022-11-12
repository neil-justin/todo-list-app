export { Project, projectNameInputElem };

const projectNameInputElem = document.querySelector('#project-name');

function Project() {
    const projects = [];

    function addProject() {
        projects.push(projectNameInputElem.value);
    }

    return {
        addProject,
    }
}