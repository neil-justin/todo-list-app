export { valueNotEmpty };

function valueNotEmpty(data, key = null) {
    if (typeof data === 'object') {
        return data[key].value.trim().length !== 0;
    } else {
        return data.trim().length !== 0;
    }
}
