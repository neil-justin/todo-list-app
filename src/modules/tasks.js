export { consoleLog };

const consoleLog = console.log('test');

function Tasks(task) {
    const newTask = {
        taskName: document.querySelector('#task-name').value,
        taskNotes: document.querySelector('#task-notes').value,
        taskProject: document.querySelector('#task-project').value,
        taskPriority: document.querySelector('#task-priority').value,
        taskDueData: document.querySelector('#task-due-date').value
    }
}