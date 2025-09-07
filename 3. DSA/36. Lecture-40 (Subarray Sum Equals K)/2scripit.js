// SubArray Sum Equals K                        
// Method 2            
// Time Complexity - O(n2)                       
// Space Complexity - O(n)            
function subarraySum(arr, k) {
    let n = arr.length;
    let count = 0;
    let prefixSum = new Array(n).fill(0);

    prefixSum[0] = arr[0];
    for (let i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i];
    }

    let map = new Map();

    for (let j = 0; j < n; j++) {
        // If prefixSum[j] itself equals k
        if (prefixSum[j] === k) {
            count++;
        }

        let val = prefixSum[j] - k;
        if (map.has(val)) {
            count += map.get(val);
        }

        // Update the frequency of prefixSum[j] in the map
        map.set(prefixSum[j], (map.get(prefixSum[j]) || 0) + 1);
    }

    return count;
}

console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));    
