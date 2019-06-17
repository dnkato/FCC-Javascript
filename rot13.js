/**
 * Decodes a string that has been encoded using a Caesar cipher, where the
 * values of the letters have been shifted by 13 places.
 * 
 * @param {string} str Encoded string
 * @return {string}    Decoded string
 */
function rot13(str) { // LBH QVQ VG!
  
    const ACODE = 65;
    const ZCODE = 90;
     
    function shiftLetter(letter, increment) {
      
      let code = letter.charCodeAt(0);
      code += increment;
  
      // wrap values so that they fall between A AND Z
      if (code > ZCODE) code = ACODE + (code - ZCODE) - 1;
      if (code < ACODE) code = ZCODE - (ACODE - code) + 1;
  
      return String.fromCharCode(code);
    } 
  
    function shiftString(str, increment) {
      var outArr = [];
      var temp = str.split('');
      for (let ch of temp) {
        if ((ch >= 'A') && (ch <= 'Z')) {
            outArr.push(shiftLetter(ch, increment));
        } else {
            outArr.push(ch);
        }
      }
      return outArr.join('');
    }
  
    return shiftString(str.toUpperCase(), -13);
  }
  
  // Change the inputs below to test
  console.log(rot13("LBH QVQ VG"));