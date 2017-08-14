"use strict"

const builder = require("electron-builder")
const Platform = builder.Platform
const targetPlatform = 'LINUX' //MAC, WINDOWS

let config
if (targetPlatform=='WINDOWS'){
    config = {
        icon: './build/icons/icon.ico'
        // target: 'portable'
    }
}

// Promise is returned
builder.build({
    targets: Platform[targetPlatform].createTarget(),
    config: config
})
    .then(result=> {
        // handle result
        console.log(result)
    })
    .catch(error => {
        // handle error
        console.log(error)
    })