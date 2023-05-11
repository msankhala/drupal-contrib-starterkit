// @See available rules https://denar90.github.io/eslint.github.io/docs/rules/
module.exports = {
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:yml/recommended',
  ],
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    Drupal: true,
    drupalSettings: true,
    drupalTranslations: true,
    jQuery: true,
    _: true,
    Cookies: true,
    Backbone: true,
    Modernizr: true,
    loadjs: true,
    Popper: true,
    Shepherd: true,
    Sortable: true,
    once: true,
    CKEDITOR: true,
    CKEditor5: true,
    tabbable: true,
    dataLayer: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'consistent-return': ['off'],
    'no-underscore-dangle': ['off'],
    'max-nested-callbacks': ['warn', 3],
    'import/no-mutable-exports': ['warn'],
    'no-plusplus': [
      'warn',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-param-reassign': ['off'],
    'no-prototype-builtins': ['off'],
    'valid-jsdoc': [
      'warn',
      {
        prefer: {
          returns: 'return',
          property: 'prop',
        },
        requireReturn: false,
      },
    ],
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'none', ignoreRestSiblings: false },
    ],
    'operator-linebreak': [
      'error',
      'after',
      { overrides: { '?': 'ignore', ':': 'ignore' } },
    ],
    'yml/indent': ['error', 2],
    'func-names': ['warn', 'as-needed', { generators: 'as-needed' }],
    'object-shorthand': ['warn', 'properties'],
  },
};
