// Q3. Find Duplicate Number              
// Method - 1                  
// Time Complexity - O(n)            
// Space Complexity - O(n)           
function findDuplicate(arr) {
    let seen = new Set(); // like unordered_set in C++   

    for (let val of arr) {
        if (seen.has(val)) {
            return val; // duplicate found     
        }
        seen.add(val);
    }
    return -1; // if no duplicate found   
}
console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2])); 
