// Permutation of an Array              
function getPermutation(arr, idx, ans) {
    if (idx === arr.length) {
        ans.push([...arr]); // Push a copy of the current permutation
        return;
    }
    for (let i = idx; i < arr.length; i++) {
        // Swap arr[idx] and arr[i]
        [arr[idx], arr[i]] = [arr[i], arr[idx]];
        // Recursive call with idx + 1
        getPermutation(arr, idx + 1, ans);
        // Backtracking: revert the swap
        [arr[idx], arr[i]] = [arr[i], arr[idx]];
    }
}

function permutation(arr) {
    const ans = [];
    getPermutation(arr, i = 0, ans);
    return ans;
}

const arr = [1, 2, 3];
const result = permutation(arr);
console.log(result);
