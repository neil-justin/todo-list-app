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
/*!*******************************!*\
  !*** ./src/modules/helper.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatDate": () => (/* binding */ formatDate),
/* harmony export */   "getDayOfTheWeek": () => (/* binding */ getDayOfTheWeek),
/* harmony export */   "notesNotEmpty": () => (/* binding */ notesNotEmpty),
/* harmony export */   "taskNameNotEmpty": () => (/* binding */ taskNameNotEmpty)
/* harmony export */ });


function notesNotEmpty(notes) {
    return notes.value.trim().length !== 0
}

function taskNameNotEmpty(task) {
    return task.value.trim().length !== 0;
}

function getDayOfTheWeek(date) {
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday'];

    return week[date.getDay()];
}

function formatDate(dueDate, diffInYears) {
    const options = {
        weekday: 'short',
        month: 'long',
        day: 'numeric'
    }

    if (diffInYears > 0 || diffInYears < 0) {
        options.year = 'numeric';
    }

    return dueDate.toLocaleDateString('en-US', options);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ053RTs7QUFFeEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2hlbHBlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCB7IG5vdGVzTm90RW1wdHksIHRhc2tOYW1lTm90RW1wdHksIGdldERheU9mVGhlV2VlaywgZm9ybWF0RGF0ZSB9O1xuXG5mdW5jdGlvbiBub3Rlc05vdEVtcHR5KG5vdGVzKSB7XG4gICAgcmV0dXJuIG5vdGVzLnZhbHVlLnRyaW0oKS5sZW5ndGggIT09IDBcbn1cblxuZnVuY3Rpb24gdGFza05hbWVOb3RFbXB0eSh0YXNrKSB7XG4gICAgcmV0dXJuIHRhc2sudmFsdWUudHJpbSgpLmxlbmd0aCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gZ2V0RGF5T2ZUaGVXZWVrKGRhdGUpIHtcbiAgICBjb25zdCB3ZWVrID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JyxcbiAgICAgICAgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xuXG4gICAgcmV0dXJuIHdlZWtbZGF0ZS5nZXREYXkoKV07XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoZHVlRGF0ZSwgZGlmZkluWWVhcnMpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICB3ZWVrZGF5OiAnc2hvcnQnLFxuICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICBkYXk6ICdudW1lcmljJ1xuICAgIH1cblxuICAgIGlmIChkaWZmSW5ZZWFycyA+IDAgfHwgZGlmZkluWWVhcnMgPCAwKSB7XG4gICAgICAgIG9wdGlvbnMueWVhciA9ICdudW1lcmljJztcbiAgICB9XG5cbiAgICByZXR1cm4gZHVlRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywgb3B0aW9ucyk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=