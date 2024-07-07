//anonymous
let stringArray = ["hello", "world", "example"];
let titleCapsArray = function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
}(stringArray);

console.log(titleCapsArray); 

//IIFE
let string_Array = ["hello", "world", "example"]
let titleCaps_Array = (function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
})(string_Array);
console.log(titleCaps_Array); 

// Using arrow function
const convertToTitleCaps = (arr) => {
    return arr.map(str => {
      return str.toLowerCase().split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
    });
  };
  
  const stringarray = ["hello world", "good morning", "have a nice day"];
  const titlecapsArray = convertToTitleCaps(stringarray);
  console.log("Title caps array:", titlecapsArray);