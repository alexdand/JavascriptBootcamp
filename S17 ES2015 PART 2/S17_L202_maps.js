// In javascript Maps are similar to objects, except the keys can be ANY data type
// Really useful if you need to look up keys dynamically, or if non string keys are needed,
// or if you are frequenyly adding and removing key/value pairs and if you are operationg
// on multiple keys at a time

let firstMap = new Map;

firstMap.set(1, 'Juan');
firstMap.set(false, 'a boolean too');
firstMap.set('nice', 'a string');

console.log(firstMap);

let arrayKey = [];

firstMap.set(arrayKey, [1, 2, 3, 4]);

console.log(firstMap.get(arrayKey));

console.log(firstMap.size);

// Similar to maps, but all keys MUST be objects
// Values in a WeakMap can be cleared from memory if there is no reference to them

let secondMap = new WeakMap;

let jorge = {name: 'Jorge'};
secondMap.set(jorge, [1, 2, 3, 4]);

console.log(secondMap.get(jorge));
