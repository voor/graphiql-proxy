module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
  },
  env: {
    mocha: true,
    node: true,
    es6: true
  },
  plugins: ['prettier', 'chai-friendly'],
  extends: ['standard', 'prettier'],
  rules: {
    camelcase: 0,
    'prettier/prettier': 'error',
    'prefer-promise-reject-errors': 0,
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2
  },
};
