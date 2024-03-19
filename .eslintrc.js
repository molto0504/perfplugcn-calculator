'use strict';

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 12,
    requireConfigFile: false,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    "no-unused-vars": "warn",
    "eqeqeq": "error"
  }
};
