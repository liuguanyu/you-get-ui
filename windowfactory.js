const {BrowserWindow, ipcMain} = require('electron');
const Utils = require('./utils');
const path = require('path');
const url = require('url');

let handles = new Map();

let getHandleKey = () => {
	return "_handle" + Utils.getGUID()
}

module.exports = {
	createWindow: function (opts){
		let {width, height, uri, handleKey} = opts;

		if (handleKey === null){
			handleKey = getHandleKey();
		}

		let win = this.getWindowByGuidKey(handleKey);

		if (!win){
			win = new BrowserWindow({width, height})

			// and load the index.html of the app.
			win.loadURL(url.format({
				pathname: path.join(__dirname, uri),
				protocol: 'file:',
				slashes: true
			}))

			// Open the DevTools.
			// win.webContents.openDevTools()

			// Emitted when the window is closed.
			win.on('closed', () => {
				// Dereference the window object, usually you would store windows
				// in an array if your app supports multi windows, this is the time
				// when you should delete the corresponding element.
				handles.delete(handleKey);
				win = null
			});	

			handles.set(handleKey, win);
		}

		return win;
	},

	getWindowByGuidKey: (guidKey) => {
		return handles.get(guidKey);
	}
}