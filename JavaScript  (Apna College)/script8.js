// Topic:- DOM Part 1


// let heading = document.getElementById("heading");
// console.log(heading);


// let btn = document.getElementById("btn");
// console.log(btn);


// let heading2 = document.getElementsByClassName("heading2");
// console.log(heading2);


// let p = document.getElementsByTagName("p");
// console.log(p);


// let FirstElement = document.querySelector("p");
// console.dir(FirstElement);
// console.log(FirstElement);


// let AllElement = document.querySelectorAll("p");
// console.dir(AllElement);
// console.log(AllElement);


// let AllElement2 = document.querySelectorAll(".heading2");
// console.dir(AllElement2);
// console.log(AllElement2);


// Div
// let div = document.querySelector("div");
// console.log(div);
// console.log(div.innerText);
// console.log(div.innerHTML);

// h1
// let heading3 = document.querySelector("h1");
// console.log(heading3);
// console.log(heading3.innerText = "New heading");
// console.log(heading3.textContent);




// Qs1. Create a H2 heading element with text - “Hello JavaScript”. Append “from Apna College students” to this text using JS.
// Method 1
let h2 = document.getElementById("h2");
console.log(h2.innerText + " from Apna College students.");
h2.innerText = h2.innerText + " from Apna College students.";



// Qs2. Create 3 divs with common class name - “box”. Access them & add some unique text to each of them.
let divs = document.querySelectorAll(".box");
divs[0].innerText = "first div";
divs[1].innerText = "second div";
divs[2].innerText = "third div";