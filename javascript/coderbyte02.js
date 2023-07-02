function LetterChanges(str) { 
    str = str.toLowerCase();
    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    var newstring = [];
  
    for (var i=0;i<str.length;i++){
      
       var nextLetter = ((alphabet.indexOf(str[i])+1)%alphabet.length);
  
      if ('aeiou'.includes(alphabet[nextLetter])){
        nextLetter=alphabet[nextLetter].toUpperCase()}
      else{
        nextLetter = alphabet[nextLetter]
  
      }    
      newstring.push(nextLetter);
    } 
  
    str = newstring.join("");
  
    // code goes here  
    return str; 
  
  }
     
  // keep this function call here 
  console.log(LetterChanges(readline()));