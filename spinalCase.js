function spinalCase(str) {
  
    //First, trim and convert all the camelcasing ...
  
    var myStr = str.trim();
    var myStr = myStr.replace(/([a-zA-z])(?=[A-Z])/g, '$1-').toLowerCase();
  
   //Next, replace non-letters with dashes
    var myStr = myStr.replace(/[^a-zA-Z]+/g,'-');
  
    return myStr;
  }
  
  console.log(spinalCase('ThisIs Spinal Tap'));