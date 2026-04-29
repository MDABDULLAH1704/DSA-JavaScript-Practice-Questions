// Q1. Find smallest in an array.        
// function smallest(arr) {
//     let small = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < small) {
//             small = arr[i];
//         };
//     }
//     return small;
// }
// console.log('Smallest in an array is', smallest([-25, -35, 22, 24, 13]));



// Q2. Find Largest in an array.         
function largest(arr) {
    let large = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > large) {
            large = arr[i];
        }
    }
    return large;
}
console.log('Largest in array is', largest([5, -15, 22, 24, 13]));
