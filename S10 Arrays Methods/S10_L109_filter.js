function filter(array, callback) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

function filterEvenNumbers(numbers) {
  return filter(numbers, n => n % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
