import { Project, projectNameInputElem } from "./project";
import { valueNotEmpty } from "./helper";

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
    if (valueNotEmpty(projectNameInputElem.value)) {
        const project = Project();

        project.addProject();
        project.listProjectName();
        project.displayProjectName();
    }
});

const projectModalCancelButtonElem = document
    .querySelector('#project-modal-cancel-button');

projectModalCancelButtonElem.addEventListener('click', () => {
    projectNameInputElem.removeAttribute('required');
})