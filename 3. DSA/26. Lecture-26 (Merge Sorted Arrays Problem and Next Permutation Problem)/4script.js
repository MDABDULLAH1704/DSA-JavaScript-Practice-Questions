// Next Permutation                
// [1, 2, 3] Return Lexicographically Next          
// Method 2 : Optimal Approach              
// Time Complexity : O(n)            
function nextPermutation(arr) {
    let pivot = -1;
    let n = arr.length;
    // Step 1: Find pivot  
    for (let i = n - 1; i >= 0; i--) {
        if (arr[i] < arr[i + 1]) {
            pivot = i;
            break;
        }
    }

    // Step 2: If no pivot, reverse (last permutation case)   
    if (pivot == -1) {
        arr.reverse(); // in-place changes    
        return;
    }

    // Step 3: Find rightmost successor to pivot 
    for (let i = n - 1; i > pivot; i--) {
        if (arr[i] > arr[pivot]) {
            [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
            break;
        }
    }

    // Step 4: Reverse the suffix
    let left = pivot + 1, right = n - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr;
}
console.log(nextPermutation(([1, 2, 3])));
