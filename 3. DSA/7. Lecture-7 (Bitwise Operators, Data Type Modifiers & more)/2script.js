// Homework Questions 
// Q1. Figure out how to find if a number is power of 2 without any loop.               
// Method 1 - Using Loop                    
// function numberIsPowerOf2(num) {
//     for (let i = 1; i < 100; i++) {
//         let pow = 2 ** i; // Power operator   
//         if (pow === num) { 
//             return 1;   
//         }
//     }
//     return -1;
// }
// console.log(numberIsPowerOf2(16));
// console.log(numberIsPowerOf2(18));

// Method 2 - Using Bitwise
// function numberIsPowerOf2(num) {
//     if (num <= 0) return -1;
//     return (num & (num - 1)) === 0 ? 1 : -1;
// }
// console.log(numberIsPowerOf2(16)); // 1
// console.log(numberIsPowerOf2(18)); // -1
// console.log(numberIsPowerOf2(1));  // 1



// Q2. Write a function to reverse an integer N.           
function reverseInteger(N) {
    let rev = 0;
    while (N > 0) {
        let digit = N % 10;     // get last digit
        N = Math.floor(N / 10); // remove last digit
        rev = rev * 10 + digit; // add digit to reversed number
    }
    return rev;
}
console.log(reverseInteger(560));    // 65
console.log(reverseInteger(1234));   // 4321
