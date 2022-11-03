const taskNameTextareaElem = document.querySelector('#task-name');

const addTaskButtonElems = document.querySelectorAll('.add-task-button');
addTaskButtonElems.forEach(addTaskButtonElem => {
    addTaskButtonElem.addEventListener('click', () => {
        const taskModalElem = document.querySelector('#task-modal');
        taskModalElem.showModal();

        if (!taskNameTextareaElem.hasAttribute('required')) {
            taskNameTextareaElem.setAttribute('required', '');
        }
    });
});

const taskModalCloseButtonElem = document.querySelector('#close-task-modal-button');
taskModalCloseButtonElem.addEventListener('click', () => {
    // this allows the task modal from closing
    taskNameTextareaElem.removeAttribute('required');
});