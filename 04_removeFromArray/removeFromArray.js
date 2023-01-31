const removeFromArray = function(array, ...numbers) {
  // create new var which will hold the end result array
  let new_array = [];
  // start for loop for the array
  for (i = 0; i < array.length; i++) {
    // if the ith element in the array is included in the numbers array
    if (numbers.includes(array[i]))
    {
      // continue (skip)
      continue;
    }
    // else 
    else {
      // add the element from the array to the new_array
      new_array.push(array[i]);
    }
  }
  // return the new array to the function
  return new_array;
};

// Do not edit below this line
module.exports = removeFromArray;
