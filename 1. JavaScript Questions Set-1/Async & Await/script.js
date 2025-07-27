// 1. Explain the purpose of async and await in JavaScript. Provide a simple example demonstrating their usage.
// Example demonstrating async/await
// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// fetchData();



// 2. How does error handling work with async/await ? Provide an example that includes proper error handling.
// Example demonstrating error handling with async/await
// async function fetchDataWithErrors() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/invalid-url');
//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching data:', error.message);
//     }
// }

// fetchDataWithErrors();



// 3. Explain how an async function can be used to return a Promise. Provide an example demonstrating the usage of async function in this context.
// async function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data fetched successfully.");
//         }, 2000);
//     })
// }

// async function processData() {
//     try {
//         let result = await fetchData();
//         console.log(result);
//     } catch (error) {
//         console.log('Error processing data:', error);
//     }
// }

// processData();



// 4. How can you ensure sequential execution of asynchronous tasks using async/await? Provide an example demonstrating the sequential execution of multiple asynchronous operations.
async function fetchData1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data-1 fetched successfully.")
        }, 1000);
    })
}
async function fetchData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data-2 fetched successfully.")
        }, 2000);
    })
}
async function fetchData3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data-3 fetched successfully.")
        }, 1000);
    })
}

async function processData() {
    try {
        let result1 = await fetchData1();
        console.log(result1);

        let result2 = await fetchData2();
        console.log(result2);

        let result3 = await fetchData3();
        console.log(result3);
    } catch (error) {
        console.log('Error processing data:', error);
    }
}

processData();