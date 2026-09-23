const { ipcMain } = require('electron');
const { getAll, insertKeyword, insertComment, insertTask, getSettings, setSetting } = require('./database');

ipcMain.handle('task:get-all', () => getAll('tasks'));
ipcMain.handle('task:create', (_, payload) => insertTask(payload));

ipcMain.handle('keyword:get-all', () => getAll('keywords'));
ipcMain.handle('keyword:create', (_, payload) => insertKeyword(payload));

ipcMain.handle('comment:get-all', () => getAll('comments'));
ipcMain.handle('comment:create', (_, payload) => insertComment(payload));

ipcMain.handle('settings:get', () => getSettings());
ipcMain.handle('settings:set', (_, { key, value }) => setSetting(key, value));
