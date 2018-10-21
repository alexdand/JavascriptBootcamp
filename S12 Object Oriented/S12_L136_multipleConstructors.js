function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

function Car(make, model, year) {
  Vehicle.apply(this, arguments);
  this.wheels = 4;
}

let myCar = Car("don't know", "Chevrolet", "2018");

console.log(myCar);
