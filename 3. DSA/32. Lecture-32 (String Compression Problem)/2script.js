// String Compression               
// Method : 2      
function stringCompression(chars) {
    let n = chars.length;
    let idx = 0;
    let i = 0;

    while (i < n) {
        let ch = chars[i];
        let count = 0;
        // Count consecutive same characters
        while (i < n && chars[i] === ch) {
            count++;
            i++;
        }
        // Insert the character
        chars[idx++] = ch;
        // If count > 1, insert digits of count
        if (count > 1) {
            let str = count.toString();
            for (let dig of str) {
                chars[idx++] = dig;
            }
        }
    }
    chars.length = idx;
    return idx;
}
let chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
console.log(stringCompression(chars)); // 6
console.log(chars); 
