/**
 * Given two positive integers, this function finds out if the two numbers have the same *frequency of digits.
 *
 */

// This function converts a number to a string and then for every 'digit' in numToString, add 'digit' to 'freq' with a value of 1 if it's not already in 'freq'. If 'digit' is already in 'freq', add 1 to its value
function freqCounter(num) {
  let freq = {};
  // convert num to a string so can loop over every digit in num
  let numToString = num.toString();
  // for every digit in numToString, add 'digit' to 'freq' with a value of 1 if it's not already in 'freq'. If 'digit' is  already in 'freq', add 1 to its value
  for (let digit of numToString) {
    freq[digit] = freq[digit] + 1 || 1;
  }
  return freq;
}

// This function takes in 2 integers, calls the freqCounter functions on num1 and num2 returning 2 objects with keys equaling each digit in num1 and num2 and their values equaling the count of that digit in the number
function sameFrequency(num1, num2) {
  let num1Freq = freqCounter(num1);
  let num2Freq = freqCounter(num2);

  // for every key in the num1 object,
  for (let key in num1Freq) {
    // if 'key' in 'num2Freq' object doesn't have a value, return false (means 'key' is not in num2Freq object)
    if (!num2Freq[key]) {
      return false;
    }
    // if the value of 'key' in 'num1Freq' object doesn't equal the value of 'key' in 'num2Freq' object, return false (means frequency of digits are not the same between num1 and num2)
    else if (num1Freq[key] !== num2Freq[key]) {
      return false;
    }
  }
  // otherwise, return true
  return true;
}
