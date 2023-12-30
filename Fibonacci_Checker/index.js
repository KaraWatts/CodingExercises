function FibonacciChecker(num) { 
    let fnSeq = [1]
    
    
    
    let fn = function(acc, add) {
      if(acc >= num){
        fnSeq.push(0);
      }else{
        fnSeq.push(acc+add)
        fn(acc+add, acc)
      }
    }
    fn(2, 1);
    return fnSeq.includes(num) ? 'yes' : 'no'
    
    }
       
    // keep this function call here 
    console.log(FibonacciChecker(8));