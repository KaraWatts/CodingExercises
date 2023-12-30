function DistinctList(arr) { 
let duplicates = arr.filter((num, i) =>  arr.indexOf(num) != i);
return duplicates.length
}

// keep this function call here 
console.log(DistinctList([0,-2,-2,5,5,5]));