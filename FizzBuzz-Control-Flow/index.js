/*
(P)arameters: 
(R)eturn: 
(E)xample: 
(P)seudocode:
 - 
 -
*/
//My code
const fizzBuzz = (num) => {
  let fizzBuzzObj = {};
  for (let i=1; i<num+1; i++){
    if (i%3 === 0){
      fizzBuzzObj[i] = "Fizz" 
    } else if (i % 5 === 0){
      fizzBuzzObj[i] = "Buzz"
    } else if (i % 5 === 0 && i % 3 === 0){
      fizzBuzzObj[i] = "FizzBuzz"
    } else {fizzBuzzObj[i] = i
           }
  }
  console.log(fizzBuzzObj)
}

fizzBuzz(100)


//Example code
// const fizzBuzz = (num) => {
//   let answer = {};
//   for (let i = 1; i < num+1; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       answer[i] = 'FizzBuzz'
//     } else if (i % 3 === 0) {
//       answer[i] = 'Fizz'
//     } else if (i % 5 === 0) {
//       answer[i] = 'Buzz'
//     } else {
//       answer[i] = i
//     }
//   }
//   return answer
// }

// console.log(fizzBuzz(5))