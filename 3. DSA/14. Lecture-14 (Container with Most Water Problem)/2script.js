// Container with Most Water                   
// Method : Two Pointer Approach      
// Time Complexity : O(n)         
function maxArea(arr) {
    let st = 0;
    let end = arr.length - 1;
    let maxWater = 0;
    while (st < end) {
        let width = end - st;
        let height = Math.min(arr[st], arr[end]);
        let currWater = width * height;
        maxWater = Math.max(maxWater, currWater);
        arr[st] < arr[end] ? st++ : end--;
    }
    return maxWater;
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
