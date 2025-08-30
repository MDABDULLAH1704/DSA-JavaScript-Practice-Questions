// Reverse Words in String               
// Time Complexity: O(n)         
// Space Complexity: O(n)        
function reverseWord(str) {
    let result = str.replace(/\s+/g, ' ').trim();
    let newStr = result.split(' ');
    let st = 0;
    let end = newStr.length - 1;
    while (st < end) {
        [newStr[st], newStr[end]] = [newStr[end], newStr[st]];
        st++;
        end--;
    }
    return newStr.join(' ');
}
console.log(reverseWord('the sky is blue'));
