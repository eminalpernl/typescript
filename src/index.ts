
// Basic Types
let id: number = 5
let company:string = "Emin ALPER"
let isPublished: boolean = true
let x: any = "Hello"
let age: number

let ids: number[] = [1,2,3,4,5]

ids.push(6)
//ids.push("hello")
// we get error if we want to add string to ids array
let arr:any[] = [1, true , "hello"] 
// type "any" refers all types


//Tuple (You can specify the types)

let person: [number, string, boolean] = [1, "name", true]
// you should add the values in this particular order


//Tuple Array
let employee: [string, number][]
// that means tha employee variable must be an array and in should have also array inside ov it.
// First element of the inner array should be string, and second one should be a number 
employee =  [
    ['name1', 1],
    ['name2', 2],
    ['name3', 3],
]

// Union
let id2: string | number = 22

// Enum

enum Direciton1 {
    Up = 1,
    Down = 3,
    Left,
    Right
}

//console.log(Direciton1.Up);
// console.log(Direciton1.Down);
// console.log(Direciton1.Left);
// console.log(Direciton1.Right);

enum Direciton2 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

// Objects

const user:{
    id: number,
    name: string
} = {
    id: 1,
    name: 'John'
}

// or to be less messy you can define type separately

type User = {
    id: number,
    name: string
}

const user2:User = {
    id: 1,
    name: 'John'
}

// Type Assertion

let cid: any = 1
// let customerId = <number>cid             orrrr
let customerId = cid as number

//  Functions

function addNum(x:number, y:number /* If you dont define the types of functions parameters, they are defaultly any value*/):number/* here refers to return value*/ { 
    return x + y
}


//Void
// When return value is nothing

function log(message: string | number): void{
    console.log(message);
    
}

//Interfaces

interface userInterface {
    id: number,
    name: string
    age?: number // Question mark means that this value is optional
}

const user3:userInterface = {
    id: 1,
    name: 'John'
}

// Interface Function

interface MathFunc {
    (x: number, y: number):number
}

const add: MathFunc = (x: number, y: number):number => x + y
const sub: MathFunc = (x: number, y: number):number => x - y

interface PersonInterface {
    id: number,
    name: string,
    register(): string
}

// Classes
// Classes are used to create objects. We can create multiple person objects
class Person implements PersonInterface{
    id: number
    name:string

    constructor(id:number, name:string) {
        this.id=id
        this.name=name
        console.log(123);
        
    }

    register() {
        return `${this.name} is now registered`
    }
}

const emin = new Person(1,"Emin")
const alper = new Person(2,"Alper")

class Person2 {
    protected id: number
    private name:string

    constructor(id:number, name:string) {
        this.id=id
        this.name=name
        console.log(123);
        
    }

    register() {
        return `${this.name} is now registered`
    }
}

const emin2 = new Person2(1,"Emin")
const alper2 = new Person2(2,"Alper")
console.log(emin2.id); // we got error on "id" because it is defined protected
console.log(emin2.name); // we got error on "name" because it is defined private

//console.log(emin, alper);
console.log(emin.register());

// Subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string){
        super(id,name)
        this.position = position
    }
}

const emp = new Employee(3, "Shawn", "Developer" )

//console.log(emp.register()); 

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['emin','alper','akif'])

numArray.push('hello') // It expects a number