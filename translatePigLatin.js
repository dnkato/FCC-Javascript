function translatePigLatin(str) {
  
    var vowels=['a','e','i','o','u'];
  
    //find the first vowel in the string
    var firstVowel = str.length;
    for (var i=0; i<str.length; i++) {
        let letter = str.substring(i,i+1);
        if (vowels.indexOf(letter)!==-1) {
           firstVowel=i;
           break;
        }
    }
    console.log(firstVowel);
  
    //figure out the suffix based on whether the first letter is a vowel  
    var suffix = (firstVowel===0)? "way": str.substring(0,firstVowel)+"ay";
  
    return str.substring(firstVowel, str.length) + suffix;
  
  }
  
  console.log(translatePigLatin("consonant"));

  //-------------------------------------------------
  