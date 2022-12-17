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
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "defaultProjects": () => (/* binding */ defaultProjects)
/* harmony export */ });


const todayDate = new Date();
const tomorrowDate = new Date();
tomorrowDate.setDate(tomorrowDate.getDate() + 1);

const defaultProjects = {
    'inbox': [
        {
            name: 'Go to the wet market',
            notes: null,
            project: 'inbox',
            priority: 'Priority 4',
            dueDate: todayDate,
        },
        {
            name: 'Export bitwarden passwords',
            notes: null,
            project: 'inbox',
            priority: 'Priority 1',
            dueDate: tomorrowDate,
        },
        {
            name: 'Wash laptop\'s cleaning clothes',
            notes: 'Do not forget that you have three of these!',
            project: 'inbox',
            priority: 'Priority 2',
            dueDate: tomorrowDate,
        }
    ]
}

function Project(projects, project) {
    function updateProjects(todo) {
        switch (todo) {
            case 'add':
                projects[project.value] = null;
                break;
            case 'edit':
                const editedProjectKey = document.querySelector('[data-opened-tab]')
                    .textContent;
                projects[project.value] = projects[editedProjectKey];
                delete projects[editedProjectKey];
                break;
        }

        return projects;
    }

    return {
        updateProjects
    }
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTm9DOztBQUVwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCB7IGRlZmF1bHRQcm9qZWN0cywgUHJvamVjdCB9O1xuXG5jb25zdCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpO1xuY29uc3QgdG9tb3Jyb3dEYXRlID0gbmV3IERhdGUoKTtcbnRvbW9ycm93RGF0ZS5zZXREYXRlKHRvbW9ycm93RGF0ZS5nZXREYXRlKCkgKyAxKTtcblxuY29uc3QgZGVmYXVsdFByb2plY3RzID0ge1xuICAgICdpbmJveCc6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0dvIHRvIHRoZSB3ZXQgbWFya2V0JyxcbiAgICAgICAgICAgIG5vdGVzOiBudWxsLFxuICAgICAgICAgICAgcHJvamVjdDogJ2luYm94JyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnUHJpb3JpdHkgNCcsXG4gICAgICAgICAgICBkdWVEYXRlOiB0b2RheURhdGUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdFeHBvcnQgYml0d2FyZGVuIHBhc3N3b3JkcycsXG4gICAgICAgICAgICBub3RlczogbnVsbCxcbiAgICAgICAgICAgIHByb2plY3Q6ICdpbmJveCcsXG4gICAgICAgICAgICBwcmlvcml0eTogJ1ByaW9yaXR5IDEnLFxuICAgICAgICAgICAgZHVlRGF0ZTogdG9tb3Jyb3dEYXRlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnV2FzaCBsYXB0b3BcXCdzIGNsZWFuaW5nIGNsb3RoZXMnLFxuICAgICAgICAgICAgbm90ZXM6ICdEbyBub3QgZm9yZ2V0IHRoYXQgeW91IGhhdmUgdGhyZWUgb2YgdGhlc2UhJyxcbiAgICAgICAgICAgIHByb2plY3Q6ICdpbmJveCcsXG4gICAgICAgICAgICBwcmlvcml0eTogJ1ByaW9yaXR5IDInLFxuICAgICAgICAgICAgZHVlRGF0ZTogdG9tb3Jyb3dEYXRlLFxuICAgICAgICB9XG4gICAgXVxufVxuXG5mdW5jdGlvbiBQcm9qZWN0KHByb2plY3RzLCBwcm9qZWN0KSB7XG4gICAgZnVuY3Rpb24gdXBkYXRlUHJvamVjdHModG9kbykge1xuICAgICAgICBzd2l0Y2ggKHRvZG8pIHtcbiAgICAgICAgICAgIGNhc2UgJ2FkZCc6XG4gICAgICAgICAgICAgICAgcHJvamVjdHNbcHJvamVjdC52YWx1ZV0gPSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZWRpdCc6XG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdGVkUHJvamVjdEtleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW9wZW5lZC10YWJdJylcbiAgICAgICAgICAgICAgICAgICAgLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIHByb2plY3RzW3Byb2plY3QudmFsdWVdID0gcHJvamVjdHNbZWRpdGVkUHJvamVjdEtleV07XG4gICAgICAgICAgICAgICAgZGVsZXRlIHByb2plY3RzW2VkaXRlZFByb2plY3RLZXldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByb2plY3RzO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHVwZGF0ZVByb2plY3RzXG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==