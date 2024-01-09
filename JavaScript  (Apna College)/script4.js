// Topic:- strings


// String
// let str = "ApnaCollege";
// console.log(str, str[1], typeof str);


// Template Literals
// let obj = {
//     item: "Pen",
//     price: 10,
// };

// console.log(`The cost of ${obj.item} is ${obj.price} rupees.`);


// Escape Sequence
// let str3 = "Apna \n \tCollege";
// console.log(str3);
// console.log(str3.length);


// String Methods
// let str4 = "Apna College";

// console.log(str4);
// console.log(str4.toUpperCase());
// console.log(str4.toLowerCase());
// str4 = "    Apna   College    ";
// console.log(str4.trim());



// Qs1. Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length. eg: user name = “shradhakhapra” , username should be “@shradhakhapra13”

// Method 1
let fullName = prompt("Enter your full name without spaces : ");

let userName = "@" + fullName + fullName.length;
console.log(userName);

// Method 2
let name = prompt("Enter your full name : ");

console.log(`@${name}${name.length}`);