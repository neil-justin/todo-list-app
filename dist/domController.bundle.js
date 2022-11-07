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
/* harmony export */   "displayTask": () => (/* binding */ displayTask)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/modules/helper.js");



function displayTask(task, isNotesEmpty, differenceInDays, differenceInYears) {
    const taskListElem = document.querySelector('#task-list');

    const taskElem = document.createElement('li');
    taskElem.classList.add('task');
    taskListElem.appendChild(taskElem);

    const taskInfoContainerElem = document.createElement('section');
    taskInfoContainerElem.classList.add('task-info-container');
    taskElem.appendChild(taskInfoContainerElem);0

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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tQ29udHJvbGxlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0U7O0FBRXhFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O1VDN0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOdUI7QUFDZ0M7O0FBRXZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0Q7O0FBRWhEO0FBQ0Esa0NBQWtDLGdCQUFnQjtBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUMsaUJBQWlCO0FBQ3hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msd0RBQWU7QUFDakQ7QUFDQTtBQUNBLGtDQUFrQyxtREFBVTtBQUM1QztBQUNBOztBQUVBLGlEQUFpRCxZQUFZO0FBQzdELFVBQVU7QUFDVjtBQUNBO0FBQ0EsY0FBYztBQUNkLDhCQUE4QixtREFBVTtBQUN4QztBQUNBOztBQUVBLHFEQUFxRCxZQUFZO0FBQ2pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2hlbHBlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2RvbS1jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IG5vdGVzTm90RW1wdHksIHRhc2tOYW1lTm90RW1wdHksIGdldERheU9mVGhlV2VlaywgZm9ybWF0RGF0ZSB9O1xuXG5mdW5jdGlvbiBub3Rlc05vdEVtcHR5KG5vdGVzKSB7XG4gICAgcmV0dXJuIG5vdGVzLnZhbHVlLnRyaW0oKS5sZW5ndGggIT09IDBcbn1cblxuZnVuY3Rpb24gdGFza05hbWVOb3RFbXB0eSh0YXNrKSB7XG4gICAgcmV0dXJuIHRhc2sudmFsdWUudHJpbSgpLmxlbmd0aCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gZ2V0RGF5T2ZUaGVXZWVrKGRhdGUpIHtcbiAgICBjb25zdCB3ZWVrID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JyxcbiAgICAgICAgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xuXG4gICAgcmV0dXJuIHdlZWtbZGF0ZS5nZXREYXkoKV07XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoZHVlRGF0ZSwgZGlmZkluWWVhcnMpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICB3ZWVrZGF5OiAnc2hvcnQnLFxuICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICBkYXk6ICdudW1lcmljJ1xuICAgIH1cblxuICAgIGlmIChkaWZmSW5ZZWFycyA+IDAgfHwgZGlmZkluWWVhcnMgPCAwKSB7XG4gICAgICAgIG9wdGlvbnMueWVhciA9ICdudW1lcmljJztcbiAgICB9XG5cbiAgICByZXR1cm4gZHVlRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywgb3B0aW9ucyk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCB7IGRpc3BsYXlUYXNrIH07XG5pbXBvcnQgeyBnZXREYXlPZlRoZVdlZWssIGZvcm1hdERhdGUgfSBmcm9tICcuL2hlbHBlcic7XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrKHRhc2ssIGlzTm90ZXNFbXB0eSwgZGlmZmVyZW5jZUluRGF5cywgZGlmZmVyZW5jZUluWWVhcnMpIHtcbiAgICBjb25zdCB0YXNrTGlzdEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1saXN0Jyk7XG5cbiAgICBjb25zdCB0YXNrRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgdGFza0VsZW0uY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgIHRhc2tMaXN0RWxlbS5hcHBlbmRDaGlsZCh0YXNrRWxlbSk7XG5cbiAgICBjb25zdCB0YXNrSW5mb0NvbnRhaW5lckVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgdGFza0luZm9Db250YWluZXJFbGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5mby1jb250YWluZXInKTtcbiAgICB0YXNrRWxlbS5hcHBlbmRDaGlsZCh0YXNrSW5mb0NvbnRhaW5lckVsZW0pOzBcblxuICAgIGNvbnN0IHRhc2tOYW1lRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdGFza05hbWVFbGVtLnRleHRDb250ZW50ID0gYCR7dGFzay5uYW1lLnZhbHVlfWA7XG4gICAgdGFza05hbWVFbGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbmFtZScpO1xuICAgIHRhc2tJbmZvQ29udGFpbmVyRWxlbS5hcHBlbmRDaGlsZCh0YXNrTmFtZUVsZW0pO1xuXG4gICAgaWYgKGlzTm90ZXNFbXB0eSkge1xuICAgICAgICBjb25zdCB0YXNrTm90ZXNFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrTm90ZXNFbGVtLnRleHRDb250ZW50ID0gYCR7dGFzay5ub3Rlcy52YWx1ZX1gO1xuICAgICAgICB0YXNrTm90ZXNFbGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbm90ZXMnKTtcbiAgICAgICAgdGFza0luZm9Db250YWluZXJFbGVtLmFwcGVuZENoaWxkKHRhc2tOb3Rlc0VsZW0pO1xuICAgIH1cblxuICAgIGlmICh0YXNrLmR1ZURhdGUudmFsdWVBc0RhdGUgIT09ICcnKSB7XG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0R1ZURhdGVFbGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZHVlLWRhdGUnKTtcbiAgICAgICAgdGFza0luZm9Db250YWluZXJFbGVtLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlRWxlbSk7XG5cbiAgICAgICAgbGV0IHRhc2tEdWVEYXRlO1xuXG4gICAgICAgIGlmIChkaWZmZXJlbmNlSW5EYXlzID49IDApIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgZGlmZmVyZW5jZUluRGF5cyA9PT0gMDpcbiAgICAgICAgICAgICAgICAgICAgdGFza0R1ZURhdGUgPSAnVG9kYXknO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGRpZmZlcmVuY2VJbkRheXMgPT09IDE6XG4gICAgICAgICAgICAgICAgICAgIHRhc2tEdWVEYXRlID0gJ1RvbW9ycm93JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBkaWZmZXJlbmNlSW5EYXlzIDw9IDc6XG4gICAgICAgICAgICAgICAgICAgIHRhc2tEdWVEYXRlID0gZ2V0RGF5T2ZUaGVXZWVrKHRhc2suZHVlRGF0ZS52YWx1ZUFzRGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRhc2tEdWVEYXRlID0gZm9ybWF0RGF0ZSh0YXNrLmR1ZURhdGUudmFsdWVBc0RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWZmZXJlbmNlSW5ZZWFycyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRhc2tEdWVEYXRlRWxlbS50ZXh0Q29udGVudCA9IGBEdWUgJHt0YXNrRHVlRGF0ZX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRpZmZlcmVuY2VJbkRheXMgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGFza0R1ZURhdGUgPSAnWWVzdGVyZGF5JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFza0R1ZURhdGUgPSBmb3JtYXREYXRlKHRhc2suZHVlRGF0ZS52YWx1ZUFzRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgZGlmZmVyZW5jZUluWWVhcnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0YXNrRHVlRGF0ZUVsZW0udGV4dENvbnRlbnQgPSBgT3ZlcmR1ZSAke3Rhc2tEdWVEYXRlfWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRhc2sucHJpb3JpdHkudmFsdWUpIHtcbiAgICAgICAgY2FzZSAnUHJpb3JpdHkgNCc6XG4gICAgICAgICAgICB0YXNrRWxlbS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eTQtdGFzaycpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1ByaW9yaXR5IDMnOlxuICAgICAgICAgICAgdGFza0VsZW0uY2xhc3NMaXN0LmFkZCgncHJpb3JpdHkzLXRhc2snKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdQcmlvcml0eSAyJzpcbiAgICAgICAgICAgIHRhc2tFbGVtLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Mi10YXNrJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUHJpb3JpdHkgMSc6XG4gICAgICAgICAgICB0YXNrRWxlbS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eTEtdGFzaycpO1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=