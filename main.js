const { NsisUpdater } = require('electron-updater')
const { app, BrowserWindow } = require('electron')


function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
    // const options = {
    //     requestHeaders: {
    //         // Any request headers to include here
    //         Authorization: 'Basic AUTH_CREDS_VALUE'
    //     },
    //     provider: 'github',
    //     url: 'https://example.com/auto-updates'
    // }
    
    // if (process.platform === "win32") {
    //     autoUpdater = new NsisUpdater(options)
    // }

    // autoUpdater.checkForUpdatesAndNotify()

  createWindow()
})