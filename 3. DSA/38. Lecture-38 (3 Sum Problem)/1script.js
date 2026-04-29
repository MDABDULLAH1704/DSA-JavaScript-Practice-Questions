// 3 Sum Problem             
// Method 1 - Brute Force             
// Time Complexity - O(n3 * log(unique triplet))                
function threeSum(arr) {
    const n = arr.length;
    const ans = [];
    const s = new Set(); // to store unique triplets as strings

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    let trip = [arr[i], arr[j], arr[k]];
                    trip.sort((a, b) => a - b); // sort the triplet

                    const key = trip.join(","); // convert array to string for uniqueness
                    if (!s.has(key)) {
                        s.add(key);
                        ans.push(trip);
                    }
                }
            }
        }
    }
    return ans;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
