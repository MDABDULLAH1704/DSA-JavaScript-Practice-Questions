// 1. Log your name and favorite hobby to the console.
console.log("Ali", "become a software engineer");

// 2. Perform and log the result of 45 * 2 - 10. 
console.log("45 * 2 - 10 : ", 45 * 2 - 10);

// 3. Use console.log to display the current year.
const date = new Date();
const year = date.getFullYear();
console.log("Current Year : ", year);

// 4. Create two variables for first and last name, concatenate them, and log the result.
const firstName = "Ali";
const lastName = "Khan";
const fullName1 = firstName + " " + lastName;
console.log("Full Name 1 : ", fullName1);
const fullName2 = firstName.concat(" ", lastName);
console.log("Full Name 2 : ", fullName2);
console.log("Full Name 3 : ", `${firstName} ${lastName}`);

// 5. Track the value of a variable by logging it before and after updating. 
let x = 10;
console.log("Before update x : ", x);
x = 20;
console.log("After update x : ", x);

// 6. Use console.error() to simulate an error message. 
console.error("Error occur");

// 7. Log the square of the number 12 to the console. 
console.log("Square of 12 : ", 12 * 12);

// 8. Print the type of a variable holding the value true. 
var a = true;
console.log(typeof (a));

// 9. Create a variable holding your age and log whether it is greater than 18.
let age = 22;
if (age > 18) {
    console.log(`Age ${age} is greater than 18.`);
}

// 10. Log the result of 100/0 and observe the output.
console.log(100/0);