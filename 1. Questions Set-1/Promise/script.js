// 1. Explain the basic structure of a Promise in JavaScript and demonstrate its usage with a simple example.
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let success = true;
//         if (success) {
//             console.log("Successful");
//             resolve("Promise resolve");
//         }
//         else {
//             console.log("Un-successful");
//             reject("Promise reject");
//         }
//     }, 2000);
// })

// promise.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })



// 2. Demonstrate how to chain multiple Promises in JavaScript, and explain the purpose of chaining in asynchronous operations.
// let firstOperation = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("First operation completed.");
//             resolve("Resolve-1 successful");
//         }, 2000);
//     })
// }

// let secondOperation = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Second operation completed.");
//             resolve("Resolve-2 successful");
//         }, 2000);
//     })
// }

// firstOperation().then((result) => {
//     console.log(result);
//     return secondOperation();
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })



// 3. Illustrate how to handle multiple Promises concurrently in JavaScript using Promise.all
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise 1");
        resolve("resolve 1");
    }, 2000);
})
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise 2");
        resolve("resolve 2");
    }, 3000);
})
let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise 3");
        resolve("resolve 3");
    }, 4000);
})

Promise.all([promise1, promise2, promise3])
    .then((result) => {
        console.log("Successful", result);
    }).catch((error) => {
        console.log("Un-Successful", error);
    })