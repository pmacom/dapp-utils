const RevertError = require('./RevertError');

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

  const revertMatch = err.message.match(/revert ?(.+)?/);

  // If 'revert' does not appear in the log
  if (!revertMatch) {
    return err;
  }

  const revertMessage = revertMatch[1];

  const output = new RevertError(revertMessage ? `Revert: ${revertMessage}` : err.message);
  if (err.stack) {
    output.stack = err.stack;
  }

  return output;
}

module.exports = parseRevert;
