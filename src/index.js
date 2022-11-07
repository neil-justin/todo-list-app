import './stylesheets/main.css';
import './stylesheets/mainbar.css';
import './stylesheets/sidebar.css';
import './stylesheets/task-modal.css';
import { Task } from './modules/tasks';
import { displayTask, resetTaskModal } from './modules/dom-controller';
import { taskNameNotEmpty, notesNotEmpty, getTaskDueDate, getDayOfTheWeek, getLongDate, getTaskPriority } from './modules/helper';
import { differenceInCalendarDays, differenceInCalendarYears } from 'date-fns';

const taskFormControl = {
    name: document.querySelector('#task-name'),
    notes: document.querySelector('#task-notes'),
    project: document.querySelector('#task-project'),
    priority: document.querySelector('#task-priority'),
    dueDate: document.querySelector('#task-due-date')
}

const taskNameElem = document.querySelector('#task-name');
const addTaskElems = document.querySelectorAll('.add-task-elem');
addTaskElems.forEach(addTaskElem => {
    addTaskElem.addEventListener('click', () => {
        const taskModalElem = document.querySelector('#task-modal');
        taskModalElem.showModal();

        if (!taskNameElem.hasAttribute('required')) {
            taskNameElem.setAttribute('required', '');
        }

        resetTaskModal(taskFormControl);
    });
});

const taskModalCloseButtonElem = document.querySelector('#task-modal-close-button');
taskModalCloseButtonElem.addEventListener('click', () => {
    // this allows the task modal from closing
    taskNameElem.removeAttribute('required');
});

const taskModalConfirmButtonElem = document.querySelector('#task-modal-confirm-button');
taskModalConfirmButtonElem.addEventListener('click', () => {
    if (taskNameNotEmpty(taskFormControl.name)) {
        const task = Task(taskFormControl);
        task.addTask();

        displayTask(
            taskFormControl,
            notesNotEmpty(taskFormControl.notes),
            getTaskDueDate(
                differenceInCalendarDays(
                    taskFormControl.dueDate.valueAsDate, new Date()
                ),
                getDayOfTheWeek(taskFormControl.dueDate.valueAsDate),
                getLongDate(
                    taskFormControl.dueDate.valueAsDate,
                    differenceInCalendarYears(
                        taskFormControl.dueDate.valueAsDate,
                        new Date()
                    ),
                ),
                taskFormControl.dueDate.valueAsDate,
            ),
            getTaskPriority(taskFormControl.priority),
        )
    }
});