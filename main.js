const { app, BrowserWindow } = require('electron')
const updater = require("electron-updater");
const autoUpdater = updater.autoUpdater;

autoUpdater.autoDownload = true;
// autoUpdater.allowDowngrade = true;

autoUpdater.setFeedURL({
    provider: "github",
    owner: 'parisnakitakejser',
    repo: 'electronjs-test',
    releaseType: 'release'
});

autoUpdater.on('checking-for-update', function () {
    sendStatusToWindow('Checking for update...');
});

autoUpdater.on('update-available', function (info) {
  sendStatusToWindow('Update available.');
});

autoUpdater.on('update-not-available', function (info) {
    sendStatusToWindow('Update not available.');
});

autoUpdater.on('error', function (err) {
    sendStatusToWindow('Error in auto-updater.');
});

autoUpdater.on('download-progress', function (progressObj) {
    let log_message = "Download speed: " + progressObj.bytesPerSecond;
    log_message = log_message + ' - Downloaded ' + parseInt(progressObj.percent) + '%';
    log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
    sendStatusToWindow(log_message);
});

autoUpdater.on('update-downloaded', function (info) {
    sendStatusToWindow('Update downloaded; will install in 1 seconds');
});

autoUpdater.on('update-downloaded', function (info) {
    setTimeout(function () {
        autoUpdater.quitAndInstall();
    }, 1000);
});

autoUpdater.checkForUpdates();

function sendStatusToWindow(message) {
    console.log(message);
}






function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})