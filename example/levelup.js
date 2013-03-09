var installall = require('../')

installall('levelup', function (err, result) {
  if (!err) {
    console.log(result)
  }
})
