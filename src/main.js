const { app, BrowserWindow } = require('electron')

function createWindow () {

  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL('http://54.86.66.12/')
}

app.on('ready', createWindow)
