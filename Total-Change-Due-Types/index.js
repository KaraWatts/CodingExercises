/*
(P)arameters: 
(R)eturn: 
(E)xample: 
(P)seudocode:
 - 
 -
*/
//My solution
function totalChange(amountPaid, totalCost) {
  let change = (amountPaid - totalCost)
  if (change % 1 === 0) { //if value is an integer dividing by 1 will result in 0
    return change
  }
  else {
    return Number(change.toFixed(2)) //.toFixed rounds the value to 2 decimal places but outputs a string - Number() converts string to numeric
  }
}

// ---- TESTS - don't change these ---- //
console.log(totalChange(100, 75) === 25)
console.log(totalChange(10, 7.28) === 2.72)

//Their Solution

function totalChange2(amountPaid, totalCost) {
  return +(amountPaid-totalCost).toFixed(2) //this works because +(any value) always outputs a number
}

// ---- TESTS - don't change these ---- //
console.log(totalChange2(100, 75) === 25)
console.log(totalChange2(10, 7.28) === 2.72)


