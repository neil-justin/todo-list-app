export { tasks, Task };

const tasks = [];

function Task(taskFormControl) {
    function addTask() {
        const task = Object.assign({}, taskFormControl);

        for (const property in task) {
            if (property === 'dueDate') {
                task[property] = task[property].valueAsDate;
            } else {
                task[property] = task[property].value;
            }
        }

        tasks.push(task);
    }

    return { addTask }
}