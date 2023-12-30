function LetterChanges(str) { 
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let vowels = 'aeiou';
    let final = ''
    
    for(let i = 0; i < str.length; i++){
      let test = str[i];
      let index = alpha.indexOf(test)+1;
      if(!test.match(/[a-zA-Z]/g)){
        final += test;
      }else{
        if(index >= alpha.length){
          index -= alpha.length;
        };
        if(vowels.includes(alpha[index])){
          final += alpha[index].toUpperCase();
        }else{
        final += alpha[index];
        };
      };
    }
     return final
    }
    
       
    // keep this function call here 
    console.log(LetterChanges("hello*3"));