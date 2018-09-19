function forEach(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

function halfValues(arr) {
  let halfArr = [];
  arr.forEach(val => {
    halfArr.push(Math.floor(val/2));
  });
  return halfArr;
}

console.log(halfValues([2, 4, 6]));
