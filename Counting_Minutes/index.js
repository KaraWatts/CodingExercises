function CountingMinutes(str) { 
  let times = str.split('-');
  let t1 = breakDown(times[0]);
  let t2 = breakDown(times[1]);

  function breakDown(t){
    let temp = {};
    temp['tod'] = t.match(/a|p/);
    let tSplit = t.split(':');

    temp['hr'] = parseInt(tSplit[0]) * 60
    temp['min'] = parseInt(tSplit[1]);
     
    if(temp['hr'] == 720 && temp['tod'] == 'a'){
      temp['hr'] = 0
      }else if (temp['tod'] == 'p' && temp['hr'] != 720){
      temp['hr'] += 720
    }
    temp['tMin'] = parseInt(temp['hr']) + parseInt(temp['min']);
    return temp.tMin
  };

let dif = t2 - t1;
if(dif < 0){
  return dif + (24*60);
}else{
  return dif
}

}
   
// keep this function call here 
console.log(CountingMinutes(readline()));