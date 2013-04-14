var installall = require('../')

installall('levelup', '/tmp/foo', function (err, modules) {
  if (err) return console.log(err)
  modules.forEach(function (module) {
    console.log('installed:', module)
  })
})
