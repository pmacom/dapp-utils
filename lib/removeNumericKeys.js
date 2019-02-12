/**
 * Utility method to remove numeric keys from an object.
 *
 * Event objects' returnValues consist of extra (numbered) keys that are
 * unnecessary. This function can be used to remove those keys.
 *
 * @param {object} obj - Plain object.
 * @return {object} - New object with any numeric keys removed.
 */
const removeNumericKeys = obj => {
  if (typeof obj !== 'object') {
    throw new TypeError('Received something other than an object');
  }
  if (Array.isArray(obj)) {
    throw new TypeError('Received an array');
  }

  const newObject = {};
  const validKeys = Object.keys(obj).filter(key => Number.isNaN(Number(key)));
  validKeys.forEach(key => {
    newObject[key] = obj[key];
  });
  return newObject;
};

module.exports = removeNumericKeys;
