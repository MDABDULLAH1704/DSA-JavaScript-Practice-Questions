// Print Subsets II (No Repeating Allowed)                        
// Method - Using Recursion               
function getAllSubsets(arr, ans, i, allSubsets) {
    if (i === arr.length) {
        allSubsets.push([...ans]);
        return;
    }
    // Include current element
    ans.push(arr[i]);
    getAllSubsets(arr, ans, i + 1, allSubsets);
    // Backtrack
    ans.pop();
    // Skip duplicates
    let idx = i + 1;
    while (idx < arr.length && arr[idx] === arr[idx - 1]) {
        idx++;
    }
    // Exclude current element and move to the next unique element
    getAllSubsets(arr, ans, idx, allSubsets);
}

function subsetsWithDup(arr) {
    arr.sort((a, b) => a - b);  // Sort the array to group duplicates
    const ans = [];
    const allSubsets = [];
    getAllSubsets(arr, ans, 0, allSubsets);
    return allSubsets;
}

const arr = [1, 2, 2];
console.log(subsetsWithDup(arr));
