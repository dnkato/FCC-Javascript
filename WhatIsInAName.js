function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [...collection];
    // Only change code below this line
    
    // first get the keys from the source
    var keys = Object.keys(source);
  
    // filter the collection based on the keys
    for (var k=0; k < keys.length; k++) {
        var key = keys[k];
        var arr = arr.filter((x)=>{return x[key]===source[key]})
    } 
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });