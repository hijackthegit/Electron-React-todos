# Electron - todo
An Electron app for todo using redux
## Dev environment
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

### Electron
Please follow [https://electron.atom.io/docs/tutorial/quick-start/]() for the electron installation either using npm or downloaded package

## Run
```bash
#assume you have installed electron globally
electron .
```
## Build

## Issues
- semantic css needs to be load separately other than require directly using 'css-loader'
