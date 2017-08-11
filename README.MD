# Electron - todo #
An todos app using Electron + react + redux
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

### Electron ###
Please follow [https://electron.atom.io/docs/tutorial/quick-start/]() for the electron installation either using npm or downloaded package

## Run ##
```bash
#assume you have installed electron globally
electron .
```
## Build ##
TBD: [https://electron.atom.io/docs/tutorial/application-packaging/]()

## Whats left ##
Tasks supposed also support multi windows creation and ipc communications.

Below tutorial and git will serve the task if time allowed: 
- [Two window communication](https://kahlillechelt.com/how-to-communicate-between-two-electron-windows-166fdbcdc469)
- [electron window manager](https://github.com/TamkeenLMS/electron-window-manager)

## References ##
- [Redux](http://redux.js.org/)
- [Redux tutorial](https://github.com/happypoulp/redux-tutorial)
- [Electron multi window demo](https://github.com/ungoldman/electron-multiple-windows-demo)
- [Ipc communication](https://kahlillechelt.com/how-to-communicate-between-two-electron-windows-166fdbcdc469)
- [Electron’s IPC Modules and How to Use Them](https://medium.com/@hamzasurti/in-progress-6959b733a55a)

## Highlights ##
- Redux
- Electron ipc main/renderer communication

## Issues ##
- semantic css needs to be load separately other than require directly using 'css-loader'
- remove todo does not work well
- window does not syncronize with each other