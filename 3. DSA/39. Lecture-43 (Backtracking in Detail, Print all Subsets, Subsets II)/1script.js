// Print All Subsets               
// Method - Using Recursion               
function printSubsets(arr, i = 0, ans = []) {
    // Base case: Reached the end of the array
    if (i === arr.length) { // i = 0,1,2 & arr.length = 3                
        console.log(ans.join(' '));
        return;
    }

    // Include the current element in the subset
    ans.push(arr[i]);
    printSubsets(arr, i + 1, ans);

    // Backtrack: Remove the last element and proceed without including it
    ans.pop();
    printSubsets(arr, i + 1, ans);
}

// Example usage:
const arr = [1, 2, 3];
printSubsets(arr);
