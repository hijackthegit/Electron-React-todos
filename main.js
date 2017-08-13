const electron = require('electron')
const app = electron.app
const windows = require('./main/windows')

const windowManager = require('electron-window-manager')

app.on('ready', function () {
    try{

        windowManager.init({
            devMode: false,
            resizable: true
        })
        windowManager.setDefaultSetup({'width': 800, 'height': 650, 'position': 'right'})
        let todo1 = windowManager.createNew(...windows.windowConfig(1)).open()
        let todo2 = windowManager.createNew(...windows.windowConfig(2)).open()
        let todo3 = windowManager.createNew(...windows.windowConfig(3)).open()
    }catch (e){
        console.log(e)
    }
    // windows.create(1)
    // windows.create(2)
    // windows.create(3)
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
    if (windows.list.length === 0) windows.create()
})
