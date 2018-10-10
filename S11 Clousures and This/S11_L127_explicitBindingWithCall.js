// We can choose what we want 'this' to be using call, apply and bind.
// This 3 functions can be used only inside a function scope

// Name of method  |  Parameters               |  Invoked inmediately?
// Call            |  thisArg, a, b, c, ...    |  Yes
// Apply           |  thisArg, [a, b, c, ...]  |  Yes
// Bind            |  thisArg, a, b, c, ...    |  No

// First Example

var person = {
    firstname: "John",
    hasDog: true,
    sayHello: function() {
        return "Hello " + this.firstname;
    },
    determineContext: function() {
        return person === this;
    },
    dog: {
        name: "Ryunosuke",
        sayHi: function() {
            return "Guau guau " + this.firstname;
        }
    }
}

console.log(person.sayHello());
console.log(person.dog.sayHi());
console.log(person.dog.sayHi.call(person));

// Second Example

function sayJob() {
    return "I am a " + this.job;
}

var employee = {
    job: "Manufacturer",
}

console.log(sayJob.call(employee));

// Third Example

// var divs = document.getElementsByTagName('div');

// How can we find the divs that contain the text 'Hello'? We could use filter
// divs.filter; // undefined

// var divsArray = [].filter.slice(divs);
// divsArray.filter(function(div) {
    // return div.innerText === "Hello";
// });

// Fourth Example

function addNumbers(a, b, c, d) {
    return this.firstname + " just calculated " + (a+b+c+d);
}

console.log(addNumbers.call(person, 1, 2, 3, 4));
