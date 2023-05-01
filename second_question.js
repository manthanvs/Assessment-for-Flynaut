// 2)longest-chain-of-letters-in-word-javascript
// const word = '00000111110101001111100001001'

const word = "00000111110101001111100001001";

let elements = word.split("");
// to get every Element one by one 

let sequence = [];
// to get a sequence of same element eg: 00000


let maxSequence = [];
// to get compare which element has maximum lenght amongst the sequences.

for (let index = 0; index < elements.length; index++) {
    // above the for loops runs till the element reaches the last element
	let element = elements[index];
    // taking one by one element from "elements" array 

	sequence = [element];
    // initializing the sequence as per the element 

	for (let i = index + 1; i < elements.length; i++) {
		if (elements[index] == elements[i]) {
			sequence.push(elements[index]);
		} else {
			break;
		}
	}
    // counting number of times the element repeated itself
    // and assigning the sequence array with that particular elements and it's repeated value

	if (sequence.length > maxSequence.length) {
		maxSequence = sequence;
	}
    // here maxSequence lenght is 0 therefore the first sequence will be assigned to maxSequence default
    // but everytime the sequence has greater lenght than maxSequence 
    // that particular sequence will be assigned as the new maxSequence
}

let newWord = maxSequence.join("");
console.log("[" + maxSequence + "] = This is the Array of Longest Chain of letters in word ");
console.log(newWord+" are the Letters , which are repeated "+ newWord.length +" times");

// to run node .\Second_question.js 