console.log("summary of datatypes in js")
// tyeps of data tyeps
// why offcially only 2? primitive and nonpremitive
// primitive: number, string, boolean, null, undefined, symbol, bigInt , 7 types
// nonprimitive: object, array, function, 3 types
// total 10 types of data types in js
// everything in js is either primitive or nonprimitive
// primitive are also called value types
// nonprimitive are also called reference types
// diffference between primitive and nonprimitive
// primitive are immutable, nonprimitive are mutable
// primitive are stored in stack, nonprimitive are stored in heap
// primitive are compared by value, nonprimitive are compared by reference
// nonprimitive: object, array, function

// call by value vs call by reference
// call by value: primitive data types
// call by reference: nonprimitive data types

// examples of primitive data types
// number: 1, 2, 3, 4, 5, 1.5, -1, -2, -3, -4, -5
// string: "hello", 'hello', `hello`
// boolean: true, false
// null: null
// undefined: undefined
// symbol: Symbol("id"), Symbol("name")
// bigInt: 123n, 456n

// examples of nonprimitive data types
// object: {name: "John", age: 30}
// array: [1, 2, 3, 4, 5]
// function: function add(a, b) { return a + b; }


// javascript is dynamically typed language
// javascript is weakly typed language
// weakly typed means you can change the type of a variable
// dynamically typed means you don't have to declare the type of a variable

// typeof operator
console.log(typeof 1) // number
console.log(typeof "hello") // string
console.log(typeof true) // boolean
console.log(typeof null) // object (this is a bug in js, null is not an object)
console.log(typeof undefined) // undefined
console.log(typeof Symbol("id")) // symbol
console.log(typeof 123n) // bigint
console.log(typeof {name: "John", age: 30}) // object
console.log(typeof [1, 2, 3, 4, 5]) // object (array is a type of object)
console.log(typeof function add(a, b) { return a + b; }) // function


const name = "John"
const age = 30
const isMarried = false
const children = null
let address
const id = Symbol("23") // symbol is used to create unique identifiers, often used as keys in objects
const anotherid = Symbol("23") // different from id, even though the description is same, because symbol is unique
console.log(id === anotherid) // false
const bigNumber = 1234567890123456789012345678901234567890n // bigInt is used to represent integers larger than 2^53 - 1, just add n at the end of the number   
const bigNumbers = 1234567890123456789012345678901234567890 // this is a number, not a bigInt
const hobbies = ["reading", "traveling", "swimming"]
const person = {name: "John", age: 30, isMarried: false}

// functions can also be treaded as variables
function greet() {
    console.log("Hello, " + 324)
}

// typeof operator examples
console.log(typeof name) // string
console.log(typeof age) // number
console.log(typeof isMarried) // boolean
console.log(typeof children) // object (this is a bug in js, null is not an object)
console.log(typeof address) // undefined
console.log(typeof id) // symbol
console.log(typeof bigNumber) // bigint
console.log(typeof hobbies) // object (array is a type of object)
console.log(typeof person) // object
console.log(typeof greet) // function

// null vs undefined
// null is an assignment value, it can be assigned to a variable to represent no value
// undefined means a variable has been declared but has not yet been assigned a value


    //  VIDEO
// stacks and heaps in java script
let myyoutubename = "hiteshchaudharydotcom" //  stack primitive
let anothername = myyoutubename
console.log(myyoutubename)
console.log(anothername)

let userOne = {  //  heap nonprimitive
    name: "hitesh", 
    age: 22  , 
    email : "ayushrawat22080@gmail.com", // same reference
    upi : "asdf@upi"
}

let usertwo = userOne
usertwo.email = "ayushrawat234@gmail.com"

console.log(userOne)
console.log()

console.log(userOne.email)
console.log(usertwo.email)

// inshort stack me primitive data types store hote hai and heap me nonprimitive data types store hote hai
// stack me data directly store hota hai and heap me data ka reference store hota hai
// stack me data fast access hota hai and heap me data slow access hota hai
// stack me memory size limited hota hai and heap me memory size unlimited hota hai
// stack me memory automatically manage hota hai and heap me memory manually manage karna padta hai (garbage collection)
// stack me data immutable hota hai and heap me data mutable hota hai
// stack me data call by value hota hai and heap me data call by reference hota hai
