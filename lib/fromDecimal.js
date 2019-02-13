const isValidNumber = require('./isValidNumber');

/**
 * Convert number with (or without) decimals to an integer, to make it work
 * with solidity. Floats not supported in Solidity, so this can be used to
 * remove decimals from a JS number.
 *
 * NOTE: This will round the number to ensure it returns an integer, so the
 * precision provided is IMPORTANT. If you have a number that might contain up
 * to 10 decimal places and you want to keep it accurate, you should pass a
 * precision of 10.
 *
 * For instance, if you have a currency that you want to send,
 * convert it before sending:
 *
 * ```
 * fromDecimal(10.50) // 1050
 *
 * fromDecimal(10.50, 5) // 1050000
 *
 * fromDecimal(10.50, 1) // 105
 *
 * // bad
 * // rounding occurs so be sure to use the correct precision
 * fromDecimal(10.51, 1) // 105
 * fromDecimal(10.59, 1) // 106
 * ```
 *
 * Then, if & when that value is returned from solidity, you can use `toDecimal`
 * to convert it back to the original number, being careful to use the same
 * precision that was used on the way into solidity.
 *
 * @param {number|string} value - Decimal number.
 * @param {number} [precision] - Number of decimal places to multiply by (i.e.
 *                               precision of 2 converts 5.22 to 522).
 * @return {number} - Integer number.
 */
function fromDecimal(value, precision = 2) {
  if (!isValidNumber(value)) {
    throw new TypeError('Received something other than a valid number or numeric string');
  }

  const multiplyBy = 10 ** precision;

  // TODO: Do we want to round or truncate? What is more obvious?
  return Math.round(value * multiplyBy);
}

module.exports = fromDecimal;
