/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/helper.js":
/*!*******************************!*\
  !*** ./src/modules/helper.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatDate": () => (/* binding */ formatDate),
/* harmony export */   "getDayOfTheWeek": () => (/* binding */ getDayOfTheWeek),
/* harmony export */   "notesNotEmpty": () => (/* binding */ notesNotEmpty),
/* harmony export */   "taskNameNotEmpty": () => (/* binding */ taskNameNotEmpty)
/* harmony export */ });


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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./src/modules/dom-controller.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayTask": () => (/* binding */ displayTask),
/* harmony export */   "resetTaskModal": () => (/* binding */ resetTaskModal)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/modules/helper.js");



function displayTask(task, isNotesEmpty, differenceInDays, differenceInYears) {
    const taskListElem = document.querySelector('#task-list');

    const taskElem = document.createElement('li');
    taskElem.classList.add('task');
    taskListElem.appendChild(taskElem);

    const taskInfoContainerElem = document.createElement('section');
    taskInfoContainerElem.classList.add('task-info-container');
    taskElem.appendChild(taskInfoContainerElem); 0

    const taskNameElem = document.createElement('h2');
    taskNameElem.textContent = `${task.name.value}`;
    taskNameElem.classList.add('task-name');
    taskInfoContainerElem.appendChild(taskNameElem);

    if (isNotesEmpty) {
        const taskNotesElem = document.createElement('p');
        taskNotesElem.textContent = `${task.notes.value}`;
        taskNotesElem.classList.add('task-notes');
        taskInfoContainerElem.appendChild(taskNotesElem);
    }

    if (task.dueDate.valueAsDate !== '') {
        const taskDueDateElem = document.createElement('p');
        taskDueDateElem.classList.add('task-due-date');
        taskInfoContainerElem.appendChild(taskDueDateElem);

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
                    taskDueDate = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.getDayOfTheWeek)(task.dueDate.valueAsDate);
                    break;
                default:
                    taskDueDate = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.formatDate)(task.dueDate.valueAsDate,
                        differenceInYears);
            }

            taskDueDateElem.textContent = `Due ${taskDueDate}`;
        } else {
            if (differenceInDays === -1) {
                taskDueDate = 'Yesterday';
            } else {
                taskDueDate = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.formatDate)(task.dueDate.valueAsDate,
                    differenceInYears);
            }

            taskDueDateElem.textContent = `Overdue ${taskDueDate}`;
        }
    }

    switch (task.priority.value) {
        case 'Priority 4':
            taskElem.classList.add('priority4-task');
            break;
        case 'Priority 3':
            taskElem.classList.add('priority3-task');
            break;
        case 'Priority 2':
            taskElem.classList.add('priority2-task');
            break;
        case 'Priority 1':
            taskElem.classList.add('priority1-task');
    }
}

function resetTaskModal(taskFormControl) {
    for (const key in taskFormControl) {
        if (key === 'priority') {
            taskFormControl[key].value = 'Priority 4';
        } else if (key === 'project') {
            taskFormControl[key].value = 'None';
        } else {
            taskFormControl[key].value = '';
        }
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tQ29udHJvbGxlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0U7O0FBRXhFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O1VDN0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnVDO0FBQ2dCOztBQUV2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaURBQWlEOztBQUVqRDtBQUNBLGtDQUFrQyxnQkFBZ0I7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDLGlCQUFpQjtBQUN4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHdEQUFlO0FBQ2pEO0FBQ0E7QUFDQSxrQ0FBa0MsbURBQVU7QUFDNUM7QUFDQTs7QUFFQSxpREFBaUQsWUFBWTtBQUM3RCxVQUFVO0FBQ1Y7QUFDQTtBQUNBLGNBQWM7QUFDZCw4QkFBOEIsbURBQVU7QUFDeEM7QUFDQTs7QUFFQSxxREFBcUQsWUFBWTtBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9kb20tY29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBub3Rlc05vdEVtcHR5LCB0YXNrTmFtZU5vdEVtcHR5LCBnZXREYXlPZlRoZVdlZWssIGZvcm1hdERhdGUgfTtcblxuZnVuY3Rpb24gbm90ZXNOb3RFbXB0eShub3Rlcykge1xuICAgIHJldHVybiBub3Rlcy52YWx1ZS50cmltKCkubGVuZ3RoICE9PSAwXG59XG5cbmZ1bmN0aW9uIHRhc2tOYW1lTm90RW1wdHkodGFzaykge1xuICAgIHJldHVybiB0YXNrLnZhbHVlLnRyaW0oKS5sZW5ndGggIT09IDA7XG59XG5cbmZ1bmN0aW9uIGdldERheU9mVGhlV2VlayhkYXRlKSB7XG4gICAgY29uc3Qgd2VlayA9IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsXG4gICAgICAgICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXTtcblxuICAgIHJldHVybiB3ZWVrW2RhdGUuZ2V0RGF5KCldO1xufVxuXG5mdW5jdGlvbiBmb3JtYXREYXRlKGR1ZURhdGUsIGRpZmZJblllYXJzKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgd2Vla2RheTogJ3Nob3J0JyxcbiAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgZGF5OiAnbnVtZXJpYydcbiAgICB9XG5cbiAgICBpZiAoZGlmZkluWWVhcnMgPiAwIHx8IGRpZmZJblllYXJzIDwgMCkge1xuICAgICAgICBvcHRpb25zLnllYXIgPSAnbnVtZXJpYyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGR1ZURhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIG9wdGlvbnMpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgeyBkaXNwbGF5VGFzaywgcmVzZXRUYXNrTW9kYWwgfTtcbmltcG9ydCB7IGdldERheU9mVGhlV2VlaywgZm9ybWF0RGF0ZSB9IGZyb20gJy4vaGVscGVyJztcblxuZnVuY3Rpb24gZGlzcGxheVRhc2sodGFzaywgaXNOb3Rlc0VtcHR5LCBkaWZmZXJlbmNlSW5EYXlzLCBkaWZmZXJlbmNlSW5ZZWFycykge1xuICAgIGNvbnN0IHRhc2tMaXN0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcblxuICAgIGNvbnN0IHRhc2tFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICB0YXNrRWxlbS5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgdGFza0xpc3RFbGVtLmFwcGVuZENoaWxkKHRhc2tFbGVtKTtcblxuICAgIGNvbnN0IHRhc2tJbmZvQ29udGFpbmVyRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICB0YXNrSW5mb0NvbnRhaW5lckVsZW0uY2xhc3NMaXN0LmFkZCgndGFzay1pbmZvLWNvbnRhaW5lcicpO1xuICAgIHRhc2tFbGVtLmFwcGVuZENoaWxkKHRhc2tJbmZvQ29udGFpbmVyRWxlbSk7IDBcblxuICAgIGNvbnN0IHRhc2tOYW1lRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdGFza05hbWVFbGVtLnRleHRDb250ZW50ID0gYCR7dGFzay5uYW1lLnZhbHVlfWA7XG4gICAgdGFza05hbWVFbGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbmFtZScpO1xuICAgIHRhc2tJbmZvQ29udGFpbmVyRWxlbS5hcHBlbmRDaGlsZCh0YXNrTmFtZUVsZW0pO1xuXG4gICAgaWYgKGlzTm90ZXNFbXB0eSkge1xuICAgICAgICBjb25zdCB0YXNrTm90ZXNFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrTm90ZXNFbGVtLnRleHRDb250ZW50ID0gYCR7dGFzay5ub3Rlcy52YWx1ZX1gO1xuICAgICAgICB0YXNrTm90ZXNFbGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbm90ZXMnKTtcbiAgICAgICAgdGFza0luZm9Db250YWluZXJFbGVtLmFwcGVuZENoaWxkKHRhc2tOb3Rlc0VsZW0pO1xuICAgIH1cblxuICAgIGlmICh0YXNrLmR1ZURhdGUudmFsdWVBc0RhdGUgIT09ICcnKSB7XG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0R1ZURhdGVFbGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZHVlLWRhdGUnKTtcbiAgICAgICAgdGFza0luZm9Db250YWluZXJFbGVtLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlRWxlbSk7XG5cbiAgICAgICAgbGV0IHRhc2tEdWVEYXRlO1xuXG4gICAgICAgIGlmIChkaWZmZXJlbmNlSW5EYXlzID49IDApIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgZGlmZmVyZW5jZUluRGF5cyA9PT0gMDpcbiAgICAgICAgICAgICAgICAgICAgdGFza0R1ZURhdGUgPSAnVG9kYXknO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGRpZmZlcmVuY2VJbkRheXMgPT09IDE6XG4gICAgICAgICAgICAgICAgICAgIHRhc2tEdWVEYXRlID0gJ1RvbW9ycm93JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBkaWZmZXJlbmNlSW5EYXlzIDw9IDc6XG4gICAgICAgICAgICAgICAgICAgIHRhc2tEdWVEYXRlID0gZ2V0RGF5T2ZUaGVXZWVrKHRhc2suZHVlRGF0ZS52YWx1ZUFzRGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRhc2tEdWVEYXRlID0gZm9ybWF0RGF0ZSh0YXNrLmR1ZURhdGUudmFsdWVBc0RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWZmZXJlbmNlSW5ZZWFycyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRhc2tEdWVEYXRlRWxlbS50ZXh0Q29udGVudCA9IGBEdWUgJHt0YXNrRHVlRGF0ZX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRpZmZlcmVuY2VJbkRheXMgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGFza0R1ZURhdGUgPSAnWWVzdGVyZGF5JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFza0R1ZURhdGUgPSBmb3JtYXREYXRlKHRhc2suZHVlRGF0ZS52YWx1ZUFzRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgZGlmZmVyZW5jZUluWWVhcnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0YXNrRHVlRGF0ZUVsZW0udGV4dENvbnRlbnQgPSBgT3ZlcmR1ZSAke3Rhc2tEdWVEYXRlfWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRhc2sucHJpb3JpdHkudmFsdWUpIHtcbiAgICAgICAgY2FzZSAnUHJpb3JpdHkgNCc6XG4gICAgICAgICAgICB0YXNrRWxlbS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eTQtdGFzaycpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1ByaW9yaXR5IDMnOlxuICAgICAgICAgICAgdGFza0VsZW0uY2xhc3NMaXN0LmFkZCgncHJpb3JpdHkzLXRhc2snKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdQcmlvcml0eSAyJzpcbiAgICAgICAgICAgIHRhc2tFbGVtLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Mi10YXNrJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUHJpb3JpdHkgMSc6XG4gICAgICAgICAgICB0YXNrRWxlbS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eTEtdGFzaycpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVzZXRUYXNrTW9kYWwodGFza0Zvcm1Db250cm9sKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGFza0Zvcm1Db250cm9sKSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdwcmlvcml0eScpIHtcbiAgICAgICAgICAgIHRhc2tGb3JtQ29udHJvbFtrZXldLnZhbHVlID0gJ1ByaW9yaXR5IDQnO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgICAgICB0YXNrRm9ybUNvbnRyb2xba2V5XS52YWx1ZSA9ICdOb25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhc2tGb3JtQ29udHJvbFtrZXldLnZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9