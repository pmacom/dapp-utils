const web3Utils = require('web3-utils');

/**
 * Convert UTF-8 value to hex.
 *
 * @param {string} utf8Value - UTF-8 value.
 * @return {string} - Hex value.
 */
function utf8ToHex(utf8Value) {
  if (typeof utf8Value !== 'string') {
    throw new TypeError('Received something other than a string');
  }

  return web3Utils.utf8ToHex(utf8Value).substring(0, 66);
}

module.exports = utf8ToHex;
