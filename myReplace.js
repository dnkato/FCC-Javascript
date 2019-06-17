function myReplace(str, before, after) {
  
    var regex = new RegExp(before,'i');
    var match = str.match(regex); 
    console.log(match);
    
    //figure out if we need to capitalize the first letter
    var replaceStr;
    var firstLetter = match[0].substring(0,1);
  
    console.log(firstLetter);
    if (firstLetter.toUpperCase()==firstLetter) {
      replaceStr = after.substring(0,1).toUpperCase() + after.substring(1, after.length);
    } else {
      replaceStr = after;
    }
  
    return str.replace(regex,replaceStr);
  }
  
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));