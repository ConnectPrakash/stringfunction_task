function changeMiddleToAsterisk(str) {
  const length = str.length;
  const middleIndex = Math.floor(length / 2);
  let result = '';

  if (length % 2 === 0) {
    // If the length is even, change the two middle elements to *
    result = str.slice(0, middleIndex - 1) + '*' + str.slice(middleIndex + 1);
  } else {
    // If the length is odd, change the middle element to *
    result = str.slice(0, middleIndex) + '*' + str.slice(middleIndex + 1);
  }

  return result;
}

// Sample Test
const input = "helldjo";
const output = changeMiddleToAsterisk(input);
console.log(output); // Output: he*lo
