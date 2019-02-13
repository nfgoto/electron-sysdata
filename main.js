// const fs = require('fs');
const path = require('path');
const url = require('url');

const { app, BrowserWindow } = require('electron');

// Window object init - not close window after grabage collection
let window;

const createWindow = () => {
    // create browser window
    window = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(__dirname, 'assets/systemInfo-icon.png')
    });

    // load page at file://.../index.html
    window.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    // open devtools - only for dev of course
    window.webContents.openDevTools();

    window.on('close', () => {
        window = null;
    });
};

// launch app whrn electron ready
app.on('ready', createWindow);

// quit when all windows closed
app.on('window-all-close', () => {
    // check not mac user
    if (process.platform !== 'darwin') {
        app.quit();
    }
}
);