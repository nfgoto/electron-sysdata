const path = require('path');
// const url = require('url');

const { app, BrowserWindow } = require('electron');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let window;

const createWindow = () => {
    // create browser window
    window = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(__dirname, 'assets/systemInfo-icon.png')
    });

    // load page at file://.../index.html
    // window.loadURL(url.format({
    //     pathname: path.join(__dirname, 'index.html'),
    //     protocol: 'file',
    //     slashes: true
    // }));

    // and load the index.html of the app.
    window.loadFile('index.html');

    // open devtools - only for dev of course
    window.webContents.openDevTools();

    window.on('close', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        window = null;
    });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// quit when all windows closed
app.on('window-all-close', () => {
    // check not mac user
    if (process.platform !== 'darwin') {
        app.quit();
    }
}
);