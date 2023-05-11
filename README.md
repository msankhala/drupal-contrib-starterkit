# Drupal Contrib Starterkit

If you want to contribute to Drupal modules and themes, this starterkit is for you. It provides all the necessary tools to get started with contributing to Drupal and ensures that you follow the Drupal coding standards. By using this starterkit, you'll have a running Drupal site with all the required tools for development. All you need to do is copy this repository and run a few commands. You can change the project's name in the `.ddev/config.yaml` file and update the Drupal version by changing the `drupal/core-recommended` version in the `composer.json` file and running the `ddev composer install` command. Available Drupal versions are listed on this page: https://github.com/drupal/core-recommended/tags. With this starterkit, you can start contributing to Drupal projects without worrying about setting up a development environment from scratch.

## Requirements

1. [Colima](https://smallsharpsoftwaretools.com/tutorials/use-colima-to-run-docker-containers-on-macos/) or Docker Desktop
1. [ddev](https://ddev.readthedocs.io/en/stable/)

## Getting Started

1. Clone this repository `git clone https://github.com/msankhala/drupal-contrib-starterkit.git`
1. Run `ddev start`
1. Run `ddev composer install`
1. Run `ddev nvm install stable`
1. Run `ddev npm install`
1. Run `ddev drush site:install --account-name=admin --account-pass=admin -y`

## Precommit hooks

This starterkit provides the precommit hooks that will run each time you try to commit in this repository. The precommit hooks will run the following commands based on the file extensions.

1. secretlint
1. prettier --write
1. eslint --fix
1. stylelint --fix
1. twig-cs-fixer --fix
1. phpcbf
1. phpcs

## Using precommit hooks for custom modules and themes

For any module or theme that you want to contribute to, you can use the precommit hooks provided by this starterkit.

1. First clone the module or theme in the `docroot/modules/custom` or `docroot/themes/custom` directory.
1. Then run `git config core.hooksPath ../../../../.husky` command in the module or theme directory. This will set the custom module or theme to use the precommit hooks provided by this starterkit.

```bash
git config core.hooksPath ../../../../.husky
```

## Tools

1. Husky
1. Lint-staged
1. PHP Code Sniffer
1. PHP Code Beautifier
1. EsLint
1. StyleLint
1. SecretLint
1. Prettier
1. Twig-cs-fixer

## composer require modules in comopser.json

1. [Acquia blt](https://github.com/acquia/blt)
1. [Admin Toolbar](https://www.drupal.org/project/admin_toolbar)
1. [Config split](https://www.drupal.org/project/config_split)

## composer require-dev modules in comopser.json

1. [Coder](https://www.drupal.org/project/coder)
1. [Devel](https://www.drupal.org/project/devel)
1. [Drush](https://github.com/drush-ops/drush)
1. [Drupal Check](https://github.com/mglaman/drupal-check)

## Useful Vscode extensions

1. [PHP Intelephense](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client)
1. [PHP Sniffer & Beautifier](https://marketplace.visualstudio.com/items?itemName=ValeryanM.vscode-phpsab)
1. [Drupal Check](https://marketplace.visualstudio.com/items?itemName=bbeversdorf.drupal-check)
1. [PHP Debug](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug)

## Installing Specific Node version inside the web container

Ddev has pre-installed nvm. You can use nvm to install any node version you want. For example, if you want to install node version 18.13.0, you can run the following command:

Install node version 18.13.0

```bash
ddev nvm install 18.13.0
```

List the installed node versions

```bash
ddev nvm ls
```
