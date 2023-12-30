function AlphabetSoup(str) { 
    let arr = str.split('');
    return arr.sort().join('')
    }
    // keep this function call here 
    console.log(AlphabetSoup("coderbyte"));