// Container with Most Water                   
// Method : Brute Force      
// Time Complexity : O(n2)                    
function maxArea(arr) {
    let maxWater = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let width = j - i;
            let height = Math.min(arr[i], arr[j]);
            let currWater = width * height;
            maxWater = Math.max(maxWater, currWater);
        }
    }
    return maxWater;
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
