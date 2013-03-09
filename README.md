installall
==========

Download and install all published versions of a npm module. This can be useful in e.g. CI or benchmark systems, for 
example in [level-bench](https://github.com/ralphtheninja/level-bench), where we want to be able to benchmark all
published versions against each other and not just the latest released versus the one currently developed.

## Usage

Just require and install. The resulting array will give you the install path for each module which have their
release tags appended to the base module name.

```js
var installall = require('installall')
installall('levelup', function (err, modules) {
  console.log(err || modules)
})
```

Gives the following output:

```bash
[ { path: '/home/magnus/src/installall/node_modules/levelup@0.0.0',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.0.0-1',
    status: 'installed' },
    ...
  { path: '/home/magnus/src/installall/node_modules/levelup@0.7.0-b01',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.7.0-b02',
    status: 'installed' } ]
```

The ```status``` property for each module is set to either ```installed``` or ```failed```.

A little more useful scenario than just printing out all the modules is to try and require each of them to perform some tests like benchmarks or just simple sanity checks to make sure that everything can be installed and loaded without problems:

```js
var installall = require('installall')
installall('somemodule', function (err, modules) {
  modules.forEach(function (module) {
    if (module.status == 'installed') {
      try {
        var foo = require(module.path)
        // Do stuff with foo ..
      } catch (err) {
        console.log('Failed to require', module.path)
      }
    } else {
      console.log('Failed to install', module.path)
    }
  })
})
```

## Installation

```bash
npm install installall
```

## Licence

MIT