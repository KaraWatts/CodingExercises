function PalindromeTwo(str) { 
  let lowStr = str.toLowerCase().replace(/\W/g, "")
  let arr = lowStr.split('');
  let rvs = arr.reverse()

  return rvs.join('') === lowStr ? true : false;
}
   
// keep this function call here 
console.log(PalindromeTwo(readline()));