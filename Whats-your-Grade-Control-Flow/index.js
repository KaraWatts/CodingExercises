/*
(P)arameters: 
(R)eturn: 
(E)xample: 
(P)seudocode:
 - 
 -
*/
//My over compliant code
function myGradeIs(gpa) {
  if(gpa === 4){
    return "A"
  }
  else if (gpa >= 3 && gpa < 4){
    return "B"
  }
  else if (gpa >= 2 && gpa < 3){
    return "C"
  }
  else if (gpa >= 1 && gpa < 2){
    return "D"
  }
  else if (gpa < 1 && gpa >= 0){
    return "F"
  }
  else return 'Only numbers between 0 and 4 please'
}

console.log(myGradeIs(2))


//Their code
function myGradeIs(gpa) {
  if (gpa >= 4) {
    return 'A';
  } else if (gpa >= 3) {
    return 'B';
  } else if (gpa >= 2) {
    return 'C';
  } else if (gpa >= 1) {
    return 'D';
  } else {
    return 'F';
  }
}
