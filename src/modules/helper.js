export { notesNotEmpty, taskNameNotEmpty, getDayOfTheWeek, getLongDate, getTaskDueDate, getTaskPriority };

function notesNotEmpty(notes) {
    return notes.value.trim().length !== 0
}

function taskNameNotEmpty(task) {
    return task.value.trim().length !== 0;
}

function getDayOfTheWeek(dueDate) {
    if (dueDate !== null) {
        const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
            'Thursday', 'Friday', 'Saturday'];

        return week[dueDate.getDay()];
    }
}

function getLongDate(dueDate, diffInYears) {
    if (dueDate !== null) {
        const options = {
            weekday: 'short',
            month: 'long',
            day: 'numeric'
        }

        if (diffInYears > 0 || diffInYears < 0) {
            options.year = 'numeric';
        }

        return dueDate.toLocaleDateString('en-US', options);
    }
}

function getTaskDueDate(differenceInDays, dayOfTheWeek, longDate, dueDate) {
    if (dueDate !== null) {
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
                    taskDueDate = dayOfTheWeek;
                    break;
                default:
                    taskDueDate = longDate;
            }

            return `Due ${taskDueDate}`;
        } else {
            if (differenceInDays === -1) {
                taskDueDate = 'Yesterday';
            } else {
                taskDueDate = longDate;
            }

            return `Overdue, ${taskDueDate}`;
        }
    }
}

function getTaskPriority(priority) {
    switch (priority.value) {
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