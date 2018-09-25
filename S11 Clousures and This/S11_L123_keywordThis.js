// 1) 'This' in the Global Context

console.log(this); // window

// Every variable we create in the global scope is attached to the window object

var student = "Daniel";
window.student === student; // true

// 2) 'This' with functions

function whatIsThis() {
  return this;
}

whatIsThis(); // window

function variablesInThis() {
  this.person = "Carla";
}

variablesInThis(); // the keyword 'this' in the function is the global object window
// But we are declaring a global variable inside a function which is not a good idea

function mistake() {
  this.badPractice = "Bad idea!";
}

mistake();
console.log(badPractice); // prints => "Bad idea!"
