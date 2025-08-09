// Q1. Decimal to Binary Conversion.
function decimalToBinary(n) {
    let ans = 0;
    let pow = 1;
    while (n > 0) {
        let rem = n % 2;
        n = Math.floor(n / 2);
        ans = ans + (rem * pow);
        pow = pow * 10;
    }
    return ans;
}
console.log(decimalToBinary(10));

