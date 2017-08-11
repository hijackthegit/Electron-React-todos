const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const ipcMain = electron.ipcMain
const config = require('./config')

const list = []

ipcMain.on('content-changes', (event, args)=>{
  console.log('content changes ', args)
})

function create (id) {
  const win = new BrowserWindow({
    title: config.APP_NAME,
    width: 800,
    height: 600,
    acceptFirstMouse: true
  })

  win.loadURL(config.INDEX)
  win.setTitle(`${config.APP_NAME} - board ` + id)
  win.setPosition(100+20*id,50+20*id)
  list.push(win)

  if (config.DEBUG) win.webContents.openDevTools()

  win.webContents.on('did-finish-load', function () {
    win.webContents.send('id', win.id)
  })

  win.on('closed', function () {
    destroy(win)
  })
}

function destroy (win) {
  const i = list.indexOf(win)
  if (i > -1) list.splice(i, 1)
  win = null
}

module.exports = { list, create, destroy }
