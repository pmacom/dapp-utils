const toDate = require('../toDate');

describe('toDate', () => {
  it("should throw an error if passed a value that's not a Number or numeric string", () => {
    expect(() => toDate()).toThrow(TypeError);
    expect(() => toDate(undefined)).toThrow(TypeError);
    expect(() => toDate(null)).toThrow(TypeError);
    expect(() => toDate(false)).toThrow(TypeError);
    expect(() => toDate('')).toThrow(TypeError);
    expect(() => toDate('string')).toThrow(TypeError);
    expect(() => toDate({})).toThrow(TypeError);
    expect(() => toDate([])).toThrow(TypeError);
    expect(() => toDate(123)).not.toThrow(TypeError);
    expect(() => toDate(NaN)).toThrow(TypeError);
  });

  it('should throw an error if passed a negative number', () => {
    expect(() => toDate(-1)).toThrow(RangeError);
  });

  it('should create a valid date object', () => {
    expect(toDate(1301074225)).toEqual(new Date('2011-03-25T17:30:25.000Z'));
    expect(toDate(1561982613)).toEqual(new Date('2019-07-01T12:03:33.000Z'));
    expect(toDate(1451052306)).toEqual(new Date('2015-12-25T14:05:06.000Z'));
    expect(toDate(917911085)).toEqual(new Date('1999-02-01T23:18:05.000Z'));
  });
});
