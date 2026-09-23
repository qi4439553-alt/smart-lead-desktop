const { contextBridge, ipcRenderer, shell } = require('electron');

contextBridge.exposeInMainWorld('appApi', {
  getVersion: () => process.versions.electron,
  getPlatformList: () => ['抖音', '小红书', '快手', 'B站', '视频号', '微信', '直播间', '私域矩阵'],
  getConfig: () => ({ darkMode: true, autoStart: false, notification: true }),
  saveConfig: (config) => config,
  openExternal: (url) => shell.openExternal(url),
  notify: (title, body) => new Notification(title, { body }).show(),
  db: {
    getTasks: () => ipcRenderer.invoke('task:get-all'),
    createTask: (payload) => ipcRenderer.invoke('task:create', payload),
    getKeywords: () => ipcRenderer.invoke('keyword:get-all'),
    createKeyword: (payload) => ipcRenderer.invoke('keyword:create', payload),
    getComments: () => ipcRenderer.invoke('comment:get-all'),
    createComment: (payload) => ipcRenderer.invoke('comment:create', payload),
    getSettings: () => ipcRenderer.invoke('settings:get'),
    setSetting: (key, value) => ipcRenderer.invoke('settings:set', { key, value }),
  },
});
