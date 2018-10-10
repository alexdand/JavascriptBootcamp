// 3) When the keyword 'this' is inside of a declared object

// When the keyword 'this' is found inside a declared object, the value will be
// the closest parent object
var person = {
  firstName: "Daniel",
  sayHi: function() {
    return "Hi " + this.firstName;
  },
  determineContext: function() {
    return this === person;
  }
}

// In this example 'this' is inside a declared object, the closest parent is the 'person' variable

// What happens in this case?

var person = {
  firstName: "Daniel",
  sayHi: function() {
    return "Hi " + this.firstName;
  },
  determineContext: function() {
    return this === person;
  },
  dog: {
    sayHello: function() {
      return "Hello " + this.firstName;
    },
    determineContext: function() {
      return this === person;
    }
  }
}

person.dog.sayHello(); // Hello undefined
