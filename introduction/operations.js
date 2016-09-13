const predicates = require('./predicates');

function pow(x) {
    return function (y) {
        return Math.pow(y, x);
    }
}

function transformToResult(fnToTransform) {
    return predicates.isFunction(fnToTransform) ? fnToTransform() : fnToTransform;
}


function print(stuffToPrint) {
    console.log(transformToResult(stuffToPrint));
}

module.exports = { pow, transformToResult, print };
