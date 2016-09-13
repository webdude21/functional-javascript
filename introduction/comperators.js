const predicates = require('./predicates');
const numbers = [2, 3, -1, -6, 0, -108, 42, 10];
const ascendingOrder = function (a, b) { return a - b };
const descendingOrder = function (a, b) { return b - a };

function comperator(predicate) {
    return function (x, y) {
        if (!!predicate(x, y)) {
            return -1;
        } else if (!!predicate(y, x)) {
            return 1;
        } else {
            return 0;
        }
    }
}

console.log(numbers.sort(comperator(predicates.isEven)));