function average(a, b) {
    // Here a=2 and b=1
	return a + b / 2;
    // 2+1/2
    // as per precedence the Division operator has first precedence and it performs its task i.e 1 / 2 = 0.5
    // then addition has the second precedence which performs 2 + 0.5 = 2.5
    // therefore, 2.5 value is returned by the function
}

console.log(average(2, 1));
// average function is called
// Parameters(2,1) are sent to the function average
// average function returns 2.5 as the value

// to run node .\Fifth_question.js 
