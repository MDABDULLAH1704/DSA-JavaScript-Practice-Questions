// Q1. 2 Sum Problem                  
// Method 3 - Optimized Approach 1             
// Time Complexity - O(n)          
// map.set = put data into the map (key → value).   
// map.get = retrieve the value for a given key.    
// map.has = checks if the given key already exists in the map (returns true or false).   
function twoSum(arr, target) {
    let map = new Map();
    let ans = [];

    for (let i = 0; i < arr.length; i++) {
        let first = arr[i];
        let sec = target - first;

        if (map.has(sec)) {
            ans.push(i);
            ans.push(map.get(sec));
            break;
        }
        map.set(first, i);
    }
    return ans;
}
console.log(twoSum([2, 7, 11, 15], 9));  
