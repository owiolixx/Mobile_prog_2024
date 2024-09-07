// 1. DECLARING AND ASSIGNMENT OF VARIABLES

let studentName = "Chloe"; // let is used for values that can change
let studentAge = 20;
let likesMusic = true;

const constantStudentName = "Chloe"; // const is used for values that should not change

// * CONDITIONAL STATEMENTS
if (likesMusic) { // if likesMusic is true
    console.log("I enjoy listening to music.");
}

if (studentAge > 18) {
    console.log("You are older than 18.");
} else if (studentAge < 18) {
    console.log("You are younger than 18.");
} else {
    console.log("You are 18 years old.");
}

switch (studentName) {
    case "Chloe":
        console.log("Your name is Chloe.");
        break; // break is used to exit the switch statement
    default: // default is used when none of the cases are met
        console.log("Your name is not Chloe.");
}

// 2. PRINTING TO THE CONSOLE

console.log(studentName);
console.log(studentAge);
console.log(likesMusic);
console.log(constantStudentName);

console.log(`My name is ${studentName} and I am ${studentAge} years old.`); // string interpolation

// 3. ARRAY DECLARATION

let favoriteActivities = ["Reading", "Painting"];

// Printing the array
console.log(favoriteActivities); // Output: ["Reading", "Painting"]
// Accessing an element in the array
console.log(favoriteActivities[0]); // Output: Reading

for (let activity of favoriteActivities) {
    console.log(activity);
}

// Adding an element to the array
favoriteActivities.push("Reading");

console.log(favoriteActivities); // Output: ["Reading", "Painting", "Reading"]

// MAPPING AN ARRAY
// Mapping is used to loop through an array and modify the elements
favoriteActivities = favoriteActivities.map((activity) => {
    return activity + " is relaxing";
});

console.log(favoriteActivities); // Output: ["Reading is relaxing", "Painting is relaxing", "Reading is relaxing"]

// 4. OBJECT DECLARATION

let student = {
    name: "Chloe", // this is a property/field
    age: 20, // this is a property/field
    likesMusic: true, // this is a property/field
    introduce() { // this is a method/function of the object
        console.log("Hi, I am " + this.name); // "this" refers to the object itself
    }
};

// Accessing object properties
console.log(student.name); // Output: Chloe
console.log(student.age); // Output: 20
console.log(student.likesMusic); // Output: true

// Calling the object's method
student.introduce(); // Output: Hi, I am Chloe

// 5. FUNCTION DECLARATION

// Regular function declaration
function greet() {
    console.log("Hello, everyone!");
}

// Calling the function
greet(); // Output: Hello, everyone!

// Arrow function declaration
const farewell = () => {
    return "Goodbye!"; // RETURN is used to return a value from the function
};

// Calling the arrow function
console.log(farewell()); // Output: Goodbye!

// Adding parameters/arguments to functions

function describePerson(name, age) { // this is a function that takes in two parameters/arguments
    console.log(`This person is ${name} and is ${age} years old.`);
}

describePerson(studentName, studentAge); // Output: This person is Chloe and is 20 years old

// Another way to write a function using an arrow function
const describePersonArrow = (name, age) => {
    return `This person is ${name} and is ${age} years old.`;
};

console.log(describePersonArrow(studentName, studentAge)); // Output: This person is Chloe and is 20 years old


// CREATING YOUR OWN VARIABLES, ARRAY, OBJECTS, FUNCTIONS, AND CONDITIONAL STATEMENTS

let city = "New York";
let isStudent = true;

if (city === "New York" && isStudent) {
    console.log("You live in New York and are a student.");
} else if (city === "New York") {
    console.log("You live in New York.");
} else {
    console.log("You don't live in New York.");
}

let hobbies = ["Photography", "Cycling", "Coding"];
console.log(hobbies);

let person = {
    name: "Alex",
    age: 24,
    enjoysMovies: true,
    greet() {
        console.log(`Hey, I'm ${this.name} and I am ${this.age} years old.`);
    }
};

person.greet(); // Output: Hey, I'm Alex and I am 24 years old.

function checkDrivingEligibility(age) {
    if (age >= 18) {
        return "You are eligible to drive.";
    } else {
        return "You are not eligible to drive.";
    }
}

console.log(checkDrivingEligibility(20)); // Output: You are eligible to drive.
console.log(checkDrivingEligibility(16)); // Output: You are not eligible to drive.