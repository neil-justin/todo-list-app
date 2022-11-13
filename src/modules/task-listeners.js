import '../stylesheets/main.css';
import '../stylesheets/mainbar.css';
import '../stylesheets/sidebar.css';
import '../stylesheets/modal.css';
import '../stylesheets/task-modal.css';
import '../stylesheets/project-modal.css';

import {
    Task,
    tasks,
    task as newTask,
} from './task';
import {
    displayTask,
    resetTaskModal,
    createTaskCheckbox,
    createDeleteTaskElem,
    removeTaskDisplay,
    defineTaskElem,
    insertEditingTaskAttr,
    insertTaskIndexAttr,
} from './dom-controller';
import {
    valueNotEmpty,
    filterByTaskProperty
} from './helper';
import { differenceInCalendarDays } from 'date-fns';

const taskNameElem = document.querySelector('#task-name');
const taskModalElem = document.querySelector('#task-modal');
const taskFormControl = {
    name: taskNameElem,
    notes: document.querySelector('#task-notes'),
    project: document.querySelector('#task-project'),
    priority: document.querySelector('#task-priority'),
    dueDate: document.querySelector('#task-due-date')
}

const addTaskElems = document.querySelectorAll('.add-task-elem');
addTaskElems.forEach(addTaskElem => {
    addTaskElem.addEventListener('click', () => {
        taskModalElem.showModal();

        if (!taskNameElem.hasAttribute('required')) {
            taskNameElem.setAttribute('required', '');
        }

        resetTaskModal(taskFormControl);
    });
});

let task;
let taskElem;
let taskInfoElem;

const taskListElem = document.querySelector('#task-list');
taskListElem.addEventListener('click', (e) => {
    let taskIndex;

    while (typeof taskIndex === 'undefined') {
        taskElem = defineTaskElem(e);
        taskInfoElem = taskElem.querySelector('.task-info-container');
        taskIndex = task.getTaskIndex(e);

        const taskCheckboxElem = taskInfoElem.previousElementSibling;
        const deleteTaskElem = taskInfoElem.nextElementSibling;

        if (e.target === taskListElem) {
            break;
        } else if (e.target === taskCheckboxElem || e.target === deleteTaskElem) {
            if (e.target === deleteTaskElem) {
                if (!window.
                    confirm('Are you sure you want to delete this item?')) {
                    break;
                }
            }

            task.removeTask(taskIndex);
            removeTaskDisplay(taskElem);
        } else {
            taskModalElem.showModal();
            insertEditingTaskAttr(taskElem);
        }
    }
});

const taskModalCloseButtonElem = document.querySelector('#task-modal-close-button');
taskModalCloseButtonElem.addEventListener('click', () => {
    // this allows the task modal from closing
    taskNameElem.removeAttribute('required');

    if (document.querySelector('[data-editing-task')) {
        document.querySelector('[data-editing-task').
            removeAttribute('data-editing-task');
    }
});

const taskModalConfirmButtonElem = document.querySelector('#task-modal-confirm-button');
taskModalConfirmButtonElem.addEventListener('click', () => {
    task = Task(taskFormControl);

    if (valueNotEmpty(taskFormControl.name)) {
        task.addTask();

        if (newTask.dueDate !== null) {
            displayTask(
                newTask, valueNotEmpty(newTask.notes),
                task.getTaskDueDate(differenceInCalendarDays(
                    newTask.dueDate, new Date()
                )),
            );
        } else {
            displayTask(
                newTask, valueNotEmpty(newTask.notes),
            );
        }

        taskElem = taskListElem.lastElementChild;
        taskInfoElem = taskElem.querySelector('.task-info-container');

        createTaskCheckbox(taskElem, taskInfoElem);
        createDeleteTaskElem(taskElem);
        insertTaskIndexAttr(taskElem);
    }
});

const taskNavElem = document.querySelector('#task-nav');
taskNavElem.addEventListener('click', (e) => {
    const filteredTasks = filterByTaskProperty(tasks, 'project', e);

    if (filteredTasks.length === 0) return;

    for (let i = 0; i < filteredTasks.length; i++) {
        displayTask(
            filteredTasks[i], valueNotEmpty(filteredTasks[i].notes),
            filteredTasks[i].dueDate
        );
    }

    taskElem = taskListElem.lastElementChild;
    taskInfoElem = taskElem.querySelector('.task-info-container');

    createTaskCheckbox(taskElem, taskInfoElem);
    createDeleteTaskElem(taskElem);
    insertTaskIndexAttr(taskElem);
});