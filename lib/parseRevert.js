/**
 * Parses a revert so that the message contains only the revert reason.
 * In other words, it trims "Error: Returned error: VM Exception while processing transaction: revert (revert message)"
 *
 * @param {Error} err - Error received
 * @return {string} - UTF-8 value.
 */
function parseRevert(err) {
  if (!(err instanceof Error)) {
    throw new Error('err was not an Error object');
  }
  const output = err;
  output.message = output.message.split('revert')[1].trim();
  return output;
}

module.exports = parseRevert;
