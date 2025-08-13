// Q2. Majority ELements (169 LeetCode)             
// Time Complexity : O(n square)          
// Method 1 : Brute Force       
function majorityElement(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let freq = 0;
        for (let j = 0; j < n; j++) {
            if (arr[j] === arr[i]) {
                freq++;
            }
        }
        if (freq > Math.floor(n / 2)) {
            return arr[i];
        }
    }
    // In case there is no majority element
    return null;
}

console.log(majorityElement([3, 3, 4, 2, 3, 3, 5])); 
