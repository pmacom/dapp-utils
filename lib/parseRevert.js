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

  if (!err.message.includes('revert')) {
    return err;
  }

  const output = copy(err);
  const splitMessage = output.message.split('revert');

  // splitMessage[1] is only whitespace
  // in other words, no revert message found
  if (!/\S/.test(splitMessage[1])) {
    return output;
  }

  output.message = splitMessage[1].trim();
  return output;
}

module.exports = parseRevert;
