let array = [1, 2, 3, 4, 5];

function reduce(callback, value) {
    let accumulator = value !== undefined ? value : array[0];
    let isParamPassed = value !== undefined ? 0 : 1;
    for (var i = 0; i < array.length - isParamPassed; i++) {
        accumulator = callback(accumulator, array[i + isParamPassed], i, array);
    }
    return accumulator;
}

function add(accumulator, nextValue) {
    return accumulator + nextValue;
}

console.log(reduce(add, 10));
