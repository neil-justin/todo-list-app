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

    function getPriorityNumber() {
        switch (taskFormControl.priority.value) {
            case 'Priority 4':
                return 'priority4-task'
            case 'Priority 3':
                return 'priority3-task'
            case 'Priority 2':
                return 'priority2-task'
            case 'Priority 1':
                return 'priority1-task'
        }
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

    return {
        addTask,
        textareaNotEmpty,
        getPriorityNumber,
        getDayOfTheWeek,
        getLongDateFormat,
        getTaskDueDate,
    }
}