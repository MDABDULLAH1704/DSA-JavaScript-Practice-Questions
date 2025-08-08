// Q1. Pyramid pattern 1, 121, 12321, 1234321. 
// Method 1 
// function pattern(m) {
//     for (let i = 0; i < m; i++) {
//         // Spaces 
//         let col = '';
//         for (let j = 0; j < m - 1 - i; j++) {
//             col = col + ' ';
//         }
//         // Number1 
//         for (let j = 1; j <= i + 1; j++) {
//             col = col + j;
//         }
//         // Number2  
//         for (let j = i; j > 0; j--) {
//             col = col + j;
//         }
//         console.log(col);
//     }
// }
// pattern(4);



// Method 2 
// function pattern(m) {
//     for (let i = 0; i < m; i++) {
//         let col = '';
//         for (let j = 0; j < m - 1 - i; j++) {
//             col = col + ' ';
//         }
//         for (let j = 0; j <= i; j++) {
//             col = col + (j + 1);
//         }
//         for (let j = i; j > 0; j--) {
//             col = col + j;
//         }
//         console.log(col);
//     }
// }
// pattern(5); 
