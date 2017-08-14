# Electron - todo #
A todos app using Electron + react + redux
## Dev environment ##
>About installing electron, I was keep failing by using different node/npm versions, and finally make it happen by
 ```bash
sudo npm install electron --unsafe-perm=true --allow-root --save-dev
```
Check here [https://github.com/electron-userland/electron-prebuilt/issues/263]()

Below is the node environment:
- npm: 5.3.0
- Node: 7.10.1

(If your node is other version on your OS, please use 'n' module to update it to recommended one)

```bash
#install n
sudo npm n -g

#install nodejs v7.10.1
sudo n 7.10.1 

#consider to update npm itself is keeping stuck at installing electron
sudo npm install npm@latest -g

```
## Prerequisites ##
Below are recommend install globally (add sudo ahead for linux) 
```bash
npm i webpack webpack-dev-server electron electron-builder -g
```

## Run ##
```bash
#assume you have installed electron globally
npm start
```
## Build ##
Here we using [https://www.npmjs.com/package/electron-builder]() for the app packaging
> If you keep failure on running the built app saying missing dependencies, require the missing dependencies in you main.js 
which should be in root folder: [https://github.com/electron-userland/electron-packager/issues/527]()
### Windows ###
```bash
electron-builder -w
```
### Linux ###
```bash
electron-builder -l
```
### OSX ###
```bash
electron-builder -m
```
## References ##
- [Redux](http://redux.js.org/)
- [Redux tutorial](https://github.com/happypoulp/redux-tutorial)
- [Electron multi window demo](https://github.com/ungoldman/electron-multiple-windows-demo)
- [Ipc communication](https://kahlillechelt.com/how-to-communicate-between-two-electron-windows-166fdbcdc469)
- [Electron’s IPC Modules and How to Use Them](https://medium.com/@hamzasurti/in-progress-6959b733a55a)
- [Two window communication](https://kahlillechelt.com/how-to-communicate-between-two-electron-windows-166fdbcdc469)
- [electron window manager](https://github.com/TamkeenLMS/electron-window-manager)

## Highlights ##
- Redux
- Electron ipc main/renderer communication

## Whats left ##
Considering to use electron-window-manager for the data sharing across windows

## Issues ##
- semantic css needs to be load separately other than require directly using 'css-loader'