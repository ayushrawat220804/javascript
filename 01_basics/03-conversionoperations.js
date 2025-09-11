console.log("")
let age = 13 // number 
console.log(typeof age) // typeof is a operator , it gives the datatype of the variable , here it gives number
console.log(typeof (age)) // here also it gives number

let ages = "33" // string

console.log(typeof ages) // here it gives string
console.log(typeof (ages))  // here also it gives string

let agess = "33" // string
let valueinnumber = Number(agess) // here we are converting string to number using Number() function
console.log(typeof valueinnumber) // here it gives number
console.log(valueinnumber) 

let agesss = "33abc" // string
let valueinnumberr = Number(agesss) // here we are converting string to number using Number() function
console.log(typeof valueinnumberr) // here it gives number
console.log(valueinnumberr) // here it gives NaN (Not a Number) because "33abc" cannot be converted to a valid number

let empty = null
console.log(typeof empty) // here it gives object , this is a bug in javascript , it should give null but it gives object
let valueinnumberrr = Number(empty) // here we are converting null to number using Number() function
console.log(typeof valueinnumberrr) // here it gives number
console.log(valueinnumberrr) // here it gives 0 because null is converted to 0


// "33" => 33  
// "33abc" => NaN
// null => 0
// undefined => NaN
// true => 1
// false => 0
let isloggedin = true
console.log(typeof isloggedin) // here it gives boolean
let valueinnumberrrr = Number(isloggedin) // here we are converting boolean to number using Number() function
console.log(typeof valueinnumberrrr) // here it gives number
console.log(valueinnumberrrr) // here it gives 1 because true is converted to 1

let isloggedinn = false
console.log(typeof isloggedinn) // here it gives boolean
let valueinnumberrrrr = Number(isloggedinn) // here we are converting boolean to number using Number() function
console.log(typeof valueinnumberrrrr) // here it gives number
console.log(valueinnumberrrrr) // here it gives 0 because false is converted to 0

let isloggedinnn =1
let booleanisloggedinnn = Boolean(isloggedinnn) // here we are converting number to boolean using Boolean() function
console.log(typeof booleanisloggedinnn) // here it gives boolean
console.log(booleanisloggedinnn) // here it gives true because 1 is converted to true

let isloggedinnnn =0
let booleanisloggedinnnn = Boolean(isloggedinnnn) // here we are converting number to boolean using Boolean() function
console.log(typeof booleanisloggedinnnn) // here it gives boolean
console.log(booleanisloggedinnnn) // here it gives false because 0 is converted to false

let emptysting = ""
let booleanemptysting = Boolean(emptysting) // here we are converting empty string to boolean using Boolean() function
console.log(typeof booleanemptysting) // here it gives boolean
console.log(booleanemptysting) // here it gives false because empty string is converted to false

let nonemptystring = "harshit"
let booleannonemptystring = Boolean(nonemptystring) // here we are converting non empty string to boolean using Boolean() function
console.log(typeof booleannonemptystring) // here it gives boolean
console.log(booleannonemptystring) // here it gives true because non empty string is converted to true

let nullvalue = null
let booleannullvalue = Boolean(nullvalue) // here we are converting null to boolean using Boolean() function
console.log(typeof booleannullvalue) // here it gives boolean
console.log(booleannullvalue) // here it gives false because null is converted to false

// String to Number Conversion : Number()
// Boolean to Number Conversion : Number()
// null to Number Conversion : Number()
// undefined to Number Conversion : Number()
 
// Number to String Conversion : String()
// Boolean to String Conversion : String()
// null to String Conversion : String()
// undefined to String Conversion : String() 

// 1 to true
// 0 to false

// empty string to false
// non empty string to true
// null to false
// undefined to false

console.log("")

let somenumer = 223
console.log(typeof somenumer) // here it gives number
let stringnumber = String(somenumer) // here we are converting number to string using String() function
console.log(typeof stringnumber) // here it gives string
console.log(stringnumber) // here it gives "223"