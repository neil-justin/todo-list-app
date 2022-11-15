import { Project, projectNameInputElem } from "./project";
import { isValueEmpty } from "./helper";
import {
    listProjectName,
    displayProjectName
} from "./dom-controller";

const addProjectButtonElem = document.querySelector('#add-project-button');
addProjectButtonElem.addEventListener('click', () => {
    const projectModalElem = document.querySelector('#project-modal');
    projectModalElem.showModal();

    if (!projectNameInputElem.hasAttribute('required')) {
        projectNameInputElem.setAttribute('required', '');
    }
});

const projectModalConfirmButtonElem = document.
    querySelector('#project-modal-confirm-button');

projectModalConfirmButtonElem.addEventListener('click', () => {
    if (!isValueEmpty(projectNameInputElem)) {
        const project = Project();

        project.addProject();
        listProjectName(projectNameInputElem);
        displayProjectName(projectNameInputElem);
    }
});

const projectModalCancelButtonElem = document
    .querySelector('#project-modal-cancel-button');

projectModalCancelButtonElem.addEventListener('click', () => {
    projectNameInputElem.removeAttribute('required');
})