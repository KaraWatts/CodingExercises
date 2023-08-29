/*
(P)arameters: array of positions, total change in time
(R)eturn: average velocity of the entire trip
(E)xample: 
(P)seudocode:
averageVelocity = positionChange(lastPosition - firstPosition)/timeChange

 - 
 -
*/

//Be careful not to overcomplicate things by over thinking the questions

function avgVel(posArray,time) {
 return (posArray[posArray.length-1] - posArray[0]) / time
}

console.log(avgVel([0, 4, 6], 10))

