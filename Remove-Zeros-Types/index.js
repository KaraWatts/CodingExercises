/*
(P)arameters: 
(R)eturn: 
(E)xample: 
(P)seudocode:
 - 
 -
*/
//My Solutions original solution that worked
function removeZeros(number) {
  let num = number.toString() //convert number to string
  console.log(+num.replace(/0/g, '')) //found 0's using Regexp (//g) and used +() to return to numberic data type
}

removeZeros(50680019)



//Their Solution using For Loop
function removeZeroes3(number) {
  let strNumber = number.toString().split('')
  let answer = '';
  for (let i = 0; i < strNumber.length; i++) { //loop conditions: start with index 0; for indexes less than the length, add 1 to index value after running
    if (strNumber[i] !== '0') { //If index value does not = 0 then add value to answer - repeats for each index number according to conditions
      answer += strNumber[i]
    }
  }
  return Number(answer)
}

console.log(removeZeroes3(505051310001))

//Their Solution using ForEach Method
function removeZeroes2(number) {
  let arrOfNum = number.toString().split('') //turned the number into a string then into an array
  let answer = '';
  arrOfNum.forEach((elem, index) => {
    if (elem !== '0') { //element is not equal to 0
      answer += elem //+= is an assigned expression so this is answer = answer + element
    }
  })
  return +answer //+() transforms string back to number
}

console.log(removeZeroes2(10001))
