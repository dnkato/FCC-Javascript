function sumFibs(num) {
  
    // compute the Fibonacci numbers
    var fib = [1,1];
    while ((fib[fib.length-1] + fib[fib.length-2]) <= num) {
      fib.push(fib[fib.length-1] + fib[fib.length-2]);
    }
    //console.log(fib);
  
    //filter the odd numbers
    fib = fib.filter((x)=>{return x%2==1});
    //console.log(fib);
  
    //compute the sum
    var sum = fib.reduce((a,b)=>{return a+b;});
    //console.log(sum);
  
    return sum;
  }
  
  sumFibs(4); // should return 5