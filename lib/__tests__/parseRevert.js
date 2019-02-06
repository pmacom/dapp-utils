const parseRevert = require('../parseRevert');

describe('parseRevert', () => {
  it('should throw an error if passed a non-error object', () => {
    expect(() => parseRevert()).toThrow(Error);
    expect(() => parseRevert(undefined)).toThrow(Error);
    expect(() => parseRevert(null)).toThrow(Error);
    expect(() => parseRevert(false)).toThrow(Error);
    expect(() => parseRevert('')).toThrow(Error);
    expect(() => parseRevert("Error: This isn't an Error object")).toThrow(Error);
    expect(() => parseRevert({})).toThrow(Error);
    expect(() => parseRevert([])).toThrow(Error);
    expect(() => parseRevert(123)).toThrow(Error);
    expect(() => parseRevert(NaN)).toThrow(Error);
  });

  it('should return an Error object', () => {
    const revertObject = new Error(
      'Error: Returned error: VM Exception while processing transaction: revert Sample Revert Message',
    );
    expect(parseRevert(revertObject)).toEqual(expect.any(Error));
  });

  it('should parse an error message to only the revert message', () => {
    const testObject = new Error(
      'Error: Returned error: VM Exception while processing transaction: revert Sample Revert Message',
    );
    expect(parseRevert(testObject).message).toBe('Sample Revert Message');
  });
});
