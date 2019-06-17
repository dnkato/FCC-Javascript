function pairElement(str) {
    var outArr=[];
    var pairLetter;
    for (var i=0; i<str.length; i++) {
        let pairArr=[];
        let letter = str.substring(i,i+1);
        pairArr.push(letter);
        switch (letter) {
          case 'G': pairLetter='C'; break;
          case 'C': pairLetter='G'; break;
          case 'A': pairLetter='T'; break;
          case 'T': pairLetter='A'; break;
        }
        pairArr.push(pairLetter);
        console.log(pairArr);
        outArr.push(pairArr);
    }
    return outArr;
  }
  
  pairElement("ATCGA");