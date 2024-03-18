/**
 *  Because 'arr' is a sorted array, pointers can be set up at the beginning and end of 'arr'
 *  and the running average of the two numbers at the pointers can be calculated.
 *
 *  At each point, if the average of 2 numbers is less than 'avg' then move the left pointer one
 *  index to the right, while the right can stay put. Otherwise if the average of 2 numbers is
 *  greater than 'avg', move the right pointer one index to the left.
 *
 *  The function ends either when the correct average is found true or when the pointers have
 *  crossed each other (i.e. when 'left' is greater than 'right'). This means there aren't any
 *  2 numbers averaged that equal 'avg' and so false is returned
 *
 */

function averagePair(arr, avg) {
  let left = 0; // left pointer
  let right = arr.length - 1; //right pointer
  // continue looping while the left and right pointers haven't crossed each other
  while (left < right) {
    // if the average of the values in arr at the left and right pointers equal 'avg', return true
    if ((arr[left] + arr[right]) / 2 === avg) {
      return true;
      // if the average of the values in arr at the left and right pointers is less than 'avg', move the left pointer to the right one index since a bigger 'left' number is needed to make 'avg' bigger
    } else if ((arr[left] + arr[right]) / 2 < avg) {
      left++;
      // if the average of the values in arr at the left and right pointers is greater than 'avg', move the right pointer to the left one index since a smaller 'right' number is needed to make 'avg' smaller
    } else {
      right--;
    }
  }
  // if no two numbers in 'arr' average to 'avg', return false
  return false;
}
