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

let numbers = [1, 2, 3, 4];

console.log(Math.max.apply(this, numbers));
