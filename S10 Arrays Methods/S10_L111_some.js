function some(array, callback) {
    for (var i = 0; i < array.length; i++) {
        if(callback(array[i], i, array)) {
            return true;
        }
    }
    return false;
}

function isPair(value) {
    return value % 2 === 0;
}

console.log(some([1, 11, 3, 5, 7, 9], isPair));
console.log(some([1, 22, 3, 5, 7, 9], isPair));
