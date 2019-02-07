const parseRevert = require('../parseRevert');

describe('parseRevert', () => {
  it('should throw an error if passed a non-error object', () => {
    expect(() => parseRevert()).toThrow(TypeError);
    expect(() => parseRevert(undefined)).toThrow(TypeError);
    expect(() => parseRevert(null)).toThrow(TypeError);
    expect(() => parseRevert(false)).toThrow(TypeError);
    expect(() => parseRevert('')).toThrow(TypeError);
    expect(() => parseRevert("Error: This isn't an Error object")).toThrow(TypeError);
    expect(() => parseRevert({})).toThrow(TypeError);
    expect(() => parseRevert([])).toThrow(TypeError);
    expect(() => parseRevert(123)).toThrow(TypeError);
    expect(() => parseRevert(NaN)).toThrow(TypeError);
  });

  it("should return the original error if it's not a revert error", () => {
    const testObject = new Error('This is another type of error');
    expect(parseRevert(testObject).message).toBe('This is another type of error');
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

  it('should return the original error if there is no revert message', () => {
    const testObject = new Error(
      'Error: Returned error: VM Exception while processing transaction: revert',
    );
    expect(parseRevert(testObject).message).toBe(
      'Error: Returned error: VM Exception while processing transaction: revert',
    );
  });
});
