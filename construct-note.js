/**
 * Build a Frequency Counter that returns an object with key/value pairs. The keys are the letters in 'str' and their values are the number of those specific letters in 'str'. i.e. for str='aabbcc', freq={a: 2, b: 2, c: 2}
 *
 */
function freqCounter(str) {
  let freq = {};
  // for every character in 'str'
  for (let char of str) {
    // check to see if 'char' exists in 'freq' object. If not, add it to 'freq' and set value to 1; otherwise, increase its value by 1
    freq[char] = freq[char] + 1 || 1;
  }
  return freq;
}

/**
 *  Execute two frequency counters. If any of the 'msg' characters are not found in the
 * 'ltrs' characters, or if there are not enough of them, return false. Otherwise return true.
 *
 */
function constructNote(msg, ltrs) {
  // execute function freqCounter with 'msg' and 'ltrs' as the inputs
  let msgFreq = freqCounter(msg);
  let ltrsFreq = freqCounter(ltrs);

  // for every char in msgFreq,
  for (let char in msgFreq) {
    // if 'char' in 'msgFreq' doesn't exist in 'ltrsFreq', return false
    if (!ltrsFreq[char]) {
      return false;
    }
    // if there are more of a specific 'char' in 'msgFreq' than in 'ltrsFreq', return false. That means there aren't enough of those 'chars' in 'ltrs' to create 'msg'
    if (msgFreq[char] > ltrsFreq[char]) {
      return false;
    }
  }
  return true;
}
