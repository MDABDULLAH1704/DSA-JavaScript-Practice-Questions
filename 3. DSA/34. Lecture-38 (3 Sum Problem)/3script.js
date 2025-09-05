// 3 Sum Problem
// Method 3 - Two Pointer Approach
// Time Complexity - O(n2 + n*log(n))           
function threeSum(arr) {
    let ans = [];
    arr.sort((a, b) => a - b); // Step 1: sort the array

    for (let i = 0; i < arr.length; i++) {
        // Skip duplicate first numbers
        if (i > 0 && arr[i] === arr[i - 1]) continue;

        let j = i + 1;
        let k = arr.length - 1;

        while (j < k) {
            let sum = arr[i] + arr[j] + arr[k];

            if (sum < 0) {
                j++; // need bigger sum
            } else if (sum > 0) {
                k--; // need smaller sum
            } else {
                // Found a valid triplet
                ans.push([arr[i], arr[j], arr[k]]);
                j++;
                k--;

                // Skip duplicate arr[j]
                while (j < k && arr[j] === arr[j - 1]) j++;
                // Skip duplicate arr[k]
                while (j < k && arr[k] === arr[k + 1]) k--;
            }
        }
    }
    return ans;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
