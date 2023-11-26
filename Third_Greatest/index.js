function ThirdGreatest(strArr) {
let wkArr = strArr.concat()
let length = [];

for(let word of wkArr){
  length.push(word.length);
}
let a = 0;
  let max = length.indexOf(Math.max(...length))
while(a<2){
  a++
  wkArr.splice(max,1);
  length.splice(max,1);
  max = length.indexOf(Math.max(...length))
};
return wkArr[max]
}
// keep this function call here 
console.log(ThirdGreatest(["coder","byte","code"]));