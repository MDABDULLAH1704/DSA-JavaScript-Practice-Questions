console.log("Welcome to first code")
// Topic:- Variables and data types

// Basic
fullName = "Tony Stark";
fullName = "Thor";
let age = 24;
age = 25;
const price = 99.99;
x = null;
y = undefined;
a = true;
b = false;
console.log(fullName, typeof fullName, age, price, x, y, a, b);


// Object
const student = {
    fullName: "Ali",
    age: 20,
    Cgpa: 2.8,
    isPass: true,
};
console.log(student);
console.log(typeof student);
console.log(student.fullName, ",", student.age);


// Qs1. Create a const object called “product” to store information shown in the picture.
const product = {
    title: "Ball Pen",
    rating: 4,
    offer: 5,
    price: 270,
}
console.log(product);
console.log(typeof product);


// Qs2. Create a const object called “profile” to store information shown in the picture.
const profile = {
    user_name: "shradhakhapre",
    isFollow: true,
    Message: "",
    partTime: "Entrepreneur",
    bio: "Apna college | Ex-Microsoft....",
    posts: 195,
    followers: 569,
    following: 4,
}
console.log(profile);
console.log(typeof profile);
console.log(typeof profile.user_name, typeof profile.isFollow);