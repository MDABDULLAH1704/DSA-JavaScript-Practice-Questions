// ASCII value of A-Z : 65-90
// ASCII value of a-z : 97-122           

// Reverse an String         
function charStrReverse(str) {
    let arr = str.split('');
    let st = 0;
    let end = arr.length - 1;
    while (st < end) {
        [arr[st], arr[end]] = [arr[end], arr[st]];
        st++;
        end--;
    }
    return arr.join('');
}
console.log(charStrReverse('hello'));

// Another method exist to solve this question, you have to take temp (temporary) variable then swap and also using destructuring.       
