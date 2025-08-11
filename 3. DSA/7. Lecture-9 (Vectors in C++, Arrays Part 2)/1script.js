// LeetCode 136. Single Number - Given a non empty array of integers num, every element appears twice except for one. Find that single one.          
function singleNumber(arr) {
    let ans = 0;
    arr.forEach(val => {
        ans = ans ^ val;
    });
    return ans;
}
console.log(singleNumber([1, 2, 3, 2, 1]));

