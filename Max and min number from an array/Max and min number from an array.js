// - Your function should accept an array of integers as input.
// - It should return an object or a tuple containing the maximum and minimum numbers found in the array.
// ### **Examples:**
//
// 1. **Input**: **`[1, 3, 5, 7, 9]`**
// - Explanation: The maximum number is 9 and the minimum is 1.
// - **Expected Output**: **`{ max: 9, min: 1 }`**
// 2. **Input**: **`[-2, 0, 4, 6, 11]`**
// - Explanation: The maximum number is 11 and the minimum is -2.
// - **Expected Output**: **`{ max: 11, min: -2 }`**
//
// ### **Expected Task:**

// Develop a JavaScript function that finds the maximum and minimum numbers in an array of integers. Your solution should handle a variety of arrays,
//   including those with positive and negative numbers. Consider iterating through the array once, keeping track of both the maximum and minimum
// values encountered. Efficiently handle edge cases, such as an empty array or an array with a single element.


// function minAndMax(arr){
//   let min = Math.min(...arr);
//   let max = Math.max(...arr);
//   return {max: `${max}`, min: `${min}`}
// }

function minAndMax(arr){
  let min = arr[0];
  let max = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(arr[i] < min){
      min = arr[i];
    } else if(arr[i] > max && arr[i] !== min){
      max = arr[i];
    }
  }
  return {max: `${max}`, min: `${min}`}
}


console.log(minAndMax([1, 3, 5, 7, 9]));
console.log(minAndMax([-2, 0, 4, 6, 11]));
console.log(minAndMax([1]));
console.log(minAndMax([]));
