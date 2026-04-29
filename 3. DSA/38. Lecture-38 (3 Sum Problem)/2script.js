// 3 Sum Problem             
// Method 2 - Approach With Hashing             
// Time Complexity - O(n2 * log(unique triplet))                
function threeSum(nums) {
    const n = nums.length;
    const uniqueTriplets = new Set(); // store unique triplets as strings

    for (let i = 0; i < n; i++) {
        const s = new Set(); // hashset for this i
        const target = -nums[i];

        for (let j = i + 1; j < n; j++) {
            const third = target - nums[j];

            if (s.has(third)) {
                let trip = [nums[i], nums[j], third]; // Found a valid triplet
                trip.sort((a, b) => a - b);

                const key = trip.join(","); // unique key
                uniqueTriplets.add(key);
            }

            s.add(nums[j]); // add current element for future checks
        }
    }

    // Convert set back to array of arrays
    const ans = Array.from(uniqueTriplets).map(str =>
        str.split(",").map(Number)
    );

    return ans;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
