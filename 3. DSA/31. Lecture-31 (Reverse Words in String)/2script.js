// Reverse Words in String               
// Time Complexity: O(n)         
// Space Complexity: O(n)       
// Method-2              
function reverseWords(str) {
    let n = str.length;
    let ans = '';
    let strArr = str.split('').reverse();
    str = strArr.join('');

    let i = 0;
    while (i < n) {
        let word = '';
        while (i < n && str[i] === ' ') i++;
        while (i < n && str[i] !== ' ') word += str[i++];
        let reversedWord = word.split('').reverse().join('');
        if (reversedWord.length > 0) ans += ' ' + reversedWord;
    }
    return ans.trim();
}
console.log(reverseWords('the sky is blue'));
