// 1. Write a function in JavaScript to reverse a given string.
// function reverse(string) {
//     return string.split('').reverse().join('');
// }

// let str = "Hello JavaScript";
// let result = reverse(str);
// console.log(result);



// 2. Write a function to check if a given string is a palindrome.
// function palindrome(string) {
//     let reversed = string.split('').reverse().join('');
//     return string === reversed;
// }

// let str = "abcba";
// let result = palindrome(str);
// console.log(`String is Palindrome = ${result}`);



// 3. Write a function that counts the number of vowels in a given string.
// function vowels(string) {
//     let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     let count = 0;

//     for (let vowel of string) {
//         if (vowels.includes(vowel)) {
//             count++;
//         }
//     }
//     return count;
// }

// let str = "Hello JavaScript";
// let result = vowels(str);
// console.log(`Number of Vowels = ${result}`);



// 4. Write a function to capitalize the first letter of each word in a sentence.
// function capitalize(sentence) {
//     return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }

// let str = "hi this is javascript";
// let result = capitalize(str);
// console.log(result);



// 5. Write a function to remove duplicate characters from a string.
function duplicate(string) {
    return string.split('').filter((char, index, self) => self.indexOf(char) === index).join('');
}

let str = "hii";
let result = duplicate(str);
console.log(result);