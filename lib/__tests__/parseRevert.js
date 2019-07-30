const parseRevert = require('../parseRevert');
const RevertError = require('../RevertError');

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
  expect(parseRevert(testObject)).toEqual(testObject);
});

it('should return a RevertError when given a blockchain revert', () => {
  const revertObject = new Error(
    'Error: Returned error: VM Exception while processing transaction: revert Sample Revert Message',
  );
  expect(parseRevert(revertObject)).toEqual(expect.any(RevertError));
});

it('should parse an error message to be "Revert: (revert message)', () => {
  const testObject = new Error(
    'Error: Returned error: VM Exception while processing transaction: revert Sample Revert Message',
  );
  expect(parseRevert(testObject).message).toBe('Revert: Sample Revert Message');
});

it('should return a RevertError even if there is no revert message', () => {
  const testObject = new Error(
    'Error: Returned error: VM Exception while processing transaction: revert',
  );
  expect(parseRevert(testObject)).toEqual(expect.any(RevertError));
});

it('should retain the original message if there is no revert message', () => {
  const testObject = new Error(
    'Error: Returned error: VM Exception while processing transaction: revert',
  );
  expect(parseRevert(testObject).message).toBe(
    'Error: Returned error: VM Exception while processing transaction: revert',
  );
});
