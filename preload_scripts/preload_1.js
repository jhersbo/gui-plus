const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
});

contextBridge.exposeInMainWorld('appActions', {
    talk: () => ipcRenderer.invoke("talk"),
    fetchConfig: (pathString) => ipcRenderer.invoke("fetchConfig", pathString),
    updateConfig: (pathString, payload) => ipcRenderer.invoke("updateConfig", pathString, payload),
    routerUpdate: (path) => ipcRenderer.invoke("routerUpdate", path),
    routerBack: () => ipcRenderer.invoke("routerBack"),
    routerForward: () => ipcRenderer.invoke("routerForward")
})