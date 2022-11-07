/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!***************************************!*\
  !*** ./src/modules/dom-controller.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayTask": () => (/* binding */ displayTask),
/* harmony export */   "resetTaskModal": () => (/* binding */ resetTaskModal)
/* harmony export */ });


function displayTask(task, isNotesEmpty, taskPriorityNumber, taskDueDate = null) {
    const taskListElem = document.querySelector('#task-list');

    const taskElem = document.createElement('li');
    taskElem.classList.add('task', `${taskPriorityNumber}`);
    taskListElem.appendChild(taskElem);

    const taskInfoContainerElem = document.createElement('section');
    taskInfoContainerElem.classList.add('task-info-container');
    taskElem.appendChild(taskInfoContainerElem);

    const taskNameElem = document.createElement('h3');
    taskNameElem.textContent = `${task.name.value}`;
    taskNameElem.classList.add('task-name');
    taskInfoContainerElem.appendChild(taskNameElem);

    if (isNotesEmpty) {
        const taskNotesElem = document.createElement('p');
        taskNotesElem.textContent = `${task.notes.value}`;
        taskNotesElem.classList.add('task-notes');
        taskInfoContainerElem.appendChild(taskNotesElem);
    }

    if (taskDueDate !== null) {
        const taskDueDateElem = document.createElement('p');
        taskDueDateElem.textContent = `${taskDueDate}`;
        taskDueDateElem.classList.add('task-due-date');
        taskInfoContainerElem.appendChild(taskDueDateElem);
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tQ29udHJvbGxlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnVDOztBQUV2QztBQUNBOztBQUVBO0FBQ0Esc0NBQXNDLG1CQUFtQjtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsZ0JBQWdCO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QyxpQkFBaUI7QUFDeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsWUFBWTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9kb20tY29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCB7IGRpc3BsYXlUYXNrLCByZXNldFRhc2tNb2RhbCB9O1xuXG5mdW5jdGlvbiBkaXNwbGF5VGFzayh0YXNrLCBpc05vdGVzRW1wdHksIHRhc2tQcmlvcml0eU51bWJlciwgdGFza0R1ZURhdGUgPSBudWxsKSB7XG4gICAgY29uc3QgdGFza0xpc3RFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpO1xuXG4gICAgY29uc3QgdGFza0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHRhc2tFbGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2snLCBgJHt0YXNrUHJpb3JpdHlOdW1iZXJ9YCk7XG4gICAgdGFza0xpc3RFbGVtLmFwcGVuZENoaWxkKHRhc2tFbGVtKTtcblxuICAgIGNvbnN0IHRhc2tJbmZvQ29udGFpbmVyRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICB0YXNrSW5mb0NvbnRhaW5lckVsZW0uY2xhc3NMaXN0LmFkZCgndGFzay1pbmZvLWNvbnRhaW5lcicpO1xuICAgIHRhc2tFbGVtLmFwcGVuZENoaWxkKHRhc2tJbmZvQ29udGFpbmVyRWxlbSk7XG5cbiAgICBjb25zdCB0YXNrTmFtZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRhc2tOYW1lRWxlbS50ZXh0Q29udGVudCA9IGAke3Rhc2submFtZS52YWx1ZX1gO1xuICAgIHRhc2tOYW1lRWxlbS5jbGFzc0xpc3QuYWRkKCd0YXNrLW5hbWUnKTtcbiAgICB0YXNrSW5mb0NvbnRhaW5lckVsZW0uYXBwZW5kQ2hpbGQodGFza05hbWVFbGVtKTtcblxuICAgIGlmIChpc05vdGVzRW1wdHkpIHtcbiAgICAgICAgY29uc3QgdGFza05vdGVzRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza05vdGVzRWxlbS50ZXh0Q29udGVudCA9IGAke3Rhc2subm90ZXMudmFsdWV9YDtcbiAgICAgICAgdGFza05vdGVzRWxlbS5jbGFzc0xpc3QuYWRkKCd0YXNrLW5vdGVzJyk7XG4gICAgICAgIHRhc2tJbmZvQ29udGFpbmVyRWxlbS5hcHBlbmRDaGlsZCh0YXNrTm90ZXNFbGVtKTtcbiAgICB9XG5cbiAgICBpZiAodGFza0R1ZURhdGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrRHVlRGF0ZUVsZW0udGV4dENvbnRlbnQgPSBgJHt0YXNrRHVlRGF0ZX1gO1xuICAgICAgICB0YXNrRHVlRGF0ZUVsZW0uY2xhc3NMaXN0LmFkZCgndGFzay1kdWUtZGF0ZScpO1xuICAgICAgICB0YXNrSW5mb0NvbnRhaW5lckVsZW0uYXBwZW5kQ2hpbGQodGFza0R1ZURhdGVFbGVtKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0VGFza01vZGFsKHRhc2tGb3JtQ29udHJvbCkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHRhc2tGb3JtQ29udHJvbCkge1xuICAgICAgICBpZiAoa2V5ID09PSAncHJpb3JpdHknKSB7XG4gICAgICAgICAgICB0YXNrRm9ybUNvbnRyb2xba2V5XS52YWx1ZSA9ICdQcmlvcml0eSA0JztcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdwcm9qZWN0Jykge1xuICAgICAgICAgICAgdGFza0Zvcm1Db250cm9sW2tleV0udmFsdWUgPSAnTm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrRm9ybUNvbnRyb2xba2V5XS52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==