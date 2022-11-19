import { differenceInCalendarYears } from "date-fns";
export { defaultTasks, tasks, Task, };

const defaultTasks = [
    {
        name: 'Go to the wet market',
        notes: null,
        project: 'Inbox',
        priority: 'Priority 4',
        dueDate: new Date(2022, 10, 18)
    },
    {
        name: 'Export bitwarden passwords',
        notes: null,
        project: 'Inbox',
        priority: 'Priority 1',
        dueDate: new Date(2022, 10, 25)
    },
    {
        name: 'Wash laptop\'s cleaning cloth',
        notes: 'Do not forget that you have three of these!',
        project: 'Inbox',
        priority: 'Priority 2',
        dueDate: new Date(2022, 11, 13)
    }
]

const tasks = [];

function Task(taskDetails) {

    function updateTasks(task, update, index = null) {
        if (update === 'add') {
            return tasks.push(task);
        }

        if (update === 'edit') {
            return tasks[index] = task;
        }
    }

    const dateFormatter = {
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

            if (taskDetails.dueDate !== null) {
                return taskDetails.dueDate.toLocaleDateString('en-US', options);
            }

            return taskDetails.dueDate;
        },

        getYesterdayDate: function () {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);

            return yesterday;
        }
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
                    taskDueDate = dateFormatter.getDayOfTheWeek();
                    break;
                default:
                    taskDueDate = dateFormatter.getLongDate(
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
                taskDueDate = dateFormatter.getLongDate(
                    differenceInCalendarYears(
                        taskDetails.dueDate, new Date()
                    )
                );
            }

            return `Overdue, ${taskDueDate}`;
        }
    }

    return {
        updateTasks,
        dateFormatter,
        getTaskDueDate,
    }
}