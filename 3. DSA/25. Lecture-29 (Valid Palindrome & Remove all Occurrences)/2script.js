// Q. Remove all Occurrences            
function removeOccurrences(s, part) {
    while (s.length > 0 && s.indexOf(part) !== -1) {
        s = s.slice(0, s.indexOf(part)) + s.slice(s.indexOf(part) + part.length);
    }
    return s;
}
console.log(removeOccurrences('daabcbaabcbc', 'abc'));


// In JavaScript, string.indexOf(substring) gives the starting position (index) of the first occurrence of substring inside the string.
// If the substring does not exist, it returns -1.
