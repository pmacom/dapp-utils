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

  it('should multiply decimals appropriately', () => {
    expect(fromDecimal(150, 5)).toBe(15000000);
    expect(fromDecimal(123, 10)).toBe(1230000000000);
    expect(fromDecimal(100, 0)).toBe(100);
  });
});
