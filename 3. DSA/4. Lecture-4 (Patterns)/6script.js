// Q1. Inverted Triangle pattern 1111, 222, 33, 4.
// function pattern(m) {
//     for (let i = 0; i < m; i++) {
//         // Spaces
//         let col = '';
//         for (let j = 0; j < i; j++) {
//             col = col + ' ';
//         }
//         // Numbers
//         for (let j = 0; j < m - i; j++) {
//             col = col + (i + 1);
//         }
//         console.log(col);
//     }
// }
// pattern(4);



// Q2. Inverted Triangle pattern with character AAAA, BBB, CC, D.
// function pattern(m) {
//     for (let i = 0; i < m; i++) {
//         // Spaces
//         let col = '';
//         for (let j = 0; j < i; j++) {
//             col = col + ' ';
//         }
//         // Numbers
//         for (let j = 0; j < m - i; j++) {
//             col = col + String.fromCharCode(65 + i);
//         }
//         console.log(col);
//     }
// }
// pattern(4);
