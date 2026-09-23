const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('appApi', {
  getVersion: () => process.versions.electron,
  getPlatformList: () => [
    '抖音',
    '小红书',
    '快手',
    'B站',
    '视频号',
    '微信',
    '直播间',
    '私域矩阵'
  ],
  getConfig: () => ({
    darkMode: true,
    autoStart: false,
    notification: true,
  }),
  saveConfig: (config) => config,
  openExternal: (url) => {
    require('electron').shell.openExternal(url);
  },
});
