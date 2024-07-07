//anonymous


const rotateArrayByK_anonymous = (arr, k) => {
    const n = arr.length;
    k = k % n;
    const rotatedArray = arr.slice(k).concat(arr.slice(0, k));
    return rotatedArray;
  };
  
  
  const arr = [1, 2, 3, 4, 5];
  const k = 2;
  console.log("Rotated array:", rotateArrayByK_anonymous(arr, k));
  
  //IIFE
  
  
  const rotatedArrayByK_IIFE = ((arr, k) => {
    const n = arr.length;
    k = k % n; 
    return arr.slice(k).concat(arr.slice(0, k));
  })([1, 2, 3, 4, 5], 2);
  
  console.log("Rotated array:", rotatedArrayByK_IIFE);