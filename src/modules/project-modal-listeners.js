import { updateProjectNameDisplay } from "./dom-controller";
import { isValueEmpty } from "./helper";
import { accessLocalStorage } from "./local-storage";
import { Project } from "./project";

const projectNameInput = document.querySelector('#project-name');

const addProjectIcon = document.querySelector('#add-project-button');
addProjectIcon.addEventListener('click', () => {
    const projectModalElement = document.querySelector('#project-modal');
    projectModalElement.showModal();

    if (!projectNameInput.hasAttribute('required')) {
        projectNameInput.setAttribute('required', '');
    }
});

const confirmProjectButton = document.querySelector('#confirm-project-button');
confirmProjectButton.addEventListener('click', () => {
    const isProjectNameInputEmpty = isValueEmpty(projectNameInput.value)

    if (!isProjectNameInputEmpty) {
        updateProjectNameDisplay(projectNameInput.value, 'add');

        const storedProjects = accessLocalStorage('getItem', 'projects');
        const projectInstance = Project(storedProjects, projectNameInput);
        const updatedProjects = projectInstance.updateProjects('add');

        accessLocalStorage('setItem', updatedProjects);
    }
});

const cancelProjectButton = document.querySelector('#cancel-project-button');
cancelProjectButton.addEventListener('click', () => {
    projectNameInput.removeAttribute('required');
});