/**
 * Checks to see if the input is either a valid Number or a numeric string.
 * @param {Number, String} input - value to check
 * @returns {Boolean}
 */
const isValidNumber = input => {
  if (typeof input === 'number') {
    if (Number.isNaN(input)) {
      return false;
    }
    return true;
  }

  if (typeof input === 'string') {
    if (input.trim() === '') {
      return false;
    }

    const parsedNumber = Number(input);
    if (parsedNumber === null || Number.isNaN(parsedNumber)) {
      return false;
    }
    return true;
  }
  return false;
};

module.exports = isValidNumber;
