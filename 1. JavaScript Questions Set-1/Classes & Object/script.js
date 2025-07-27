// 1. Create a JavaScript class for a basic calculator. The class should have methods for addition, subtraction, multiplication, and division. Instantiate an object of this class and perform a few calculations.
// class calculator {
//     add(a, b) {
//         return a + b;
//     }

//     subtract(a, b) {
//         return a - b;
//     }

//     multiply(a, b) {
//         return a * b;
//     }

//     divide(a, b) {
//         if (b !== 0) {
//             return a / b;
//         }
//         else {
//             return "Cannot divide by zero.";
//         }
//     }
// }

// let myCalculator = new calculator();

// console.log("Sum =", myCalculator.add(3, 2));
// console.log("Subtract =", myCalculator.subtract(3, 2));
// console.log("Multiply =", myCalculator.multiply(3, 2));
// console.log("Divide =", myCalculator.divide(3, 2));



// 2. Define a JavaScript class representing a book. Include properties such as title, author, and publication year. Create two instances of the class and display their information.
// class Book {
//     constructor(title, author, publicationYear) {
//         this.title = title;
//         this.author = author;
//         this.publicationYear = publicationYear;
//     }

//     displayInfo() {
//         console.log(`${this.title} by ${this.author}, published in ${this.publicationYear}`);
//     }
// }

// let book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951);
// let book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

// console.log(book1, "\n\n", book2);

// book1.displayInfo();
// book2.displayInfo();



// 3. Create a JavaScript class to represent a car. The class should have properties like make, model, and year. Implement a method to calculate the age of the car based on the current year. Instantiate a car object and display its make, model, year, and age.
// class Car {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }

//     calculateAge(currentYear) {
//         return currentYear - this.year;
//     }

//     displayInfo() {
//         console.log(`${this.make} car and model is ${this.model}, launched in ${this.year}.`);
//     }
// }

// let myCar = new Car("Toyota", "Camry", 2019);
// console.log(myCar.displayInfo());

// console.log(`Make: ${myCar.make}`);
// console.log(`Model: ${myCar.model}`);
// console.log(`Year: ${myCar.year}`);
// console.log(`Age: ${myCar.calculateAge(2024)}`);



// 4. 