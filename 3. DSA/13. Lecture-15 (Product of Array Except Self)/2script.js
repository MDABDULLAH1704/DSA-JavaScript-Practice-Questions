// Product Of Array Except Self                     
// Method : Optimal Approach           
// Time Complexity : O(n) & O(1) Space Complexity        
function productExceptSelf(arr) {
    let n = arr.length;
    let result = new Array(n).fill(1);

    // Step 1: Prefix product
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= arr[i];
    }

    // Step 2: Suffix product (multiply into result)
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= arr[i];
    }

    return result;
}
console.log(productExceptSelf([1, 2, 3, 4]));



// Method : 2           
// function productExceptSelf(arr) {
//     const n = arr.length;
//     const res = Array(n).fill(1);

//     // prefix pass
//     for (let i = 1; i < n; i++) {
//         res[i] = res[i - 1] * arr[i - 1];
//     }

//     // suffix pass
//     let suffix = 1;
//     for (let i = n - 1; i >= 0; i--) {
//         res[i] *= suffix;
//         suffix *= arr[i];
//     }

//     return res;
// }

// console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
