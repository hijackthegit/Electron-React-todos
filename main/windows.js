const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const ipcMain = electron.ipcMain
const config = require('./config')

const list = []

const windowConfig = (id)=>{
    return [
        'todo '+id,
        `${config.APP_NAME} - board ` + id,
        config.INDEX,
        false,
        {
            'width': 800,
            'height': 450,
            'position': [100+20*id,50+20*id],
            // 'layout': 'simple',
            'showDevTools': false,
            'resizable': true
        }
    ]
}

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
    win.webContents.send('id', id)
  })

  win.on('closed', function () {
    destroy(win)
  })

    ipcMain.on('content-changes', (event, args)=>{
        console.log('content changes ', args);
        switch(args.type){
            case 'ADD_TODO':
                event.sender.send('add-todo', args.text);
                break;
            case 'REMOVE_TODO':
                event.sender.send('remove-todo', args);
                break;
            default:
                break;
        }
    })
}

function destroy (win) {
  const i = list.indexOf(win)
  if (i > -1) list.splice(i, 1)
  win = null
}

module.exports = { list, create, destroy, windowConfig }
