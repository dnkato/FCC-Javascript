function isPrime(num) {
    if (num<=1) return false;
    for (var i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function sumPrimes(num) {
    var primes = [];
    
    for (var i=1; i<=num; i++) {
      if (isPrime(i))primes.push(i);
    }
    //console.log(primes);
    
    return primes.reduce((a,b)=>{return a+b;});
    
  }
  
  
  console.log(sumPrimes(10));