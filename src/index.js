const taskNameTextarea = document.querySelector('#task-name');

const addTaskButtons = document.querySelectorAll('.add-task-button');
addTaskButtons.forEach(addTaskButton => {
    addTaskButton.addEventListener('click', () => {
        const taskModal = document.querySelector('#task-modal');
        taskModal.showModal();

        if (!taskNameTextarea.hasAttribute('required')) {
            taskNameTextarea.setAttribute('required', '');
        }
    });
});

const taskModalCloseButton = document.querySelector('#close-task-modal-button');
taskModalCloseButton.addEventListener('click', () => {
    // this allows the task modal from closing
    taskNameTextarea.removeAttribute('required');
});