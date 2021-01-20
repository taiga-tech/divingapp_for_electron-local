const { app, BrowserWindow } = require('electron')

function createWindow () {

  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL('http://3.88.45.99/')
}

app.on('ready', createWindow)
