import { differenceInCalendarYears } from "date-fns";
export {
    defaultProjects,
    tasks,
    Task,
};

const defaultProjects = {
    'inbox': [
        {
            name: 'Go to the wet market',
            notes: null,
            project: 'inbox',
            priority: 'Priority 4',
            dueDate: new Date(2022, 10, 18)
        },
        {
            name: 'Export bitwarden passwords',
            notes: null,
            project: 'inbox',
            priority: 'Priority 1',
            dueDate: new Date(2022, 10, 25)
        },
        {
            name: 'Wash laptop\'s cleaning clothes',
            notes: 'Do not forget that you have three of these!',
            project: 'inbox',
            priority: 'Priority 2',
            dueDate: new Date(2022, 11, 13)
        }
    ]
}

const tasks = [];

function Task(taskInfo) {
    if (taskInfo.dueDate !== null) {
        // parsing the due date to an appropriate date format
        taskInfo.dueDate = new Date(`${taskInfo.dueDate}`);
    }

    function updateTasks(projects, update, taskIndex = null) {
        const chosenProject = projects[taskInfo.project];
        debugger;
        switch (update) {
            case 'add':
                chosenProject.push(taskInfo);
                break;
            case 'edit':
                chosenProject[taskIndex] = taskInfo;
                break;
            case 'remove':
                chosenProject.splice(taskIndex, 1);
        }

        return projects;
    }

    const _dateFormatter = {
        getDayOfTheWeek: function () {
            const week = [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ];

            return week[taskInfo.dueDate.getDay()];
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

            if (taskInfo.dueDate !== null) {
                return taskInfo.dueDate.toLocaleDateString('en-US', options);
            }

            return taskInfo.dueDate;
        },

        getYesterdayDate: function () {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);

            return yesterday;
        }
    };

    function getTaskDueDateString(differenceInDays) {
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
                        differenceInCalendarYears(taskInfo.dueDate, new Date())
                    );
            }

            return `Due ${taskDueDate}`;
        } else {
            if (differenceInDays === -1) {
                taskDueDate = 'Yesterday';
            } else {
                taskDueDate = _dateFormatter.getLongDate(
                    differenceInCalendarYears(taskInfo.dueDate, new Date())
                );
            }

            return `Overdue, ${taskDueDate}`;
        }
    }

    return {
        updateTasks,
        getTaskDueDateString,
    }
}