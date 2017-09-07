var carbonate = require('carbonate')

var quiet = false

module.exports = function log (str) {
  if (quiet) return
  str = str || ''
  var values = [].slice.apply(arguments)
  values = values.slice(1)
  carbonate.log.apply(carbonate, [str].concat(values))
}

module.exports.error = function logError (str) {
  str = str || ''
  if (!str) return console.error('')
  var values = [].slice.apply(arguments).slice(1)
  const args = ['err!'].concat(values)
  const msg = carbonate.apply(carbonate, ['%s(red) ' + str].concat(args))
  console.error(msg)
}

module.exports.warn = function logWarn (str) {
  if (quiet) return
  str = str || ''
  if (!str) return console.warn('')
  var values = [].slice.apply(arguments).slice(1)
  var args = ['warn'].concat(values)
  var msg = carbonate.apply(carbonate, ['%s(yellow) ' + str].concat(args))
  console.warn(msg)
}

module.exports.info = function logInfo (str) {
  if (quiet) return
  str = str || ''
  if (!str) return console.info('')
  var values = [].slice.apply(arguments).slice(1)
  var args = ['info'].concat(values)
  var msg = carbonate.apply(carbonate, ['%s(blue) ' + str].concat(args))
  console.info(msg)
}

module.exports.quiet = function logQuiet (bool) {
  quiet = !!bool
}
