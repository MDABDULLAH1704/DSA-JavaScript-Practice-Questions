// 1. Write a JavaScript function that takes two parameters, num1 and num2, and returns their sum. Ensure that the function handles cases where the input parameters are not numbers.
// function sum(num1, num2) {
//     if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//         return "Invalid, Both parameter should be number";
//     }
//     return num1 + num2;
// }

// let result = sum(5, 3);
// console.log(`Sum of your number is ${result}`);



// 2. Write a JavaScript function that takes an array of numbers as input and returns the average value. Handle cases where the input is not an array or the array is empty.
// function avg(number) {
//     if (!Array.isArray(number) || number.length === 0) {
//         return "Invalid"
//     }

//     let sum = 0;
//     let average;
//     for (let i = 0; i < number.length; i++) {
//         sum = sum + number[i];
//         average = sum / number.length
//     }
//     return average;
// }

// let arr = [8, 5, 5];
// let result = avg(arr);
// console.log(`Average values of array = ${result}`)



// 3. Write a JavaScript function that takes a string as input and returns the reversed version of the string.
// function reverseString(string) {
//     if (typeof string !== 'string') {
//         return "Invalid! Text must be string.";
//     }

//     return string.split('').reverse('').join('');
// }

// let str = "Hello";
// let result = reverseString(str);
// console.log(`Reverse of ${str} = ${result}`);



// 4. Create a JavaScript function that checks if a given number is prime. Handle non-numeric input appropriately.
// let i = 2;
// function prime(number) {
//     if (number <= 1) {
//         return false;
//     }
//     if (number === i) {
//         return true;
//     }
//     if (number % i === 0) {
//         return false;
//     }
//     i++;
//     return prime(number);
//     // return number;
// }

// let num = 237;
// let result = prime(num);
// console.log(`Number is Prime = ${result}`);



// 5. Write a JavaScript function that takes an array of strings as input and returns a new array containing only the strings that have more than three characters. If the input is not an array, return an appropriate error message.
function stringMoreThan3Character(array) {
    if (!Array.isArray(array)) {
        return "Invalid input: Please provide an array of strings.";
    }

    let filteredString = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i].length > 3) {
            filteredString.push(array[i]);
        }
    }
    return filteredString;
}

let arr = ["i", "am", "software", "engineer"];
let result = stringMoreThan3Character(arr);
console.log(result);