/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/*!*******************************************!*\
  !*** ./src/modules/projects-listeners.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/modules/projects.js");


const addProjectButtonElem = document.querySelector('#add-project-button');
addProjectButtonElem.addEventListener('click', () => {
    const projectModalElem = document.querySelector('#project-modal');
    projectModalElem.showModal();

    if (!_projects__WEBPACK_IMPORTED_MODULE_0__.projectNameInputElem.hasAttribute('required')) {
        _projects__WEBPACK_IMPORTED_MODULE_0__.projectNameInputElem.setAttribute('required', '');
    }
});

const projectModalConfirmButtonElem = document.
    querySelector('#project-modal-confirm-button');

projectModalConfirmButtonElem.addEventListener('click', () => {
    const project = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.Project)();

    project.addProject();
    project.listProjectName();
    project.displayProjectName();
});

const projectModalCancelButtonElem = document
    .querySelector('#project-modal-cancel-button');

projectModalCancelButtonElem.addEventListener('click', () => {
    _projects__WEBPACK_IMPORTED_MODULE_0__.projectNameInputElem.removeAttribute('required');
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHNMaXN0ZW5lcnMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5Qzs7QUFFekM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOENBQThDLDJCQUEyQjtBQUN6RSxvREFBb0QsMkJBQTJCOztBQUUvRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QywyQkFBMkI7QUFDcEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDbkNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMkQ7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMsd0VBQWlDO0FBQzFDLFFBQVEsd0VBQWlDO0FBQ3pDO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGtEQUFPOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDJFQUFvQztBQUN4QyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy1saXN0ZW5lcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgUHJvamVjdCwgcHJvamVjdE5hbWVJbnB1dEVsZW0gfTtcblxuY29uc3QgcHJvamVjdE5hbWVJbnB1dEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJyk7XG5cbmZ1bmN0aW9uIFByb2plY3QoKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XG4gICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdE5hbWVJbnB1dEVsZW0udmFsdWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpc3RQcm9qZWN0TmFtZSgpIHtcbiAgICAgICAgY29uc3QgdGFza01vZGFsUHJvamVjdFNlbGVjdEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1wcm9qZWN0Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tNb2RhbFByb2plY3RPcHRpb25FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHRhc2tNb2RhbFByb2plY3RPcHRpb25FbGVtLnZhbHVlID0gYCR7cHJvamVjdE5hbWVJbnB1dEVsZW0udmFsdWV9YDtcbiAgICAgICAgdGFza01vZGFsUHJvamVjdE9wdGlvbkVsZW0udGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0TmFtZUlucHV0RWxlbS52YWx1ZX1gO1xuXG4gICAgICAgIHRhc2tNb2RhbFByb2plY3RTZWxlY3RFbGVtLmFwcGVuZENoaWxkKHRhc2tNb2RhbFByb2plY3RPcHRpb25FbGVtKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdE5hbWUoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdEl0ZW1FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgcHJvamVjdEl0ZW1FbGVtLnRleHRDb250ZW50ID0gYCR7cHJvamVjdE5hbWVJbnB1dEVsZW0udmFsdWV9YDtcbiAgICAgICAgcHJvamVjdEl0ZW1FbGVtLmNsYXNzTGlzdFxuICAgICAgICAgICAgLmFkZCgnc2lkZWJhci10ZXh0JywgJ21lZGl1bS10ZXh0LXNpemUnLCAnY2xpY2thYmxlLW5vbi1idXR0b24nKTtcblxuICAgICAgICBwcm9qZWN0TGlzdEVsZW0uYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW1FbGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRQcm9qZWN0LFxuICAgICAgICBsaXN0UHJvamVjdE5hbWUsXG4gICAgICAgIGRpc3BsYXlQcm9qZWN0TmFtZSxcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBQcm9qZWN0LCBwcm9qZWN0TmFtZUlucHV0RWxlbSB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmNvbnN0IGFkZFByb2plY3RCdXR0b25FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LWJ1dHRvbicpO1xuYWRkUHJvamVjdEJ1dHRvbkVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE1vZGFsRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW1vZGFsJyk7XG4gICAgcHJvamVjdE1vZGFsRWxlbS5zaG93TW9kYWwoKTtcblxuICAgIGlmICghcHJvamVjdE5hbWVJbnB1dEVsZW0uaGFzQXR0cmlidXRlKCdyZXF1aXJlZCcpKSB7XG4gICAgICAgIHByb2plY3ROYW1lSW5wdXRFbGVtLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgfVxufSk7XG5cbmNvbnN0IHByb2plY3RNb2RhbENvbmZpcm1CdXR0b25FbGVtID0gZG9jdW1lbnQuXG4gICAgcXVlcnlTZWxlY3RvcignI3Byb2plY3QtbW9kYWwtY29uZmlybS1idXR0b24nKTtcblxucHJvamVjdE1vZGFsQ29uZmlybUJ1dHRvbkVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QoKTtcblxuICAgIHByb2plY3QuYWRkUHJvamVjdCgpO1xuICAgIHByb2plY3QubGlzdFByb2plY3ROYW1lKCk7XG4gICAgcHJvamVjdC5kaXNwbGF5UHJvamVjdE5hbWUoKTtcbn0pO1xuXG5jb25zdCBwcm9qZWN0TW9kYWxDYW5jZWxCdXR0b25FbGVtID0gZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbW9kYWwtY2FuY2VsLWJ1dHRvbicpO1xuXG5wcm9qZWN0TW9kYWxDYW5jZWxCdXR0b25FbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHByb2plY3ROYW1lSW5wdXRFbGVtLnJlbW92ZUF0dHJpYnV0ZSgncmVxdWlyZWQnKTtcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9