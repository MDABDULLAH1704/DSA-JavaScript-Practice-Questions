// Aggressive Cows Problem              

// isPossible Function         
function isPossible(arr, N, C, minAllowedDist) { // O(N)   
    let cows = 1;
    let lastStallPos = arr[0];
    for (let i = 1; i < N; i++) {
        if (arr[i] - lastStallPos >= minAllowedDist) {
            cows++;
            lastStallPos = arr[i];
        }
        if (cows == C) {
            return true;
        }
    }
    return false;
}

// getDistance Function         
function getDistance(arr, N, C) {
    arr.sort((a, b) => a - b); // N(logN)  
    let st = 1;
    let end = arr[N - 1] - arr[0];
    let ans = -1;
    while (st <= end) { // O(log(Range) * N)     
        let mid = Math.floor(st + (end - st) / 2);
        if (isPossible(arr, N, C, mid)) { // Right  
            ans = mid;
            st = mid + 1;
        }
        else { // Left  
            end = mid - 1;
        }
    }
    return ans;
}
console.log(getDistance([1, 2, 8, 4, 9], 5, 3));
