function convertHTML(str) {
  
    // This works, but you can't tell because it is displayed in a browser
  
    var temp=str.split('');
    for (let i=0; i< temp.length; i++) {
      switch (temp[i]) {
        case '&': temp[i] = '&amp;'; break;
        case '<': temp[i] = '&lt;'; break;
        case '>': temp[i] = '&gt;'; break;
        case '"': temp[i] = '&quot;'; break;
        case "'": temp[i] = '&apos;'; break;
      }
    }
  
    temp = temp.join('');
    return temp;
    
  }
  
  console.log(convertHTML("Dolce & Gabbana"));