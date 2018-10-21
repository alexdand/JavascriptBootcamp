// All values in a set are unique
// Any type of value can exist in a set
// Useful if you need to ignore duplicate values

var set = new Set;

var s2 = new Set([1, 2, 3, 3, 3, 4, 1, 2, 5]);

console.log(s2);

// Similar to a Set, but all values MUST be objects
var otherSet = new WeakSet;

let vacio = { 'vacio': 'vacio' };
otherSet.add(vacio);

console.log(otherSet.has(vacio));
