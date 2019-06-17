function uniteUnique(arr) {
    var outArr=[];
    
    for (let i=0; i< arguments.length; i++) {
  
      var arr = [...arguments[i]];
      for (let j=0; j< arr.length; j++) {
        var item = arr[j];
        if (outArr.indexOf(item)===-1) outArr.push(item);
      }
  
    }
    return outArr;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));