export { valueNotEmpty };

function valueNotEmpty(data) {
    return data.value.trim().length !== 0;
}
