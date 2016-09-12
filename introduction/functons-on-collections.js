const numbers = [2, 3, -1, -6, 0, -108, 42, 10];

function print(somethingToPrint) {
    console.log(somethingToPrint);
}

function forEach(array, operation) {
    for (let i = 0, length = array.length; i < length; i++) {
        operation(array[i], i, array);
    }
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

function pow(x) {
    return function (y) {
        return Math.pow(y, x);
    }
};

forEach(numbers, print);
forEach(map(numbers, pow(10)), print);
print(contains(numbers, -6));