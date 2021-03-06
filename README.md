# aurelia-logging-color

[![unstable][unstable-image]][unstable-url]
[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
![badge-size-es5-url]
![badge-size-es2015-url]

`ColorAppender` for [`aurelia-logging`](https://github.com/aurelia/logging).

## Why color

Logging is a great tool. But it is also heavily underutilized.
One major reason is that when we log a lot of stuff, we can quickly get overwhelmed by all those information.

`aurelia-logging` allows you to create different loggers for different part of your application, as fine grain as you wanted.

However, it still does not solve the issue above.

Coloring the log message helps you to pick the relevant information much easier.

## Usage

```ts
import { addAppender, setLevel, getLogger, logLevel } from 'aurelia-logging'
import { ColorAppender } from 'aurelia-logging-color'

addAppender(new ColorAppender())

// turn on logging (this example do it globally)
setLevel(logLevel.info)

const logger = getLogger('something')

logger.warn('Pretty Color')

const anotherLogger = getLogger('something else')

logger.info('Nother pretty color!')
```

Note that on windows 8 or below the constructor option is not in effect because there are not many color available.

## dependencies

- [`color-map`](https://github.com/unional/color-map)

## Contribute

```sh
# right after clone
npm install

# begin making changes
git checkout -b <branch>
npm run watch

# edit `webpack.config.es5.js` and `rollup.config.es2015.js` to exclude dependencies for the bundle if needed

# after making change(s)
git commit -m "<commit message>"
git push

# create PR
```

## Npm Commands

There are a few useful commands you can use during development.

```sh
# Run tests (and lint) automatically whenever you save a file.
npm run watch

# Run tests with coverage stats (but won't fail you if coverage does not meet criteria)
npm run test

# Manually verify the project.
# This will be ran during 'npm preversion' so you normally don't need to run this yourself.
npm run verify

# Build the project.
# You normally don't need to do this.
npm run build

# Run tslint
# You normally don't need to do this as `npm run watch` and `npm version` will automatically run lint for you.
npm run lint
```

Generated by [`generator-unional@0.9.1`](https://github.com/unional/unional-cli)

[unstable-image]: http://badges.github.io/stability-badges/dist/unstable.svg
[unstable-url]: http://github.com/badges/stability-badges
[npm-image]: https://img.shields.io/npm/v/aurelia-logging-color.svg?style=flat
[npm-url]: https://npmjs.org/package/aurelia-logging-color
[downloads-image]: https://img.shields.io/npm/dm/aurelia-logging-color.svg?style=flat
[downloads-url]: https://npmjs.org/package/aurelia-logging-color
[travis-image]: https://img.shields.io/travis/unional/aurelia-logging-color.svg?style=flat
[travis-url]: https://travis-ci.org/unional/aurelia-logging-color
[coveralls-image]: https://coveralls.io/repos/github/unional/aurelia-logging-color/badge.svg
[coveralls-url]: https://coveralls.io/github/unional/aurelia-logging-color
[badge-size-es5-url]: http://img.badgesize.io/unional/aurelia-logging-color/master/dist/aurelia-logging-color.es5.js.svg?label=es5_size
[badge-size-es2015-url]: http://img.badgesize.io/unional/aurelia-logging-color/master/dist/aurelia-logging-color.es2015.js.svg?label=es2015_size
