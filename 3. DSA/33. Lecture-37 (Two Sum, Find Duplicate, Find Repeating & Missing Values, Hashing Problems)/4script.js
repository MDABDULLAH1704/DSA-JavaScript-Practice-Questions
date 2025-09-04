// Q1. 2 Sum                   
// Method 4 - Optimized Approach 2              
// Time Complexity - O(n)          
// map.set = put data into the map (key → value).   
// map.get = retrieve the value for a given key.    
// map.has = checks if the given key already exists in the map (returns true or false).   
function twoSum(arr, target) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let sec = target - arr[i];
        if (map.has(sec)) {
            return [map.get(sec), i];  // Directly return answer  
        }
        map.set(arr[i], i);
    }

    return []; // No solution   
}
console.log(twoSum([2, 7, 11, 15], 9));  
