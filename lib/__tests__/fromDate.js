const cases = require('jest-in-case');
const fromDate = require('../fromDate');

it('should throw an error if passed a non-date object', () => {
  expect(() => fromDate()).toThrow(TypeError);
  expect(() => fromDate(undefined)).toThrow(TypeError);
  expect(() => fromDate(null)).toThrow(TypeError);
  expect(() => fromDate(false)).toThrow(TypeError);
  expect(() => fromDate('')).toThrow(TypeError);
  expect(() => fromDate('string')).toThrow(TypeError);
  expect(() => fromDate({})).toThrow(TypeError);
  expect(() => fromDate([])).toThrow(TypeError);
  expect(() => fromDate(123)).toThrow(TypeError);
  expect(() => fromDate(NaN)).toThrow(TypeError);
});

it('should throw an error if passed a invalid-date object', () => {
  expect(() => fromDate(new Date('something'))).toThrow(TypeError);
  expect(() => fromDate(new Date('1969-03-25T17:30:25+00:00'))).toThrow(TypeError);
});

/**
 * Fake dates to use to test `fromDate()`. Key/value pairs are in the format of
 * date string -> expected unix timestamp.
 *
 * NOTE: Used https://www.unixtimestamp.com/ to generate timestamps from dates.
 */
const datesToTest = {
  '2011-03-25T17:30:25+00:00': 1301074225,
  '2019-07-01T12:03:33+00:00': 1561982613,
  '2015-12-25T14:05:06+00:00': 1451052306,
  '1999-02-01T23:18:05+00:00': 917911085,
  '2017-03-28T17:30:20+00:00': 1490722220,
  '1979-12-05T07:29:20+00:00': 313226960,
  '1971-03-30T03:03:03+00:00': 39150183,
  '2019-08-09T16:58:56.270Z': 1565369936,
  '2019-08-09T19:46:06.239Z': 1565379966,
};

cases(
  'should convert a valid JS date to a unix timestamp',
  opts => {
    expect(fromDate(new Date(opts.dateStr))).toBe(opts.timestamp);
  },
  Object.entries(datesToTest).map(([dateStr, timestamp]) => ({
    name: `${dateStr} --> ${timestamp}`,
    dateStr,
    timestamp,
  })),
);
