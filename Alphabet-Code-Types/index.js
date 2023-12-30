/*
(P)arameters: 
(R)eturn: 
(E)xample: 
(P)seudocode:
 - 
 -
*/
//My Solution - created an array by hand
function alphabetCode(letter) {
  let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  console.log(alphabet.indexOf(letter)+1)
}

alphabetCode('Y')

//Their solution - used code to create array from string
function alphabetCode2(letter) {
  let strAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  let upperLetter = letter.toUpperCase()
  return strAlphabet.toUpperCase().indexOf(upperLetter)+1
}

console.log(alphabetCode2('C'))