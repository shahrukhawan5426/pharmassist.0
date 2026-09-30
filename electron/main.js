const { app, BrowserWindow } = require('electron');
const path = require('path');
function createWindow() {
  const win = new BrowserWindow({
    width: 460, height: 860, minWidth: 360, autoHideMenuBar: true,
    title: 'PharmAssist', icon: path.join(__dirname, '..', 'icon.png')
  });
  win.loadFile(path.join(__dirname, '..', 'www', 'index.html'));
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
