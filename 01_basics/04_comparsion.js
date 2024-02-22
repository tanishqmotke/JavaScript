console.log(2 > 1); //true
console.log(2 >= 1); // true
console.log(2 < 1); //false
console.log(2 == 1); //false
//console.log(2 ! = 1);

console.log("-------")
console.log("1" > 1); // //Comparison ( < > >= =< ) converts null to a number , treating it as 0. 
console.log("02" > 1);

console.log("-------")
console.log( null > 0);
console.log( null == 0);
console.log( null >= 0);

// The reason is that an equality check == and comparsions > < >= <= works differently.
//Comparison converts null to a number , treating it as 0. 
// That's why null >= 0 is true and null > 0 is false.

// == --> equality check
// === --> strict check

