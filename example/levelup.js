var installall = require('../')
var os = require('os')
var path = require('path')
var levels = path.join(os.tmpdir(), 'level-bench')

installall('levelup', levels, function (err, modules) {
  if (err) return console.log(err)
  console.log(modules)
})
