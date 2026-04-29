// Permutation of String 
function getStringPermutations(str, idx = 0, ans = []) {
    const arr = str.split('');   // convert string → array ONCE
    helper(arr, idx, ans);
    return ans;
}

function helper(arr, idx, ans) {
    if (idx === arr.length) {
        ans.push(arr.join('')); // convert array → string
        return;
    }

    for (let i = idx; i < arr.length; i++) {
        // choose
        [arr[idx], arr[i]] = [arr[i], arr[idx]];

        // recurse
        helper(arr, idx + 1, ans);

        // backtrack
        [arr[idx], arr[i]] = [arr[i], arr[idx]];
    }
}

const str = 'abc';
console.log(getStringPermutations(str));