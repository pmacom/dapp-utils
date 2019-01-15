/**
 * Convert number with (or without) possible decimals to number without
 * decimals, to make it work with solidity.
 *
 * @param {number|string} value - Decimal number.
 * @param {number} [precision] - Number of decimal places to increase the number.
 * @return {number} - Whole integer number.
 */
function fromDecimal(value, precision = 2) {
  if (!value) return value;

  const multiplyBy = 10 ** precision;
  return Math.round(value * multiplyBy);
}

module.exports = fromDecimal;
