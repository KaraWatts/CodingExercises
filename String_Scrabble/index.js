function StringScramble(str1,str2) { 
  let arr1 = str1.split('');
  let str = str2
  let matches = [];
  for(let char of arr1){
    if(str.includes(char)){
      matches.push(char);
      str = str.replace(char,'')
    }
  };

return matches.length === str2.length;
}
   
// keep this function call here 
console.log(StringScramble("h3ll0","hello"));     