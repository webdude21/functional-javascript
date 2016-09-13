function lt(x, y) {
    return x < y;
}

function gt(x, y) {
    return x > y;
}

function isEven(x) {
    return x % 2 === 0;
}

function isOdd(x) {
    return x % 2 !== 0;
}

function isFunction(func) {
    return typeof func === "function";
}

module.exports = { lt, gt, isEven, isOdd, isFunction };