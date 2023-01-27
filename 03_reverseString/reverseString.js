const reverseString = function(string) {
    // first take the parameter passed to the function and make it into an 
    // array by calling `split` on it
    let string_to_array = string.split("");
    // create a variable to reverse the elements of the array (string_to_array var)
    let reversed_array = string_to_array.reverse();
    // create a reverse_string var which converts the array back to a string
    // and replaces all commas with nothing.
    let reverse_string = reversed_array.toString().replace(/,/g,  '');
    // return the reverse string variable to the function
    return reverse_string
};

// Do not edit below this line
module.exports = reverseString;
