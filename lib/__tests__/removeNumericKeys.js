const removeNumericKeys = require('../removeNumericKeys');

it('should throw an error if passed a non-error object', () => {
  expect(() => removeNumericKeys()).toThrow(TypeError);
  expect(() => removeNumericKeys(undefined)).toThrow(TypeError);
  expect(() => removeNumericKeys(null)).toThrow(TypeError);
  expect(() => removeNumericKeys(false)).toThrow(TypeError);
  expect(() => removeNumericKeys('')).toThrow(TypeError);
  expect(() => removeNumericKeys('string')).toThrow(TypeError);
  expect(() => removeNumericKeys({})).not.toThrow(TypeError);
  expect(() => removeNumericKeys([])).toThrow(TypeError);
  expect(() => removeNumericKeys(123)).toThrow(TypeError);
  expect(() => removeNumericKeys(NaN)).toThrow(TypeError);
});

it('should strip numeric keys out of an object', () => {
  const testObject = {
    0: '01-03-2019',
    date: '01-03-2019',
    1: 'Test value',
    name: 'Test value',
    2: 15,
    age: 15,
    '3': 'String number',
    stringNumber: 'String number',
  };
  const expectedResult = {
    date: '01-03-2019',
    name: 'Test value',
    age: 15,
    stringNumber: 'String number',
  };
  expect(removeNumericKeys(testObject)).toEqual(expectedResult);
});
