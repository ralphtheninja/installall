var npm = require('npm')
var rimraf = require('rimraf')
var async = require('async')
var fs = require('fs')
var path = require('path')

module.exports = function (module, callback) {
  callback = callback || console.log

  var installed = []

  npm.load({}, function (err, npm) {
    if (err) return callback(err)
    npm.commands.info([module], function (err, info) {
      if (err) return callback(err)
      rimraf.sync(downloadFolder())
      var blob = Object.keys(info)[0]
      var versions = info[blob].versions
      if (Array.isArray(versions)) {
        versions = versions.map(function (v) { return module + '@' + v})
        async.forEachSeries(versions, install, function (err) {
          if (err) return callback(err)
          callback(null, installed)
        })
      } else {
        callback(new Error('Invalid format on npm meta data'))
      }
    })
  })

  function install(version, callback) {
    var target = path.join(modulesFolder(), version)
    fs.exists(target, function (exists) {
      if (exists) {
        installed.push({ path: target, status: 'installed'})
        return callback(null)
      }
      console.log('\n============== INSTALLING (%s) ==============\n', version)
      npm.commands.install([ version ], function (err) {
        if (err) {
          installed.push({ path: target, status: 'failed'})
          callback(null)
        } else {
          fs.renameSync(downloadFolder(), target)
          installed.push({ path: target, status: 'installed'})
          callback(null)
        }
      })
    })
  }

  function downloadFolder() { return path.join(modulesFolder(), module) }
  function modulesFolder() { return path.join(__dirname, '/node_modules/') }
}
