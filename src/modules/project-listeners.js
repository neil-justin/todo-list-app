import { displayProjectName } from "./dom-controller";
import { isValueEmpty } from "./helper";
import { accessLocalStorage } from "./local-storage";
import { Project } from "./project";

const projectNameInput = document.querySelector('#project-name');

const addProjectButtonElem = document.querySelector('#add-project-button');
addProjectButtonElem.addEventListener('click', () => {
    const projectModalElem = document.querySelector('#project-modal');
    projectModalElem.showModal();

    if (!projectNameInput.hasAttribute('required')) {
        projectNameInput.setAttribute('required', '');
    }
});

const projectModalConfirmButtonElem = document.
    querySelector('#project-modal-confirm-button');

projectModalConfirmButtonElem.addEventListener('click', () => {
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

const projectModalCancelButtonElem = document
    .querySelector('#project-modal-cancel-button');

projectModalCancelButtonElem.addEventListener('click', () => {
    projectNameInput.removeAttribute('required');
})