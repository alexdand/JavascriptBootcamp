function every(array, callback) {
    for (var i = 0; i < array.length; i++) {
        if(!callback(array[i], i, array)) {
            return false;
        }
    }
    return true;
}

function isNotPair(value) {
    return value % 2 !== 0;
}

console.log(every([1, 3, 5, 7, 9], isNotPair));
console.log(every([1, 2, 5, 7, 9], isNotPair));
