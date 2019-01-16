/**
 * Convert unix timestamp value to js date.
 *
 * @param {number|string} timestamp - Unix timestamp.
 * @return {Date} - JS date object.
 */
function toDate(timestamp) {
  if (!timestamp) return timestamp;

  return new Date(timestamp * 1000);
}

module.exports = toDate;
