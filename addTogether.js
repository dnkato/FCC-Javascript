function addTogether() {
    
    // Check to make sure all our arguments are valid numbers
    // note: use the arguments object
  
    for (let arg of arguments) {
      if ((typeof arg) !== 'number') {
        return undefined;
      }
    }
  
    // If there is only one argument, return a "Curried" function
    // otherwise, simply return the sum of the first two numbers
  
    if (arguments.length==1) {
      var x = arguments[0];
      return function(y) {
          return  (typeof y !== 'number') ? undefined: x + y;
      }
    } else {
      return arguments[0] + arguments[1];
    }
  }
  
  //Unit tests
  console.log(">>> " + addTogether(2,3));  //5
  console.log(">>> " + addTogether(2)(3)); //5
  console.log(">>> " + addTogether("http://bit.ly/IqT6zt")); //undefined
  console.log(">>> " + addTogether(2, "3")); //undefined
  console.log(">>> " + addTogether(2)([3])); //undefined