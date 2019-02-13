const cases = require('jest-in-case');
const hexToUtf8 = require('../hexToUtf8');

describe('hexToUtf8', () => {
  it('should throw an error if passed something other than a string', () => {
    expect(() => hexToUtf8()).toThrow(TypeError);
    expect(() => hexToUtf8(undefined)).toThrow(TypeError);
    expect(() => hexToUtf8(null)).toThrow(TypeError);
    expect(() => hexToUtf8(false)).toThrow(TypeError);
    expect(() => hexToUtf8('')).not.toThrow(TypeError);
    expect(() => hexToUtf8('string')).not.toThrow(TypeError);
    expect(() => hexToUtf8({})).toThrow(TypeError);
    expect(() => hexToUtf8([])).toThrow(TypeError);
    expect(() => hexToUtf8(123)).toThrow(TypeError);
    expect(() => hexToUtf8(NaN)).toThrow(TypeError);
  });

  it('should trim any null characters at the end', () => {
    expect(hexToUtf8('0x617364660000000000000000000000')).toBe('asdf');
  });

  cases(
    'should convert hex to utf8',
    opts => {
      expect(hexToUtf8(opts.hex)).toBe(opts.string);
    },
    [
      {
        name: 'One asdf',
        hex: '0x61736466',
        string: 'asdf',
      },
      {
        name: 'Full 32 bytes of asdf',
        hex: '0x6173646661736466617364666173646661736466617364666173646661736466',
        string: 'asdfasdfasdfasdfasdfasdfasdfasdf',
      },
      {
        name: 'Only 0x',
        hex: '0x',
        string: '',
      },
      {
        name: 'One byte',
        hex: '0x61',
        string: 'a',
      },
    ],
  );
});
