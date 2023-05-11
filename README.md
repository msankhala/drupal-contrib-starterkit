# Drupal Contrib Starterkit

This is a starterkit to help you contribute to Drupal modules and themes. This starterkit provides all the tools you need to get started with contributing to Drupal and it ensure that you follow the Drupal coding standards. This will give you a running drupal site with all the tools you need.

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

Ddev has pre-installed nvm. You can use nvm to install any node version you want. For example, if you want to install node version 14.17.0, you can run the following command:

```bash
ddev nvm ls
```

Install node version 18.13.0

```bash
ddev nvm install 18.13.0
```
