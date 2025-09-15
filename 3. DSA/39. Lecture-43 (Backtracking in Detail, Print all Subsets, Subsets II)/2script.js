// Print Subsets               
// Method - Using Recursion               
function getAllSubsets(arr, i, ans, allSubsets) {
    if (i === arr.length) {
        allSubsets.push([...ans]);  // Add a copy of current subset
        return;
    }
    // Include current element
    ans.push(arr[i]);
    getAllSubsets(arr, i + 1, ans, allSubsets);
    // Backtrack - Exclude current element
    ans.pop();
    getAllSubsets(arr, i + 1, ans, allSubsets);
}

function subsets(arr) {
    const ans = [];
    const allSubsets = [];
    getAllSubsets(arr, i = 0, ans, allSubsets);
    return allSubsets;
}

const arr = [1, 2, 3];
console.log(subsets(arr));
