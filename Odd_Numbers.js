//anonymous
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(function(num) {
    if (num % 2 !== 0) {
        console.log(num);
    }
});

// IIFE
(function(arr) {
  arr.forEach(num => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
})
([1, 2, 3, 4, 5]); 

// Using arrow function
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(num => {
    if (num % 2 !== 0) {
        console.log(num);
    }
});