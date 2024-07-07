//anonymous
const medianOfSortedArrays = function(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const length = mergedArray.length;
    const mid = Math.floor(length / 2);

    if (length % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        return mergedArray[mid];
    }
};

// Test the function
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(medianOfSortedArrays(arr1, arr2)); 

//IIFE
const medianOfSortedArraysIIFE = ((arr1, arr2) => {
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const length = mergedArray.length;
    const mid = Math.floor(length / 2);

    if (length % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        return mergedArray[mid];
    }
})([1, 3, 5], [2, 4, 6]);

// Test the function
console.log(medianOfSortedArraysIIFE); 


