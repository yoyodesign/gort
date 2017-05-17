[![Build status](https://travis-ci.org/yoyodesign/gort.svg?branch=develop)](https://travis-ci.org/yoyodesign/gort)
[![NPM version](https://badge.fury.io/js/yoyo-gort.svg)](https://badge.fury.io/js/yoyo-gort)

# Gort

Gort not included.

## Development

### Dependencies

* Node 6.2.0
* Yarn 0.21.3

### Installation

1. Run `yarn` to install.

### Running tests

Run `yarn test` to run the linter followed by the unit tests.

#### Linter

Run `yarn lint` to run the linter.

#### Unit tests

Run `yarn unit` to run unit tests.

It is also possible to run specific unit tests by running `yarn unit -- --grep {string}` (where `{string}` matches the description of test or assertion you want to run).

e.g. `yarn unit -- --grep breakpoint`

### Documentation

Run `yarn docs` to generate documentation (located at `/docs`).
