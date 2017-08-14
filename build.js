"use strict"

const builder = require("electron-builder")
const Platform = builder.Platform
const targetPlatform = 'WINDOWS' //MAC, LINUX

// Promise is returned
builder.build({
    targets: Platform[targetPlatform].createTarget(),
    config: {
        icon: './build/icon.ico',
        // target: 'portable'
    }
})
    .then(result=> {
        // handle result
        console.log(result)
    })
    .catch(error => {
        // handle error
        console.log(error)
    })