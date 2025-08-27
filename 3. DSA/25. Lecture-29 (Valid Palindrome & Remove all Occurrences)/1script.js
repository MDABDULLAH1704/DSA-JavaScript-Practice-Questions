// Q. Valid Palindrome        

// isAlphaNum Function      
function isAlphaNum(char) {
    if (char >= '0' && char <= '9' ||
        (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z')) {
        return true;
    }
    return false;  
}

// isPalindrome Function      
function isPalindrome(str) {
    let st = 0;
    let end = str.length - 1;
    while (st < end) {
        if (!isAlphaNum(str[st])) {
            st++;
            continue;
        }
        if (!isAlphaNum(str[end])) {
            end--;
            continue;
        }
        if (str[st].toLowerCase() !== str[end].toLowerCase()) {
            return false;
        }
        st++;
        end--;
    }
    return true;
}
console.log(isPalindrome('Ac3?e3c&a'));
console.log(isPalindrome('race a car'));
