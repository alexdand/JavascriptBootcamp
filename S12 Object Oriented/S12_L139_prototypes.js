function Person(name) {
  this.name = name;
}

Person.prototype.isStudent = true;

let p1 = new Person("Luffy");

console.log(p1);
console.log(p1.isStudent);

// We are able to access properties on the prototype through __proto__
