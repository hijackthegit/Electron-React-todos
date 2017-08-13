const {BrowserWindow} = require('electron')
const config = require('./config')

const list = []

function create (id) {
  const win = new BrowserWindow({
    title: config.APP_NAME,
    width: 800,
    height: 600,
    acceptFirstMouse: true
  })

  win.loadURL(config.INDEX)
  win.setTitle(`${config.APP_NAME} - board ` + id)
  win.setPosition(100+80*id,50+80*id)
  list.push(win)

  if (config.DEBUG) win.webContents.openDevTools()

  win.webContents.on('did-finish-load', function () {
    win.webContents.send('id', id)
  })

  win.on('closed', function () {
    destroy(win)
  })

    return win

}

function destroy (win) {
  const i = list.indexOf(win)
  if (i > -1) list.splice(i, 1)
  win = null
}

module.exports = { list, create, destroy }
