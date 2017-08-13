const {app, ipcMain} = require('electron')
const windows = require('./main/windows')
const _ = require('lodash')

app.on('ready', function () {
    let todo1 = windows.create(1)
    let todo2 = windows.create(2)
    let todo3 = windows.create(3)


    ipcMain.on('content-changes', (event, args)=>{
        console.log('content changes ', event);
        [todo1,todo2,todo3].map(todo=>{
            if(_.differenceWith(event.sender, todo, _.isEqual)) {
                todo.webContents.send('update-content', args)
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
