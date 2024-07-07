//anonymous
const arr1 = [121, 123, 1331, 454, 67876];
const palindromes1 = function(arr1) {
    return arr1.filter(num1 => {
        const reversedNum1 = parseInt(num1.toString().split('').reverse().join(''));
        return num1 === reversedNum1;
    });
}(arr1);

console.log(palindromes1); 

//IIFE
const arr2 = [121, 123, 1331, 454, 67876];

const palindromes2 = (function(arr2) {
    return uniqueArray2.filter(num2 => {
        const reversedNum2 = parseInt(num2.toString().split('').reverse().join(''));
        return num2 === reversedNum2;
    });
})(arr2);

console.log(palindromes2); 


// Using arrow function

const isPalindrome = str => str === str.split('').reverse().join('');

const findPalindromes = arr => arr.filter(word => isPalindrome(word));

const words = ["level", "radar", "hello", "world", "madam"];
const palindromes = findPalindromes(words);
console.log("Palindromes:", palindromes);