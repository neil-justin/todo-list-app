import { differenceInCalendarYears } from "date-fns";
export {
    Task,
};

function Task(taskInfo) {
    if (taskInfo.dueDate !== null) {
        // parsing the dates into an appropriate and meaningful format
        taskInfo.dueDate = new Date(`${taskInfo.dueDate}`);
    }

    function updateTasks(projects, update, taskIndex = null) {
        let chosenProject = projects[taskInfo.project];

        switch (update) {
            case 'add':
                chosenProject === null ?
                    chosenProject = [taskInfo] :
                    chosenProject.push(taskInfo);
                break;
            case 'edit':
                chosenProject[taskIndex] = taskInfo;
                break;
            case 'remove':
                chosenProject.splice(taskIndex, 1);
        }

        projects[taskInfo.project] = chosenProject;

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
            const yesterdayDate = new Date();
            yesterdayDate.setDate(yesterdayDate.getDate() - 1);

            return yesterdayDate;
        }
    };

    function getDisplayedTaskDueDate(diffInCalendarDays) {
        let taskDueDate;

        if (diffInCalendarDays >= 0) {
            switch (true) {
                case diffInCalendarDays === 0:
                    taskDueDate = 'Today';
                    break;
                case diffInCalendarDays === 1:
                    taskDueDate = 'Tomorrow';
                    break;
                case diffInCalendarDays <= 7:
                    taskDueDate = _dateFormatter.getDayOfTheWeek();
                    break;
                default:
                    taskDueDate = _dateFormatter.getLongDate(
                        differenceInCalendarYears(taskInfo.dueDate, new Date())
                    );
            }

            return `Due ${taskDueDate}`;
        } else {
            if (diffInCalendarDays === -1) {
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
        getDisplayedTaskDueDate,
    }
}