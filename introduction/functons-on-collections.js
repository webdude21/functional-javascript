function forEach(array, operation) {
    for (let i = 0, length = array.length; i < length; i++) {
        operation(array[i], i, array);
    }
}

function cat(array, ...args) {
    if (!Array.isArray(array)) {
        return [];
    }

    return array.concat(...args);
}

function filter(array, predicate) {
    let resultArray = [];

    for (let i = 0, length = array.length; i < length; i++) {
        if (predicate(array[i], i, array) === true) {
            return resultArray.push(array[i]);
        }
    }

    return resultArray
}

function contains(array, element) {
    return array.indexOf(element) > -1;
}

function map(array, operation) {
    let resultArray = [];
    
    for (let i = 0, length = array.length; i < length; i++) {
        resultArray.push(operation(array[i], i, array));
    }

    return resultArray
}

module.exports = { forEach, filter, contains, map, cat }