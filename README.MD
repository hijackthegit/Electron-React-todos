# Electron - todo
##Requirements

- Please use Electron, React and Redux to build the application. You can use any other libraries you like.
- Once started up, the application will launch 3 windows. Each window will show a “To-Do” list, you can add / remove items, etc.
- The contents of “To-Do” lists need to be synchronized across 3 windows, i.e. if you add/remove a task item in the To-Do list (say in window 1), the To-Do lists in window 2 and window 3 will also be updated immediately.  

## Dev environment
>About installing electron, I was keep failing by using different node/npm versions, and finally make it happen by
 ```bash
sudo npm install electron --unsafe-perm=true --allow-root --save-dev
```
Check here [https://github.com/electron-userland/electron-prebuilt/issues/263]()

Below is the node environment:
- npm v5.3.0
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

###Electron
Please follow [https://electron.atom.io/docs/tutorial/quick-start/]() for the electron installation either using npm or downloaded package

##Run
```bash
npm start
```
##Build

##Diary
- Day 1: setup environment for electron and react, using yarn/webpack as package manager and task runner/dev server

##Issues
- webpack has been updated so quickly and struggled with package compatibilities
