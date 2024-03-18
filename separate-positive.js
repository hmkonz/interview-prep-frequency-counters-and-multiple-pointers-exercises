/**
 * This function accepts an array of non-zero integers and separates the positive integers to the left and the negative integers to the right in an unsorted order. This is done with the array in place, in other words, a copy of the input array is not made)
 *
 */

function separatePositive(arr) {
  // create left and right pointers, starting from the beginning of the array
  let left = 0;
  let right = 1;

  // continue looping while the right pointer is less than or equal to length of the array
  while (right <= arr.length) {
    // for the 2 cases when the integers at both the left and right pointers are greater than 0 OR the integer at the left pointer is greater than 0 and the interger at the right pointer is less than 0, don't do anything but move the right and left pointers one index to the right
    if (
      (arr[left] > 0 && arr[right] > 0) ||
      (arr[left] > 0 && arr[right] < 0)
    ) {
      right++;
      left++;
    }
    // if the integer at the left pointer is less than 0 and the integer at the right pointer is greater than 0, move the integer at the right pointer to the index of the left pointer and vice versa and then move the right pointer to the right one index to the right
    else if (arr[left] < 0 && arr[right] > 0) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      right++;
      left++;
    }
    // otherwise, when both of the integers at the left and right pointers are negative, leave the left pointer where it is but move the right pointer one index to the right
    else {
      right++;
    }
  }
  return arr;
}
