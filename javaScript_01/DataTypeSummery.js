//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt


const score = 100 //number
const scorevalue = 100.0   //number

const isLoggedIn = false  //boolean
const outsideTemp = null  //object
let userEmail;            //undefine

let name = "prakash"  //string

const id = Symbol('123')   
const anotherId = Symbol('123')   

console.log(id == anotherId)  //false






// Reference (Non primitive)

// Array, Objects, Functions


const books = ["Ramayana", "mohabharat", "Hanuman Chalisha", "Shiv Puran"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction)