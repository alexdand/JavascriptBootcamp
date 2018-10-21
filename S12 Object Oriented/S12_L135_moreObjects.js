function Dog(name, race) {
  this.name = name;
  this.race = race;
  this.bark = function() {
    return this.name + " just barked";
  }
}

let dog = new Dog("Fluffy", "Dogo");

console.log(dog);
console.log(dog.bark());
