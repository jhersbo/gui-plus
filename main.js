const { app, BrowserWindow, ipcMain } = require("electron");
const config = require("./config/main.json");
const path = require("path");
const actions = require("./actions/main");

const buildWindow = () => {
    const win = new BrowserWindow({
        width: config.appConfig.width,
        height: config.appConfig.height,
        webPreferences:{
            preload: path.join(__dirname, "/preload_scripts/preload_1.js")
        }
    })

    win.loadFile("index.html");
}

app.whenReady().then(() => {

    ipcMain.handle("fetchConfig", (event, pathString) => {
        return actions.getConfigFile(pathString)
    })

    ipcMain.handle("updateConfig", (event, pathString, payload) => {
        return actions.updateConfigFile(pathString, payload);
    })

    //router actions
    const { 
        update, 
        back, 
        forward 
    } = actions.router;

    ipcMain.handle("routerUpdate", (event, path) => {
        return update(path);
    })

    ipcMain.handle("routerBack", () => {
        return back();
    })

    ipcMain.handle("routerForward", () => {
        return forward();
    })

    buildWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0){
            buildWindow();
        }
    })
});

app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin') {
        app.quit();
    }
})