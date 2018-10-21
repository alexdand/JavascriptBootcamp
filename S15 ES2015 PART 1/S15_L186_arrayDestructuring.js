// 1) First example

// ES5
var arr = [1, 2, 3];
var a = arr[0];
var b = arr[1];
var c = arr[2];
console.log(a, b, c);

// ES2015
[a2, b2, c2] = arr;
console.log(a2, b2, c2);

// 2) Second example

// ES5
function returnNumbers(a, b) {
    return [a, b];
}

var first = returnNumbers(1, 2)[0];
var second = returnNumbers(1, 2)[1];

var [third, fourth] = returnNumbers(3, 4);

console.log(first, second, third, fourth);

// 3) Third example Swapping Values

function swap(a, b) {
    let aux = a;
    a = b;
    b = aux;
    return [a, b];
}

function swap2(a, b) {
    return [a, b] = [b, a];
}

let person1 = { name: "Jorge" };
let person2 = { name: "Fabio" };

[person1, person2] = swap(person1, person2);

console.log(person1);
console.log(person2);

[person1, person2] = swap2(person1, person2);

console.log(person1);
console.log(person2);
