var person = {
    firstname: "John",
    hasDog: true,
    sayHello: function() {
        return "Hello " + this.firstname;
    },
    determineContext: function() {
        return person === this;
    }
}

function addNumbers(a, b, c, d) {
    return this.firstname + " just calculated " + (a+b+c+d);
}

var personCalc = addNumbers.bind(person, 1, 2);

console.log(personCalc(3, 4));

let someone = {
    firstname: "Danimomon",
    sayHi: function() {
        setTimeout(function() {
            console.log("Hi " + this.firstname);
        }.bind(this), 2000);
    }
}

someone.sayHi();
