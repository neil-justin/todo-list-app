const addTaskButtons = document.querySelectorAll('.add-task-button');

addTaskButtons.forEach(addTaskButton => {
    addTaskButton.addEventListener('click', () => {
        const taskModal = document.querySelector('#task-modal');
        taskModal.showModal();
    });
})