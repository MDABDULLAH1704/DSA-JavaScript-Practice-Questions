// Q4. Calculate nCr (like 4C2) binomial coefficient for n & r.          
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}

function nCr(n, r) {
    let factorial_n = factorial(n);
    let factorial_r = factorial(r);
    let factorial_nmr = factorial(n - r);
    let result = factorial_n / (factorial_r * factorial_nmr);
    console.log(result);
}
nCr(6, 3);