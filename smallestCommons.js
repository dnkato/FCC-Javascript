function smallestCommons(arr) {
    // Computes the smallest common multiple across a range of consecutive numbers.
  
    // first, put the two range values in order
    var minval = Math.min(...arr);
    var maxval = Math.max(...arr);
  
    // Euler's algorithm for finding the least common multiple between two numbers
    // reference: https://www.youtube.com/watch?v=6vWx5trbj6c
    
    // we will compute the greatest common denominator using a recursive algorithm (note: a>= b) 
  
      function gcd(a, b) {
          return !b ? a : gcd(b, a % b);
      }
  
    // then we will use the gcd to compute the lowest common multiple between two values.
  
      function lcm(a, b) {
          return (a * b) / gcd(a, b);   
      }
  
    // now find the lcm for all the numbers in our range:
  
    var multiple = minval;
    for (var n= minval; n<=maxval; n++) {
        multiple = lcm(multiple,n);
    }
    return multiple;
  }
  
  smallestCommons([1,13]);