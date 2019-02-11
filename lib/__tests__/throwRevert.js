const throwRevert = require('../throwRevert');
const RevertError = require('../RevertError');

describe('parseRevert', () => {
  it('should throw an error if passed a non-error object', () => {
    expect(() => throwRevert()).toThrow(TypeError);
    expect(() => throwRevert(undefined)).toThrow(TypeError);
    expect(() => throwRevert(null)).toThrow(TypeError);
    expect(() => throwRevert(false)).toThrow(TypeError);
    expect(() => throwRevert('')).toThrow(TypeError);
    expect(() => throwRevert("Error: This isn't an Error object")).toThrow(TypeError);
    expect(() => throwRevert({})).toThrow(TypeError);
    expect(() => throwRevert([])).toThrow(TypeError);
    expect(() => throwRevert(123)).toThrow(TypeError);
    expect(() => throwRevert(NaN)).toThrow(TypeError);
  });

  it("should return the original error if it's not a revert error", () => {
    const testObject = new Error('This is another type of error');
    expect(throwRevert(testObject)).toEqual(expect.any(Error));
    expect(throwRevert(testObject).message).toBe('This is another type of error');
  });

  it('should return a RevertError when given a blockchain revert', () => {
    const revertObject = new Error(
      'Error: Returned error: VM Exception while processing transaction: revert Sample Revert Message',
    );
    expect(throwRevert(revertObject)).toEqual(expect.any(RevertError));
  });

  it('should parse an error message to only the revert message', () => {
    const testObject = new Error(
      'Error: Returned error: VM Exception while processing transaction: revert Sample Revert Message',
    );
    expect(throwRevert(testObject).message).toBe('Revert: Sample Revert Message');
  });

  it('should return a RevertError even if there is no revert message', () => {
    const testObject = new Error(
      'Error: Returned error: VM Exception while processing transaction: revert',
    );
    expect(throwRevert(testObject)).toEqual(expect.any(RevertError));
  });

  it('should retain the original message if there is no revert message', () => {
    const testObject = new Error(
      'Error: Returned error: VM Exception while processing transaction: revert',
    );
    expect(throwRevert(testObject).message).toBe(
      'Error: Returned error: VM Exception while processing transaction: revert',
    );
  });
});
