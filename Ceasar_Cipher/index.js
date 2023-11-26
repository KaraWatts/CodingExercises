function CaesarCipher(str,num) { 
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const capLetters = letters.toUpperCase();
  let arr = str.split('');
  let results = []


  for(let i = 0; i < arr.length; i++){
    let index = function (a, b){
      let sum = a+b
      if(sum > letters.length-1){
        return sum-letters.length
      }else{
        return sum
      }
    }
    if(!arr[i].match(/\w/i)){
      results.push(arr[i])
    }else if (arr[i].match(/[A-Z]/)) {
      results.push(capLetters[index(capLetters.indexOf(arr[i]), num)]);
     }else {
       results.push(letters[index(letters.indexOf(arr[i]), num)]);
     }
  }
return results.join('');
}

   
// keep this function call here 
console.log(CaesarCipher('Hello', 4));