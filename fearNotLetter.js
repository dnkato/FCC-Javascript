function fearNotLetter(str) {
    for (var i=1; i<str.length; i++ ) {
      let expectedUnicode = str.charCodeAt(i-1) + 1;
      let charUnicode = str.charCodeAt(i);
      if (expectedUnicode !== charUnicode) return String.fromCharCode(expectedUnicode); 
    }
    return undefined;
  }
  
  console.log(fearNotLetter("abce"));