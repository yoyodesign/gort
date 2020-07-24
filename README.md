[![Build status](https://travis-ci.org/yoyodesign/gort.svg?branch=develop)](https://travis-ci.org/yoyodesign/gort)
[![NPM version](https://badge.fury.io/js/yoyo-gort.svg)](https://badge.fury.io/js/yoyo-gort)

# Gort

Gort not included.

## Documentation

[View the Gort documentation.](https://yoyodesign.github.io/gort/)

## Development

### Dependencies

- Node >=14.5.0
- NPM >=6.14.5

### Installation

1. Run `npm install` to install.

### Running tests

Run `npm test` to run the linter followed by the unit tests.

#### Linter

Run `npm run lint` to run the linter.

#### Unit tests

Run `npm run unit` to run unit tests.

It is also possible to run specific unit tests by running `npm run unit -- --grep {string}` (where `{string}` matches the description of test or assertion you want to run).

e.g. `npm run unit -- --grep breakpoint`

### Documentation

Run `npm run docs` to generate documentation (located at `/docs`).
