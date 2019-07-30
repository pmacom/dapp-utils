const utf8ToHex = require('../utf8ToHex');

it('should throw an error if passed something other than a string', () => {
  expect(() => utf8ToHex()).toThrow(TypeError);
  expect(() => utf8ToHex(undefined)).toThrow(TypeError);
  expect(() => utf8ToHex(null)).toThrow(TypeError);
  expect(() => utf8ToHex(false)).toThrow(TypeError);
  expect(() => utf8ToHex('')).not.toThrow(TypeError);
  expect(() => utf8ToHex('string')).not.toThrow(TypeError);
  expect(() => utf8ToHex({})).toThrow(TypeError);
  expect(() => utf8ToHex([])).toThrow(TypeError);
  expect(() => utf8ToHex(123)).toThrow(TypeError);
  expect(() => utf8ToHex(NaN)).toThrow(TypeError);
});

it('should convert to hex properly', () => {
  expect(utf8ToHex('asdfasdfasdfasdfasdfasdfasdfasdf')).toBe(
    '0x6173646661736466617364666173646661736466617364666173646661736466',
  );
});

it('should trim anything beyond 32 characters', () => {
  expect(utf8ToHex('asdfasdfasdfasdfasdfasdfasdfasdf')).toBe(
    '0x6173646661736466617364666173646661736466617364666173646661736466',
  );
  expect(utf8ToHex('asdfasdfasdfasdfasdfasdfasdfasdfasdf')).toBe(
    '0x6173646661736466617364666173646661736466617364666173646661736466',
  );
});

it('should pad bytes32 types to 66 characters', () => {
  expect(utf8ToHex('hello')).toHaveLength(66);
});
