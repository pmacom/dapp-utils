/**
 * Convert js date object to unix timestamp.
 *
 * @param {Date} date - JS date object.
 * @return {number} - Unix timestamp.
 */
function fromDate(date) {
  if (!date) return date;

  return date.getTime() / 1000;
}

module.exports = fromDate;
