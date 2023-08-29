/*
(P)arameters: 
(R)eturn: 
(E)xample: 
(P)seudocode:
 - 
 -
*/
//My solution
let countDown = (seconds) => {
  while (seconds > 0) {
    console.log(`There are ${seconds} seconds left until liftoff`);
    seconds = seconds-1
  }
  console.log(`Lift Off!`)
}

countDown(2)

//Their Solution
// let countDown = (seconds) => {
//   while (seconds >= 0) { //this counts down all the way to 0
//     console.log(`There are ${seconds} seconds left until liftoff!`)
//     seconds-- // '--' is a decrement operator that subtracts 1 from variable
//   }
//   return "Lift Off!" //this needs console.log() to work
// }

// countDown(5)
