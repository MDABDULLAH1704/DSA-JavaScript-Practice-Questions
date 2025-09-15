// Print Subsets II (No Repeating Allowed)                        
// Method - Using Recursion               
function getAllSubsets(arr, i, ans, allSubsets) {
    if (i === arr.length) {
        allSubsets.push([...ans]);
        return;
    }
    // Include current element
    ans.push(arr[i]);
    getAllSubsets(arr, i + 1, ans, allSubsets);
    // Backtrack
    ans.pop();
    // Skip duplicates
    let idx = i + 1;
    while (idx < arr.length && arr[idx] === arr[idx - 1]) {
        idx++;
    }
    // Exclude current element and move to the next unique element
    getAllSubsets(arr, idx, ans, allSubsets);
}

function subsetsWithDup(arr) {
    arr.sort((a, b) => a - b);  // Sort the array to group duplicates
    const ans = [];
    const allSubsets = [];
    getAllSubsets(arr, 0, ans, allSubsets);
    return allSubsets;
}

const arr = [1, 2, 2];
console.log(subsetsWithDup(arr));
