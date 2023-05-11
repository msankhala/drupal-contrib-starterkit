// .stylelintrc.js

module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  plugins: ['stylelint-scss'],
  rules: {
    'selector-class-pattern': '^[a-z][a-z0-9]*([a-z0-9-_]+)*$',
  },
};
