function destroyer(arr) {
    // This example uses the arguments object.
  
    var outArr = [...arguments[0]];
    console.log(outArr);
  
    // Remove all the values
  
    // When deleting items from an array start from the end
    for (var i=outArr.length-1; i>=0; i--) {
        for (var j=1; j < arguments.length; j++) {
          let deleteVal = arguments[j];
          if (outArr[i]===deleteVal) {
            outArr.splice(i,1);
            break;
          }
        }
    }
  
    console.log(outArr);
    return outArr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);