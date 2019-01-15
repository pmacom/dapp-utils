/**
 * Convert a number without (or with decimals) to a decimal number. Typically
 * used to reverse a `fromDecimal` operation that was done to help use a value
 * in solidity.
 *
 * @param {number|string} value - Whole number.
 * @param {number} [precision] - Number of decimal places to decrease the number by.
 * @return {string} - Hex value.
 */
function toDecimal(value, precision = 2) {
  if (!value) return value;

  const divideBy = 10 ** precision;
  return value / divideBy;
}

module.exports = toDecimal;
