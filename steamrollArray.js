function steamrollArray(arr) {
  // I'm a steamroller, baby

  var inArr = arr;

  // Note: using a for loop to avoid infinite looping while coding 
  
  for (var n=0; n< 1000; n++) {

    var stopFlattenning = true;
    var outArr = [];
    for (var obj of inArr) {
      if (!Array.isArray(obj)) {
         // If not an array, add the object to the output array
          outArr.push(obj);
      } else {
          // If an array, add the nested objects to the output array 
          for (var nestedObj of obj) {
            outArr.push(nestedObj);
          }
          // keep on flattenning until there are no nested arrays...
          stopFlattenning = false;
      }
    }
    if (stopFlattenning) {
        //console.log(n+1 + " iterations");
        break;
    }
    inArr = outArr; // output array becomes the input for the next iteration

  }

  return outArr;
}

//console.log(steamrollArray([[["c"]], "d"])); 
//console.log(steamrollArray([[["a"]], [["b"]]]));
//console.log(steamrollArray([1, [2], [3, [[4]]]]));
//console.log(steamrollArray([1, [], [3, [[4]]]]));
//console.log(steamrollArray([1, [2], [3, [[4]]]]));
//console.log(steamrollArray([1, {}, [3, [[4]]]]));
