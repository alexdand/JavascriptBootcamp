// 1) Object Shorthand Notation
var firstName = "Elie";
var lastName = "Schoppik";

// EcmaSript5
var instructor = {
    firstName: firstName,
    lastName: lastName
}

// EcmaSript2015
var instructor2 = {
    firstName,
    lastName
}

console.log(instructor);
console.log(instructor2);

// 2) Object Methods
// ES5
var otherInstructor = {
    sayHello: function() {
        return "Hello!";
    }
}

var otherInstructor2 = {
    sayHello() {
        return "Hello!";
    }
}

console.log(otherInstructor.sayHello());
console.log(otherInstructor2.sayHello());

// 3) Computed Property Names
// ES5
var firstname = "Elie";
var instructorObject = {};
instructorObject[firstname] = "That's me!";

// ES2015
var firstname2 = "Elie";
var instructorObject2 = {
    [firstname2]: "That's me!"
}

console.log(instructorObject.Elie);
console.log(instructorObject2.Elie);
