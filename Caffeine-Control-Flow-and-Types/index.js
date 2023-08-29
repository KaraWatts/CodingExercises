/*
(P)arameters: 
(R)eturn: 
(E)xample: 
(P)seudocode:
 - 
 -
*/
//My code - way too complicated but good practice piecing data apart
function drinks(day){
  const caffeine = {
    day: ['m','t','w','r','f'],
    mgNeeded: [800,600,400,400,900],
    inDrink: 150
  };
    let need = caffeine['mgNeeded'][caffeine.day.indexOf(day)];
  let cans = need/caffeine['inDrink'];
    console.log(Math.ceil(cans))
}

drinks('r')

//Their Code
function drinks(day){
  let week = {
    m: 800,
    t: 600,
    w: 400,
    r: 400,
    f: 900
  };
  let drinks = 150;
  return Math.ceil(week[day]/drinks)
}