//anonymous 
const array1 = [1, 2, 2, 3, 4, 4, 5];

const uniqueArray1 = function(arr) {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}(array1);

console.log(uniqueArray1); 


//IIFE 
const array2 = [1, 2, 2, 3, 4, 4, 5];

const uniqueArray2 = (function(arr) {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
})(array2);

console.log(uniqueArray2); 