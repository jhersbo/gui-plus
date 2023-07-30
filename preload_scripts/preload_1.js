const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
});

contextBridge.exposeInMainWorld('bridges', {
    talk: () => ipcRenderer.invoke("talk"),
    updateConfig: () => ipcRenderer.invoke("updateConfig")
})