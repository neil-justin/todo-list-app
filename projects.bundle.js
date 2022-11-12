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
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });


function Project() {
    const projects = [];
    const projectNameInputElem = document.querySelector('#project-name');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm1COztBQUVuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QywyQkFBMkI7QUFDekUsb0RBQW9ELDJCQUEyQjs7QUFFL0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsMkJBQTJCO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvcHJvamVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgeyBQcm9qZWN0IH07XG5cbmZ1bmN0aW9uIFByb2plY3QoKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBbXTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKTtcblxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XG4gICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdE5hbWVJbnB1dEVsZW0udmFsdWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpc3RQcm9qZWN0TmFtZSgpIHtcbiAgICAgICAgY29uc3QgdGFza01vZGFsUHJvamVjdFNlbGVjdEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1wcm9qZWN0Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tNb2RhbFByb2plY3RPcHRpb25FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHRhc2tNb2RhbFByb2plY3RPcHRpb25FbGVtLnZhbHVlID0gYCR7cHJvamVjdE5hbWVJbnB1dEVsZW0udmFsdWV9YDtcbiAgICAgICAgdGFza01vZGFsUHJvamVjdE9wdGlvbkVsZW0udGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0TmFtZUlucHV0RWxlbS52YWx1ZX1gO1xuXG4gICAgICAgIHRhc2tNb2RhbFByb2plY3RTZWxlY3RFbGVtLmFwcGVuZENoaWxkKHRhc2tNb2RhbFByb2plY3RPcHRpb25FbGVtKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdE5hbWUoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdEl0ZW1FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgcHJvamVjdEl0ZW1FbGVtLnRleHRDb250ZW50ID0gYCR7cHJvamVjdE5hbWVJbnB1dEVsZW0udmFsdWV9YDtcbiAgICAgICAgcHJvamVjdEl0ZW1FbGVtLmNsYXNzTGlzdFxuICAgICAgICAgICAgLmFkZCgnc2lkZWJhci10ZXh0JywgJ21lZGl1bS10ZXh0LXNpemUnLCAnY2xpY2thYmxlLW5vbi1idXR0b24nKTtcblxuICAgICAgICBwcm9qZWN0TGlzdEVsZW0uYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW1FbGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRQcm9qZWN0LFxuICAgICAgICBsaXN0UHJvamVjdE5hbWUsXG4gICAgICAgIGRpc3BsYXlQcm9qZWN0TmFtZSxcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9