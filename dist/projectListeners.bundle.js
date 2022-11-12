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


function valueNotEmpty(data, key = null) {
    if (typeof data === 'object') {
        return data[key].value.trim().length !== 0;
    } else {
        return data.trim().length !== 0;
    }
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
    if ((0,_helper__WEBPACK_IMPORTED_MODULE_1__.valueNotEmpty)(_project__WEBPACK_IMPORTED_MODULE_0__.projectNameInputElem.value)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdExpc3RlbmVycy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSeUM7O0FBRXpDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QywyQkFBMkI7QUFDekUsb0RBQW9ELDJCQUEyQjs7QUFFL0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsMkJBQTJCO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ25DQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ04wRDtBQUNqQjs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUyx1RUFBaUM7QUFDMUMsUUFBUSx1RUFBaUM7QUFDekM7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHNEQUFhLENBQUMsZ0VBQTBCO0FBQ2hELHdCQUF3QixpREFBTzs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDBFQUFvQztBQUN4QyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvaGVscGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvcHJvamVjdC1saXN0ZW5lcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgdmFsdWVOb3RFbXB0eSB9O1xuXG5mdW5jdGlvbiB2YWx1ZU5vdEVtcHR5KGRhdGEsIGtleSA9IG51bGwpIHtcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBkYXRhW2tleV0udmFsdWUudHJpbSgpLmxlbmd0aCAhPT0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGF0YS50cmltKCkubGVuZ3RoICE9PSAwO1xuICAgIH1cbn1cbiIsImV4cG9ydCB7IFByb2plY3QsIHByb2plY3ROYW1lSW5wdXRFbGVtIH07XG5cbmNvbnN0IHByb2plY3ROYW1lSW5wdXRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xuXG5mdW5jdGlvbiBQcm9qZWN0KCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gW107XG5cbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3ROYW1lSW5wdXRFbGVtLnZhbHVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaXN0UHJvamVjdE5hbWUoKSB7XG4gICAgICAgIGNvbnN0IHRhc2tNb2RhbFByb2plY3RTZWxlY3RFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stcHJvamVjdCcpO1xuICAgICAgICBjb25zdCB0YXNrTW9kYWxQcm9qZWN0T3B0aW9uRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICB0YXNrTW9kYWxQcm9qZWN0T3B0aW9uRWxlbS52YWx1ZSA9IGAke3Byb2plY3ROYW1lSW5wdXRFbGVtLnZhbHVlfWA7XG4gICAgICAgIHRhc2tNb2RhbFByb2plY3RPcHRpb25FbGVtLnRleHRDb250ZW50ID0gYCR7cHJvamVjdE5hbWVJbnB1dEVsZW0udmFsdWV9YDtcblxuICAgICAgICB0YXNrTW9kYWxQcm9qZWN0U2VsZWN0RWxlbS5hcHBlbmRDaGlsZCh0YXNrTW9kYWxQcm9qZWN0T3B0aW9uRWxlbSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVByb2plY3ROYW1lKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0Jyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RJdGVtRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIHByb2plY3RJdGVtRWxlbS50ZXh0Q29udGVudCA9IGAke3Byb2plY3ROYW1lSW5wdXRFbGVtLnZhbHVlfWA7XG4gICAgICAgIHByb2plY3RJdGVtRWxlbS5jbGFzc0xpc3RcbiAgICAgICAgICAgIC5hZGQoJ3NpZGViYXItdGV4dCcsICdtZWRpdW0tdGV4dC1zaXplJywgJ2NsaWNrYWJsZS1ub24tYnV0dG9uJyk7XG5cbiAgICAgICAgcHJvamVjdExpc3RFbGVtLmFwcGVuZENoaWxkKHByb2plY3RJdGVtRWxlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkUHJvamVjdCxcbiAgICAgICAgbGlzdFByb2plY3ROYW1lLFxuICAgICAgICBkaXNwbGF5UHJvamVjdE5hbWUsXG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgUHJvamVjdCwgcHJvamVjdE5hbWVJbnB1dEVsZW0gfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyB2YWx1ZU5vdEVtcHR5IH0gZnJvbSBcIi4vaGVscGVyXCI7XG5cbmNvbnN0IGFkZFByb2plY3RCdXR0b25FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LWJ1dHRvbicpO1xuYWRkUHJvamVjdEJ1dHRvbkVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE1vZGFsRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW1vZGFsJyk7XG4gICAgcHJvamVjdE1vZGFsRWxlbS5zaG93TW9kYWwoKTtcblxuICAgIGlmICghcHJvamVjdE5hbWVJbnB1dEVsZW0uaGFzQXR0cmlidXRlKCdyZXF1aXJlZCcpKSB7XG4gICAgICAgIHByb2plY3ROYW1lSW5wdXRFbGVtLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgfVxufSk7XG5cbmNvbnN0IHByb2plY3RNb2RhbENvbmZpcm1CdXR0b25FbGVtID0gZG9jdW1lbnQuXG4gICAgcXVlcnlTZWxlY3RvcignI3Byb2plY3QtbW9kYWwtY29uZmlybS1idXR0b24nKTtcblxucHJvamVjdE1vZGFsQ29uZmlybUJ1dHRvbkVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKHZhbHVlTm90RW1wdHkocHJvamVjdE5hbWVJbnB1dEVsZW0udmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0KCk7XG5cbiAgICAgICAgcHJvamVjdC5hZGRQcm9qZWN0KCk7XG4gICAgICAgIHByb2plY3QubGlzdFByb2plY3ROYW1lKCk7XG4gICAgICAgIHByb2plY3QuZGlzcGxheVByb2plY3ROYW1lKCk7XG4gICAgfVxufSk7XG5cbmNvbnN0IHByb2plY3RNb2RhbENhbmNlbEJ1dHRvbkVsZW0gPSBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1tb2RhbC1jYW5jZWwtYnV0dG9uJyk7XG5cbnByb2plY3RNb2RhbENhbmNlbEJ1dHRvbkVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcHJvamVjdE5hbWVJbnB1dEVsZW0ucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcpO1xufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=