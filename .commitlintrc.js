module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', [
      'toDecimal',
      'fromDecimal',
      'hexToUtf8',
      'utf8ToHex',
      'toDate',
      'fromDate',
      'removeNumericKeys',
      'parseRevert',
    ]],
    'scope-case': [2, 'always', 'camel-case'],
  },
};
