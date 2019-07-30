const cases = require('jest-in-case');
const toDecimal = require('../toDecimal');

it('should throw an error if passed something other than a Number or a numeric string', () => {
  expect(() => toDecimal()).toThrow(TypeError);
  expect(() => toDecimal(undefined)).toThrow(TypeError);
  expect(() => toDecimal(null)).toThrow(TypeError);
  expect(() => toDecimal(false)).toThrow(TypeError);
  expect(() => toDecimal('')).toThrow(TypeError);
  expect(() => toDecimal('string')).toThrow(TypeError);
  expect(() => toDecimal({})).toThrow(TypeError);
  expect(() => toDecimal([])).toThrow(TypeError);
  expect(() => toDecimal(123)).not.toThrow(TypeError);
  expect(() => toDecimal(NaN)).toThrow(TypeError);
});

cases(
  'should divide decimals appropriately',
  opts => {
    expect(toDecimal(opts.bigNumber, opts.precision)).toBe(opts.smallNumber);
  },
  [
    { name: '15000000 --> 150', smallNumber: 150, precision: 5, bigNumber: 15000000 },
    { name: '1230000000000 --> 123', smallNumber: 123, precision: 10, bigNumber: 1230000000000 },
    { name: '100 --> 100', smallNumber: 100, precision: 0, bigNumber: 100 },
  ],
);
