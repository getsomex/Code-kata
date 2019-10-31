function firstNonRepeatingLetter(s) {
    let lower = s.toLowerCase(); 
    for ( let i = 0; i < s.length; i++ ) {
     if ( lower.indexOf(lower[i]) === lower.lastIndexOf(lower[i]) ) { 
         console.log(lower.indexOf(lower[i]))
         return s[i] 
        }
     } return '';

}

