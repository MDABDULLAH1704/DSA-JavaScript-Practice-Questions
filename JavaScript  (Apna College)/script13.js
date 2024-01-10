// Topic:- Classes (Part 2)



// Qs1. You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData( ) that allows user to view website data.
let Data = "Secret information";

class User {
    constructor(name, email) {
        this.Name = name;
        this.Email = email;
    }

    // This is method called viewData()
    viewData() { 
        console.log("Data = ", Data);
    }
}

let student1 = new User("Ali", "abc@email.com");
console.log(student1);
console.log(student1.viewData());

let student2 = new User("Abdullah", "xyz@email.com");
console.log(student2);
console.log(student2.viewData());

let teacher1 = new User("Ram", "ram@email.com");
console.log(teacher1);
console.log(teacher1.viewData());



// Qs2. Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.
class Admin extends User {
    constructor(name, email) {
        // Jab v hum child class ke under constructor ko create karte hai Hume parent ke constructor ko call karna padta hai AND parent ke constructor ko call karne ke liye hum (super) keyword ka use karte hai, Jisme hum variable pass karte hai.
        super(name, email);
    }

    editData() {
        Data = "some new value";
    }
}

let admin1 = new Admin("admin", "admin@college.com");
console.log(admin1);