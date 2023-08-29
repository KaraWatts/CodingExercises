/*
(P)arameters: 
(R)eturn: 
(E)xample: 
(P)seudocode:
 - 
 -
*/
//The way I did it

function illegalWord(sentence, word) {
  let check = /word/i.exec(sentence);//using case insensitive RegExp
  if (check === null){
    return true
  } else { return false}
}


//Tests
console.log(!illegalWord('Hello there', 'fudge'));
console.log(illegalWord("But I didn't say fudge", 'fudge'));
console.log(illegalWord("But I didn't say fudge", 'Fudge'));


//The way they did it

// lowercase entire sentance and assign to new variable. 
// lowercase entire word and assign to new variable. 
// split sentence into an array.
// Loop through sentence array
// if value at index equals illegalWord
// return true
// return false

// function illegalWord(sentence, word) {
//   let lowerSentence = sentence.toLowerCase();
//   let lowerWord = word.toLowerCase();
//   lowerSentence = lowerSentence.split(' ');
//   if (lowerSentence.includes(lowerWord)) {
//     return true
//   }
//   return false;
// }
