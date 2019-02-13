const cases = require('jest-in-case');
const fromDecimal = require('../fromDecimal');

describe('fromDecimal', () => {
  it('should throw an error if passed something other than a Number or a numeric string', () => {
    expect(() => fromDecimal()).toThrow(TypeError);
    expect(() => fromDecimal(undefined)).toThrow(TypeError);
    expect(() => fromDecimal(null)).toThrow(TypeError);
    expect(() => fromDecimal(false)).toThrow(TypeError);
    expect(() => fromDecimal('')).toThrow(TypeError);
    expect(() => fromDecimal('string')).toThrow(TypeError);
    expect(() => fromDecimal({})).toThrow(TypeError);
    expect(() => fromDecimal([])).toThrow(TypeError);
    expect(() => fromDecimal(123)).not.toThrow(TypeError);
    expect(() => fromDecimal(NaN)).toThrow(TypeError);
  });

  cases(
    'should multiply decimals appropriately',
    opts => {
      expect(fromDecimal(opts.smallNumber, opts.precision)).toBe(opts.bigNumber);
    },
    [
      { smallNumber: 150, precision: 5, bigNumber: 15000000 },
      { smallNumber: 123, precision: 10, bigNumber: 1230000000000 },
      { smallNumber: 100, precision: 0, bigNumber: 100 },
    ],
  );
});
