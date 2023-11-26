function FirstFactorial(num) { 
    let result = num
    
    for(let i = num-1; i > 0; i--){
      result *= i;
    }
    return result
    
    }
    // keep this function call here 
    console.log(FirstFactorial(8));