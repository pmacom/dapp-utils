const toDecimal = require('../toDecimal');

describe('fromDecimal', () => {
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

  it('should divide decimals appropriately', () => {
    expect(toDecimal(15000000, 5)).toBe(150);
    expect(toDecimal(1230000000000, 10)).toBe(123);
    expect(toDecimal(100, 0)).toBe(100);
  });
});
