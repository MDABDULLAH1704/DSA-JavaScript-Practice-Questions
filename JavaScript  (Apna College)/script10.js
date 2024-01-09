// Topic:-Events


// Events
// Button 1
let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 24;
    a++;
    console.log(a);
};


// Div
let div = document.querySelector("div");

div.onmouseover = () => {
    console.log("You are inside box");
};



// Add Events Listener
// Button 2
let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", (event) => {
    console.log("button 2 was clicked");
    console.log(event);
    console.log(event.type);
});

btn2.addEventListener("click", () => {
    console.log("button 2 was clicked - handler 2");
    alert("button 2 was clicked");
});



// Remove Events Listener
// Button 3
let btn3 = document.querySelector("#btn3");

btn3.addEventListener("click", () => {
    console.log("button 3 was clicked - handler 1");
});

btn3.addEventListener("click", () => {
    console.log("button 3 was clicked - handler 2");
});

const handler3 = () => {
    console.log("button 3 was clicked - handler 3");
};
btn3.addEventListener("click", handler3);

btn3.addEventListener("click", () => {
    console.log("button 3 was clicked - handler 4");
});

btn3.removeEventListener("click", handler3);



// Qs1. Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.
let btn4 = document.querySelector("#btn4");
let currMode = "light";

btn4.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "#121212";
        document.querySelector("body").style.color = "white";
    }
    else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
    }
    console.log(currMode);
});