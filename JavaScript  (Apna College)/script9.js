// Topic:- DOM Part 2


// let div = document.querySelector("div");
// console.log(div);
// console.log(div.style.backgroundColor = "red");
// console.log(div.style.fontSize = "20px");

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);


// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newPara"));



// Create an element using JS and insert in HTML
let btn = document.createElement("button");
btn.innerText = "Click me!";
btn.style.backgroundColor = "pink";

let div = document.querySelector("div");
div.style.backgroundColor = "red";
div.append(btn);
// div.prepend(btn);
// div.before(btn);
// div.after(btn);



// Creating heading using JS 
let newHeading = document.createElement("h1");
newHeading.innerText = "<i>Hi, I am heading</i>";

let body = document.querySelector("body");
body.prepend(newHeading);



// Deleting elements using JS
// let para = document.querySelector("p");
// para.remove();

// Removing heading
// let heading = document.querySelector("h1");
// heading.remove();




// Qs1. Create a new button element. Give it a text “click me”, background color of red & text color of white. Insert the button as the first element inside the body tag.
let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

let body2 = document.querySelector("body");
body2.prepend(newBtn);



// Qs2. Create a <p> tag in html, give it a class & some styling. Now create a new class in CSS and try to append this class to the <p> element. Solve this problem using classList. Did you notice, how you overwrite the class name when you add a new one?

// method 1
// let para = document.querySelector("p");
// para.setAttribute("class", "newClass");


// method 2
let para = document.querySelector("p");
para.classList.add("newClass");
para.classList.remove("newClass");