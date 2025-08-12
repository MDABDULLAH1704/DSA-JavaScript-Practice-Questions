// Q2. Majority ELements (169 LeetCode)             
// Time Complexity : O(n logN)          
// Method 3 : Moore's Voting Algorithm        
function majorityElement(arr) {
    let freq = 0;
    let ans = 0;

    for (let i = 0; i < arr.length; i++) {
        if (freq === 0) {
            ans = arr[i];
        }
        if (ans === arr[i]) {
            freq++;
        } else {
            freq--;
        }
    }

    return ans;
}

console.log(majorityElement([3, 2, 3]));          // 3
