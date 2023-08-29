/*
(P)arameters: 
(R)eturn: 
(E)xample: 
(P)seudocode:
 - 
 -
*/
//My solution

function hoursMinutes(minutes) {
  let hr = Math.floor(minutes/60) //math.floor rounds down - math.ceiling rounds up
  let min = minutes%60
  return `${hr} hours and ${min} minutes`
}

// Tests
console.log(hoursMinutes(125) === '2 hours and 5 minutes');
console.log(hoursMinutes(175) === '2 hours and 55 minutes');

//They're solution - my math is simpler but their code would put out a more gramatically correct answer
function hoursMinutes(minutes) {
  let hours = Math.floor(minutes/60)
  let remainingMin = minutes-(hours*60)
  if (hours === 0) {
    return `${hours} hours and ${remainingMin} minutes`
  } else if (remainingMin === 1) {
    return `${hours} hours and ${remainingMin} minute`
  } else if (remainingMin === 0) {
    return `${hours} hours and ${remainingMin} minutes`
  } else {
    return `${hours} hour${hours>1 ? 's' : ''} and ${remainingMin} minutes`
  }
}

// Tests
console.log(hoursMinutes(125) === '2 hours and 5 minutes');
console.log(hoursMinutes(175) === '2 hours and 55 minutes');