let score = "33"
console.log(typeof score); //console.log(typeof(score));
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(score)
console.log("------------")

let score1="33Asdas"
let valueInNumber1 = Number(score1)
console.log(valueInNumber1)
console.log(typeof valueInNumber1)
console.log("------------")

//When you convert the values of score to Number you will get the below results
//  "33" => 33
//  "33abc" => NaN
//  "tanu" =>NaN
//  null => 0
//  true => 1
//  undefined => NaN

let IsLogged = 1;
let converToBollean = Boolean(IsLogged)
console.log(typeof converToBollean)
console.log(converToBollean)
console.log("------------")
//  1 => true
//  0 => false
//  "tanu" =>true
//   "" => false

let someNumber = 33
let ConvertToString = String(someNumber)
console.log(typeof ConvertToString)
console.log(ConvertToString)
console.log("---------------")
//********Operations**************

console.log(1 + "2") // 12
console.log("1" + 2 ) //12
console.log("1" + 2 + 2) // 122
console.log( 1 + 2 + "2") //32
