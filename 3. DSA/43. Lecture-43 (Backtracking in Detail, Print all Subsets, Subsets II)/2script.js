// Print Subsets               
// Method - Using Recursion               
// function getAllSubsets(arr, ans, i, allSubsets) {
//     if (i === arr.length) {
//         allSubsets.push([...ans]);  // Add a copy of current subset
//         return;
//     }
//     // Include current element
//     ans.push(arr[i]);
//     getAllSubsets(arr, ans, i + 1, allSubsets);
//     // Backtrack - Exclude current element
//     ans.pop();
//     getAllSubsets(arr, ans, i + 1, allSubsets);
// }

// function subsets(arr) {
//     const ans = [];
//     const allSubsets = [];
//     getAllSubsets(arr, ans, i = 0, allSubsets);
//     return allSubsets;
// }

// const arr = [1, 2, 3];
// console.log(subsets(arr));



// Method 2             
function getAllSubsets(arr, i = 0, ans = [], allSubsets = []) {
    if (i === arr.length) {
        allSubsets.push([...ans]); // copy current subset
        return allSubsets;
    }

    // Include current element
    ans.push(arr[i]);
    getAllSubsets(arr, i + 1, ans, allSubsets);

    // Exclude current element (backtrack)
    ans.pop();
    getAllSubsets(arr, i + 1, ans, allSubsets);

    return allSubsets;
}

const arr = [1, 2, 3];
console.log(getAllSubsets(arr));
