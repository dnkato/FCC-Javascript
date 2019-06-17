function palindrome(str) {
  
    var temp = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    
     var charArr = temp.split('');
    
     for (let i=0; i< charArr.length/2; i++) {
       if (charArr[i]!==charArr[charArr.length - 1 - i]) {
          return false;
       }
     }
  
    return true;
  }
  
  
  
  //console.log(palindrome("eye")); //true
  //console.log(palindrome("_eye")); //true
  //console.log(palindrome("race car")); //true
  //console.log(palindrome("not a palindrome")); //false
  //console.log(palindrome("A man, a plan, a canal. Panama")); // true 
  //console.log(palindrome("never odd or even")); // true
  //console.log(palindrome("My age is 0, 0 si ega ym.")); // true
  