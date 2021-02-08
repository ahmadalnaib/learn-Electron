const {app,BrowserWindow}= require('electron')


// set env
process.env.NODE_ENV='development'
const isDev=process.env.NODE_ENV !=='production' ?true :false

let mainWindow;

function createMainWindow()
{
  mainWindow=new BrowserWindow({
    title:"DunDung",
    width: 500,
    height: 600,
    icon:`${__dirname}/asset/icon/A.png`,
    resizable:isDev,
    webPreferences: {
      contextIsolation: true
    }
  })

  mainWindow.loadFile('./app/index.html')
}
app.on('ready', createMainWindow)



app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow()
  }
})


app.allowRendererProcessReuse=true
  