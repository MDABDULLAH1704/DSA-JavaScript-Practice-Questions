// Topic:- setTimeout, callBack, callBack Hell, Promises, Async Await


// setTimeout
// Method 1
// function hello() {
//     console.log("hello");
// }
// setTimeout(hello, 2000);

// Method 2
// setTimeout(() => {
//     console.log("hello 2");
// }, 3000);

// Method 3
// const hello3 = () => {
//     console.log("hello 3");
// }
// setTimeout(hello3, 2000);




// callBack
// function sum(a, b) {
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }

// calculator(1, 2, sum);




// callBack Hell
// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }
// console.log(getData(1));
// console.log(getData(2));
// getData(1, () => {
//     console.log("getting data 2...")
//     getData(2, () => {
//         console.log("getting data 3...")
//         getData(3, () => {
//             console.log("getting data 4...")
//             getData(4);
//         })
//     });
// });




// Promises 1
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise")
// reject("some error occurred");
// })
// console.log(promise);


// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 3000);
//     })
// }

// let result = getData(123);
// console.log(result);




// Promises 2
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise")
//         resolve("success");
// reject("error");   //
//     });
// };

// let promise = getPromise();

// promise.then((res) => {
//     console.log("promise fulfilled", res);
// })

// promise.catch((err) => {
//     console.log("rejected network", err);
// })




// Promises 3
// function asyncFunc() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some detail");
//             resolve("success");
//         }, 3000);
//     });
// }

// console.log("fetching data 1...");

// let p1 = asyncFunc();
// console.log(p1);

// p1.then((res) => {
//     console.log(res);
// })




// Promises 4
// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 1");
//             resolve("success");
//         }, 2000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 2");
//             resolve("success");
//         }, 4000);
//     });
// }

// console.log("fetching data 1...");

// let p1 = asyncFunc1();
// console.log(p1);   //

// p1.then((resolve) => {
//     console.log(resolve);
//     console.log("fetching data 2...");
//     let p2 = asyncFunc2(resolve);
//     p2.then(() => {
//         console.log(resolve);
//     });
// });




// Async Await 1
// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);
//     });
//     console.log("hello 4")
// }
// console.log(api);   //
// console.log(api());   //

// async function getWeatherData() {
//     await api();
//     await api();
// }
// console.log(getWeatherData());




// Async Await 2
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 2000);
//     });
// }

// async function getAllData() {
//     console.log("getting data 1...");
//     await getData(1);
//     console.log("getting data 2...");
//     await getData(2);
//     console.log("getting data 3...");
//     await getData(3);
// }
// console.log(getAllData());




// IIFE (Immediately Invoked Function Expression)
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}

(async function () {
    console.log("getting data 1...");
    await getData(1);
    console.log("getting data 2...");
    await getData(2);
    console.log("getting data 3...");
    await getData(3);
}) ();