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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTm9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHsgZGVmYXVsdFByb2plY3RzLCBQcm9qZWN0IH07XG5cbmNvbnN0IGRlZmF1bHRQcm9qZWN0cyA9IHtcbiAgICAnaW5ib3gnOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdHbyB0byB0aGUgd2V0IG1hcmtldCcsXG4gICAgICAgICAgICBub3RlczogbnVsbCxcbiAgICAgICAgICAgIHByb2plY3Q6ICdpbmJveCcsXG4gICAgICAgICAgICBwcmlvcml0eTogJ1ByaW9yaXR5IDQnLFxuICAgICAgICAgICAgZHVlRGF0ZTogbmV3IERhdGUoMjAyMiwgMTAsIDE4KVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnRXhwb3J0IGJpdHdhcmRlbiBwYXNzd29yZHMnLFxuICAgICAgICAgICAgbm90ZXM6IG51bGwsXG4gICAgICAgICAgICBwcm9qZWN0OiAnaW5ib3gnLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdQcmlvcml0eSAxJyxcbiAgICAgICAgICAgIGR1ZURhdGU6IG5ldyBEYXRlKDIwMjIsIDEwLCAyNSlcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1dhc2ggbGFwdG9wXFwncyBjbGVhbmluZyBjbG90aGVzJyxcbiAgICAgICAgICAgIG5vdGVzOiAnRG8gbm90IGZvcmdldCB0aGF0IHlvdSBoYXZlIHRocmVlIG9mIHRoZXNlIScsXG4gICAgICAgICAgICBwcm9qZWN0OiAnaW5ib3gnLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdQcmlvcml0eSAyJyxcbiAgICAgICAgICAgIGR1ZURhdGU6IG5ldyBEYXRlKDIwMjIsIDExLCAxMylcbiAgICAgICAgfVxuICAgIF1cbn1cblxuZnVuY3Rpb24gUHJvamVjdChwcm9qZWN0cywgcHJvamVjdCkge1xuICAgIGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RzKHRvZG8pIHtcbiAgICAgICAgc3dpdGNoICh0b2RvKSB7XG4gICAgICAgICAgICBjYXNlICdhZGQnOlxuICAgICAgICAgICAgICAgIHByb2plY3RzW3Byb2plY3QudmFsdWVdID0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VkaXQnOlxuICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRlZFByb2plY3RLZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1vcGVuZWQtdGFiXScpXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBwcm9qZWN0c1twcm9qZWN0LnZhbHVlXSA9IHByb2plY3RzW2VkaXRlZFByb2plY3RLZXldO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBwcm9qZWN0c1tlZGl0ZWRQcm9qZWN0S2V5XTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9qZWN0cztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB1cGRhdGVQcm9qZWN0c1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=