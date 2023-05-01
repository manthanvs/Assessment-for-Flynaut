console.log("7" > 7);
// console.log("7".charCodeAt(0));      // is 55 
// i.e its ascii value is 7 is 55
// therefore 55 > 55 is false

console.log("2">"21");
// console.log("2".charCodeAt(0));      // is  50
// here ascii values of 2 and 22 (for which the string's first element is to be taken for the comparison) is 50
// therefore 50 > 50 is false

console.log("KL">"S");
// console.log("K".charCodeAt(0));      // is 75
// console.log("S".charCodeAt(0));      // is 83
// clearly we known 75 is not greater than 83
// Therefore "KL" is not greater than "S"

// to run node .\Fourth_question.js 
