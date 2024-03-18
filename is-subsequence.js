/**
 *  This function takes in two strings and checks whether the characters in the first string
 *  appear somewhere in the second string, without their order changing.
 *
 */

function isSubsequence(str1, str2) {
  // set pointers at index of 0 for both strings
  let str1Idx = 0;
  let str2Idx = 0;

  // continue looping while str2Idx is less than the length of str2
  while (str2Idx < str2.length) {
    // if the value in str2 at str2Idx equals the value in str1 at str1Idx move the str1 pointer one index to the right
    if (str2[str2Idx] === str1[str1Idx]) {
      str1Idx++;
    }

    // move the str2 pointer one index to the right after checking the above
    str2Idx++;

    // if after checking all of the characters in str1 (str1Idx pointer is at the end of str1)
    if (str1Idx === str1.length) {
      return true;
    }
  }
  // if str2 does not include the characters in order of str1 then return false
  return false;
}
