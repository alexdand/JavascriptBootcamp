function classRoom() {
    let instructors = ["Ellie", "Colt"];
    return {
        getInstructors: function() {
            return instructors.slice();
        },
        addInstructor: function(instructor) {
            instructors.push(instructor);
            return instructors.slice();
        }
    }
}

let course1 = classRoom();

console.log(course1.getInstructors());

console.log(course1.getInstructors().pop());

console.log(course1.getInstructors());

course1.addInstructor("Matt");

console.log(course1.getInstructors());
