// Implement the findIndex function

// findIndex returns the index of the first element in the array for which the callback returns a truthy value.
// -1 is returned if the callback never returns a truthy value

function findIndex2(array, callback) {
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}

function whichIsPair(value, index, array) {
    return value % 2 === 0;
}

function whichIsNine(value, index, array) {
    return value === 9;
}

console.log(findIndex2([1, 3, 5, 9, 20], whichIsPair));
console.log(findIndex2([1, 3, 5, 9, 20], whichIsNine));
