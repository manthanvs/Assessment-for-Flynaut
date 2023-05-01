let obj1 = { "greeting": "hello" };
// Here obj1 is a object where the first element has "greeting" as a key and "hello" as value 

let obj2 = obj1;
// Here we assign the reference of a object(obj1) to another object(obj2) therefore they both refer to same element at a time 

obj1["greeting"] = "Bye";
// Hence, if any object makes any changes to the element that changes will be shown to another Element as well.
// here the value of key("greeting") is changed to "Bye"
// therefore both the object console.log ("Bye") in their object value

console.log(obj1);
console.log(obj2);

// to run node .\Third_question.js 