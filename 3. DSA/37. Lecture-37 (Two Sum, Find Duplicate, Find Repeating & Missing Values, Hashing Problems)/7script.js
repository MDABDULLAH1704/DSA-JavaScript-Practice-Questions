// Q3. Find Duplicate Number              
// Method - 2 (Floyd’s Cycle Detection / Tortoise & Hare method)         
// Time Complexity - O(n)            
// Space Complexity - O(1)           
function findDuplicate(arr) {
    let slow = arr[0];
    let fast = arr[0];

    // Phase 1: Detect cycle  
    do {
        slow = arr[slow];  // move 1 step   
        fast = arr[arr[fast]];  // move 2 steps   
    } while (slow !== fast);

    // Phase 2: Find entry point of the cycle   
    slow = arr[0];
    while (slow !== fast) {
        slow = arr[slow];  // move 1 step   
        fast = arr[fast];  // move 1 step   
    }

    return slow;
}
console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2])); 
