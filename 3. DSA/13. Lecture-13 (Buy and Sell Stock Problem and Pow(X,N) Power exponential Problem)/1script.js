// Binary Exponentiation : Compute X power n (Pow(X,N))       
// Method : Using Bits            
function XPowerN(x, n) {
    let ans = 1;
    let binForm = n;

    if (n == 0) return 1;
    if (x == 0) return 0;
    if (x == 1) return 1;
    if (x == -1 && n % 2 == 0) return 1;
    if (x == -1 && n % 2 != 0) return -1;

    if (n < 0) {
        x = 1 / x;
        binForm = -binForm;
    }

    // Main Logic   
    while (binForm > 0) {
        if (binForm % 2 == 1) {
            ans = ans * x;
        }
        x = x * x; 
        binForm = Math.floor(binForm / 2);
    }
    return ans;
}
console.log(XPowerN(3, 4));



// Method 2            
// function XPowerN(x, n) {
//     let ans = 1;
//     for (let i = 0; i < n; i++) {
//         ans = ans * x;
//     }
//     return ans;
// }
// console.log(XPowerN(3, 4));



// Method 3            
// function XPowerN(x, n) {
//     let ans = Math.pow(x, n);
//     return ans;
// }
// console.log(XPowerN(3, 4));



// Method 4            
// function XPowerN(x, n) {
//     let ans = x ** n;
//     return ans;
// }
// console.log(XPowerN(3, 4));
