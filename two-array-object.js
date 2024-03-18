/**
 * This function accepts two arrays of varying lengths, one array consists of keys and the second consists of values, and returns an object created from the keys and values. If there are not enough values, the rest of keys should have a value of null. If there not enough keys, the rest of the values should be ignored.
 *
 */

function twoArrayObject(keys, values) {
  let obj = {};

  //   check to see if 'keys' array is greater than 'values' array. Assign the keys without values values of null.
  //   Since need to assign keys that don't have values in 'values' array, cannot use the forEach loop since need to specifically assign those key values to null
  if (keys.length > values.length) {
    // loop as many times as the length of 'keys' since it is longer than 'values'
    for (let i = 0; i < keys.length; i++) {
      // if there is a value at values[i], assign key[i] = values[i]
      if (values[i]) {
        obj[keys[i]] = values[i];
      }
      // if there isn't a value at values[i], assign key[i]=null
      else {
        obj[keys[i]] = null;
      }
    }
  }
  // for keys.length < values.length and keys.length === values.length
  else {
    // loop over each key in 'keys' and add key with a value of values[i] to 'obj'
    keys.forEach((key, i) => (obj[key] = values[i]));
  }
  return obj;
}
