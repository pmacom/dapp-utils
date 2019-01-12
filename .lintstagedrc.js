module.exports = {
  '*.{json,md}': ['prettier --write', 'git add'],
  '*.js': ['prettier --write', 'eslint --fix', 'git add'],
};
