// 1. Write a JavaScript function that takes an array of numbers and returns the sum of all even numbers using a for loop.
// function sum(numbers) {
//     sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             sum = sum + numbers[i];
//         }
//     }
//     return sum;
// }

// let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = sum(numbersArray);
// console.log(`Sum of your number = ${result}`);



// 2. Implement a JavaScript function that reverses a given string using a while loop.
// function reverseString(string) {
//     let reversedString = "";
//     let i = string.length - 1;
//     while (i >= 0) {
//         reversedString = reversedString + string[i];
//         i--;
//     }
//     return reversedString;
// }

// let originalString = "JavaScript";
// let result = reverseString(originalString);
// console.log(`Reverse of ${originalString} = ${result}`);



// 3. Create a JavaScript function that finds and returns the factorial of a given number using a do-while loop.
// function factorial(number) {
//     let result = 1;
//     let i = 1;
//     do {
//         result = result * i;
//         i++;
//     } while (i <= number);
//     return result;
// }

// let factorialOfNumber = 5;
// let Output = factorial(factorialOfNumber);
// console.log(`Factorial of ${factorialOfNumber} = ${Output}`);



// 4. Write a JavaScript program that prints a pattern of stars in the shape of a right-angled triangle using nested for loops.
// function printTriangle(height) {
//     for (let i = 1; i <= height; i++) {
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//             row = row + " * ";
//         }
//         console.log(row);
//     }
// }

// let triangleHeight = 5;
// let result = printTriangle(triangleHeight);
// console.log(result);



// 5. Implement a JavaScript function that checks if a given number is prime using a for...of loop for iteration.
function prime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

let inputNumber = 6;
let result = prime(inputNumber);
console.log(`Number is prime = ${result}`);
