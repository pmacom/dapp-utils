/**
 * Convert a number without (or with decimals) to a decimal number. Typically
 * used to reverse a `fromDecimal` operation that was done to help use a value
 * in solidity.
 *
 * For instance, if you have a currency value with decimals that was converted
 * with `fromDecimal` before being sent to Solidity, you can use this method
 * to convert it back to the original number, being careful to use the same
 * precision that was used on the way into solidity:
 *
 * ```
 * toDecimal(10263579, 6) // 10.263579
 *
 * toDecimal(102635790000, 10) // 10.263579
 * ```
 *
 * @param {number|string} value - Decimal number.
 * @param {number} [precision] - Number of decimal places to divide by (i.e.
 *                               precision of 2 converts 522 to 5.22).
 * @return {number} - Integer number.
 */
function toDecimal(value, precision = 2) {
  if (!value) return value;

  const divideBy = 10 ** precision;
  return value / divideBy;
}

module.exports = toDecimal;
