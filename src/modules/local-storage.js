export { accessLocalStorage };

function accessLocalStorage(todo, property) {
    switch (todo) {
        case 'getItem':
            return JSON.parse(window.localStorage.getItem(property));
        case 'setItem':
            return window.localStorage.
                setItem('tasks', JSON.stringify(property));
    }
}