// 1. How can you use setTimeout to create a simple delayed alert message? Provide a code example where an alert is displayed after a delay of 3 seconds.
// setTimeout(() => {
//     // alert("hello");
//     console.log("Hello World");
// }, 2000);



// 2. Create a JavaScript program that uses setInterval to log a message to the console every 2 seconds. Additionally, include code to clear the interval after it has executed 5 times.
// let count = 0;
// let result = setInterval(() => {
//     console.log("Hello this is  javascript");
//     count++;

//     if (count === 5) {
//         clearInterval(result);
//         console.log("Clear after 5 execution");
//     }
// }, 2000);



// 3. Demonstrate how you can use a combination of setTimeout and setInterval to create a program that displays a message every 3 seconds, but starts with an initial delay of 5 seconds.
// let count = 0;
// let result = setTimeout(() => {
//     console.log("Hi, message after 5 second.");

//     let result2 = setInterval(() => {
//         console.log("message every 3 seconds");
//         count++;
//         if (count === 3) {
//             clearInterval(result2);
//             console.log("Clear after 3 execution");
//         }
//     }, 3000);
// }, 5000);
