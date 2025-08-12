// Q2. Majority ELements (169 LeetCode)             
// Time Complexity : O(n logN)          
// Method 2 : Sorting Approach        
function majorityElement(arr) {
    let n = arr.length;
    arr.sort((a, b) => a - b);

    let freq = 1;
    let ans = arr[0];

    for (let i = 1; i < n; i++) {
        if (arr[i] === arr[i - 1]) {
            freq++;
        } else {
            freq = 1;
            ans = arr[i];
        }

        if (freq > Math.floor(n / 2)) {
            return arr[i];
        }
    }

    return ans;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); 
