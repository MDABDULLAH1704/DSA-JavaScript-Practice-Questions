// Topic:- Arrays


// let marks = [98, 87, 76, "Heros", 23];
// console.log(marks);
// console.log(marks.length);
// console.log(typeof marks);
// console.log(marks[0], marks[1],marks[2],marks[3],marks[4],);
// marks[0] = 100;
// console.log(marks);
// Arrays are mutable but Strings are immutable.


// Looping Of Arrays
// let marks2 = [98, "Ali", 76, "Heros", 23];

// for (let i = 0; i < marks2.length; i++) {
//     console.log(marks2[i]);
// }



// Qs1. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]. Find the average marks of the entire class.
// Method 1
// let marks3 = [85, 97, 44, 37, 76, 60];
// let avg;
// let sum = 0;

// for (let i = 0; i < marks3.length; i++) {
//     sum = sum + marks3[i];
//     avg = sum/marks3.length;
//     console.log(`Avg marks of class is ${avg}`);
// }


// Method 2
// let marks4 = [85, 97, 44, 37, 76, 60];
// let sum2 = 0;

// for (let val of marks4) {
//     sum2 += val;
// }
// let avg2 = sum2 / marks4.length;
// console.log(`Avg marks of class is ${avg2}`);


// Qs2. For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
// Method 1
// let items = [250, 645, 300, 900, 50];
// let i = 0;

// for (let val of items) {
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`Value after offer = ${items[i]}`);
//     i++;
// }


// Method 2
// let items2 = [250, 645, 300, 900, 50];
// for (let i = 0; i < items2.length; i++) {
//     let offer = items2[i] / 10;
//     items2[i] = items2[i] - offer;
// }
// console.log(items2);


// Qs3. Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM” , “Netflix” :-
/*      a. Remove the first company from the array.
        b. Remove Uber & Add Ola in its place.
        c. Add Amazon at the end.        */
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

companies.shift();
console.log(companies);

companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.splice(2, 1, "Ola");
console.log(companies);

companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.push("Amazon");
console.log(companies);
