function dropElements(arr, func) {
    // Drop them elements.
    while ((arr.length > 0) && (!func(arr[0]))) {
      arr.splice(0,1);
    }
    return arr;
  }
  
  console.log(dropElements([1, 2, 3,4], function(n) {return n >= 3; }));