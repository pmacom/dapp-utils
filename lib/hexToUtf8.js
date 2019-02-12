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

  // TODO: Switch back to hexToUtf8 after my PR gets merged back.
  return web3Utils.hexToString(hexValue).replace(/\0/g, '');
}

module.exports = hexToUtf8;
