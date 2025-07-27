// 1. Explain what a callback function is and provide an example of how it can be used in JavaScript.
// function callbackFunction(callback) {
//     setTimeout(() => {
//         console.log("Hi, I am callbackFunction");
//         callback();
//     }, 2000);
// }

// function callback2() {
//     console.log("Hi, I am callback");
// }

// callbackFunction(callback2);



// 2. Write a JavaScript function that takes an array and a callback function as arguments. The function should iterate over each element in the array and apply the callback function to each element.
// function Function(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i]);
//     }
// }

// let array = [1, 2, 3, 4, 5];

// Function(array, function name(element) {
//     console.log(element * 2);
// })



// 3. Create a function that accepts a callback and a condition. The function should apply the callback only to the elements of an array that satisfy the given condition.
// function mainFunction(arr, condition, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         if (condition(arr[i])) {
//             callback(arr[i]);
//         }
//     }
// }

// let array = [1, 2, 3, 4, 5, 6];

// mainFunction(array, function cond(element) {
//     return element % 2 === 0;
// }, function call(returnElement) {
//     console.log(returnElement * 2);
// })



// 4. Write a function that accepts two numbers and a callback. The function should perform a mathematical operation on the numbers and pass the result to the callback.
function main(a, b, callback) {
    let number = a + b;
    let result = callback(number);
    console.log(result);
}

main(3, 2, function name(number) {
    return number * 2;
})
