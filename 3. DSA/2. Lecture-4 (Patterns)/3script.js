// Q1. Triangle pattern      
// function pattern(m) {
//     for (let i = 0; i < m; i++) {
//         let row = '';
//         for (let j = 0; j <= i; j++) {
//             row = row + '* ';
//         }
//         console.log(row);
//     }
// }
// pattern(5);



// Q2. Triangle pattern for number
// function pattern(m) {
//     for (let i = 0; i < m; i++) {
//         let row = '';
//         for (let j = 0; j <= i; j++) {
//             row = row + (i + 1);
//         }
//         console.log(row);
//     }
// }
// pattern(5);



// Q3. Triangle pattern for character
// function pattern(m) {
//     for (let i = 0; i < m; i++) {
//         let row = '';
//         for (let j = 0; j <= i; j++) {
//             row = row + String.fromCharCode(65 + i);
//         }
//         console.log(row);
//     }
// }
// pattern(5);



// Q4. Triangle pattern 1, 12, 123, 1234, 12345. 
// Method 1 
// function pattern(m) {
//     for (let i = 0; i < m; i++) {
//         let row = '';
//         for (let j = 0; j <= i; j++) {
//             row = row + (j + 1);
//         }
//         console.log(row);
//     }
// }
// pattern(5);
// Method 2
// function pattern(m) {
//     for (let i = 0; i < m; i++) {
//         let num = 1;
//         let row = '';
//         for (let j = 0; j <= i; j++) {
//             row = row + num; 
//             num++;
//         }
//         console.log(row);
//     }
// }
// pattern(5);
