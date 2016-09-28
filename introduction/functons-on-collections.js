function forEach(array, operation) {
    for (let i = 0, length = array.length; i < length; i++) {
        operation(array[i], i, array);
    }
}

function flatten(array) {
    if (!array.length) {
        return [array];
    }

    return array.reduce((flat, toFlatten) => cat(flat, flatten(toFlatten)), []);
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

function isEmpty(array) {
    return array.length === 0;
}

function first(array) {
    return array[0];
}

function rest(array) {
    return array.slice(1);
}

function reverse(array) {
    if (isEmpty(array)) {
        return [];
    }

    return cat(reverse(rest(array)), [first(array)]);
}

function map(array, operation) {
    let resultArray = [];

    for (let i = 0, length = array.length; i < length; i++) {
        resultArray.push(operation(array[i], i, array));
    }

    return resultArray
}

module.exports = { forEach, filter, contains, map, cat, reverse, flatten }