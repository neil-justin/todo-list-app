export { accessLocalStorage };

function accessLocalStorage(todo, property) {
    if (todo === 'getItem') {
        return JSON.parse(window.localStorage.getItem(property));
    } else if (todo === 'setItem') {
        return window.localStorage.setItem(`projects`, JSON.stringify(property));
    }
}