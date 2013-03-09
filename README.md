installall
==========

Download and install all published versions of a npm module. This can be useful in e.g. CI or benchmark systems, for 
example in [level-bench](https://github.com/ralphtheninja/level-bench), where we want to be able to benchmark all
published versions against each other and not just the latest released versus the one currently developed.

## Usage

Just require and install. The resulting array will give you the install path for each module which have their
release tags appended to the base module name. You should be able to call ```require(

```js
var install = require('installall')

install('levelup', function (err, result) {
  if (err) return console.log(err)
  console.log(result)
})
```

Gives the following output:

```bash
[ { path: '/home/magnus/src/installall/node_modules/levelup@0.0.0',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.0.0-1',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.0.1',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.0.2a',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.0.2',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.0.2-1',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.0.3',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.0.4',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.0.5',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.0.5-1',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.1.0',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.1.1',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.1.2',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.2.0',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.2.1',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.3.0',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.3.1',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.3.2',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.3.3',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.4.0',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.4.1',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.4.2',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.4.3',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.4.4',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.5.0-1',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.5.1',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.5.2',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.5.3',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.5.3-1',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.5.4',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.6.0-rc1',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.6.0',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.6.1',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.6.2',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.7.0-b00',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.7.0-b01',
    status: 'installed' },
  { path: '/home/magnus/src/installall/node_modules/levelup@0.7.0-b02',
    status: 'installed' } ]
```

## Installation

```bash
npm install installall
```
