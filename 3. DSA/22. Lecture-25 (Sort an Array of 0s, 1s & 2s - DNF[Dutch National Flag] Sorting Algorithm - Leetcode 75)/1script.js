// Sort Array with 0s, 1s & 2s             
// [2, 0, 2, 1, 1, 0, 1, 2, 0, 0]               
// Method : Brute Force            
// Time Complexity : O(n * log(n))                
function sortArray(arr) {
    arr.sort((a, b) => a - b);
    return arr;
}
console.log(sortArray([2, 0, 2, 1, 1, 0, 1, 2, 0, 0]));



// When sorting, JavaScript repeatedly compares two elements :     
// If result > 0 → b comes before a      
// If result < 0 → a comes before b    
// If result = 0 → order unchanged       
