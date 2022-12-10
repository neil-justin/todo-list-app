import { displayProjectName } from "./dom-controller";
import { isValueEmpty } from "./helper";
import { accessLocalStorage } from "./local-storage";
import { Project } from "./project";

const projectNameInput = document.querySelector('#project-name');

const addProjectButton = document.querySelector('#add-project-button');
addProjectButton.addEventListener('click', () => {
    const projectModalElem = document.querySelector('#project-modal');
    projectModalElem.showModal();

    if (!projectNameInput.hasAttribute('required')) {
        projectNameInput.setAttribute('required', '');
    }
});

const confirmProjectButton = document.querySelector('#confirm-project-button');
confirmProjectButton.addEventListener('click', () => {
    const isProjectNameInputEmpty = isValueEmpty(projectNameInput.value)

    if (!isProjectNameInputEmpty) {
        displayProjectName(projectNameInput.value);

        const projectInstance = Project();
        const storedProjects = accessLocalStorage('getItem', 'projects');
        const updatedProjects =
            projectInstance.updateProjects(storedProjects, projectNameInput);

        accessLocalStorage('setItem', updatedProjects);
    }
});

const cancelProjectButton =
    document.querySelector('#cancel-project-button');
cancelProjectButton.addEventListener('click', () => {
    projectNameInput.removeAttribute('required');
})