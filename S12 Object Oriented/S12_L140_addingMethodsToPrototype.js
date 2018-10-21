function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  return this.name + " says hello";
}

let p1 = new Person("Jeff");
console.log(p1.sayHello());

function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}

let v1 = new Vehicle("asd", "Chevrolet", "2018");
console.log(v1.isRunning);
console.log(v1);
