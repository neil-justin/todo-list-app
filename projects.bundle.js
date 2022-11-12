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
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "projectNameInputElem": () => (/* binding */ projectNameInputElem)
/* harmony export */ });


const projectNameInputElem = document.querySelector('#project-name');

function Project() {
    const projects = [];

    function addProject() {
        projects.push(projectNameInputElem.value);
    }

    function listProjectName() {
        const taskModalProjectSelectElem = document.querySelector('#task-project');
        const taskModalProjectOptionElem = document.createElement('option');
        taskModalProjectOptionElem.value = `${projectNameInputElem.value}`;
        taskModalProjectOptionElem.textContent = `${projectNameInputElem.value}`;

        taskModalProjectSelectElem.appendChild(taskModalProjectOptionElem);
    }

    function displayProjectName() {
        const projectListElem = document.querySelector('#project-list');
        const projectItemElem = document.createElement('li');
        projectItemElem.textContent = `${projectNameInputElem.value}`;
        projectItemElem.classList
            .add('sidebar-text', 'medium-text-size', 'clickable-non-button');

        projectListElem.appendChild(projectItemElem);
    }

    return {
        addProject,
        listProjectName,
        displayProjectName,
    }
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ055Qzs7QUFFekM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOENBQThDLDJCQUEyQjtBQUN6RSxvREFBb0QsMkJBQTJCOztBQUUvRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QywyQkFBMkI7QUFDcEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCB7IFByb2plY3QsIHByb2plY3ROYW1lSW5wdXRFbGVtIH07XG5cbmNvbnN0IHByb2plY3ROYW1lSW5wdXRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xuXG5mdW5jdGlvbiBQcm9qZWN0KCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gW107XG5cbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3ROYW1lSW5wdXRFbGVtLnZhbHVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaXN0UHJvamVjdE5hbWUoKSB7XG4gICAgICAgIGNvbnN0IHRhc2tNb2RhbFByb2plY3RTZWxlY3RFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stcHJvamVjdCcpO1xuICAgICAgICBjb25zdCB0YXNrTW9kYWxQcm9qZWN0T3B0aW9uRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICB0YXNrTW9kYWxQcm9qZWN0T3B0aW9uRWxlbS52YWx1ZSA9IGAke3Byb2plY3ROYW1lSW5wdXRFbGVtLnZhbHVlfWA7XG4gICAgICAgIHRhc2tNb2RhbFByb2plY3RPcHRpb25FbGVtLnRleHRDb250ZW50ID0gYCR7cHJvamVjdE5hbWVJbnB1dEVsZW0udmFsdWV9YDtcblxuICAgICAgICB0YXNrTW9kYWxQcm9qZWN0U2VsZWN0RWxlbS5hcHBlbmRDaGlsZCh0YXNrTW9kYWxQcm9qZWN0T3B0aW9uRWxlbSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVByb2plY3ROYW1lKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0Jyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RJdGVtRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIHByb2plY3RJdGVtRWxlbS50ZXh0Q29udGVudCA9IGAke3Byb2plY3ROYW1lSW5wdXRFbGVtLnZhbHVlfWA7XG4gICAgICAgIHByb2plY3RJdGVtRWxlbS5jbGFzc0xpc3RcbiAgICAgICAgICAgIC5hZGQoJ3NpZGViYXItdGV4dCcsICdtZWRpdW0tdGV4dC1zaXplJywgJ2NsaWNrYWJsZS1ub24tYnV0dG9uJyk7XG5cbiAgICAgICAgcHJvamVjdExpc3RFbGVtLmFwcGVuZENoaWxkKHByb2plY3RJdGVtRWxlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkUHJvamVjdCxcbiAgICAgICAgbGlzdFByb2plY3ROYW1lLFxuICAgICAgICBkaXNwbGF5UHJvamVjdE5hbWUsXG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==