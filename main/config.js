var path = require('path')
var argv = require('minimist')(process.argv.slice(2))

module.exports = {
  APP_NAME: 'Electron react todos',
  INDEX: 'file://' + path.resolve(__dirname, '..', 'dist', 'index.html'),
  DEBUG: argv.debug
}
