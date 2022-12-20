import { updateMainContentHeading, updateProjectNameDisplay } from "./dom-controller";
import { isValueEmpty } from "./helper";
import { accessLocalStorage } from "./local-storage";
import { Project } from "./project";

let openedTabElement;
const projectInboxList = document.querySelector('#project-inbox');

let mainContentHeading = document.querySelector('#main-content-heading');
mainContentHeading.addEventListener('mouseenter', () => {
    openedTabElement = document.querySelector('[data-opened-tab]');

    if (openedTabElement.parentElement === projectInboxList) return;

    mainContentHeading.classList.add('highlight-project-name')
});

mainContentHeading.addEventListener('mouseleave', () => {
    mainContentHeading.classList.remove('highlight-project-name');
});

let projectNameForm;
let projectNameInput;

const saveProjectButton = document
    .querySelector('#main-content-save-project-button');
saveProjectButton.addEventListener('click', (e) => {
    if (openedTabElement.textContent === projectNameInput.value) {
        mainContentHeading.classList.remove('hidden');
        projectNameForm.classList.add('hidden');
        return;
    }

    const isProjectNameInputEmpty = isValueEmpty(projectNameInput.value);

    if (isProjectNameInputEmpty) {
        window.alert("Oops, that won't work")
        return;
    }

    const storedProjects = accessLocalStorage('getItem', 'projects');
    const projectInstance = Project(storedProjects, projectNameInput);
    const updatedProjects = projectInstance.updateProjects('edit');

    accessLocalStorage('setItem', updatedProjects);
    updateProjectNameDisplay(
        projectNameInput.value, 'edit',
        document.querySelector('[data-opened-tab]')
    );
    mainContentHeading.classList.remove('hidden');
    updateMainContentHeading(e, projectNameInput.value);
    projectNameForm.classList.add('hidden');

});

const cancelProjectButton = document.querySelector('#main-content-cancel-project-button');
cancelProjectButton.addEventListener('click', () => {
    mainContentHeading.classList.remove('hidden');
    projectNameForm.classList.add('hidden');
});

mainContentHeading.addEventListener('click', () => {
    openedTabElement == document.querySelector('[data-opened-tab]');

    if (openedTabElement.parentElement === projectInboxList) return;

    projectNameForm = document
        .querySelector('#main-content-project-name-form');
    projectNameForm.classList.remove('hidden');
    projectNameInput = document.
        querySelector('#main-content-project-name-input');
    projectNameInput.value = `${mainContentHeading.textContent}`;
    projectNameInput.focus();
    mainContentHeading.classList.add('hidden');
});