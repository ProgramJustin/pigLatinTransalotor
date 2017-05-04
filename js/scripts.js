

    // For words beginning with a vowel, add "way" to the end.
    //
    // For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
    //
    // If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
    //
    // For words beginning with "y", treat "y" as a consonant.


var vowels = ["a", "e", "i", "o", "u"];
//GET THE FIRST CHARACTER OF THE USER'S INPUT AND IF ITS A VOWEL AND LOWERCASE APPEND WAY TO THE END OF THE OUTPUT
var loopInput = function(inputToArray) {

  for (i = 0; i < inputToArray.length ; i++) {


    if(inputToArray[i] === vowels[0] || inputToArray[i] === vowels[1] || inputToArray[i] === vowels[2] || inputToArray[i] === vowels[3] || inputToArray[i] === vowels[4]) {


    console.log(inputToArray[0]);

  } else if () {

  }
  }

};


$(document).ready(function() {
  $("#pigLatin").submit(function(event) {
    event.preventDefault();

    // console.log(vowels);
 //GET USER'S INPUT AND STORE IT IN THE VARIABLE USERINPUT
    var userInput = $("input#pigWord").val();

    var inputToArray = userInput.split("");
      // console.log(inputToArray);
    var cypher = loopInput(inputToArray);
      // console.log(cypher(inputToArray));
    var outputString = inputToArray.join(" ");

    $("#result").append(inputToArray + "way");
  });
});






































// var word = function(pigWord) {
//   if (pigWord !== NaN) {
//     return false;
// };
// // console.log(word);
//
//
//
// ////User Interface////
// $(document).ready(function() {
//   $("form").submit(function(event) {
//     event.preventDefault();
//     var input = $("input").val();
//     var result = word(pigWord);
//     // $("#result").text(result);
//   });
// });
