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


function displayTask(task, isNotesEmpty, taskDueDate, taskPriorityNumber) {
    const taskListElem = document.querySelector('#task-list');

    const taskElem = document.createElement('li');
    taskElem.classList.add('task', `${taskPriorityNumber}`);
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

    if (task.dueDate.valueAsDate !== null) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tQ29udHJvbGxlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnVDOztBQUV2QztBQUNBOztBQUVBO0FBQ0Esc0NBQXNDLG1CQUFtQjtBQUN6RDs7QUFFQTtBQUNBO0FBQ0EsaURBQWlEOztBQUVqRDtBQUNBLGtDQUFrQyxnQkFBZ0I7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDLGlCQUFpQjtBQUN4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlDQUF5QyxZQUFZO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2RvbS1jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHsgZGlzcGxheVRhc2ssIHJlc2V0VGFza01vZGFsIH07XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrKHRhc2ssIGlzTm90ZXNFbXB0eSwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eU51bWJlcikge1xuICAgIGNvbnN0IHRhc2tMaXN0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcblxuICAgIGNvbnN0IHRhc2tFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICB0YXNrRWxlbS5jbGFzc0xpc3QuYWRkKCd0YXNrJywgYCR7dGFza1ByaW9yaXR5TnVtYmVyfWApO1xuICAgIHRhc2tMaXN0RWxlbS5hcHBlbmRDaGlsZCh0YXNrRWxlbSk7XG5cbiAgICBjb25zdCB0YXNrSW5mb0NvbnRhaW5lckVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgdGFza0luZm9Db250YWluZXJFbGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5mby1jb250YWluZXInKTtcbiAgICB0YXNrRWxlbS5hcHBlbmRDaGlsZCh0YXNrSW5mb0NvbnRhaW5lckVsZW0pOyAwXG5cbiAgICBjb25zdCB0YXNrTmFtZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRhc2tOYW1lRWxlbS50ZXh0Q29udGVudCA9IGAke3Rhc2submFtZS52YWx1ZX1gO1xuICAgIHRhc2tOYW1lRWxlbS5jbGFzc0xpc3QuYWRkKCd0YXNrLW5hbWUnKTtcbiAgICB0YXNrSW5mb0NvbnRhaW5lckVsZW0uYXBwZW5kQ2hpbGQodGFza05hbWVFbGVtKTtcblxuICAgIGlmIChpc05vdGVzRW1wdHkpIHtcbiAgICAgICAgY29uc3QgdGFza05vdGVzRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza05vdGVzRWxlbS50ZXh0Q29udGVudCA9IGAke3Rhc2subm90ZXMudmFsdWV9YDtcbiAgICAgICAgdGFza05vdGVzRWxlbS5jbGFzc0xpc3QuYWRkKCd0YXNrLW5vdGVzJyk7XG4gICAgICAgIHRhc2tJbmZvQ29udGFpbmVyRWxlbS5hcHBlbmRDaGlsZCh0YXNrTm90ZXNFbGVtKTtcbiAgICB9XG5cbiAgICBpZiAodGFzay5kdWVEYXRlLnZhbHVlQXNEYXRlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0R1ZURhdGVFbGVtLnRleHRDb250ZW50ID0gYCR7dGFza0R1ZURhdGV9YDtcbiAgICAgICAgdGFza0R1ZURhdGVFbGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZHVlLWRhdGUnKTtcbiAgICAgICAgdGFza0luZm9Db250YWluZXJFbGVtLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlRWxlbSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXNldFRhc2tNb2RhbCh0YXNrRm9ybUNvbnRyb2wpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0YXNrRm9ybUNvbnRyb2wpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ3ByaW9yaXR5Jykge1xuICAgICAgICAgICAgdGFza0Zvcm1Db250cm9sW2tleV0udmFsdWUgPSAnUHJpb3JpdHkgNCc7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncHJvamVjdCcpIHtcbiAgICAgICAgICAgIHRhc2tGb3JtQ29udHJvbFtrZXldLnZhbHVlID0gJ05vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFza0Zvcm1Db250cm9sW2tleV0udmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=