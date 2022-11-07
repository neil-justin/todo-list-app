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
/* harmony export */   "getDayOfTheWeek": () => (/* binding */ getDayOfTheWeek),
/* harmony export */   "getLongDate": () => (/* binding */ getLongDate),
/* harmony export */   "getTaskDueDate": () => (/* binding */ getTaskDueDate),
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

function getLongDate(dueDate, diffInYears) {
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

function getTaskDueDate(differenceInDays, dayOfTheWeek, longDate) {
    let taskDueDate;

    if (differenceInDays >= 0) {
        switch (true) {
            case differenceInDays === 0:
                taskDueDate = 'Today';
                break;
            case differenceInDays === 1:
                taskDueDate = 'Tomorrow';
                break;
            case differenceInDays <= 7:
                taskDueDate = dayOfTheWeek;
                break;
            default:
                taskDueDate = longDate;
        }

        return `Due ${taskDueDate}`;
    } else {
        if (differenceInDays === -1) {
            taskDueDate = 'Yesterday';
        } else {
            taskDueDate = longDate;
        }

        return `Overdue, ${taskDueDate}`;
    }
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOeUY7O0FBRXpGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsWUFBWTtBQUNsQyxNQUFNO0FBQ047QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBLDJCQUEyQixZQUFZO0FBQ3ZDO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvaGVscGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHsgbm90ZXNOb3RFbXB0eSwgdGFza05hbWVOb3RFbXB0eSwgZ2V0RGF5T2ZUaGVXZWVrLCBnZXRMb25nRGF0ZSwgZ2V0VGFza0R1ZURhdGUgfTtcblxuZnVuY3Rpb24gbm90ZXNOb3RFbXB0eShub3Rlcykge1xuICAgIHJldHVybiBub3Rlcy52YWx1ZS50cmltKCkubGVuZ3RoICE9PSAwXG59XG5cbmZ1bmN0aW9uIHRhc2tOYW1lTm90RW1wdHkodGFzaykge1xuICAgIHJldHVybiB0YXNrLnZhbHVlLnRyaW0oKS5sZW5ndGggIT09IDA7XG59XG5cbmZ1bmN0aW9uIGdldERheU9mVGhlV2VlayhkYXRlKSB7XG4gICAgY29uc3Qgd2VlayA9IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsXG4gICAgICAgICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXTtcblxuICAgIHJldHVybiB3ZWVrW2RhdGUuZ2V0RGF5KCldO1xufVxuXG5mdW5jdGlvbiBnZXRMb25nRGF0ZShkdWVEYXRlLCBkaWZmSW5ZZWFycykge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIHdlZWtkYXk6ICdzaG9ydCcsXG4gICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgIGRheTogJ251bWVyaWMnXG4gICAgfVxuXG4gICAgaWYgKGRpZmZJblllYXJzID4gMCB8fCBkaWZmSW5ZZWFycyA8IDApIHtcbiAgICAgICAgb3B0aW9ucy55ZWFyID0gJ251bWVyaWMnO1xuICAgIH1cblxuICAgIHJldHVybiBkdWVEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFza0R1ZURhdGUoZGlmZmVyZW5jZUluRGF5cywgZGF5T2ZUaGVXZWVrLCBsb25nRGF0ZSkge1xuICAgIGxldCB0YXNrRHVlRGF0ZTtcblxuICAgIGlmIChkaWZmZXJlbmNlSW5EYXlzID49IDApIHtcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIGRpZmZlcmVuY2VJbkRheXMgPT09IDA6XG4gICAgICAgICAgICAgICAgdGFza0R1ZURhdGUgPSAnVG9kYXknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBkaWZmZXJlbmNlSW5EYXlzID09PSAxOlxuICAgICAgICAgICAgICAgIHRhc2tEdWVEYXRlID0gJ1RvbW9ycm93JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZGlmZmVyZW5jZUluRGF5cyA8PSA3OlxuICAgICAgICAgICAgICAgIHRhc2tEdWVEYXRlID0gZGF5T2ZUaGVXZWVrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0YXNrRHVlRGF0ZSA9IGxvbmdEYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGBEdWUgJHt0YXNrRHVlRGF0ZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChkaWZmZXJlbmNlSW5EYXlzID09PSAtMSkge1xuICAgICAgICAgICAgdGFza0R1ZURhdGUgPSAnWWVzdGVyZGF5JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhc2tEdWVEYXRlID0gbG9uZ0RhdGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYE92ZXJkdWUsICR7dGFza0R1ZURhdGV9YDtcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9