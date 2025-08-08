// Q3. Calculate sum of digits of a number.  
// Method 1      
// function sumOfDigit(n) {
//     let arr = n.toString().split('');
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + Number(arr[i]);
//     }
//     console.log(sum);
// }
// sumOfDigit(12345);
// Method 2     
// function sumOfDigit(n) {
//     let sum = 0;
//     while (n > 0) {
//         lastDigit = n % 10;
//         n = Math.floor(n / 10);
//         sum = sum + lastDigit;
//     }
//     console.log(sum);
// }
// sumOfDigit(1234);



