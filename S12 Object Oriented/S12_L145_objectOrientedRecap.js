/**
* Every time the new keyword is used,
* a link between the object created and
* the prototype property of the constructor
* is established - this link can be accesed
* using __proto__
*
* The prototype object contains a property
* called constructor, which points back to
* the constructor function
*
* To share properties and methods for objects
* created by a constructor function, place them
* in the prototype as it is the most efficient
*
* To pass methods and properties from one
* prototype object to another, we can use
* inheritance which involves setting the
* prototype property to be a newly created
* object using Object.create and reseting
* the constructor property.
**/
