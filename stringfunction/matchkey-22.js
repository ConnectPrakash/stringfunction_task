

// You are given with a string which comprises of some numbers.Your task is to find the largest integer by converting the string to the corresponding integer.

// Input Description:
// First line contains n denoting number of Test Cases.The first and only Line of testcase has the string

// Output Description:
// Print the largest number

// Sample Input:
//  I was born on 12 october 1998.

// Sample Output:
// 1998


function findLargestIntegerFromString(input) {
    // Extract all numbers from the string using a regular expression
    const numbersArray = input.match(/\d+/g);

    if (!numbersArray) {
        return null; // No numbers found in the string
    }
   console.log(numbersArray)
    // Convert the array of strings to an array of integers
    const integersArray = numbersArray.map(Number);
    console.log(integersArray);
    // Find the largest integer using Math.max function
    const largestInteger = Math.max(numbersArray);

    return largestInteger;
}

// Sample input
const input = "I was born on 12 october 1998.";

// Get the largest integer from the input string
const largestNumber = findLargestIntegerFromString(input);

// Output the result
console.log(largestNumber);
