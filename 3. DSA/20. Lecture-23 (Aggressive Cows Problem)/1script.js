// Aggressive Cows Problem              

// isPossible Function         
function isPossible(arr, N, C, minAllowedDist) { // O(N)   
    let cows = 1;
    let lastStallPos = arr[0];  // stall position of last cow       
    for (let i = 1; i < N; i++) {
        if (arr[i] - lastStallPos >= minAllowedDist) { // minAllowedDist = mid     
            cows++;
            lastStallPos = arr[i];
        }
        if (cows == C) { // all cows placed successfully   
            return true;
        }
    }
    return false; // not enough stalls   
}

// getDistance Function         
function getDistance(arr, N, C) {
    arr.sort((a, b) => a - b); // N(logN)  
    let st = 1; // minimum possible distance = 1  
    let end = arr[N - 1] - arr[0]; // maximum possible distance = last stall − first stall  
    let ans = -1; // -1 is preferred to clearly indicate "no answer yet." & also due to distance          
    while (st <= end) { // O(log(Range) * N)     
        let mid = Math.floor(st + (end - st) / 2);
        if (isPossible(arr, N, C, mid)) { // Right  
            ans = mid;
            st = mid + 1; // try bigger distance   
        }
        else { // Left  
            end = mid - 1;
        }
    }
    return ans;
}
console.log(getDistance([1, 2, 8, 4, 9], 5, 3));
