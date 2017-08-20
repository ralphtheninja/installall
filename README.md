# installall

Download and install all published versions of a npm module.

[![Dependency Status](https://david-dm.org/ralphtheninja/installall.png)](https://david-dm.org/ralphtheninja/installall) [![Build Status](https://travis-ci.org/ralphtheninja/installall.svg?branch=master)](https://travis-ci.org/ralphtheninja/installall)

## Usage

Just require and install. The resulting array will give you the install path for each module which have their
release tags appended to the base module name.

```js
var installall = require('installall')
installall('levelup', '/tmp/foo', function (err, modules) {
  console.log(err || modules)
})
```

Gives the following output:

```bash
[ { version: '0.0.0', path: '/tmp/foo/levelup@0.0.0' },
  { version: '0.0.0-1', path: '/tmp/foo/levelup@0.0.0-1' },
    ...
  { version: '0.7.0', path: '/tmp/foo/levelup@0.7.0' } ]
```

A little more useful scenario than just printing out all the modules is to try and require each of them to perform some tests like benchmarks or just simple sanity checks to make sure that everything can be installed and loaded without problems:

```js
var installall = require('installall')
installall('somemodule', __dirname, function (err, modules) {
  modules.forEach(function (module) {
    var foo = require(module.path)
    // Do stuff with foo ..
  })
})
```

## Installation

```bash
npm install installall
```

## Licence

MIT
