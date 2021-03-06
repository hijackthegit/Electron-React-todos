const {app, ipcMain} = require('electron')
const windows = require('./main/windows')
const _ = require('lodash')
const minimist = require('minimist') //looks like we have to include this for electron-builder: https://github.com/electron-userland/electron-packager/issues/527

app.on('ready', function () {
    let todoWindows = [
        windows.create(1),
        windows.create(2),
        windows.create(3)
    ]

    ipcMain.on('content-changes', (event, args)=>{
        todoWindows.map(win=>{
            //don't send back to sender
            if(win && !_.isEqual(event.sender,win.webContents)) {
                win.webContents.send('update-content', args)
            }
        })
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
    if (windows.list.length === 0) windows.create()
})
