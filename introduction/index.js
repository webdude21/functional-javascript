function splat(fun) {
    return function (args) {
        return fun(...args)
    }
}

function print(stuffToPrint) {
    if (typeof stuffToPrint === 'function') {
        stuffToPrint = stuffToPrint();
    }

    console.log(stuffToPrint);
}

let sumElements = splat((x, y) => x + y);

print(sumElements([1, 2]));