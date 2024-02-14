"use strict";
// Basic Types
let id = 5;
let company = "Emin ALPER";
let isPublished = true;
let x = "Hello";
let age;
let ids = [1, 2, 3, 4, 5];
ids.push(6);
//ids.push("hello")
// we get error if we want to add string to ids array
let arr = [1, true, "hello"];
// type "any" refers all types
//Tuple (You can specify the types)
let person = [1, "name", true];
// you should add the values in this particular order
//Tuple Array
let employee;
// that means tha employee variable must be an array and in should have also array inside ov it.
// First element of the inner array should be string, and second one should be a number 
employee = [
    ['name1', 1],
    ['name2', 2],
    ['name3', 3],
];
// Union
let id2 = 22;
// Enum
var Direciton1;
(function (Direciton1) {
    Direciton1[Direciton1["Up"] = 1] = "Up";
    Direciton1[Direciton1["Down"] = 3] = "Down";
    Direciton1[Direciton1["Left"] = 4] = "Left";
    Direciton1[Direciton1["Right"] = 5] = "Right";
})(Direciton1 || (Direciton1 = {}));
//console.log(Direciton1.Up);
// console.log(Direciton1.Down);
// console.log(Direciton1.Left);
// console.log(Direciton1.Right);
var Direciton2;
(function (Direciton2) {
    Direciton2["Up"] = "Up";
    Direciton2["Down"] = "Down";
    Direciton2["Left"] = "Left";
    Direciton2["Right"] = "Right";
})(Direciton2 || (Direciton2 = {}));
// Objects
const user = {
    id: 1,
    name: 'John'
};
const user2 = {
    id: 1,
    name: 'John'
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid             orrrr
let customerId = cid;
//  Functions
function addNum(x, y /* If you dont define the types of functions parameters, they are defaultly any value*/) {
    return x + y;
}
//Void
// When return value is nothing
function log(message) {
    console.log(message);
}
const user3 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
// Classes are used to create objects. We can create multiple person objects
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log(123);
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const emin = new Person(1, "Emin");
const alper = new Person(2, "Alper");
class Person2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log(123);
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const emin2 = new Person2(1, "Emin");
const alper2 = new Person2(2, "Alper");
console.log(emin2.id); // we got error on "id" because it is defined protected
console.log(emin2.name); // we got error on "name" because it is defined private
//console.log(emin, alper);
console.log(emin.register());
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Shawn", "Developer");
//console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['emin', 'alper', 'akif']);
numArray.push('hello'); // It expects a number
