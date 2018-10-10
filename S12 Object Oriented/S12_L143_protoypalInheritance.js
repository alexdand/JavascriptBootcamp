function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

function Student(firstname, lastname) {
  return Person.apply(this, arguments);
}

Student.prototype.sayHi = function() {
  return "Hello I'm an Student named " + this.firstname + " " + this.lastname;
}

// Prototypal Inheritance has two parts...
// 1) Set the prototype to be an object created with another prototype
Student.protoype = Object.create(Person.prototype);
// 2) Reset the constructor property
Student.protoype.constructor = Student;

let student1 = new Student("Pedro", "Mink");
console.log(student1.sayHi());
