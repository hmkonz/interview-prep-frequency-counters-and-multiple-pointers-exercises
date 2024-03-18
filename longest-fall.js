/**
 * This function accepts an array of integers and returns the length of the longest consecutive decrease of integers
 *
 */

function longestFall(arr) {
  // initialize counter to 1 since 1 is the shortest length a consecutive decrease of integers in 'arr' can be
  let counter = 1;
  // maxCounter will store the largest length of a consecutive decrease of integers in 'arr'
  let maxCounter = 0;

  // if 'arr' is empty, return 0
  if (arr.length === 0) return 0;

  //  loop over 'arr' to the end
  for (let i = 1; i < arr.length; i++) {
    // check to see if two consecutive numbers decrease in value. If so, add 1 to the counter and assign 'maxCounter' to the largest number between counter and maxCounter
    if (arr[i] < arr[i - 1]) {
      counter++;
      maxCounter = Math.max(counter, maxCounter);
    }
    //  otherwise, if the 2 consecutive numbers don't decrease in value, set counter back to 1
    else {
      counter = 1;
    }
  }
  //   return either maxCounter or 1 if none of the consecutive numbers decrease in value
  return maxCounter || 1;
}
