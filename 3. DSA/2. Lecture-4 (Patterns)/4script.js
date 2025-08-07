// Q1. Reverse Triangle pattern 1, 21, 321, 4321.
// Method 1
// function pattern(m) {
//     for (let i = 0; i < m; i++) {
//         let num = i + 1;
//         let col = '';
//         for (let j = 0; j <= i; j++) {
//             col = col + num;
//             num--;
//         }
//         console.log(col);
//     }
// }
// pattern(5);

// Method 2
// function pattern(m) {
//     for (let i = 0; i < m; i++) {
//         let col = '';
//         for (let j = i + 1; j > 0; j--) {
//             col = col + j;
//         }
//         console.log(col);
//     }
// }
// pattern(5);



// Q2. Reverse Triangle pattern with character
// Method 1
// function pattern(m) {
//     for (let i = 0; i < m; i++) {
//         let num = i + 0;
//         let col = '';
//         for (let j = 0; j <= i; j++) {
//             col = col + String.fromCharCode(65 + num);
//             num--;
//         }
//         console.log(col);
//     }
// }
// pattern(5);

// Method 2
// function pattern(m) {
//     for (let i = 0; i < m; i++) {
//         let col = '';
//         for (let j = i + 1; j > 0; j--) {
//             col = col + String.fromCharCode(65 + j - 1);
//         }
//         console.log(col);
//     }
// }
// pattern(5);

