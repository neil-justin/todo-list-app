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


const defaultProjects = {
    'inbox': [
        {
            name: 'Go to the wet market',
            notes: null,
            project: 'inbox',
            priority: 'Priority 4',
            dueDate: new Date(2022, 10, 18)
        },
        {
            name: 'Export bitwarden passwords',
            notes: null,
            project: 'inbox',
            priority: 'Priority 1',
            dueDate: new Date(2022, 10, 25)
        },
        {
            name: 'Wash laptop\'s cleaning clothes',
            notes: 'Do not forget that you have three of these!',
            project: 'inbox',
            priority: 'Priority 2',
            dueDate: new Date(2022, 11, 13)
        }
    ]
}

function Project() {
    function updateProjects(projects, project) {
        projects[project.value] = null;

        return projects;
    }

    return {
        updateProjects
    }
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTm9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCB7IGRlZmF1bHRQcm9qZWN0cywgUHJvamVjdCB9O1xuXG5jb25zdCBkZWZhdWx0UHJvamVjdHMgPSB7XG4gICAgJ2luYm94JzogW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnR28gdG8gdGhlIHdldCBtYXJrZXQnLFxuICAgICAgICAgICAgbm90ZXM6IG51bGwsXG4gICAgICAgICAgICBwcm9qZWN0OiAnaW5ib3gnLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdQcmlvcml0eSA0JyxcbiAgICAgICAgICAgIGR1ZURhdGU6IG5ldyBEYXRlKDIwMjIsIDEwLCAxOClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0V4cG9ydCBiaXR3YXJkZW4gcGFzc3dvcmRzJyxcbiAgICAgICAgICAgIG5vdGVzOiBudWxsLFxuICAgICAgICAgICAgcHJvamVjdDogJ2luYm94JyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnUHJpb3JpdHkgMScsXG4gICAgICAgICAgICBkdWVEYXRlOiBuZXcgRGF0ZSgyMDIyLCAxMCwgMjUpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdXYXNoIGxhcHRvcFxcJ3MgY2xlYW5pbmcgY2xvdGhlcycsXG4gICAgICAgICAgICBub3RlczogJ0RvIG5vdCBmb3JnZXQgdGhhdCB5b3UgaGF2ZSB0aHJlZSBvZiB0aGVzZSEnLFxuICAgICAgICAgICAgcHJvamVjdDogJ2luYm94JyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnUHJpb3JpdHkgMicsXG4gICAgICAgICAgICBkdWVEYXRlOiBuZXcgRGF0ZSgyMDIyLCAxMSwgMTMpXG4gICAgICAgIH1cbiAgICBdXG59XG5cbmZ1bmN0aW9uIFByb2plY3QoKSB7XG4gICAgZnVuY3Rpb24gdXBkYXRlUHJvamVjdHMocHJvamVjdHMsIHByb2plY3QpIHtcbiAgICAgICAgcHJvamVjdHNbcHJvamVjdC52YWx1ZV0gPSBudWxsO1xuXG4gICAgICAgIHJldHVybiBwcm9qZWN0cztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB1cGRhdGVQcm9qZWN0c1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=