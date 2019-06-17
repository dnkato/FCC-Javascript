function telephoneCheck(str) {
    // Good luck!
    //console.log(str);
    if (str.match(/^(1 )?\d{3}[- ]?\d{3}[- ]?\d{4}$/)) return true; 
    if (str.match(/^(1 )?\(\d{3}\)[- ]?\d{3}[- ]?\d{4}$/)) return true;
    if (str.match(/^(1)?\(\d{3}\)[- ]?\d{3}[- ]?\d{4}$/)) return true;
  
    return false;
  }
  
  console.log(telephoneCheck("555-555-5555"));
  console.log(telephoneCheck("555 5555555"));
  console.log(telephoneCheck("1 555-555-5555"));
  console.log(telephoneCheck("1 (555) 555-5555")); 
  console.log(telephoneCheck("(555)555-5555"));
  console.log(telephoneCheck("1(555)555-5555"));
  console.log(telephoneCheck("1 555 555 5555"));
  console.log(telephoneCheck("1 456 789 4444"));