// LeetCode 852 : Peak Index in a Mountain Array                      
// Method : Binary Approach - Data is Sorted in any way               
// Time Complexity : O(log n)        
function peakIndex(arr) {
    let st = 1;
    let end = arr.length - 2;
    while (st <= end) {
        let mid = Math.floor(st + (end - st) / 2);
        if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
            return mid;
        }
        else if (arr[mid - 1] < arr[mid]) { // Go -> Right 
            st = mid + 1;
        }
        else { // Go -> Left 
            end = mid - 1;
        }
    }
}
console.log(peakIndex([0, 3, 8, 9, 5, 3]));
