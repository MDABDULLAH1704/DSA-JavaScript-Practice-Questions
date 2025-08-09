// Q2. Binary to Decimal Conversion.  
function binaryToDecimal(n) {
    let ans = 0;
    let pow = 1;
    while (n > 0) {
        let rem = n % 10;
        n = Math.floor(n / 10);
        ans = ans + (rem * pow);
        pow = pow * 2;
    }
    return ans;
}
console.log(binaryToDecimal(1010));

