const RevertError = require('./RevertError');

/**
 * Parses error to check if it's a blockchain revert.
 * If it is, it throws a custom RevertError.
 * Otherwise, it returns the original error, unchanged.
 *
 * @param {Error} err - Error received
 * @return {Error} - Error with parsed message
 */
function throwRevert(err) {
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

module.exports = throwRevert;
