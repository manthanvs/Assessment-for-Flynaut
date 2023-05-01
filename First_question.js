// 1)find duplicate and same values in two array
// var fullWordList = ['1','2','3','4','5'];
// var wordsToRemove = ['1','2','3'];


var fullWordList = ['1','2','3','4','5'];
var wordsToRemove = ['1','2','3'];

function myfunc(){
    var filteredKeywords = fullWordList.filter((element) => !wordsToRemove.includes(element));
    // here fullWordList with filter function Takes every Element in element variable in the function and further
    // includes function list out the those elements that matches with fullWordList variables i.e. [1,2,3]
    // by "!" (negation) it takes the [4,5] 
    //  and thus we have the [4,5] elements in the filterKeywords by Filter function 
    console.log(filteredKeywords);
}

myfunc();
// to run node .\First_question.js 