const web3Utils = require('web3-utils');

/**
 * Convert UTF-8 value to hex.
 *
 * @param {string} utf8Value - UTF-8 value.
 * @return {string} - Hex value.
 */
function utf8ToHex(utf8Value) {
  if (!utf8Value) return utf8Value;

  return web3Utils.utf8ToHex(utf8Value).substring(0, 66);
}

module.exports = utf8ToHex;
