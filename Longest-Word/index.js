function LongestWord(sen) { 
    let clean = sen.replace(/\W/g, ' ');
    let words = clean.split(' ');
    let lengths = [];
    for(let wrd of words){
      lengths.push(wrd.length);
    };
    return words[lengths.indexOf(Math.max(...lengths))]
    
    }
       
    // keep this function call here 
    console.log(LongestWord("fun&!! time"));