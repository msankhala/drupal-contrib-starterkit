module.exports = {
  '*': ['secretlint'],
  '**/*.{js,yml,yaml}': ['prettier --write', 'eslint --fix'],
  '**/*{.scss,css}': [
    'prettier --write',
    `stylelint --fix --config ${process.env.DDEV_COMPOSER_ROOT}/.stylelintrc.js`,
  ],
  '**/*.{html.twig,twig}': [
    `${process.env.DDEV_COMPOSER_ROOT}/.ddev/commands/web/twig-cs-fixer --fix`,
    `${process.env.DDEV_COMPOSER_ROOT}/.ddev/commands/web/twig-cs-fixer`,
  ],
  '**/*.{php,inc,install,module,test,profile,theme}': [
    `${process.env.DDEV_COMPOSER_ROOT}/.ddev/commands/web/phpcbf`,
    `${process.env.DDEV_COMPOSER_ROOT}/.ddev/commands/web/phpcs`,
  ],
};
