import { differenceInCalendarYears } from "date-fns";
export { tasks, Task };

const tasks = [];

function Task(taskFormControl) {
    function addTask() {
        const task = Object.assign({}, taskFormControl);

        for (const property in task) {
            if (property === 'dueDate') {
                task.dueDate = task.dueDate.valueAsDate;
            } else {
                task[property] = task[property].value;
            }
        }

        tasks.push(task);
    }

    function textareaNotEmpty(key) {
        /* The key parameter could either be the task name or notes */
        return taskFormControl[key].value.trim().length !== 0;
    }

    function getDayOfTheWeek() {
        const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
            'Thursday', 'Friday', 'Saturday'];

        return week[taskFormControl.dueDate.valueAsDate.getDay()];
    }

    function getLongDateFormat(diffInYears) {
        const options = {
            weekday: 'short',
            month: 'long',
            day: 'numeric'
        }

        if (diffInYears > 0 || diffInYears < 0) {
            options.year = 'numeric';
        }

        return taskFormControl.dueDate.valueAsDate
            .toLocaleDateString('en-US', options);
    }

    function getTaskDueDate(differenceInDays) {
        let taskDueDate;

        if (differenceInDays >= 0) {
            switch (true) {
                case differenceInDays === 0:
                    taskDueDate = 'Today';
                    break;
                case differenceInDays === 1:
                    taskDueDate = 'Tomorrow';
                    break;
                case differenceInDays <= 7:
                    taskDueDate = this.getDayOfTheWeek();
                    break;
                default:
                    taskDueDate = this.getLongDateFormat(
                        differenceInCalendarYears(
                            taskFormControl.dueDate.valueAsDate, new Date()
                        )
                    );
            }

            return `Due ${taskDueDate}`;
        } else {
            if (differenceInDays === -1) {
                taskDueDate = 'Yesterday';
            } else {
                taskDueDate = this.getLongDateFormat(
                    differenceInCalendarYears(
                        taskFormControl.dueDate.valueAsDate, new Date()
                    )
                );
            }

            return `Overdue, ${taskDueDate}`;
        }
    }

    function insertTaskIndex(taskElem) {
        taskElem.setAttribute('data-task-index', `${tasks.length - 1}`);
    }

    function getTaskIndex(event) {
        let taskIndex;

        if (event.target.hasAttribute('data-task-index')) {
            taskIndex = event.target.getAttribute('data-task-index');
        } else {
            taskIndex = event.target.closest('[data-task-index]').
                getAttribute('data-task-index');
        }

        return taskIndex;
    }

    function removeTask(taskIndex) {
        tasks.splice(taskIndex, 1);
    }

    return {
        addTask,
        textareaNotEmpty,
        getDayOfTheWeek,
        getLongDateFormat,
        getTaskDueDate,
        insertTaskIndex,
        getTaskIndex,
        removeTask,
    }
}