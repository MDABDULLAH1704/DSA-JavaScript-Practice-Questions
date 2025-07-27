// 51. Write a program to check if a number is positive, negative or zero.
// function checkNum(num) {
//     if (num > 0) return 'Positive';
//     else if (num == 0) return 'Zero';
//     else return 'Negative';
// }
// console.log(checkNum(12));
// console.log(checkNum(0));
// console.log(checkNum(-12));

// 52. Create a program to check if a year is a leap year.
// function checkLeapYear(year) {
//     if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) return 'Leap year';
//     else return 'Not leap year';
// }
// console.log(checkLeapYear(2018));
// console.log(checkLeapYear(2020));
// console.log(checkLeapYear(1900));
// console.log(checkLeapYear(2000));

// 53. Write an if else statement to determine if a person can vote based on their age.
// function vote(age) {
//     if (age >= 18) return 'Person can vote';
//     else return 'Person cannot vote';
// }
// console.log(vote(17));

// 54. Use switch statement to log the name of the day based on its number (1 = Monday).
// function getDayName(key) {
//     switch (key) {
//         case 1:
//             return 'Monday';
//         case 2:
//             return 'Tuesday';
//         case 3:
//             return 'Wednesday';
//         case 4:
//             return 'Thursday';
//         case 5:
//             return 'Friday';
//         case 6:
//             return 'Saturday';
//         case 7:
//             return 'Sunday';
//         default:
//             return 'Invalid day number';
//     }
// }
// console.log(getDayName(2));

// 55. Write a program to check if a number is divisible by 3 and 5.
// let num = 17;
// if (num % 3 === 0 && num % 5 === 0) {
//     console.log(`Number = ${num}, is divisible by 3 and 5`);
// }
// else {
//     console.log(`Number = ${num}, is not divisible by 3 and 5`);
// }

// 56. Create a program to check the grade of student based on marks.
// let marks = 95;
// let grade;
// if (marks > 90 && marks <= 100) {
//     grade = 'A';
// }
// else if (marks > 80 && marks <= 90) {
//     grade = 'B';
// }
// else if (marks > 70 && marks <= 80) {
//     grade = 'C';
// }
// else if (marks > 60 && marks <= 70) {
//     grade = 'D';
// }
// else if (marks > 50 && marks <= 60) {
//     grade = 'E';
// }
// else if (marks > 40 && marks <= 50) {
//     grade = 'F';
// }
// else {
//     grade = 'Fail';
// }
// console.log(`Marks = ${marks}, Grade = ${grade}`);

// 57. Write if condition to compare two strings and log if they are equal.
// let str1 = 'ALI';
// let str2 = 'ali';
// if (str1.toLowerCase() === str2.toLowerCase()) {
//     console.log('Strings are equal.');
// }
// else {
//     console.log('Strings are not equal.');
// }

// 58. Use a ternary operator to check if a number is even or odd.
// let num = 12;
// num % 2 === 0 ? console.log('Even') : console.log('Odd');

// 59. Write a program to find the largest of three numbers using if else.
// Method 1
// if (n1 === n2 && n2 === n3) {
//     console.log('All numbers are equal');
// } else if (n1 >= n2 && n1 >= n3) {
//     console.log('n1 is largest');
// } else if (n2 >= n1 && n2 >= n3) {
//     console.log('n2 is largest');
// } else {
//     console.log('n3 is largest');
// }
// Method 2
// let n1 = 12;
// let n2 = 13;
// let n3 = 13;
// if (n1 === n2 && n2 === n3) {
//     console.log('All three numbers are equal');
// }
// else if (n1 >= n2 && n1 >= n3 && n1 !== n2 && n1 !== n3) {
//     console.log('n1 is largest');
// }
// else if (n2 >= n1 && n2 >= n3 && n2 !== n1 && n2 !== n3) {
//     console.log('n2 is largest');
// }
// else if (n3 >= n1 && n3 >= n2 && n3 !== n1 && n3 !== n2) {
//     console.log('n3 is largest');
// } else {
//     console.log('There is a tie for the largest number');
// }

// 60. Create a program to calculate the discount based on the price of an item.   
function calculateDiscount(price) {
    let discount = 0;

    if (price > 100) {
        discount = 0.2; // 20% discount for items over 100
    } else if (price > 50) {
        discount = 0.1; // 10% discount for items between 51 and 100
    } else if (price > 0) {
        discount = 0.05; // 5% discount for items 50 or less
    }

    const discountAmount = price * discount;
    const finalPrice = price - discountAmount;

    return finalPrice;
}
console.log(calculateDiscount(200));

