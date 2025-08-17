// Product Of Array Except Self                     
// Method : Brute Force                
// Time Complexity : O(n2)       
function productExceptSelf(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let product = 1;
        for (let j = 0; j < arr.length; j++) {
            if (i != j) {
                product = product * arr[j]; 
            }
        }
        newArr.push(product);
    }
    return newArr;
}
console.log(productExceptSelf([1, 2, 3, 4]));
