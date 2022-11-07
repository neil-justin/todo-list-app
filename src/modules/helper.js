export { notesNotEmpty, taskNameNotEmpty, getDayOfTheWeek, formatDate };

function notesNotEmpty(notes) {
    return notes.value.trim().length !== 0
}

function taskNameNotEmpty(task) {
    return task.value.trim().length !== 0;
}

function getDayOfTheWeek(date) {
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday'];

    return week[date.getDay()];
}

function formatDate(dueDate, diffInYears) {
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
