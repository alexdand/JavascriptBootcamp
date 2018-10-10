// 1 - Create a class for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber.
class Person {
    constructor(firstName, lastName, favoriteColor, favoriteNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteColor = favoriteColor;
        this.favoriteNumber = favoriteNumber;
    }
    multiplyFavoriteNumber(n) {
        return n * this.favoriteNumber;
    }
}

let person = new Person("Michael", "Corleone", "Blue", "7");
console.log(person);

// 2 - Add an instance method called multiplyFavoriteNumber that accepts one parameter and returns the product of the parameter multiplied
//     with the favoriteNumber property on a person object.

//    Examples:
//    var person = new Person("Elie", "Schoppik", "purple", 34)
//    person.multiplyFavoriteNumber(10) // 340

console.log(person.multiplyFavoriteNumber(10));
