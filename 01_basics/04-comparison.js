console.log(3>2)
console.log(3<2)
console.log(3>=2)
console.log(3<=2)
console.log(3==2)
console.log(3!=2)

console.log("A" > "B")
console.log("A" < "B")
console.log("A" >= "B")
console.log("A" <= "B")
console.log("A" == "B")
console.log("A" != "B")

console.log("a" > "A")
console.log("a" < "A")
console.log("a" >= "A")
console.log("a" <= "A")
console.log("a" == "A")
console.log("a" != "A")

console.log("2" > "12")
console.log("2" < "12")
console.log("2" >= "12")
console.log("2" <= "12")
console.log("2" == "12")
console.log("2" != "12")

console.log("2" > 12)
console.log("2" < 12)
console.log("2" >= 12)
console.log("2" <= 12)
console.log("2" == 12)
console.log("2" != 12)
// js automatically converted string to number for comparison
// but not for equality
console.log("2" === 2) // false
console.log("2" !== 2) // true

console.log(undefined == null) // true
console.log(undefined === null) // false
console.log(undefined > null) // false
console.log(undefined < null) // false
console.log(undefined >= null) // false
console.log(undefined <= null) // false
console.log(NaN == NaN) // false
console.log(NaN === NaN) // false
console.log(NaN > NaN) // false
console.log(NaN < NaN) // false
console.log(NaN >= NaN) // false
console.log(NaN <= NaN) // false

console.log(undefined == undefined) // true
console.log(null == null) // true
console.log(NaN == NaN) // false


// comparison and equality double equality are different
// double equality does type conversion
// triple equality does not do type conversion
// use triple equality always unless you have a specific reason to use double equality