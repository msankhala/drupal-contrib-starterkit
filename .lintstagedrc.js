module.exports = {
  '*': ['secretlint'],
  '**/*.{js,yml,yaml}': ['prettier --write', 'eslint --fix'],
  '**/*{.scss,css}': [
    'prettier --write',
    'stylelint --fix --config .stylelintrc.js',
  ],
  '**/*.{html.twig,twig}': [
    '.ddev/commands/web/twig-cs-fixer --fix',
    '.ddev/commands/web/twig-cs-fixer',
  ],
  '**/*.{php,inc,install,module,test,profile,theme}': [
    '.ddev/commands/web/phpcbf',
    '.ddev/commands/web/phpcs',
  ],
};
