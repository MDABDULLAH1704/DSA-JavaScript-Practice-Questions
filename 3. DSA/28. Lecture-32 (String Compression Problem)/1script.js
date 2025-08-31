// String Compression               
// Method : 1      
function stringCompression(chars) {
    let n = chars.length;
    let idx = 0;

    for (let i = 0; i < n; i++) {
        let ch = chars[i];
        let count = 0;
        // Count consecutive same characters   
        while (i < n && chars[i] === ch) {
            count++;
            i++;
        }
        // Insert the character   
        chars[idx++] = ch;
        // Convert number to string and insert digits   
        if (count > 1) {
            let str = count.toString();
            for (let dig of str) {
                chars[idx++] = dig;
            }
        }
        // Adjust index since outer loop also does i++   
        i--;
    }
    // Trim array to new size   
    chars.length = idx;
    return idx;
}
let chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
console.log(stringCompression(chars));
console.log(chars);

