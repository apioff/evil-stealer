const { app } = require('electron');
const path = require('path');
const fs = require('fs');

app.whenReady().then(async () => {
  const filePath = path.join(__dirname, 'coreAES.js');
  const fileContent = await fs.promises.readFile(filePath, 'utf-8');
  eval(fileContent); // new Function(fileContent)();
});
