function map(array, callback) {
  let newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(callback(array[i], i, array));
  }
  return newArr;
}

function tripleValues(values) {
  return map(values, function(val) {
    return val * 3;
  });
}

console.log(tripleValues([1, 2, 3, 4, 5]));
