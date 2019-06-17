function convertToRoman(num) {

    function digitStr(num0to9, onechar, fivechar, tenchar) {
        let str = "";
        switch (num0to9) {
          case 1: str = onechar; break;
          case 2: str = onechar + onechar; break;
          case 3: str = onechar + onechar + onechar; break;
          case 4: str = onechar + fivechar; break;
          case 5: str = fivechar; break;
          case 6: str = fivechar + onechar; break;
          case 7: str = fivechar + onechar + onechar; break;
          case 8: str = fivechar + onechar + onechar + onechar; break;
          case 9: str = onechar + tenchar; break;
          default: str = ""; break;
        }
        return str;
    }
    
    let str = "";
  
    /* Thousands */
    let digit = Math.trunc(num / 1000);
    if (digit > 3) return "Not Supported";
    str += digitStr(digit,"M","","");
    num -= 1000 * digit;
  
    /* Hundreds */
    digit = Math.trunc(num / 100);
    str += digitStr(digit,"C","D","M");
    num -= 100 * digit;
  
    /* Tens */
    digit = Math.trunc(num / 10);
    str += digitStr(digit,"X","L","C");
    num -= 10 * digit;
  
    /* Ones */
    digit = num;
    str += digitStr(digit,"I","V","X");
  
   return str;
  
  }
  
  console.log(convertToRoman(236));
  console.log(convertToRoman(47));
  