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
/* harmony export */   "getTaskPriority": () => (/* binding */ getTaskPriority),
/* harmony export */   "notesNotEmpty": () => (/* binding */ notesNotEmpty),
/* harmony export */   "taskNameNotEmpty": () => (/* binding */ taskNameNotEmpty)
/* harmony export */ });


function notesNotEmpty(notes) {
    return notes.value.trim().length !== 0
}

function taskNameNotEmpty(task) {
    return task.value.trim().length !== 0;
}

function getDayOfTheWeek(dueDate) {
    if (dueDate !== null) {
        const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
            'Thursday', 'Friday', 'Saturday'];

        return week[dueDate.getDay()];
    }
}

function getLongDate(dueDate, diffInYears) {
    if (dueDate !== null) {
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
}

function getTaskDueDate(differenceInDays, dayOfTheWeek, longDate, dueDate) {
    if (dueDate !== null) {
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
}

function getTaskPriority(priority) {
    switch (priority.value) {
        case 'Priority 4':
            return 'priority4-task'
        case 'Priority 3':
            return 'priority3-task'
        case 'Priority 2':
            return 'priority2-task'
        case 'Priority 1':
            return 'priority1-task'
    }
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjBHOztBQUUxRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixZQUFZO0FBQ3RDLFVBQVU7QUFDVjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUEsK0JBQStCLFlBQVk7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9oZWxwZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgeyBub3Rlc05vdEVtcHR5LCB0YXNrTmFtZU5vdEVtcHR5LCBnZXREYXlPZlRoZVdlZWssIGdldExvbmdEYXRlLCBnZXRUYXNrRHVlRGF0ZSwgZ2V0VGFza1ByaW9yaXR5IH07XG5cbmZ1bmN0aW9uIG5vdGVzTm90RW1wdHkobm90ZXMpIHtcbiAgICByZXR1cm4gbm90ZXMudmFsdWUudHJpbSgpLmxlbmd0aCAhPT0gMFxufVxuXG5mdW5jdGlvbiB0YXNrTmFtZU5vdEVtcHR5KHRhc2spIHtcbiAgICByZXR1cm4gdGFzay52YWx1ZS50cmltKCkubGVuZ3RoICE9PSAwO1xufVxuXG5mdW5jdGlvbiBnZXREYXlPZlRoZVdlZWsoZHVlRGF0ZSkge1xuICAgIGlmIChkdWVEYXRlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHdlZWsgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLFxuICAgICAgICAgICAgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xuXG4gICAgICAgIHJldHVybiB3ZWVrW2R1ZURhdGUuZ2V0RGF5KCldO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0TG9uZ0RhdGUoZHVlRGF0ZSwgZGlmZkluWWVhcnMpIHtcbiAgICBpZiAoZHVlRGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgd2Vla2RheTogJ3Nob3J0JyxcbiAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgICBkYXk6ICdudW1lcmljJ1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpZmZJblllYXJzID4gMCB8fCBkaWZmSW5ZZWFycyA8IDApIHtcbiAgICAgICAgICAgIG9wdGlvbnMueWVhciA9ICdudW1lcmljJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkdWVEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCBvcHRpb25zKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldFRhc2tEdWVEYXRlKGRpZmZlcmVuY2VJbkRheXMsIGRheU9mVGhlV2VlaywgbG9uZ0RhdGUsIGR1ZURhdGUpIHtcbiAgICBpZiAoZHVlRGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgdGFza0R1ZURhdGU7XG5cbiAgICAgICAgaWYgKGRpZmZlcmVuY2VJbkRheXMgPj0gMCkge1xuICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBkaWZmZXJlbmNlSW5EYXlzID09PSAwOlxuICAgICAgICAgICAgICAgICAgICB0YXNrRHVlRGF0ZSA9ICdUb2RheSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZGlmZmVyZW5jZUluRGF5cyA9PT0gMTpcbiAgICAgICAgICAgICAgICAgICAgdGFza0R1ZURhdGUgPSAnVG9tb3Jyb3cnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGRpZmZlcmVuY2VJbkRheXMgPD0gNzpcbiAgICAgICAgICAgICAgICAgICAgdGFza0R1ZURhdGUgPSBkYXlPZlRoZVdlZWs7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRhc2tEdWVEYXRlID0gbG9uZ0RhdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBgRHVlICR7dGFza0R1ZURhdGV9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkaWZmZXJlbmNlSW5EYXlzID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHRhc2tEdWVEYXRlID0gJ1llc3RlcmRheSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhc2tEdWVEYXRlID0gbG9uZ0RhdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBgT3ZlcmR1ZSwgJHt0YXNrRHVlRGF0ZX1gO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRUYXNrUHJpb3JpdHkocHJpb3JpdHkpIHtcbiAgICBzd2l0Y2ggKHByaW9yaXR5LnZhbHVlKSB7XG4gICAgICAgIGNhc2UgJ1ByaW9yaXR5IDQnOlxuICAgICAgICAgICAgcmV0dXJuICdwcmlvcml0eTQtdGFzaydcbiAgICAgICAgY2FzZSAnUHJpb3JpdHkgMyc6XG4gICAgICAgICAgICByZXR1cm4gJ3ByaW9yaXR5My10YXNrJ1xuICAgICAgICBjYXNlICdQcmlvcml0eSAyJzpcbiAgICAgICAgICAgIHJldHVybiAncHJpb3JpdHkyLXRhc2snXG4gICAgICAgIGNhc2UgJ1ByaW9yaXR5IDEnOlxuICAgICAgICAgICAgcmV0dXJuICdwcmlvcml0eTEtdGFzaydcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9