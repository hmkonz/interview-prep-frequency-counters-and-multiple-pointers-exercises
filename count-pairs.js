/**
 * Given an array of integers and a number, return the number of pairs of integers in the array whose sum is equal to the second parameter. Assume that there will be no duplicate values in the array.
 *
 */
function countPairs(arr, sum) {
  // sort the integers in the array in ascending order
  arr.sort((a, b) => a - b);
  // initialize a counter to 0
  let counter = 0; // counter keeps track of how many times 2 of the integers in 'arr' add up to 'sum'
  let left = 0; // left pointer
  let right = arr.length - 1; //right pointer

  // continue looping while the left pointer is to the left of the right pointer (don't want pointers to cross over)
  while (left < right) {
    // if the integers at the indices of the left and right pointers add up to 'sum', add one to 'counter' and move the left pointer to the right by one index and move the right pointer to the left by one index
    if (arr[left] + arr[right] === sum) {
      counter++;
      left++;
      right--;
    }
    // if the integers at the indices of the left and right pointers add up to less than 'sum', move the left pointer to the right by one index (need to make the integer at the index of the left pointer larger)
    else if (arr[left] + arr[right] < sum) {
      left++;
    }
    // if the integers at the indices of the left and right pointers add up to more than 'sum', move the right pointer to the left by one index (need to make the integer at the index of the right pointer smaller)
    else {
      right--;
    }
  }
  return counter;
}
