var npm    = require('npm')
var rimraf = require('rimraf')
var async  = require('async')
var fs     = require('fs')
var path   = require('path')
var mkdirp = require('mkdirp')

module.exports = function (module, targetDir, installedCb) {
  installedCb = installedCb || function noOp() {}

  mkdirp.sync(targetDir)
  mkdirp.sync(modulesFolder())

  var installed = []

  npm.load({}, function (err, npm) {
    if (err) return installedCb(err)
    npm.commands.info([module], function (err, info) {
      if (err) return installedCb(err)
      rimraf.sync(downloadFolder())
      var blob = Object.keys(info)[0]
      var versions = info[blob].versions
      if (Array.isArray(versions)) {
        async.forEachSeries(versions, install, function (err) {
          if (err) return installedCb(err)
          installedCb(null, installed)
        })
      } else {
        installedCb(new Error('Invalid format on npm meta data'))
      }
    })
  })

  function install(version, callback) {
    var moduleVersion = module + '@' + version
    var target = path.join(targetDir, moduleVersion)
    fs.exists(target, function (exists) {
      if (exists) {
        installed.push({ version: version, path: target})
        return callback(null)
      }
      console.log('\n============== INSTALLING (%s) ==============\n', version)
      npm.commands.install([ version ], function (err) {
        if (err) {
          callback(null)
        } else {
          fs.rename(downloadFolder(), target, function (err) {
            if (err) return callback(err)
            installed.push({ version: version, path: target})
            callback(null)
          })
        }
      })
    })
  }

  function downloadFolder() { return path.join(modulesFolder(), module) }
  function modulesFolder() { return path.join(process.cwd(), '/node_modules/') }
}
