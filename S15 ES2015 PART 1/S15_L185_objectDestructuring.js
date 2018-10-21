// ES5
var instructor = {
    firstNameES5: "Elie",
    lastNameES5: "Schoppik"
}

var firstNameES5 = instructor.firstNameES5;
var lastNameES5 = instructor.lastNameES5;

console.log(firstNameES5);
console.log(lastNameES5);

// ES2015
var instructor2015 = {
    firstName: "Elie",
    lastName: "Schoppik"
}

// We have to name our variables as the same exact name as the keys of the objects we are destructuring
var { firstName, lastName } = instructor2015;
console.log(firstName);
console.log(lastName);

// If we want to name them differently, we can add a colon and a different variable name.
var { firstName: first, lastName: last } = instructor2015;
console.log(first);
console.log(last);

function createInstructor(options) {
    var options = options || {};
    var name = options.name || {first: "Matt", last: "Lane" };
    var isHilarious = options.isHilarious || false;
    return [name.first, name.last, isHilarious];
}

console.log(createInstructor());
console.log(createInstructor({ isHilarious: true }));
console.log(createInstructor( { name: { first: "Tim", last: "Burton"}, isHilarious: true } ) );

// We are passing a destructure object as a parameter to a function, and specifying the keys of name and isHilarious with default values
// and at the end of the parameter we are assigning the whole thing to be an empty object, so that es2015 knows that our default parameter
// is a destructure object
function createInstructor2({ name = { first: "Matt", last: "Lane" }, isHilarious = false } = {}) {
    return [name.first, name.last, isHilarious];
}

console.log(createInstructor2());

// Another useful thing
function displayInfo(obj) {
    return [obj.name, obj.favColor];
}

console.log(displayInfo({ name: "Tomas", favColor: "Blue" }));
