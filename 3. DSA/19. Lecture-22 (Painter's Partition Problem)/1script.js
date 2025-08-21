// Painters Partition Problem              
// Binary Search applied on possible values not on Array               

// isPossible Function : Time Complexity - O(n)          
function isPossible(arr, n, m, maxAllowedTime) { 
    // maxAllowedTime = mid         
    let painters = 1;
    let time = 0;
    for (let i = 0; i < n; i++) {
        if (time + arr[i] <= maxAllowedTime) {
            time = time + arr[i];
        }
        else {
            painters++;
            time = arr[i];
        }
    }
    return painters <= m;
}

// minTimeToPaint Function : Time Complexity - O(log(sum * n))               
function minTimeToPaint(arr, n, m) {
    let sum = 0;
    let maxVal = arr[0];
    for (let i = 0; i < n; i++) { // Time Complexity - O(n)          
        sum = sum + arr[i];
        maxVal = Math.max(maxVal, arr[i]);
    }

    let st = maxVal;
    let end = sum;
    let ans = -1;

    while (st <= end) { // Time Complexity - O(log(sum))          
        let mid = Math.floor(st + (end - st) / 2);
        if (isPossible(arr, n, m, mid)) { // Left  
            ans = mid;
            end = mid - 1;
        }
        else { // Right  
            st = mid + 1;
        }
    }
    return ans;
}
console.log(minTimeToPaint([40, 30, 10, 20], 4, 2));
