/**
 * Convert js date object to unix timestamp.
 *
 * @param {Date} date - JS date object.
 * @return {number} - Unix timestamp.
 */
function fromDate(date) {
  if (
    !date ||
    !(date instanceof Date) ||
    (typeof date.getTime === 'function' && Number.isNaN(date.getMonth())) ||
    date.getTime() < 0
  ) {
    throw new TypeError(`${date} is not a valid Date object`);
  }

  return date.getTime() / 1000;
}

module.exports = fromDate;
