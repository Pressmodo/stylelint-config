Pressmodo Stylelint Config
=====================

In order to improve both our efficiency and consistency, we need to standardize what we use and how we use it. This repository contains Pressmodo's standard configuration for [Stylelint](https://github.com/stylelint/stylelint), our preferred stylesheet linter.

## Dependencies

1. [Node & NPM](https://www.npmjs.com/get-npm) - 3rd party dependencies are managed through NPM, so you will need that installed globally
2. [Stylelint](https://stylelint.io/) - as this is a config extention for Stylelint, you will need Stylelint installed in your main project in order for it to work.

## Installation

First, install Stylelint:

```
// NPM
npm install stylelint --save-dev

// Yarn
yarn add stylelint
```

Then install the Pressmodo Stylelint config:

```
// NPM
npm install pressmodo/stylelint-config --save-dev
```

## Usage

Add the following to your `.stylelintrc` file:

```js
{
  "plugins": [
    "pressmodo/stylelint-config"
  ]
}

```

## Autofixing

Certain rules / violations can be fixed automatically using the `--fix` flag via the command line.
To ensure that Stylelint fixes what it can, you can run:

```
stylelint path/to/css/file.css --fix
```
