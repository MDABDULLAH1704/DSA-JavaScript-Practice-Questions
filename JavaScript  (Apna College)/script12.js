// Topic:- Classes (Part 1)



// Object
// const student = {
//     fullName: "Ali",
//     marks: 94,
//     printMarks: function () {
//         console.log("marks = ", this.marks);
//     },
// };
// console.log(student)



// ProtoType 1
// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
// };
// console.log(employee);


// const KaranArjun = {
//     salary: 50000,
// };
// console.log(KaranArjun);

// const KaranArjun2 = {
//     salary: 60000,
// };
// console.log(KaranArjun2);

// const KaranArjun3 = {
//     salary: 70000,
// };
// console.log(KaranArjun3);

// const KaranArjun4 = {
//     salary: 80000,
// };
// console.log(KaranArjun4);


// let proto = KaranArjun.__proto__ = employee;
// console.log(proto);
// let proto2 = KaranArjun2.__proto__ = employee;
// console.log(proto2);
// let proto3 = KaranArjun3.__proto__ = employee;
// console.log(proto3);
// let proto4 = KaranArjun4.__proto__ = employee;
// console.log(proto4);


// console.log(KaranArjun.calcTax);




// ProtoType 2
// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
// };
// console.log(employee);


// const KaranArjun = {
//     salary: 50000,
//     calcTax() {
//         console.log("tax rate is 20%");
//     },
// };
// console.log(KaranArjun);

// let proto = KaranArjun.__proto__ = employee;
// console.log(proto);




// Classes in JS
// class ToyotaCar {
//     start() {
//         console.log("start");
//     }

//     stop() {
//         console.log("stop");
//     }

//     setBrand(brand) {
//         this.brandName = brand;   // Here brand is variable of function(setBrand) and brandName jo class se object banega uska hai
//     }
// }
// console.log(ToyotaCar);


// Take(or Make) object from class 
// let fortuner = new ToyotaCar();
// console.log(fortuner, typeof fortuner);
// console.log(fortuner.start());
// console.log(fortuner.stop());

// let setBrand = fortuner.setBrand("fortuner");
// console.log(setBrand);




// Constructor in Classes
// class ToyotaCar2 {
//     constructor(brand, mileage) {
//         console.log("creating new object");
//         this.brandName = brand;
//         this.mileage = mileage;
//     }

//     start() {
//         console.log("start");
//     }

//     stop() {
//         console.log("stop");
//     }
// }
// console.log(ToyotaCar2);   //


// Take(or Make) object from class 
// let fortuner = new ToyotaCar2("fortuner", 12);
// console.log(fortuner, typeof fortuner);
// let lexus = new ToyotaCar2("lexus", 10);
// console.log(lexus, typeof lexus);




// Inheritance in JS 1
// class parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class child extends parent { }

// let obj = new child();
// console.log(obj);




// Inheritance in JS 2
// class person {
//     constructor() {
//         this.species = "homo sapiens"
//     }

//     eat() {
//         console.log("eat");
//     }

//     sleep() {
//         console.log("sleep");
//     }
// }

// class Engineer extends person {
//     work() {
//         console.log("solve problem, build something");
//     }
// }

// class Doctor extends person {
//     treatMent() {
//         console.log("treat patient");
//     }
// }

// let aliObj = new Engineer();
// console.log(aliObj);
// console.log(aliObj.work());
// console.log(aliObj.eat());
// console.log(aliObj.sleep());

// let aliObj2 = new Doctor();
// console.log(aliObj2);
// console.log(aliObj2.treatMent());
// console.log(aliObj2.eat());
// console.log(aliObj2.sleep());




// super Keyboard in JS 1
class person {
    constructor(name) {
        console.log("enter parent constructor");
        this.species = "homo sapiens"
        this.Name = name;
    }

    eat() {
        console.log("eat");
    }
}

class Engineer extends person {
    constructor(branch) {
        console.log("enter child constructor");
        super(); //to invoke parent class constructor
        this.Branch = branch;
        console.log("exit child constructor");
    }

    work() {
        console.log("solve problem, build something");
    }
}

let engObj = new Engineer("Software");
console.log(engObj);
console.log(engObj.work());
console.log(engObj.eat());

let engObj2 = new person("Ali");
console.log(engObj2);
console.log(engObj2.eat());