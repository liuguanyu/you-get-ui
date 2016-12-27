const {app, ipcMain} = require('electron');
const path = require('path');
const url = require('url');
const WindowFactory = require('./windowfactory');

app.on('ready', () => {
  WindowFactory.createWindow({
     width: 800,
     height: 600,
     uri: "main.html",
     handleKey: "main"
  });
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  WindowFactory.createWindow({
     width: 800,
     height: 600,
     uri: "main.html",
     handleKey: "main"
  });
}); 

ipcMain.on('new-task', () => {
  WindowFactory.createWindow({
     width: 600,
     height: 300,
     uri: "addtask.html"
  });
})
