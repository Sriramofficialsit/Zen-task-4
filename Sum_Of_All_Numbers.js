//anonymous
let Numbers = [1, 2, 3, 4, 5];

let sum1 = function(arr1) {
  let total1 = 0;
  for (let num1 of arr1) {
    total1 += num1;
  }
  return total;
};
console.log(sum(Numbers)); 

//IIFE
let number = [1, 2, 3, 4, 5];

let sum = (function(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
})(numbers);
console.log(sum); 

// Using arrow function
const sumOfArray = arr => arr.reduce((total, num) => total + num, 0);
const numbers = [1, 2, 3, 4, 5];
console.log("Sum of array:", sumOfArray(numbers));