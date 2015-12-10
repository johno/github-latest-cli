# github-latest-cli [![Build Status](https://secure.travis-ci.org/johnotander/github-latest-cli.png?branch=master)](https://travis-ci.org/johnotander/github-latest-cli) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Get the latest tag for a repository on GitHub.

## Installation

```bash
npm i -g github-latest-cli
```

## Usage

```sh
$ github-latest

  Get the latest tag for a repository on GitHub

  Usage
    $ github-latest <user or org> <repo>

  Example
    $ github-latest johnotander pixyll
```

```
$ github-latest johnotander immutable-css
1.0.1
```

## Related

* <https://github.com/tmpvar/github-latest>

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
