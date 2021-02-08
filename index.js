const {app,BrowserWindow}= require('electron')

let mainWindow;

function createMainWindow()
{
  mainWindow=new BrowserWindow({
    title:"DunDung",
    width: 500,
    height: 600,
    icon:`${__dirname}/asset/icon/info-panel.png`,
  })

  mainWindow.loadFile('./app/index.html')
}
app.on('ready', createMainWindow)
  