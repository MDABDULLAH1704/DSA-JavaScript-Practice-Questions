// Topic:- Fetch API


// Method 1
const URL = "https://cat-fact.herokuapp.com/facts";

const CatFact = document.querySelector("#fact");
const btn = document.querySelector("#btn");


const getFacts = async () => {
    console.log("getting data...");
    let response = await fetch(URL);   // In place of response we can write promise also.
    console.log(response);   // JSON format
    console.log(response.status);
    let data = await response.json();
    console.log(data);
    console.log(data[0]);
    console.log(data[0].text);
    CatFact.innerText = data[1].text;
}
console.log(getFacts());

btn.addEventListener("click", getFacts);



// Method 2
// const URL = "https://cat-fact.herokuapp.com/facts";

// const CatFact = document.querySelector("#fact");
// const btn = document.querySelector("#btn");

// function getFacts() {
//     fetch(URL)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data);
//             CatFact.innerText = data[1].text;
//         })
// }
// console.log(getFacts());

// btn.addEventListener("click", getFacts);