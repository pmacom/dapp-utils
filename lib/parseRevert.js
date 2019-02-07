const copy = require('utils-copy-error');

/**
 * Parses a revert so that the message contains only the revert reason.
 * In other words, it trims "Error: Returned error: VM Exception while processing transaction: revert (revert message)"
 *
 * @param {Error} err - Error received
 * @return {Error} - Error with parsed message
 */
function parseRevert(err) {
  if (!(err instanceof Error)) {
    throw new TypeError('err was not an Error object');
  }

  const revertMatch = err.message.match(/revert (.+)/);

  // revertMatch === null if 'revert' does not appear
  if (!revertMatch) {
    return err;
  }

  const output = copy(err);
  const revertMessage = revertMatch[1];

  output.message = `Revert: ${revertMessage}`;
  return output;
}

module.exports = parseRevert;
