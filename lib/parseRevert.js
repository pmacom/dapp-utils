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
    throw new Error(
      'Error did not include the word "revert", are you sure this is a revert exception?',
    );
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
