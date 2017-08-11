const electron = require('electron')
const app = electron.app
const windows = require('./main/windows')

app.on('ready', function () {
    windows.create(1)
    windows.create(2)
    windows.create(3)
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
    if (windows.list.length === 0) windows.create()
})
