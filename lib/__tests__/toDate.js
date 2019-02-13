const cases = require('jest-in-case');
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

  cases(
    'should create a valid date object',
    opts => {
      expect(toDate(opts.timestamp)).toEqual(new Date(opts.dateString));
    },
    [
      {
        name: '1301074225 --> 2011-03-25T17:30:25.000Z',
        timestamp: 1301074225,
        dateString: '2011-03-25T17:30:25.000Z',
      },
      {
        name: '1301074225 as a string -> 2011-03-25T17:30:25.000Z',
        timestamp: '1301074225',
        dateString: '2011-03-25T17:30:25.000Z',
      },
      {
        name: '1561982613 --> 2019-07-01T12:03:33.000Z',
        timestamp: 1561982613,
        dateString: '2019-07-01T12:03:33.000Z',
      },
      {
        name: '1451052306 --> 2015-12-25T14:05:06.000Z',
        timestamp: 1451052306,
        dateString: '2015-12-25T14:05:06.000Z',
      },
      {
        name: '917911085 --> 1999-02-01T23:18:05.000Z',
        timestamp: 917911085,
        dateString: '1999-02-01T23:18:05.000Z',
      },
    ],
  );
});
