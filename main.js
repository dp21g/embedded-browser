const { app, BrowserWindow, BrowserView } = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  const view = new BrowserView();
  mainWindow.setBrowserView(view);
  view.setBounds({ x: 0, y: 0, width: 800, height: 600 });
  view.webContents.loadURL('https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/examples/checkbox/');

  mainWindow.loadFile('index.html');
});