//anonymous
const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const prime = function(arr1) {
    return arr1.filter(function(num1) {
        if (num1 <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num1); i++) {
            if (num1 % i === 0) return false;
        }
        return true;
    });
}(Numbers);

console.log(primes); 

//IIFE
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primes = (function(arr2) {
    return arr2.filter(function(num2) {
        if (num2 <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num2); i++) {
            if (num2 % i === 0) return false;
        }
        return true;
    });
})(numbers2);

console.log(primes); 


// Using arrow function

const isPrime = num => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  
  const findAllPrimes = arr => arr.filter(isPrime);
  
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const primeNumbers = findAllPrimes(numbers);
  console.log("Prime numbers:", primeNumbers);
  
