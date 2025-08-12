// Q2. Majority ELements (169 LeetCode)             
// Time Complexity : O(n square)          
// Method 1 : Brute Force       
function majorityElement(arr) {
    let n = arr.length;

    for (let val of arr) {
        let freq = 0;

        for (let el of arr) {
            if (el === val) {
                freq++;
            }
        }

        if (freq > Math.floor(n / 2)) {
            return val;
        }
    }

    // In case there is no majority element (though problem usually assumes one exists)
    return null;
}

console.log(majorityElement([3, 3, 4, 2, 3, 3, 5])); 
