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


console.log("")
console.log("")
// operations in javascript
let value = 3;
console.log(value) // here it gives 3
let negvalue = -value; // here we are using - operator to convert positive number to negative number 

console.log(2+1) // here it gives 3
console.log(2-1) // here it gives 1
console.log(2*3) // here it gives 6
console.log(6/3) // here it gives 2
console.log(7%3) // here it gives 1 , this is modulus operator , it gives remainder of the division
console.log(2**3) // here it gives 8 , this is exponentiation operator , it gives 2 to the power 3

let str1 = "hello"
let str2 = "world"
console.log(str1 + str2) // here it gives helloworld , this is string concatenation operator

let str3 = "hello "
let str4 = "world"
console.log(str3 + str4) // here it gives hello world , this is string concatenation operator

let str5 = "hello "
let str6 = 5
console.log(str5 + str6) // here it gives hello 5 , this is string concatenation operator , here 5 is converted to string and then concatenated

console.log("1"+2) // here it gives 12 , here 2 is converted to string and then concatenated
console.log("1"-2) // here it gives -1 , here "1" is converted to number and then subtraction is done
console.log("1"*2) // here it gives 2 , here "1" is converted to number and then multiplication is done
console.log("1"/2) // here it gives 0.5 , here "1" is converted to number and then division is done
console.log(1+2+"2") // here it gives 32 , here 1+2 is done first and then 3 is converted to string and then concatenated
console.log("1"+2+2) // here it gives 122 , here "1"+2 is done first and then 12+2 is done and then 122 is converted to string and then concatenated
console.log("1"-"2") // here it gives -1 , here both "1" and "2" are converted to number and then subtraction is done
console.log("1"*2) // here it gives 2 , here "1" is converted to number and then multiplication is done
console.log("1"/"2") // here it gives 0.5 , here both "1" and "2" are converted to number and then division is done
console.log("1a"-"2") // here it gives NaN , here "1a" cannot be converted to number and then subtraction is done
console.log("1a"+2) // here it gives 1a2 , here 2 is converted to string and then concatenated
console.log(true + true) // here it gives 2 , here both true are converted to 1 and then addition is done
console.log(true + false) // here it gives 1 , here true is converted to 1 and false is converted to 0 and then addition is done
console.log(false + false) // here it gives 0 , here both false are converted to 0 and then addition is done
console.log(true - false) // here it gives 1 , here true is converted to 1 and false is converted to 0 and then subtraction is done
console.log(false - true) // here it gives -1 , here false is converted to 0 and true is converted to 1 and then subtraction is done
console.log(true * false) // here it gives 0 , here true is converted to 1 and false is converted to 0 and then multiplication is done
console.log(true * true) // here it gives 1 , here both true are converted to 1 and then multiplication is done
console.log(false * false) // here it gives 0 , here both false are converted to 0 and then multiplication is done
console.log(true / false) // here it gives Infinity , here true is converted to 1 and false is converted to 0 and then division is done
console.log(false / true) // here it gives 0 , here false is converted to 0 and true is converted to 1 and then division is done
console.log(false / false) // here it gives NaN , here both false are converted to 0 and then division is done
console.log("hello" + true) // here it gives hellotrue , here true is converted to string and then concatenated
console.log("hello" - true) // here it gives NaN , here "hello" cannot be converted to number and then subtraction is done
console.log("hello" * true) // here it gives NaN , here "hello" cannot be converted to number and then multiplication is done
console.log("hello" / true) // here it gives NaN , here "hello" cannot be converted to number and then division is done
console.log("5" + true) // here it gives 5true , here true is converted to string and then concatenated
console.log("5" - true) // here it gives 4 , here "5" is converted to number and true is converted to 1 and then subtraction is done
console.log("5" * true) // here it gives 5 , here "5" is converted to number and true is converted to 1 and then multiplication is done
console.log("5" / true) // here it gives 5 , here "5" is converted to number and true is converted to 1 and then division is done
console.log("5" + false) // here it gives 5false , here false is converted to string and then concatenated
console.log("5" - false) // here it gives 5 , here "5" is converted to number and false is converted to 0 and then subtraction is done
console.log("5" * false) // here it gives 0 , here "5" is converted to number and false is converted to 0 and then multiplication is done
console.log("5" / false) // here it gives Infinity , here "5" is converted to number and false is converted to 0 and then division is done
console.log("hello" + 5) // here it gives hello5 , here 5 is converted to string and then concatenated
console.log("hello" - 5) // here it gives NaN , here "hello" cannot be converted to number and then subtraction is done
console.log("hello" * 5) // here it gives NaN , here "hello" cannot be converted to number and then multiplication is done
console.log("hello" / 5) // here it gives NaN , here "hello" cannot be converted to number and then division is done
console.log("5" + 5) // here it gives 55 , here 5 is converted to string and then concatenated
console.log("5" - 5) // here it gives 0 , here "5" is converted to number and then subtraction is done
console.log("5" * 5) // here it gives 25 , here "5" is converted to number and then multiplication is done
console.log("5" / 5) // here it gives 1 , here "5" is converted to number and then division is done

console.log("")
console.log("")
// Increment and Decrement Operators
let num = 5;
console.log(num) // here it gives 5
num++; // here we are using ++ operator to increment the value of num by 1
console.log(num) // here it gives 6
num--; // here we are using -- operator to decrement the value of num by 1
console.log(num) // here it gives 5

let newnum = 5;
console.log(newnum) // here it gives 5
console.log(newnum++) // here it gives 5 , because here the value of newnum is printed first and then incremented
console.log(newnum) // here it gives 6 , because here the value of newnum is incremented

let newernum = 5;
console.log(newernum) // here it gives 5
console.log(++newernum) // here it gives 6 , because here the value of newnum is incremented first and then printed
console.log(newernum) // here it gives 6 , because here the value of newnum is already incremented