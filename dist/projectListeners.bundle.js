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
/* harmony export */   "valueNotEmpty": () => (/* binding */ valueNotEmpty)
/* harmony export */ });


function valueNotEmpty(data) {
    return data.value.trim().length !== 0;
}


/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
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
/*!******************************************!*\
  !*** ./src/modules/project-listeners.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/modules/helper.js");



const addProjectButtonElem = document.querySelector('#add-project-button');
addProjectButtonElem.addEventListener('click', () => {
    const projectModalElem = document.querySelector('#project-modal');
    projectModalElem.showModal();

    if (!_project__WEBPACK_IMPORTED_MODULE_0__.projectNameInputElem.hasAttribute('required')) {
        _project__WEBPACK_IMPORTED_MODULE_0__.projectNameInputElem.setAttribute('required', '');
    }
});

const projectModalConfirmButtonElem = document.
    querySelector('#project-modal-confirm-button');

projectModalConfirmButtonElem.addEventListener('click', () => {
    if ((0,_helper__WEBPACK_IMPORTED_MODULE_1__.valueNotEmpty)(_project__WEBPACK_IMPORTED_MODULE_0__.projectNameInputElem)) {
        const project = (0,_project__WEBPACK_IMPORTED_MODULE_0__.Project)();

        project.addProject();
        project.listProjectName();
        project.displayProjectName();
    }
});

const projectModalCancelButtonElem = document
    .querySelector('#project-modal-cancel-button');

projectModalCancelButtonElem.addEventListener('click', () => {
    _project__WEBPACK_IMPORTED_MODULE_0__.projectNameInputElem.removeAttribute('required');
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdExpc3RlbmVycy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7O0FBRXpCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0p5Qzs7QUFFekM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOENBQThDLDJCQUEyQjtBQUN6RSxvREFBb0QsMkJBQTJCOztBQUUvRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QywyQkFBMkI7QUFDcEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDbkNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjBEO0FBQ2pCOztBQUV6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLHVFQUFpQztBQUMxQyxRQUFRLHVFQUFpQztBQUN6QztBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBLFFBQVEsc0RBQWEsQ0FBQywwREFBb0I7QUFDMUMsd0JBQXdCLGlEQUFPOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBLElBQUksMEVBQW9DO0FBQ3hDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LWxpc3RlbmVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyB2YWx1ZU5vdEVtcHR5IH07XG5cbmZ1bmN0aW9uIHZhbHVlTm90RW1wdHkoZGF0YSkge1xuICAgIHJldHVybiBkYXRhLnZhbHVlLnRyaW0oKS5sZW5ndGggIT09IDA7XG59XG4iLCJleHBvcnQgeyBQcm9qZWN0LCBwcm9qZWN0TmFtZUlucHV0RWxlbSB9O1xuXG5jb25zdCBwcm9qZWN0TmFtZUlucHV0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKTtcblxuZnVuY3Rpb24gUHJvamVjdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0TmFtZUlucHV0RWxlbS52YWx1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGlzdFByb2plY3ROYW1lKCkge1xuICAgICAgICBjb25zdCB0YXNrTW9kYWxQcm9qZWN0U2VsZWN0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXByb2plY3QnKTtcbiAgICAgICAgY29uc3QgdGFza01vZGFsUHJvamVjdE9wdGlvbkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgdGFza01vZGFsUHJvamVjdE9wdGlvbkVsZW0udmFsdWUgPSBgJHtwcm9qZWN0TmFtZUlucHV0RWxlbS52YWx1ZX1gO1xuICAgICAgICB0YXNrTW9kYWxQcm9qZWN0T3B0aW9uRWxlbS50ZXh0Q29udGVudCA9IGAke3Byb2plY3ROYW1lSW5wdXRFbGVtLnZhbHVlfWA7XG5cbiAgICAgICAgdGFza01vZGFsUHJvamVjdFNlbGVjdEVsZW0uYXBwZW5kQ2hpbGQodGFza01vZGFsUHJvamVjdE9wdGlvbkVsZW0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0TmFtZSgpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3RFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpO1xuICAgICAgICBjb25zdCBwcm9qZWN0SXRlbUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBwcm9qZWN0SXRlbUVsZW0udGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0TmFtZUlucHV0RWxlbS52YWx1ZX1gO1xuICAgICAgICBwcm9qZWN0SXRlbUVsZW0uY2xhc3NMaXN0XG4gICAgICAgICAgICAuYWRkKCdzaWRlYmFyLXRleHQnLCAnbWVkaXVtLXRleHQtc2l6ZScsICdjbGlja2FibGUtbm9uLWJ1dHRvbicpO1xuXG4gICAgICAgIHByb2plY3RMaXN0RWxlbS5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbUVsZW0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIGxpc3RQcm9qZWN0TmFtZSxcbiAgICAgICAgZGlzcGxheVByb2plY3ROYW1lLFxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFByb2plY3QsIHByb2plY3ROYW1lSW5wdXRFbGVtIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgdmFsdWVOb3RFbXB0eSB9IGZyb20gXCIuL2hlbHBlclwiO1xuXG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdC1idXR0b24nKTtcbmFkZFByb2plY3RCdXR0b25FbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RNb2RhbEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1tb2RhbCcpO1xuICAgIHByb2plY3RNb2RhbEVsZW0uc2hvd01vZGFsKCk7XG5cbiAgICBpZiAoIXByb2plY3ROYW1lSW5wdXRFbGVtLmhhc0F0dHJpYnV0ZSgncmVxdWlyZWQnKSkge1xuICAgICAgICBwcm9qZWN0TmFtZUlucHV0RWxlbS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIH1cbn0pO1xuXG5jb25zdCBwcm9qZWN0TW9kYWxDb25maXJtQnV0dG9uRWxlbSA9IGRvY3VtZW50LlxuICAgIHF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW1vZGFsLWNvbmZpcm0tYnV0dG9uJyk7XG5cbnByb2plY3RNb2RhbENvbmZpcm1CdXR0b25FbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICh2YWx1ZU5vdEVtcHR5KHByb2plY3ROYW1lSW5wdXRFbGVtKSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdCgpO1xuXG4gICAgICAgIHByb2plY3QuYWRkUHJvamVjdCgpO1xuICAgICAgICBwcm9qZWN0Lmxpc3RQcm9qZWN0TmFtZSgpO1xuICAgICAgICBwcm9qZWN0LmRpc3BsYXlQcm9qZWN0TmFtZSgpO1xuICAgIH1cbn0pO1xuXG5jb25zdCBwcm9qZWN0TW9kYWxDYW5jZWxCdXR0b25FbGVtID0gZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbW9kYWwtY2FuY2VsLWJ1dHRvbicpO1xuXG5wcm9qZWN0TW9kYWxDYW5jZWxCdXR0b25FbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHByb2plY3ROYW1lSW5wdXRFbGVtLnJlbW92ZUF0dHJpYnV0ZSgncmVxdWlyZWQnKTtcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9