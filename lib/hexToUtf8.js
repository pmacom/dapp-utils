const web3Utils = require('web3-utils');

/**
 * Convert hex value to UTF-8.
 *
 * @param {string} hexValue - Hex value.
 * @return {string} - UTF-8 value.
 */
function hexToUtf8(hexValue) {
  if (typeof hexValue !== 'string') {
    throw new TypeError('Received something other than a string');
  }

  return web3Utils.hexToUtf8(hexValue).replace(/\0/g, '');
}

module.exports = hexToUtf8;
