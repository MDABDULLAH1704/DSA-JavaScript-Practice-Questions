// Book Allocation Problem                        
// Time Complexity : O(logN * n)                 

// Helper function to check if allocation is possible
function isValid(arr, n, m, maxAllowedPages) {
    let students = 1;  // start with 1 student
    let pages = 0;

    for (let i = 0; i < n; i++) {
        // If a single book has more pages than allowed, allocation is not possible
        if (arr[i] > maxAllowedPages) {
            return false;
        }

        // If adding this book exceeds the limit, assign to next student
        if (pages + arr[i] <= maxAllowedPages) {
            pages += arr[i];
        } else {
            students++;
            pages = arr[i];  // start new allocation
        }
    }

    // Return true if we can allocate within m students
    return students <= m;
}

// Main function to allocate books
function allocateBooks(arr, n, m) {
    if (m > n) return -1;  // more students than books not possible

    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }

    let ans = -1;
    let start = 0, end = sum;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (isValid(arr, n, m, mid)) {
            ans = mid;        // possible answer
            end = mid - 1;    // try smaller value
        } else {
            start = mid + 1;  // need larger value
        }
    }

    return ans;
}

// Example usage
let arr = [2, 1, 3, 4];
let n = arr.length;
let m = 2;

console.log(allocateBooks(arr, n, m));  // Output → 5
