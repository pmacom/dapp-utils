/**
 * Convert unix timestamp value to js date.
 *
 * @param {number|string} timestamp - Unix timestamp.
 * @return {Date} - JS date object.
 */
function toDate(timestamp) {
  if (
    !(typeof timestamp === 'number' || (typeof timestamp === 'string' && !timestamp.trim() === ''))
  ) {
    throw new TypeError('Received something other than a number or numeric string');
  }

  const parsedNumber = Number(timestamp);
  // Check for non-numeric strings
  if (parsedNumber === null || Number.isNaN(parsedNumber)) {
    throw new TypeError('Received something other than a number or numeric string');
  }

  if (parsedNumber < 0) {
    throw new RangeError('Cannot parse negative unix timestamps');
  }

  return new Date(parsedNumber * 1000);
}

module.exports = toDate;
