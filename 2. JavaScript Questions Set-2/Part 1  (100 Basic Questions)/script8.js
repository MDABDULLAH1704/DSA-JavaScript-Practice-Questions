// 71. Create a string and log its length.   
// let str = 'hello';
// console.log(str.length);

// 72. Extract the last 4 characters of a string.   
// let str = 'helloworld';
// console.log(str.slice(str.length - 4, str.length));
// console.log(str.slice(-4));

// 73. Convert a string to lowercase and log it.   
// Method 1   
// let str = 'ALI';
// console.log(str.toLowerCase());
// Method 2 
// let str = 'ALIBHAI';
// let lowerStr = str.split('').map(char => {
//     let code = char.charCodeAt(0);
//     if (code >= 65 && code <= 90) { // A-Z
//         return String.fromCharCode(code + 32); // a-z
//     }
//     return char;
// }).join('');
// console.log(lowerStr);  

// 74. Split a sentence into words using .split() and log the result.    
// let sent = 'hi how are you';
// console.log(sent.split(' '));

// 75. Find the position of the first occurrence of 'a' in a string.    
// let str = 'javascript';
// console.log(str.indexOf('a'));
// Method 2 
// let str = 'javascript';
// console.log(str.lastIndexOf('a'));
// Method 3 
// let str = "javascript and data analysis";
// let indices = [];
// for (let i = 0; i < str.length; i++) {
//     if(str[i] === 'a') {
//         indices.push(i);
//     }
// }
// console.log(indices);

// 76. Replace 'JavaScript' with 'JS' in the string 'I love JavaScript'.    
// let str = 'I love JavaScript';
// console.log(str.replace('JavaScript', 'JS'));

// 77. Repeat a string 3 times using .repeat().    
// let str = 'javascript';
// console.log(str.repeat(3));

// 78. Create a function that check if a string contains a specific word.   
// function checkWord(str, word) {
//     return str.toLowerCase().includes(word.toLowerCase());
// }
// console.log(checkWord('how are you all', 'all'));

// 79. Write a program to remove whitespace from both ends of a string.          
// let str = 'hi   how are     you      .';
// console.log(str.replace(/\s+/g, ' '));

// 80. Create a function to count the number of vowels in a string.        
// Method 1        
// let str = 'JavaScript';
// let count = 0;
// let newStr = str.toLowerCase();
// for (let i = 0; i < newStr.length; i++) {
//     if (newStr[i] === 'a' || newStr[i] === 'e' || newStr[i] === 'i' || newStr[i] === 'o' || newStr[i] === 'u') {
//         count++;
//     }
// }
// console.log(count);
// Method 2            
// function countVowels(str) {
//     let vowels = 'aeiou';
//     let count = 0;
//     for (let char of str.toLowerCase()) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels('ali'));
