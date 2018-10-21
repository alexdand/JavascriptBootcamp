// In ES5
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.sayHello = function() {
    return this.firstname + " says hello!";
}

function Student(firstname, lastname) {
    Person.apply(this, arguments);
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

let person = new Person("Charles", "Xavier");
let student = new Student("Jean", "Green");

console.log(person);
console.log(student);

// In ES2015
class Persona {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class Estudiante extends Persona {
    constructor(firstName, lastName) {
        super(firstName, lastName);
    }
}

let persona = new Persona("Carlos", "Javier");
let estudiante = new Estudiante("Johanna", "Verde");

console.log(persona);
console.log(estudiante);
