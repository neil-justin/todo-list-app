import { differenceInCalendarYears } from "date-fns";
export { tasks, Task, };

const tasks = [];

function Task(taskDetails) {
    function addTask() {
        tasks.push(taskDetails);
    };

    const _dateFormatter = {
        getDayOfTheWeek: function () {
            const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
                'Thursday', 'Friday', 'Saturday'];

            return week[taskDetails.dueDate.getDay()];
        },

        getLongDate: function (diffInYears) {
            const options = {
                weekday: 'short',
                month: 'long',
                day: 'numeric'
            }

            if (diffInYears >= 1 || diffInYears <= 1) {
                options.year = 'numeric';
            }

            return taskDetails.dueDate.toLocaleDateString('en-US', options);
        },
    };

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
                    taskDueDate = _dateFormatter.getDayOfTheWeek();
                    break;
                default:
                    taskDueDate = _dateFormatter.getLongDate(
                        differenceInCalendarYears(
                            taskDetails.dueDate, new Date()
                        )
                    );
            }

            return `Due ${taskDueDate}`;
        } else {
            if (differenceInDays === -1) {
                taskDueDate = 'Yesterday';
            } else {
                taskDueDate = _dateFormatter.getLongDate(
                    differenceInCalendarYears(
                        taskDetails.dueDate, new Date()
                    )
                );
            }

            return `Overdue, ${taskDueDate}`;
        }
    }

    function getTaskIndex(event) {
        let taskIndex;

        if (event.target.hasAttribute('data-task-index')) {
            taskIndex = event.target.getAttribute('data-task-index');
        } else {
            taskIndex = event.target.closest('.task').
                getAttribute('data-task-index');
        }

        return taskIndex;
    }

    function removeTask(taskIndex) {
        tasks.splice(taskIndex, 1);
    }

    return {
        addTask,
        getTaskDueDate,
        getTaskIndex,
        removeTask,
    }
}