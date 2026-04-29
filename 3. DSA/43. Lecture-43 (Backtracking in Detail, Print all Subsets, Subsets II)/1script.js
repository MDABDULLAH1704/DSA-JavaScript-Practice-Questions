// Print All Subsets                
/* Key Backtracking Rule (Must Remember❗)  
   Whatever you add before recursion, you must remove after recursion. */  
// Method - Using Recursion               
function printSubsets(arr, ans = [], i = 0) {
    // Base case: Reached the end of the array
    if (i === arr.length) { // i = 0,1,2 & arr.length = 3                
        // console.log(ans.join(' '));
        console.log(ans);
        return;
    }

    // Include the current element in the subset
    ans.push(arr[i]);
    printSubsets(arr, ans, i + 1);

    // Backtrack: Remove the last element and proceed without including it
    ans.pop();
    printSubsets(arr, ans, i + 1);
}

// Example usage:
const arr = [1, 2, 3];
printSubsets(arr);
